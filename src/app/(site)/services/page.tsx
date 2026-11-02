import type { Metadata } from 'next'
import { Services } from '@/components/sections/Services'
import { Process } from '@/components/sections/Process'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Websites, mobile apps, backend systems and payments, with starting prices and how a project runs from brief to launch.',
}

export default function ServicesPage() {
  return (
    <>
      <Services isPage />
      <Process />
    </>
  )
}
