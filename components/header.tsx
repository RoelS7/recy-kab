"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/i18n/context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { href: "#diensten", label: t.header.nav.diensten },
    { href: "#werkwijze", label: t.header.nav.werkwijze },
    { href: "#milieu-impact", label: t.header.nav.milieuImpact },
    { href: "#calculator", label: t.header.nav.calculator },
    { href: "#contact", label: t.header.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Recy-Kab Recycling"
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Language Switcher */}
          {/*<div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="#contact">{t.header.cta}</Link>
            </Button>
          </div>*/}

          {/* Mobile controls: language switcher stays directly accessible in the sticky header */}
          {/* <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={t.header.toggleMenu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>*/}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language switcher also clearly integrated inside the mobile menu */}
              <div className="pt-2 mt-1 border-t border-border">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                  {t.header.languageLabel}
                </p>
                <LanguageSwitcher fullWidth />
              </div>

              <Button asChild className="mt-2">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  {t.header.cta}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
