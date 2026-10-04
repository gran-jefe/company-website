'use client'

import React from 'react'
import { Landmark, ShieldCheck, Zap, Globe, Building2, ArrowUpRight, Award } from 'lucide-react'

interface TrustItem {
  id: string
  entity: string
  role: string
  location: string
  icon: React.ReactNode
  badge: string
  link?: string
}

const trustItems: TrustItem[] = [
  {
    id: 'nhc',
    entity: 'Nigeria High Commission (UK)',
    role: 'Sovereign Consular Payments & Administrative Portal',
    location: 'London, UK',
    icon: <Landmark size={18} className="text-emerald-600 dark:text-emerald-400" />,
    badge: 'Sovereign Entity',
    link: 'https://payments.nigeriahc.org.uk',
  },
  {
    id: 'celergate',
    entity: 'Celergate Open Banking',
    role: 'Instant Bank Settlement & Merchant Collections',
    location: 'United Kingdom',
    icon: <ShieldCheck size={18} className="text-blue-600 dark:text-dev-cyan" />,
    badge: 'UK Open Banking',
    link: 'https://celergate.co.uk',
  },
  {
    id: 'payceler',
    entity: 'Payceler Global Remittance',
    role: 'Cross-Border Payments & Biometric KYC Identity',
    location: 'UK & Global',
    icon: <Globe size={18} className="text-amber-600 dark:text-amber-400" />,
    badge: 'Fintech Engine',
    link: 'https://payceler.com',
  },
  {
    id: 'projectcatalogue',
    entity: 'Project Catalogue Limited',
    role: 'Luxury Architectural Showcase & Real Estate Dev',
    location: 'Nigeria',
    icon: <Building2 size={18} className="text-brand-terra" />,
    badge: 'Luxury Property',
    link: 'https://www.projectcataloguelimited.com',
  },
]

export function TrustBar() {
  return (
    <section className="relative py-7 bg-white dark:bg-zinc-950 border-y border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden text-zinc-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top Official Registry Strip */}
        <div className="mb-5 pb-4 border-b border-zinc-100 dark:border-zinc-900 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-zinc-900 dark:text-white font-bold">CERTIFIED CORPORATE ENTITY:</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-bold">GRAN JEFE SOLUTIONS</span>
            <span className="text-zinc-400 dark:text-zinc-600">//</span>
            <span className="text-zinc-700 dark:text-zinc-300 font-semibold">CAC BN: 9529101</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-500">
            <Award size={14} className="text-brand-terra" />
            <span>Sole Proprietorship • Active Status • Founded by Adeleke Sherifdeen</span>
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
              className="group p-4 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800 hover:border-brand-terra/60 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-brand-terra/5 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="p-2 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-brand-terra group-hover:scale-105 transition-transform shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800">
                    {item.location}
                  </span>
                </div>

                <h4 className="font-syne font-bold text-sm text-zinc-900 dark:text-white group-hover:text-brand-terra transition-colors flex items-center justify-between">
                  <span>{item.entity}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-brand-terra"
                  />
                </h4>

                <p className="mt-1 text-xs font-dm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span>{item.badge}</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
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
