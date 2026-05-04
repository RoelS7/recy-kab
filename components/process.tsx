import { Truck, Search, Cog, PackageCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Truck,
    number: "01",
    title: "Levering & Opslag",
    description: "U levert uw kabelafval aan bij onze locatie of wij zorgen voor ophaling. Het materiaal wordt veilig opgeslagen voor verwerking.",
  },
  {
    icon: Search,
    number: "02",
    title: "Manuele Sortering",
    description: "Onze experts sorteren de kabels handmatig. Kabels met loodisolatie, ijzerresten en andere onzuiverheden worden gescheiden.",
  },
  {
    icon: Cog,
    number: "03",
    title: "Machinale Verwerking",
    description: "De gesorteerde kabels worden verwerkt door onze gespecialiseerde machines tot PVC- en kopergranulaat (Ø 1-10mm).",
  },
  {
    icon: PackageCheck,
    number: "04",
    title: "Afgewerkt Product",
    description: "Het zuivere koper- en kunststofgranulaat wordt aangeboden aan derden voor de aanmaak van nieuwe producten.",
  },
]

export function Process() {
  return (
    <section id="werkwijze" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Onze Werkwijze</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Van afval naar grondstof in 4 stappen
          </h2>
          <p className="text-lg text-muted-foreground">
            Ons zelf ontwikkeld en milieuvriendelijk productieproces garandeert een volledige 
            scheiding van kunststoffen en koper.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
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
                    <step.icon className="h-6 w-6 text-primary" />
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
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-card rounded-xl border border-border max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground">
            <strong className="text-foreground">Let op:</strong> Kabels met loodisolatie, ijzerresten en andere 
            onzuiverheden (metalen, hout, puin, kunststof, etc.) kunnen niet behandeld worden in ons productieproces. 
            Wij adviseren u graag over de mogelijkheden.
          </p>
        </div>
      </div>
    </section>
  )
}
