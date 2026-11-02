import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/ui/Marquee'
import { TrustBar } from '@/components/sections/TrustBar'
import { FeaturedWork } from '@/components/sections/FeaturedWork'
import { ServicesTeaser } from '@/components/sections/ServicesTeaser'

// Short on purpose: the full story lives on /work, /services, /studio and /contact
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <FeaturedWork />
      <ServicesTeaser />
    </>
  )
}
