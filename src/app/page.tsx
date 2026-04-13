import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Stack } from '@/components/sections/Stack'
import { About } from '@/components/sections/About'
import { Work } from '@/components/sections/Work'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Stack />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
