'use server'

import { Resend } from 'resend'
import { ContactOwnerEmail } from '@/emails/ContactOwnerEmail'
import { ContactConfirmationEmail } from '@/emails/ContactConfirmationEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactForm(formData: FormData) {
  const company = formData.get('company') as string
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string

  // Validatie
  if (!name || !email || !message || !company) {
    throw new Error('Alle verplichte velden moeten ingevuld zijn')
  }

  try {
    console.log(`📧 Nieuwe offerte aanvraag van ${company} (${email})`)

    // 1. Email naar Recy-Kab (jij)
    await resend.emails.send({
      from: 'Recy-Kab Website <noreply@resend.dev>',   // blijf dit gebruiken tot domein geverifieerd is
      to: 'info@recy-kab.be',
      subject: `Nieuwe offerte aanvraag - ${company}`,
      react: ContactOwnerEmail({ company, name, email, phone: phone || '', message }),
    })

    // 2. Bevestigingsemail naar de klant
    await resend.emails.send({
      from: 'Recy-Kab <noreply@resend.dev>',
      to: email,
      subject: 'Bedankt voor uw aanvraag - Recy-Kab',
      react: ContactConfirmationEmail({ name }),
    })

    console.log("✅ Beide emails succesvol verzonden")
    return { success: true }
  } catch (error: any) {
    console.error("❌ Resend Error:", error)
    throw new Error('Er ging iets mis bij het verzenden. Probeer het later opnieuw.')
  }
}