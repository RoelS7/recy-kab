"use client"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Building2, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendContactForm } from "@/app/actions/send-contact-form"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/i18n/context"

export function Contact() {
  const router = useRouter()
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    company: "", name: "", email: "", phone: "", message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const contactInfo = [
    { icon: Building2, label: t.contact.info.companyLabel, value: t.contact.info.companyValue },
    { icon: MapPin, label: t.contact.info.addressLabel, value: t.contact.info.addressValue },
    { icon: Phone, label: t.contact.info.phoneLabel, value: "+32 472 11 29 36", href: "tel:0032472112936" },
    { icon: Mail, label: t.contact.info.emailLabel, value: "info@recy-kab.be", href: "mailto:info@recy-kab.be" },
    { icon: Clock, label: t.contact.info.hoursLabel, value: t.contact.info.hoursValue },
  ]

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
      router.push("/bedankt")
    } catch (err: any) {
      setError(err.message || t.contact.genericError)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.contact.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form + Waarom Recy-Kab */}
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{t.contact.formTitle}</CardTitle>
              <CardDescription>
                {t.contact.formDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">{t.contact.companyLabel}</Label>
                    <Input
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={t.contact.companyPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.nameLabel}</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.emailLabel}</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.phoneLabel}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.contact.phonePlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.messageLabel}</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                )}

                <Button type="submit" className="w-full" disabled={isSubmitting} size="lg">
                  {isSubmitting ? t.contact.submitting : t.contact.submit}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>

              {/* Vulling onder het formulier - Waarom Recy-Kab */}
              <div className="mt-auto pt-10 border-t border-border">
                <h4 className="font-semibold text-lg mb-5 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  {t.contact.whyTitle}
                </h4>
                <div className="space-y-5 text-sm">
                  {t.contact.reasons.map((reason) => (
                    <div key={reason.title} className="flex gap-3">
                      <div className="text-primary mt-0.5">•</div>
                      <div>
                        <p className="font-medium">{reason.title}</p>
                        <p className="text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t.contact.detailsTitle}</CardTitle>
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
                  title={t.contact.mapTitle}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
