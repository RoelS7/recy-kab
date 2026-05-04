import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Leaf, Factory } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-background" />
      <div className="absolute top-20 right-0 w-1/2 h-full opacity-5">
        <Recycle className="w-full h-full text-primary" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Leaf className="h-4 w-4" />
            <span>Duurzame kabelrecycling sinds 1985</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Samen bouwen aan een{" "}
            <span className="text-primary">circulaire toekomst</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Recy-Kab recycleert uw kabel- en koperafval tot zuiver koper en kunststoffen. 
            Met ons milieuvriendelijk productieproces scheiden wij kunststoffen volledig van het koper.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" asChild className="text-base">
              <Link href="#contact">
                Vraag een offerte aan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <Link href="#diensten">
                Ontdek onze diensten
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">100%</p>
                <p className="text-sm text-muted-foreground">Materialenscheiding</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Eco</p>
                <p className="text-sm text-muted-foreground">Milieuvriendelijk proces</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <div className="p-2 rounded-lg bg-primary/10">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">B2B</p>
                <p className="text-sm text-muted-foreground">Zakelijke oplossingen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  )
}
