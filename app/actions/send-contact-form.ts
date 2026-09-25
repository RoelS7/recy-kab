'use server'

import { Resend } from 'resend'
import { ContactOwnerEmail } from '@/emails/ContactOwnerEmail'
import { ContactConfirmationEmail } from '@/emails/ContactConfirmationEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
}

export async function sendContactForm(formData: FormData) {
  const company = formData.get('company') as string
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const message = formData.get('message') as string
  const turnstileToken = formData.get('turnstileToken') as string

  // Validatie
  if (!name || !email || !message || !company) {
    throw new Error('Alle verplichte velden moeten ingevuld zijn')
  }

  if (!turnstileToken) {
    throw new Error('Turnstile verificatie is vereist')
  }

  // Verify Turnstile token
  const isValidToken = await verifyTurnstileToken(turnstileToken)
  if (!isValidToken) {
    throw new Error('Turnstile verificatie mislukt. Probeer het opnieuw.')
  }

  try {
    console.log(`📧 Nieuwe offerte aanvraag van ${company} (${email})`)

    // 1. Email naar Recy-Kab (jij)
    await resend.emails.send({
      from: 'Recy-Kab Website <info@recy-kab.com>',   // blijf dit gebruiken tot domein geverifieerd is
      to: 'info@recy-kab.com',
      subject: `Nieuwe offerte aanvraag - ${company}`,
      react: ContactOwnerEmail({ company, name, email, phone: phone || '', message }),
    })

    // 2. Bevestigingsemail naar de klant
    await resend.emails.send({
      from: 'Recy-Kab <info@recy-kab.com>',
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