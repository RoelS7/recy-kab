"use client"

import { useState, useMemo } from "react"
import { Calculator, Info, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Current market price is around €8.50/kg, Recy-Kab offers slightly lower
const COPPER_PRICE_PER_KG = 7.85 // EUR per kg
const COPPER_CONTENT_ESTIMATE = 0.65 // Average copper content in cables (65%)

export function CopperCalculator() {
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
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Kopercalculator</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Bereken de waarde van uw koperkabels
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek direct hoeveel uw kabeloverschot waard is. Vul de hoeveelheid in en 
            krijg een indicatieve schatting van de opbrengst.
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
                  <CardTitle className="text-2xl">Interactieve Kopercalculator</CardTitle>
                  <CardDescription>
                    Voer de hoeveelheid kabeloverschot in om een schatting te krijgen
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Input Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-base">Hoeveelheid kabeloverschot</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Bijv. 100"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-lg h-12"
                    min="0"
                    step="0.1"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-base">Eenheid</Label>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant={unit === "gram" ? "default" : "outline"}
                      onClick={() => setUnit("gram")}
                      className="flex-1 h-12"
                    >
                      Gram (g)
                    </Button>
                    <Button
                      type="button"
                      variant={unit === "kg" ? "default" : "outline"}
                      onClick={() => setUnit("kg")}
                      className="flex-1 h-12"
                    >
                      Kilogram (kg)
                    </Button>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              {calculation.inputKg > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div className="p-4 rounded-lg bg-secondary/50 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Totaal gewicht</p>
                    <p className="text-2xl font-bold text-foreground">
                      {calculation.inputKg.toLocaleString("nl-BE", { maximumFractionDigits: 2 })} kg
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/50 text-center">
                    <p className="text-sm text-muted-foreground mb-1">Geschat kopergehalte (~65%)</p>
                    <p className="text-2xl font-bold text-foreground">
                      {calculation.estimatedCopperKg.toLocaleString("nl-BE", { maximumFractionDigits: 2 })} kg
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10 text-center border-2 border-primary/30">
                    <p className="text-sm text-primary mb-1 flex items-center justify-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      Geschatte opbrengst
                    </p>
                    <p className="text-3xl font-bold text-primary">
                      €{calculation.estimatedValue.toLocaleString("nl-BE", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 text-sm">
                <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  <p className="font-medium text-foreground mb-1">Belangrijke informatie</p>
                  <p>
                    Deze calculator geeft een indicatieve schatting op basis van een gemiddeld kopergehalte van 65% 
                    en de huidige marktprijs (€{COPPER_PRICE_PER_KG}/kg). De werkelijke waarde kan variëren afhankelijk 
                    van het type kabel, zuiverheid en marktschommelingen. Neem contact met ons op voor een exacte offerte.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-4">
                <Button size="lg" asChild>
                  <a href="#contact">Vraag een exacte offerte aan</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
