"use client"

import { useEffect, useState, useRef } from "react"
import { Recycle, Leaf, Factory, TrendingUp } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

const statMeta = [
  { icon: Recycle, value: 12500, suffix: "+" },
  { icon: Leaf, value: 8200, suffix: "" },
  { icon: Factory, value: 35, suffix: "+" },
  { icon: TrendingUp, value: 99, suffix: "%" },
]

function AnimatedCounter({
  value,
  suffix,
  intlLocale,
}: {
  value: number
  suffix: string
  intlLocale: string
}) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-foreground">
      {count.toLocaleString(intlLocale)}
      {suffix}
    </div>
  )
}

export function Stats() {
  const { t, intlLocale } = useLanguage()

  return (
    <section id="milieu-impact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40">
          <Recycle className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-60 h-60">
          <Leaf className="w-full h-full" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium uppercase tracking-wider opacity-80">{t.stats.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            {t.stats.title}
          </h2>
          <p className="text-lg opacity-90">
            {t.stats.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statMeta.map((stat, index) => {
            const Icon = stat.icon
            const info = t.stats.items[index]
            return (
              <div
                key={info.label}
                className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="inline-flex p-3 rounded-lg bg-primary-foreground/20 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} intlLocale={intlLocale} />
                <p className="text-lg font-medium mt-2">{info.label}</p>
                <p className="text-sm opacity-70 mt-1">{info.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
