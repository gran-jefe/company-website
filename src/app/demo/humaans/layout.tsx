import type { Metadata } from 'next'
import { Newsreader } from 'next/font/google'

const newsreader = Newsreader({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-newsreader', display: 'swap' })

export const metadata: Metadata = {
  title: 'Humaans concept',
  description: 'People ops time-back calculator concept for Humaans.',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={newsreader.variable}
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
    >
      {children}
    </div>
  )
}
