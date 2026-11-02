import type { Metadata } from 'next'
import { Work } from '@/components/sections/Work'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Websites, apps and payment platforms built by Gran Jefe Studio, live and in use today.',
}

export default function WorkPage() {
  return <Work isPage />
}
