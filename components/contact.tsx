"use client"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendContactForm } from "@/app/actions/send-contact-form"   // pas pad aan indien nodig
import { useRouter } from "next/navigation"

const contactInfo = [
  { icon: Building2, label: "Bedrijfsnaam", value: "Recy-Kab BVBA" },
  { icon: MapPin, label: "Adres", value: "Maastrichtersteenweg 523 bus 1, 3700 Tongeren, België" },
  { icon: Phone, label: "Telefoon", value: "+32 472 11 29 36", href: "tel:0032472112936" },
  { icon: Mail, label: "E-mail", value: "info@recy-kab.be", href: "mailto:info@recy-kab.be" },
  { icon: Clock, label: "Openingsuren", value: "Ma - Vr: 09:00 - 17:00" },
]

export function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    company: "", name: "", email: "", phone: "", message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const form = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        form.append(key, value)
      })

      await sendContactForm(form)
      
      // Redirect naar bedankt pagina
      router.push("/bedankt")
    } catch (err: any) {
      setError(err.message || "Er is iets misgegaan. Probeer het later opnieuw.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Neem contact met ons op
          </h2>
          <p className="text-lg text-muted-foreground">
            Heeft u vragen over onze diensten of wilt u een offerte aanvragen? 
            Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          {/* Contact Form + Extra Info */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">Offerte aanvragen</CardTitle>
              <CardDescription>
                Vul onderstaand formulier in en wij nemen zo snel mogelijk contact met u op.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* ... je bestaande form velden ... (hetzelfde als nu) */}
                {/* Laat dit gedeelte ongewijzigd */}
              </form>

              {/* === NIEUWE VULLING ONDER HET FORMULIER === */}
              <div className="mt-auto pt-10 border-t">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  Waarom kiezen voor Recy-Kab?
                </h4>
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✅
                    </div>
                    <div>
                      <p className="font-medium">Snelle & correcte offertes</p>
                      <p className="text-muted-foreground">Binnen 24u een prijsvoorstel</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      ♻️
                    </div>
                    <div>
                      <p className="font-medium">Milieuvriendelijk & gecertificeerd</p>
                      <p className="text-muted-foreground">Volledig in lijn met VLAREMA en Europese normen</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      🚚
                    </div>
                    <div>
                      <p className="font-medium">Ophalen door heel België</p>
                      <p className="text-muted-foreground">Ook voor kleinere partijen</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contactgegevens</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10088.448431454883!2d5.5248466!3d50.7920309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x14e4b977a62edaac!2sRecy-Kab!5e0!3m2!1sen!2sbe!4v1567514358604!5m2!1sen!2sbe"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Recy-Kab locatie"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}