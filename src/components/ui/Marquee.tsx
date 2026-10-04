'use client'

import React from 'react'
import { Landmark, ShieldCheck, Globe, Building2, ShoppingBag, Truck, Zap, Flame, Award } from 'lucide-react'

interface MarqueeItem {
  name: string
  subtext: string
  tag: string
  icon: React.ReactNode
}

const marqueeItems: MarqueeItem[] = [
  {
    name: 'Nigeria High Commission (UK)',
    subtext: 'Sovereign Consular Payments',
    tag: 'Sovereign',
    icon: <Landmark size={14} className="text-emerald-600 dark:text-emerald-400" />,
  },
  {
    name: 'Celergate',
    subtext: 'UK Open Banking Engine',
    tag: 'Fintech',
    icon: <ShieldCheck size={14} className="text-brand-terra dark:text-[#FF5528]" />,
  },
  {
    name: 'Payceler Global',
    subtext: 'Cross-Border Remittance & KYC',
    tag: 'Infrastructure',
    icon: <Globe size={14} className="text-amber-600 dark:text-amber-400" />,
  },
  {
    name: 'Project Catalogue',
    subtext: 'Luxury Architecture Showcase',
    tag: 'Real Estate',
    icon: <Building2 size={14} className="text-brand-terra dark:text-[#FF5528]" />,
  },
  {
    name: "She's & Hers",
    subtext: 'High-Converting E-Commerce',
    tag: 'Retail & Brand',
    icon: <ShoppingBag size={14} className="text-pink-600 dark:text-pink-400" />,
  },
  {
    name: 'Remglo Global',
    subtext: 'Logistics & Supply Systems',
    tag: 'Logistics',
    icon: <Truck size={14} className="text-blue-600 dark:text-dev-cyan" />,
  },
  {
    name: 'Sub-Second Speed',
    subtext: '99/100 Core Web Vitals',
    tag: 'Lighthouse',
    icon: <Zap size={14} className="text-amber-500" />,
  },
  {
    name: 'GRAN JEFE SOLUTIONS',
    subtext: 'CAC BN: 9529101 Certified',
    tag: 'Corporate Entity',
    icon: <Award size={14} className="text-emerald-600 dark:text-emerald-400" />,
  },
]

export function Marquee() {
  return (
    <div className="relative w-full py-4.5 bg-[#FAF0E6] dark:bg-[#140A10] border-y border-[#EAD3C4] dark:border-[#EAD3C4]/15 overflow-hidden text-[#2E0E1D] dark:text-[#FFF0E3]">
      {/* Left and Right Fade Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-[#FAF0E6] dark:from-[#140A10] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-[#FAF0E6] dark:from-[#140A10] to-transparent" />

      {/* Infinite Scrolling Track (Duplicated for seamless loop) */}
      <div className="animate-marquee flex items-center gap-6 sm:gap-8">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#FFF0E3] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/50 transition-colors shadow-2xs whitespace-nowrap cursor-default"
          >
            <div className="p-1 rounded-md bg-[#FAF0E6] dark:bg-[#25121E]">
              {item.icon}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-syne font-bold text-xs sm:text-sm text-[#2E0E1D] dark:text-[#FFF0E3]">
                {item.name}
              </span>
              <span className="text-[11px] font-dm text-[#6C4B59] dark:text-[#E6D0C2] hidden md:inline">
                • {item.subtext}
              </span>
            </div>
            <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#FAF0E6] dark:bg-[#25121E] text-[#7A4A38] dark:text-[#B88E7D] border border-[#EAD3C4]/60 dark:border-[#EAD3C4]/10">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
