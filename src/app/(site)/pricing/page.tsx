import type { Metadata } from 'next'
import { PricingClient } from '@/components/sections/PricingClient'

export const metadata: Metadata = {
  title: 'Pricing & SME Growth Promo | Gran Jefe Studio',
  description: 'Transparent pricing for custom software, web platforms, and our active SME WhatsApp Storefront Launch Promo (₦80,000 setup + ₦5,000/mo).',
}

export default function PricingPage() {
  return <PricingClient />
}
