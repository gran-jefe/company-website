import type { Metadata } from 'next'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'

export const metadata: Metadata = {
  title: 'Studio',
  description: 'Gran Jefe is an independent studio led by Adeleke Sherifdeen, with a background in payments and fintech engineering.',
}

export default function StudioPage() {
  return (
    <>
      <About isPage />
      <Testimonials />
    </>
  )
}
