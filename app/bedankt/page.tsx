"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export default function BedanktPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo.png"
            alt="Recy-Kab Logo"
            width={280}
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
          <CheckCircle className="w-16 h-16 text-[#008d00]" />
        </div>

        <h1 className="text-5xl font-bold text-foreground mb-4">
          {t.bedankt.title}
        </h1>

        <p className="text-2xl text-[#008d00] font-medium mb-6">
          {t.bedankt.subtitle}
        </p>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10 text-left max-w-lg mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t.bedankt.body}
          </p>

          <div className="border-t border-gray-100 my-8" />

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#008d00]" />
              <div>
                <p className="font-medium">{t.bedankt.directContact}</p>
                <a href="tel:0032472112936" className="text-[#008d00] hover:underline">
                  +32 472 11 29 36
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#008d00]" />
              <div>
                <p className="font-medium">{t.bedankt.emailLabel}</p>
                <a href="mailto:info@recy-kab.be" className="text-[#008d00] hover:underline">
                  info@recy-kab.be
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#008d00] hover:bg-[#007300] text-white">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" />
              {t.bedankt.backHome}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/#contact">
              {t.bedankt.newMessage}
            </Link>
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-12">
          {t.bedankt.address}
        </p>
      </div>
    </div>
  )
}
