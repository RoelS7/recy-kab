import Image from "next/image"
import Link from "next/link"
import { Leaf } from "lucide-react"

const footerLinks = {
  diensten: [
    { label: "Kabelrecycling", href: "#diensten" },
    { label: "Koperverwerking", href: "#diensten" },
    { label: "Aluminium Recycling", href: "#diensten" },
    { label: "Inox Verwerking", href: "#diensten" },
  ],
  bedrijf: [
    { label: "Over ons", href: "#" },
    { label: "Werkwijze", href: "#werkwijze" },
    { label: "Milieu-impact", href: "#milieu-impact" },
    { label: "Contact", href: "#contact" },
  ],
  tools: [
    { label: "Kopercalculator", href: "#calculator" },
    { label: "Offerte aanvragen", href: "#contact" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"           // ← Fix: public/ mag niet in src
              alt="Recy-Kab Recycling"
              width={160}
              height={53}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Specialist in het milieuvriendelijk recyclen van kabels,
              koperhoudende elementen, inox en aluminium.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Leaf className="h-4 w-4" />
              <span>Duurzaam ondernemen</span>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Diensten</h4>
            <ul className="space-y-2">
              {footerLinks.diensten.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Bedrijf</h4>
            <ul className="space-y-2">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
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
              © {currentYear} Recy-Kab BVBA. Alle rechten voorbehouden.
            </p>

            {/* Made with love by Atelier Smits */}
            <div className="text-sm text-background/60">
              Made with ❤️ by{' '}
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
                Privacybeleid
              </Link>
              <Link href="#" className="text-sm text-background/60 hover:text-primary transition-colors">
                Algemene voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}