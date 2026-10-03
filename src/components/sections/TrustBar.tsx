'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Landmark, ShieldCheck, Zap, Globe, Building2, ArrowUpRight } from 'lucide-react'

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
    role: 'Sovereign Digital Payments & Consular Portal',
    location: 'London, UK',
    icon: <Landmark size={18} className="text-emerald-500" />,
    badge: 'Sovereign State',
    link: 'https://payments.nigeriahc.org.uk',
  },
  {
    id: 'celergate',
    entity: 'Celergate Open Banking',
    role: 'Instant Bank Settlement & Merchant Collections',
    location: 'United Kingdom',
    icon: <ShieldCheck size={18} className="text-dev-cyan" />,
    badge: 'UK Open Banking',
    link: 'https://celergate.co.uk',
  },
  {
    id: 'payceler',
    entity: 'Payceler Global Remittance',
    role: 'Cross-Border Payments & Biometric KYC',
    location: 'Global / UK',
    icon: <Globe size={18} className="text-amber-500" />,
    badge: 'Fintech Infrastructure',
    link: 'https://payceler.com',
  },
  {
    id: 'projectcatalogue',
    entity: 'Project Catalogue Limited',
    role: 'Luxury Real Estate & Architectural Showcase',
    location: 'Nigeria',
    icon: <Building2 size={18} className="text-brand-terra" />,
    badge: 'Luxury Property',
    link: 'https://www.projectcataloguelimited.com',
  },
]

export function TrustBar() {
  return (
    <section className="relative py-8 bg-zinc-100/80 dark:bg-zinc-950 border-y border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Section Indicator */}
          <div className="flex-shrink-0 lg:max-w-xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
                Proven Track Record
              </span>
            </div>
            <p className="text-xs font-dm text-zinc-700 dark:text-zinc-300 font-medium">
              Engineered platforms powering sovereign entities, UK Open Banking, and fast-scaling brands.
            </p>
          </div>

          {/* Trust Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 flex-1">
            {trustItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-xl bg-white dark:bg-zinc-900/90 border border-zinc-200/80 dark:border-zinc-800 hover:border-brand-terra/50 dark:hover:border-brand-terra/50 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      {item.location}
                    </span>
                  </div>
                  <h4 className="font-syne font-bold text-sm text-zinc-900 dark:text-white group-hover:text-brand-terra transition-colors flex items-center gap-1">
                    <span>{item.entity}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-brand-terra"
                    />
                  </h4>
                  <p className="mt-1 text-xs font-dm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {item.role}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>{item.badge}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● Verified Live</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
