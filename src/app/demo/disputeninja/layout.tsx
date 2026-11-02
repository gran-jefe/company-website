import type { Metadata } from 'next'
import { Fragment_Mono } from 'next/font/google'

// Satoshi is already loaded site-wide, which is DisputeNinja's own display face
const fragmentMono = Fragment_Mono({ subsets: ['latin'], weight: '400', variable: '--font-fragment-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'DisputeNinja concept',
  description: 'Chargeback recovery calculator concept for DisputeNinja.',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={fragmentMono.variable}>{children}</div>
}
