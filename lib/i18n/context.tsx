"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import {
  type Locale,
  defaultLocale,
  dictionaries,
  intlLocales,
  locales,
} from "./dictionaries"

const STORAGE_KEY = "recy-kab-locale"

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof dictionaries)[Locale]
  intlLocale: string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Zolang defaultLocale in je dictionaries op 'nl' staat, start hij nu altijd in het Nederlands
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Restore the user's saved language preference on mount
  useEffect(() => {
    // TIJDELIJK UITGEZET om te voorkomen dat iemand vast komt te zitten in de Franse versie
    /*
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && locales.includes(stored as Locale)) {
      setLocaleState(stored as Locale)
    }
    */
   
    // (Optioneel) Wis de oude keuze uit het geheugen om het helemaal schoon te trekken:
    window.localStorage.removeItem(STORAGE_KEY)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  // Keep the <html lang> attribute in sync
  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: dictionaries[locale],
    intlLocale: intlLocales[locale],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}