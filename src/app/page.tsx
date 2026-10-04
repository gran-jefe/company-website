import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { Services } from '@/components/sections/Services'
import { Stack } from '@/components/sections/Stack'
import { Work } from '@/components/sections/Work'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { InteractiveCanvas } from '@/components/ui/InteractiveCanvas'
import { CustomCursor } from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FCFCFA] text-zinc-900 dark:bg-zinc-950 dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300">
      {/* Luminous Ambient Depth Canvas & Magnetic Cursor */}
      <InteractiveCanvas />
      <CustomCursor />

      <Navbar />

      <main className="relative z-10 flex-1">
        <Hero />
        <TrustBar />
        <Work />
        <Services />
        <Stack />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
