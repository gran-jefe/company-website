import type { Metadata } from 'next'
import { Contact } from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a 15-minute discovery call or send a project brief to Gran Jefe Studio.',
}

export default function ContactPage() {
  return <Contact isPage />
}
