import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactConfirmationEmail } from "@/emails/ContactConfirmationEmail"; // Pas dit pad aan naar jouw mappenstructuur
import { ContactOwnerEmail } from "@/emails/ContactOwnerEmail";               // Pas dit pad aan naar jouw mappenstructuur

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, name, email, phone, message } = body;

    // Validatie: check of de verplichte velden aanwezig zijn
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Naam, e-mail en bericht zijn verplicht." },
        { status: 400 }
      );
    }

    // 1. Verstuur e-mail naar de eigenaar (Recy-Kab)
    await resend.emails.send({
      from: "Recy-Kab Website <info@recy-kab.be>", // Zodra het domein gekoppeld is: "info@recy-kab.be"
      to: ["smitsro7@gmail.com"], // Pas hier eventueel aan naar jouw test e-mailadres voor nu
      subject: `Nieuwe offerte aanvraag van ${company || name}`,
      replyTo: email,
      react: ContactOwnerEmail({
        company: company || "Niet opgegeven",
        name,
        email,
        phone,
        message,
      }),
    });

    // 2. Verstuur bevestigingsmail naar de klant
    await resend.emails.send({
      from: "Recy-Kab <info@recy-kab.be>", // Zodra het domein gekoppeld is: "info@recy-kab.be"
      to: [email],
      subject: "Bedankt voor uw aanvraag - Recy-Kab",
      react: ContactConfirmationEmail({
        name,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Er is een fout opgetreden bij het versturen van de e-mail." },
      { status: 500 }
    );
  }
}