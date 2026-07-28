"use client"

import { Truck, Search, Cog, PackageCheck, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const stepIcons = [Truck, Search, Cog, PackageCheck]

export function Process() {
  const { t } = useLanguage()
  const steps = t.process.steps

  return (
    <section id="werkwijze" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.process.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            {t.process.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.process.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={step.number} className="relative">
                {/* Connector Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 z-10">
                    <ArrowRight className="h-6 w-6 text-primary/40" />
                  </div>
                )}

                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-card rounded-xl border border-border max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground">{t.process.noteStrong}</strong> {t.process.note}
          </p>
        </div>
      </div>
    </section>
  )
}
