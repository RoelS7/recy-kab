"use client"

import { useState, useMemo } from "react"
import { Calculator, Info, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/i18n/context"

// Current market price is around €8.50/kg, Recy-Kab offers slightly lower
const COPPER_PRICE_PER_KG = 7.85 // EUR per kg
const COPPER_CONTENT_ESTIMATE = 0.65 // Average copper content in cables (65%)

export function CopperCalculator() {
  const { t, intlLocale } = useLanguage()
  const [amount, setAmount] = useState<string>("")
  const [unit, setUnit] = useState<"gram" | "kg">("kg")

  const calculation = useMemo(() => {
    const numericAmount = parseFloat(amount) || 0
    const amountInKg = unit === "gram" ? numericAmount / 1000 : numericAmount

    // Calculate estimated copper content and value
    const estimatedCopperKg = amountInKg * COPPER_CONTENT_ESTIMATE
    const estimatedValue = estimatedCopperKg * COPPER_PRICE_PER_KG

    return {
      inputKg: amountInKg,
      estimatedCopperKg,
      estimatedValue,
    }
  }, [amount, unit])

  return (
    <section id="calculator" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.calculator.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.calculator.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.calculator.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{t.calculator.cardTitle}</CardTitle>
                  <CardDescription>
                    {t.calculator.cardDescription}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Input Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-base">{t.calculator.amountLabel}</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder={t.calculator.amountPlaceholder}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg h-12"
                    min="0"
                    step="0.1"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-base">{t.calculator.unitLabel}</Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={unit === "gram" ? "default" : "outline"}
                      onClick={() => setUnit("gram")}
                      className="flex-1 h-12"
                    >
                      {t.calculator.gram}
                    </Button>
                    <Button
                      type="button"
                      variant={unit === "kg" ? "default" : "outline"}
                      onClick={() => setUnit("kg")}
                      className="flex-1 h-12"
                    >
                      {t.calculator.kilogram}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              {calculation.inputKg > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="p-4 rounded-lg bg-secondary/50 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{t.calculator.totalWeight}</p>
                    <p className="text-2xl font-bold text-foreground">
                      {calculation.inputKg.toLocaleString(intlLocale, { maximumFractionDigits: 2 })} kg
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{t.calculator.estimatedCopper}</p>
                    <p className="text-2xl font-bold text-foreground">
                      {calculation.estimatedCopperKg.toLocaleString(intlLocale, { maximumFractionDigits: 2 })} kg
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 text-center border-2 border-primary/30">
                    <p className="text-sm text-primary mb-1 flex items-center justify-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {t.calculator.estimatedValue}
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      €{calculation.estimatedValue.toLocaleString(intlLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 text-sm">
                <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">{t.calculator.disclaimerTitle}</p>
                  <p>
                    {t.calculator.disclaimer(COPPER_PRICE_PER_KG)}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button size="lg" asChild>
                  <a href="#contact">{t.calculator.cta}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
