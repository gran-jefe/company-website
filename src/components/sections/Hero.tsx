'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, Globe, ExternalLink, CheckCircle2, Landmark } from 'lucide-react'

interface HeroProject {
  id: string
  title: string
  shortName: string
  tabLabel: string
  client: string
  category: string
  image: string
  url: string
  metric: string
  tagline: string
  // Employer work is labelled as such so it is never mistaken for studio client work
  builtAtMabilla?: boolean
}

// Founder experience at Mabilla Group leads, followed by flagship studio client work
const heroShowcase: HeroProject[] = [
  {
    id: 'nhc_london',
    title: 'Nigeria High Commission Payment Platform',
    shortName: 'Nigeria High Comm',
    tabLabel: 'Government',
    client: 'Nigeria High Commission United Kingdom',
    category: 'Government payments',
    image: '/projects/nhc_london.png',
    url: 'https://payments.nigeriahc.org.uk',
    metric: 'UK consular payments',
    tagline: 'Architected by Adeleke Sherifdeen as Full-Stack Engineer at Mabilla Group, with UK Open Banking and automated audit receipts.',
    builtAtMabilla: true,
  },
  {
    id: 'celergate',
    title: 'Celergate Open Banking Platform',
    shortName: 'Celergate',
    tabLabel: 'Fintech',
    client: 'Celergate UK',
    category: 'Open banking',
    image: '/projects/celergate.png',
    url: 'https://celergate.co.uk',
    metric: 'Instant bank settlement',
    tagline: 'Engineered by Adeleke Sherifdeen at Mabilla Group: a UK Open Banking engine for instant account-to-account settlement.',
    builtAtMabilla: true,
  },
  {
    id: 'projectcatalogue',
    title: 'Project Catalogue Limited',
    shortName: 'Project Catalogue',
    tabLabel: 'Property',
    client: 'Luxury Architecture & Real Estate',
    category: 'Digital flagship',
    image: '/projects/projectcatalogue.jpg',
    url: 'https://www.projectcataloguelimited.com/',
    metric: 'Fast-loading property showcase',
    tagline: 'High-end architectural portfolio converting wealthy diaspora buyers.',
  },
  {
    id: 'shesandhers',
    title: "She's & Hers Beauty Palace",
    shortName: "She's & Hers",
    tabLabel: 'Retail',
    client: 'Beauty Brand, Uyo',
    category: 'Brand & e-commerce',
    image: '/projects/shesandhers.jpg',
    url: 'https://www.shesandhers.com/',
    metric: 'WhatsApp ordering system',
    tagline: 'Online home for a beauty brand serving 3,000+ clients in store and on WhatsApp.',
  },
]

export function Hero() {
  const [activeProjectId, setActiveProjectId] = useState<string>('nhc_london')

  const activeProject = heroShowcase.find((p) => p.id === activeProjectId) || heroShowcase[0]

  // 3D Perspective Tilt on Mouse Move
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-250, 250], [8, -8])
  const rotateY = useTransform(mouseX, [-250, 250], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="relative min-h-[92vh] pt-8 pb-16 md:py-20 overflow-hidden flex items-center bg-transparent text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      {/* Luminous Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-brand-terra/[0.10] dark:bg-brand-terra/[0.16] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-brand-blush/[0.14] dark:bg-brand-ember/[0.12] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Studio Badge (hidden on phones to keep the headline above the fold) */}
            <div className="hidden sm:flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-xs font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-brand-terra motion-safe:animate-pulse" />
                <span className="text-[#7A4A38] dark:text-[#E6D0C2] font-bold">STUDIO</span>
                <span className="text-[#C4A0B8] dark:text-[#7A4A38]">{"//"}</span>
                <span className="text-[#2E0E1D] dark:text-[#FFF0E3] font-bold">EST. 2025</span>
              </div>
            </div>

            {/* Giant Hero Headline (Editorial Brand Style) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] leading-[1.05] tracking-tight">
              We build websites &amp; digital products that make brands{' '}
              <span className="font-serif italic font-normal text-brand-terra-ink dark:text-[#FF5528] underline decoration-brand-terra/40 underline-offset-8">
                impossible
              </span>{' '}
              to ignore.
            </h1>

            {/* Plain-English Outcome-Driven Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed max-w-2xl font-normal">
              Websites, online stores, web apps and mobile apps for growing businesses, backed by hands-on payments and fintech experience. Built to load fast, look polished, and win customers.
            </p>

            {/* Key Business Outcome Proof: compact line on phones */}
            <div className="sm:hidden space-y-2">
              <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm font-dm text-[#2E0E1D] dark:text-[#FFF0E3]">
                <li className="flex items-center gap-1.5"><Zap size={14} className="text-brand-terra-ink dark:text-[#FF5528]" /> 99/100 speed score</li>
                <li className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#0E6247] dark:text-emerald-400" /> 17 sites &amp; apps</li>
                <li className="flex items-center gap-1.5"><Globe size={14} className="text-brand-terra-ink dark:text-[#FF5528]" /> Remote, worldwide</li>
              </ul>
              <div className="flex flex-wrap items-center gap-1.5 text-xs font-dm pt-0.5">
                <span className="text-[#7A4A38] dark:text-[#E6D0C2] font-semibold">Engineered at Mabilla Group:</span>
                <span className="px-2 py-0.5 rounded-md bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 font-semibold text-[#2E0E1D] dark:text-[#FFF0E3]">
                  Nigeria High Commission
                </span>
                <span className="px-2 py-0.5 rounded-md bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 font-semibold text-[#2E0E1D] dark:text-[#FFF0E3]">
                  Celergate
                </span>
              </div>
            </div>

            {/* Key Business Outcome Proof Badges */}
            <div className="hidden sm:grid grid-cols-3 gap-3 max-w-lg pt-1">
              <div className="p-3.5 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xs hover:border-brand-terra/50 transition-colors">
                <div className="flex items-center gap-1.5 text-brand-terra-ink dark:text-[#FF5528] text-xs font-mono font-bold">
                  <Zap size={14} /> SPEED SCORE
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3]">
                  99/100 on Google
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xs hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center gap-1.5 text-[#0E6247] dark:text-emerald-400 text-xs font-mono font-bold">
                  <ShieldCheck size={14} /> BUILT
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3]">
                  17 sites &amp; apps
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xs hover:border-brand-terra/50 transition-colors">
                <div className="flex items-center gap-1.5 text-brand-terra-ink dark:text-[#FF5528] text-xs font-mono font-bold">
                  <Globe size={14} /> WORKS WITH
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3]">
                  Clients anywhere, remotely
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
              <Link
                href="/contact"
                className="rounded-lg py-3.5 px-7 text-sm font-dm font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-brand-terra/20 transition-colors bg-brand-terra hover:bg-[#B82A00] text-white min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/work"
                className="rounded-lg border py-3.5 px-6 text-sm font-dm font-semibold flex items-center justify-center gap-2 bg-[#FAF0E6] hover:bg-[#F3E2D5] border-[#EAD3C4] dark:bg-[#1D0E17] dark:hover:bg-[#25121E] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors shadow-xs min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2"
              >
                <span>See our work</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            {/* Founder experience at Mabilla Group: above-the-fold proof */}
            <div className="pt-3 border-t border-[#EAD3C4]/70 dark:border-[#EAD3C4]/15 space-y-2.5">
              <p className="flex items-center gap-2 text-sm font-dm font-semibold text-[#7A4A38] dark:text-[#E6D0C2]">
                <ShieldCheck size={14} className="text-[#0E6247] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Founder experience: payment platforms engineered at Mabilla Group</span>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href="https://payments.nigeriahc.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <Landmark size={15} className="text-[#0E6247] dark:text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-syne font-bold text-xs text-[#2E0E1D] dark:text-[#FFF0E3] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                        Nigeria High Commission
                      </div>
                      <div className="text-xs font-dm text-[#6C4B59] dark:text-[#E6D0C2] truncate">
                        UK consular payments portal
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-[#7A4A38] group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                </a>

                <a
                  href="https://celergate.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:border-brand-terra/50 dark:hover:border-brand-terra/50 shadow-xs hover:shadow-md transition-all group min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-brand-terra/10 dark:bg-brand-terra/20 border border-brand-terra/30 flex items-center justify-center shrink-0">
                      <Zap size={15} className="text-brand-terra-ink dark:text-[#FF5528]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-syne font-bold text-xs text-[#2E0E1D] dark:text-[#FFF0E3] group-hover:text-brand-terra-ink dark:group-hover:text-[#FF5528] transition-colors truncate">
                        Celergate Open Banking
                      </div>
                      <div className="text-xs font-dm text-[#6C4B59] dark:text-[#E6D0C2] truncate">
                        UK open banking engine
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-[#7A4A38] group-hover:text-brand-terra-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Wispr Flow Style Interactive Visual Demo (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">

              {/* 3D Tilted Interactive Card (Brand Editorial Aesthetic) */}
              <motion.div
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="rounded-3xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-2xl shadow-brand-clay/15 dark:shadow-black/70 overflow-hidden text-[#2E0E1D] dark:text-[#FFF0E3] transition-shadow duration-300 hover:shadow-brand-terra/20"
              >
                {/* Browser Stage Header */}
                <div className="px-5 py-3.5 bg-[#F3E2D5] dark:bg-[#25121E] border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center justify-between text-xs font-mono select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="px-3 py-0.5 rounded-full bg-[#FFF0E3] dark:bg-[#170A13] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-xs text-[#6C4B59] dark:text-[#E6D0C2] font-mono truncate max-w-[200px]">
                    {activeProject.url.replace('https://', '')}
                  </div>

                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 min-h-[44px] -my-3 text-xs font-bold text-brand-terra-ink dark:text-[#FF5528] hover:text-brand-ember transition-colors relative z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded-md"
                  >
                    <span>Visit Live</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* Screenshot Viewport with Smooth Image Crossfade */}
                <div className="relative w-full h-64 sm:h-72 bg-[#1D0E17] overflow-hidden group">
                  <Image
                    key={activeProject.id}
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between z-10 pointer-events-none">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-brand-terra text-white uppercase tracking-wider shadow-sm">
                        {activeProject.category}
                      </span>
                      <h3 className="mt-1 font-syne font-bold text-xl sm:text-2xl text-white drop-shadow-md">
                        {activeProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Demonstrable Value Panel */}
                <div className="p-5 bg-[#FAF0E6] dark:bg-[#1D0E17] border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-[#0E6247] dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <Zap size={13} /> {activeProject.metric}
                    </span>
                    <span className="text-[#7A4A38] dark:text-[#B88E7D] font-medium">
                      {activeProject.builtAtMabilla ? 'Founder experience, Mabilla Group' : 'Studio client, live'}
                    </span>
                  </div>

                  <p className="text-xs font-dm text-[#5A3846] dark:text-[#E6D0C2] leading-relaxed font-medium">
                    {activeProject.tagline}
                  </p>

                  {/* Interactive Project Switcher Chips */}
                  <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                    {heroShowcase.map((p) => {
                      const isSelected = p.id === activeProject.id
                      return (
                        <button
                          key={p.id}
                          type="button"
                          aria-pressed={isSelected}
                          onClick={() => setActiveProjectId(p.id)}
                          className={`min-h-[44px] p-2.5 rounded-xl text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra ${
                            isSelected
                              ? 'bg-[#2E0E1D] text-[#FFF0E3] dark:bg-brand-terra dark:text-[#FFF0E3] shadow-md font-semibold dark:shadow-brand-terra/20'
                              : 'bg-[#FFF0E3] dark:bg-[#25121E] text-[#6C4B59] dark:text-[#E6D0C2] hover:bg-[#F3E2D5] dark:hover:bg-[#301627] border border-[#EAD3C4] dark:border-[#EAD3C4]/15'
                          }`}
                        >
                          <div className={`truncate text-xs font-dm ${isSelected ? 'text-brand-ember dark:text-white/80 font-bold' : 'text-[#7A4A38] dark:text-[#B88E7D]'}`}>
                            {p.tabLabel}
                          </div>
                          <div className={`truncate text-xs font-syne font-bold mt-0.5 ${isSelected ? 'text-[#FFF0E3]' : 'text-[#2E0E1D] dark:text-[#FFF0E3]'}`}>
                            {p.shortName}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
