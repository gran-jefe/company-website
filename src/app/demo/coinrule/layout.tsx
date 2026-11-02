import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({ subsets: ['latin'], weight: ['400', '700', '900'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Coinrule concept',
  description: 'Strategy backtester concept for Coinrule.',
  robots: { index: false, follow: false },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={lato.className}>{children}</div>
}
