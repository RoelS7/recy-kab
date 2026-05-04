import { Cable, CircleDot, Layers, Cpu, Zap, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Cable,
    title: "Kabelrecycling",
    description: "Professionele verwerking van alle soorten kabeloverschot tot zuivere grondstoffen. Van dunne data-kabels tot zware energiekabels.",
  },
  {
    icon: CircleDot,
    title: "Koperverwerking",
    description: "Extractie van hoogwaardig koper uit kabels en koperhoudende elementen. Ons granulaat heeft een zuiverheid van 99%+.",
  },
  {
    icon: Layers,
    title: "Aluminium Recycling",
    description: "Duurzame verwerking van aluminiumoverschot. Wij sorteren en verwerken aluminium tot herbruikbare grondstoffen.",
  },
  {
    icon: Cpu,
    title: "Inox Verwerking",
    description: "Recycling van roestvrij staal (inox) uit industriële toepassingen. Milieuvriendelijk en economisch verantwoord.",
  },
  {
    icon: Zap,
    title: "Kunststof Scheiding",
    description: "Geavanceerde scheiding van verschillende kunststoffen. 100% scheiding van kunststof en metaal.",
  },
  {
    icon: Package,
    title: "Granulaat Productie",
    description: "Productie van hoogwaardig koper- en kunstofgranulaat (Ø 1-10mm) voor hergebruik in nieuwe producten.",
  },
]

export function Services() {
  return (
    <section id="diensten" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Onze Diensten</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Gespecialiseerd in diverse recyclingstromen
          </h2>
          <p className="text-lg text-muted-foreground">
            Van kabeloverschot tot zuivere grondstoffen. Wij bieden complete recyclingoplossingen 
            voor koperhoudende materialen, aluminium en inox.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
