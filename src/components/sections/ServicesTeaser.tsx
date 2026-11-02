'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { formatPrice, services } from '@/components/sections/Services'

// Compact service list for the home page; full detail and process live on /services
export function ServicesTeaser() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF0E6] dark:bg-[#140A10] border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <AnimatedSection>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl font-syne font-extrabold tracking-tight">
            Websites, apps and payment systems.
          </h2>
          <p className="mt-4 font-dm text-base text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed max-w-md">
            Scope and price agreed before we start, then built fast with a clear process.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#EAD3C4] dark:border-[#EAD3C4]/20 bg-[#FFF0E3] dark:bg-[#1D0E17] px-5 font-dm text-sm font-semibold transition-colors hover:border-brand-terra/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
          >
            Services and process
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </AnimatedSection>

        <ul className="divide-y divide-[#EAD3C4] dark:divide-[#EAD3C4]/15 border-y border-[#EAD3C4] dark:border-[#EAD3C4]/15">
          {services.map((service) => (
            <li key={service.id}>
              <Link
                href="/services"
                className="group flex min-h-[64px] items-center justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
              >
                <span className="flex items-center gap-4">
                  <span className="shrink-0" aria-hidden="true">{service.icon}</span>
                  <span className="font-syne font-bold text-base sm:text-lg group-hover:text-brand-terra-ink dark:group-hover:text-brand-ember transition-colors">
                    {service.title}
                  </span>
                </span>
                <span className="shrink-0 text-right font-mono text-xs text-[#7A4A38] dark:text-[#B88E7D]">
                  From {formatPrice(service.startingPrice)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
