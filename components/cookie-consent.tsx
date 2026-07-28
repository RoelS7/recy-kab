"use client"

import { useEffect, useState } from "react"
import { Cookie, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/context"

const CONSENT_KEY = "recykab-cookie-consent"

export function CookieConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (!stored) {
        setVisible(true)
      }
    } catch {
      setVisible(true)
    }
  }, [])

  const handleChoice = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(CONSENT_KEY, choice)
    } catch {
      // localStorage unavailable, just hide the banner
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t.cookieConsent.title}
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-2xl border border-border bg-card text-card-foreground shadow-xl p-5 sm:p-6">
          <button
            type="button"
            onClick={() => handleChoice("declined")}
            aria-label={t.cookieConsent.decline}
            className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Cookie className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <h2 className="text-base font-semibold text-foreground">
                {t.cookieConsent.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {t.cookieConsent.description}
              </p>
              <a
                href="/cookiebeleid"
                className="mt-2 inline-block text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                {t.cookieConsent.policyLink}
              </a>
            </div>

            <div className="flex flex-col gap-2 sm:w-auto sm:flex-row sm:items-center sm:self-center">
              <Button
                variant="outline"
                onClick={() => handleChoice("declined")}
                className="w-full sm:w-auto"
              >
                {t.cookieConsent.decline}
              </Button>
              <Button
                onClick={() => handleChoice("accepted")}
                className="w-full sm:w-auto"
              >
                {t.cookieConsent.accept}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
