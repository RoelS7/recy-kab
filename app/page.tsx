import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Stats } from "@/components/stats"
import { CopperCalculator } from "@/components/copper-calculator"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Stats />
        <CopperCalculator />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
