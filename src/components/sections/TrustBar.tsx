'use client'

import React from 'react'
import { Globe, Building2, ShoppingBag, GraduationCap, ArrowUpRight, Award } from 'lucide-react'

interface TrustItem {
  id: string
  entity: string
  role: string
  location: string
  icon: React.ReactNode
  badge: string
  link?: string
}

// Studio client projects only; the founder's employer work appears in Work and About
const trustItems: TrustItem[] = [
  {
    id: 'projectcatalogue',
    entity: 'Project Catalogue Limited',
    role: 'Luxury Architectural Showcase & Real Estate Dev',
    location: 'Nigeria',
    icon: <Building2 size={18} className="text-brand-terra-ink" />,
    badge: 'Luxury Property',
    link: 'https://www.projectcataloguelimited.com',
  },
  {
    id: 'techcompass_academy',
    entity: 'TechCompass Academy',
    role: 'RoboKids & RoboSteer Tech Training Programmes',
    location: 'United Kingdom',
    icon: <Globe size={18} className="text-blue-600 dark:text-dev-cyan" />,
    badge: 'UK EdTech',
    link: 'https://www.techcompass.co.uk/',
  },
  {
    id: 'shesandhers',
    entity: "She's & Hers Beauty Palace",
    role: 'Beauty Brand Catalogue with WhatsApp Ordering',
    location: 'Uyo, Nigeria',
    icon: <ShoppingBag size={18} className="text-pink-600 dark:text-pink-400" />,
    badge: 'Beauty Retail',
    link: 'https://www.shesandhers.com/',
  },
  {
    id: 'romanseries',
    entity: 'Roman Series',
    role: 'Post-UTME Exam Practice & Instant Scoring',
    location: 'Nigeria',
    icon: <GraduationCap size={18} className="text-amber-600 dark:text-amber-400" />,
    badge: 'EdTech',
    link: 'https://www.romanseries.com.ng/',
  },
]

export function TrustBar() {
  return (
    <section className="relative py-7 bg-[#FAF0E6] dark:bg-[#140A10] border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 overflow-hidden text-[#2E0E1D] dark:text-[#FFF0E3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top Official Registry Strip */}
        <div className="mb-5 pb-4 border-b border-[#EAD3C4]/70 dark:border-[#EAD3C4]/15 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#7A4A38] dark:text-[#E6D0C2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[#2E0E1D] dark:text-[#FFF0E3] font-bold">PLATFORMS WE&rsquo;VE BUILT</span>
            <span className="text-[#7A4A38] dark:text-[#B88E7D]">{"//"}</span>
            <span className="text-[#2E0E1D] dark:text-[#FFF0E3] font-semibold">Live and in use today</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#7A4A38] dark:text-[#B88E7D]">
            <Award size={14} className="text-brand-terra-ink" />
            <span>Founded by Adeleke Sherifdeen</span>
          </div>
        </div>

        {/* Proven Track Record Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {trustItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-2xl bg-[#FFF0E3] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/60 dark:hover:border-brand-terra/60 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-brand-clay/10 dark:hover:shadow-black/50 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="p-2 rounded-xl bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-brand-terra-ink group-hover:scale-105 transition-transform shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF0E6] dark:bg-[#25121E] text-[#7A4A38] dark:text-[#E6D0C2] border border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                    {item.location}
                  </span>
                </div>

                <h4 className="font-syne font-bold text-sm text-[#2E0E1D] dark:text-[#FFF0E3] group-hover:text-brand-terra-ink transition-colors flex items-center justify-between">
                  <span>{item.entity}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-brand-terra-ink"
                  />
                </h4>

                <p className="mt-1 text-xs font-dm text-[#6C4B59] dark:text-[#E6D0C2] line-clamp-2 leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-[#EAD3C4]/60 dark:border-[#EAD3C4]/15 flex items-center justify-between text-[10px] font-mono text-[#7A4A38] dark:text-[#B88E7D]">
                <span>{item.badge}</span>
                <span className="text-[#0E6247] dark:text-emerald-400 font-semibold flex items-center gap-1">
                  ● Verified Live
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
