"use client"

import Image from "next/image"
import Link from "next/link"
import { Leaf } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const dienstenHrefs = ["#diensten", "#diensten", "#diensten", "#diensten"]
const bedrijfHrefs = ["#", "#werkwijze", "#milieu-impact", "#contact"]
const toolsHrefs = ["#calculator", "#contact"]

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Recy-Kab Recycling"
              width={160}
              height={53}
              className="h-12 w-auto mb-4"
              priority
            />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Leaf className="h-4 w-4" />
              <span>{t.footer.tagline}</span>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.dienstenTitle}</h4>
            <ul className="space-y-2">
              {t.footer.diensten.map((label, index) => (
                <li key={label}>
                  <Link
                    href={dienstenHrefs[index]}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.bedrijfTitle}</h4>
            <ul className="space-y-2">
              {t.footer.bedrijf.map((label, index) => (
                <li key={label}>
                  <Link
                    href={bedrijfHrefs[index]}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t.footer.toolsTitle}</h4>
            <ul className="space-y-2">
              {t.footer.tools.map((label, index) => (
                <li key={label}>
                  <Link
                    href={toolsHrefs[index]}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-background/60">
              © {currentYear} Recy-Kab BVBA. {t.footer.rights}
            </p>

            {/* Made with love by Atelier Smits */}
            <div className="text-sm text-background/60">
              {t.footer.madeWith}{' '}
              <Link
                href="https://ateliersmits.be"
                target="_blank"
                className="hover:text-white transition-colors font-medium"
              >
                ATELIER SMITS
              </Link>
            </div>

            <div className="flex gap-6">
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                {t.footer.terms}
              </Link>
              <a
                href="/cookiebeleid"
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                {t.footer.cookies}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
