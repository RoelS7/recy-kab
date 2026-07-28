"use client"

import { Check, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { locales, localeLabels, localeNames } from "@/lib/i18n/dictionaries"

export function LanguageSwitcher({
  className,
  fullWidth = false,
}: {
  className?: string
  fullWidth?: boolean
}) {
  const { locale, setLocale, t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          aria-label={t.header.languageLabel}
          className={cn(
            "gap-2 font-medium",
            fullWidth && "w-full justify-between",
            className,
          )}
        >
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            {localeLabels[locale]}
          </span>
          <ChevronDown className="h-4 w-4 opacity-60" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={cn(fullWidth && "w-[var(--radix-dropdown-menu-trigger-width)]")}>
        {locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onSelect={() => setLocale(code)}
            className="flex items-center justify-between gap-6 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="font-semibold w-6">{localeLabels[code]}</span>
              <span className="text-muted-foreground">{localeNames[code]}</span>
            </span>
            {locale === code && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
