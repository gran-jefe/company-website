import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/ui/Marquee'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'
import { Stack } from '@/components/sections/Stack'
import { Work } from '@/components/sections/Work'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { InteractiveCanvas } from '@/components/ui/InteractiveCanvas'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFF0E3] dark:bg-[#11070D] text-[#2E0E1D] dark:text-[#FFF0E3] selection:bg-brand-terra selection:text-white transition-colors duration-300">
      {/* Luminous Ambient Depth Canvas */}
      <InteractiveCanvas />

      <Navbar />

      <main className="relative z-10 flex-1">
        <Hero />
        <Marquee />
        <TrustBar />
        <Work />
        <Services />
        <Process />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
