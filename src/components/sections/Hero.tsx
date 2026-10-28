'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ShieldCheck, Zap, Globe, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

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
}

// Studio client work only; founder experience at Mabilla Group is shown in Work and About
const heroShowcase: HeroProject[] = [
  {
    id: 'projectcatalogue',
    title: 'Project Catalogue Limited',
    shortName: 'Project Catalogue',
    tabLabel: 'Luxury property',
    client: 'Luxury Architecture & Real Estate',
    category: 'Digital Flagship',
    image: '/projects/projectcatalogue.jpg',
    url: 'https://www.projectcataloguelimited.com/',
    metric: 'Fast-Loading Property Showcase',
    tagline: 'High-end architectural portfolio converting wealthy diaspora buyers.',
  },
  {
    id: 'shesandhers',
    title: "She's & Hers Beauty Palace",
    shortName: "She's & Hers",
    tabLabel: 'Beauty retail',
    client: 'Beauty Brand, Uyo',
    category: 'Brand & E-Commerce',
    image: '/projects/shesandhers.jpg',
    url: 'https://www.shesandhers.com/',
    metric: 'Online Catalogue with WhatsApp Ordering',
    tagline: 'Online home for a beauty brand serving 3,000+ clients in store and on WhatsApp.',
  },
  {
    id: 'romanseries',
    title: 'Roman Series Exam Engine',
    shortName: 'Roman Series',
    tabLabel: 'EdTech startup',
    client: 'Exam Prep Startup, Nigeria',
    category: 'Exam Practice Platform',
    image: '/projects/romanseries.jpg',
    url: 'https://www.romanseries.com.ng/',
    metric: 'Timed Practice for 5 Universities',
    tagline: 'Post-UTME past questions with timed tests, instant scoring and progress analytics.',
  },
]

export function Hero() {
  const [activeProjectId, setActiveProjectId] = useState<string>('projectcatalogue')

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
                <span className="w-2 h-2 rounded-full bg-brand-terra animate-pulse" />
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
            <ul className="sm:hidden flex flex-wrap gap-x-4 gap-y-1.5 text-sm font-dm text-[#2E0E1D] dark:text-[#FFF0E3]">
              <li className="flex items-center gap-1.5"><Zap size={14} className="text-brand-terra-ink dark:text-[#FF5528]" /> 99/100 speed score</li>
              <li className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-[#0E6247] dark:text-emerald-400" /> 17 sites &amp; apps</li>
              <li className="flex items-center gap-1.5"><Globe size={14} className="text-brand-terra-ink dark:text-[#FF5528]" /> Clients anywhere, remote</li>
            </ul>

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
              <Button
                variant="filled"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3.5 px-7 text-sm font-dm font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-brand-terra/20 hover:scale-[1.02] transition-all bg-brand-terra hover:bg-[#B82A00] text-white"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  const workSection = document.querySelector('#work')
                  if (workSection) workSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-3.5 px-6 text-sm font-dm font-semibold flex items-center justify-center gap-2 bg-[#FAF0E6] hover:bg-[#F3E2D5] border-[#EAD3C4] dark:bg-[#1D0E17] dark:hover:bg-[#25121E] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-all shadow-xs"
              >
                <span>Selected Work ↓</span>
              </Button>
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

                  <div className="px-3 py-0.5 rounded-full bg-[#FFF0E3] dark:bg-[#170A13] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[11px] text-[#6C4B59] dark:text-[#E6D0C2] font-mono truncate max-w-[200px]">
                    {activeProject.url.replace('https://', '')}
                  </div>

                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-bold text-brand-terra-ink dark:text-[#FF5528] hover:text-brand-ember transition-colors relative z-10"
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
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-terra text-white uppercase tracking-wider shadow-sm">
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
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#0E6247] dark:text-emerald-400 font-bold flex items-center gap-1.5">
                      <Zap size={13} /> {activeProject.metric}
                    </span>
                    <span className="text-[#7A4A38] dark:text-[#B88E7D] font-medium">Live project</span>
                  </div>

                  <p className="text-xs font-dm text-[#5A3846] dark:text-[#E6D0C2] leading-relaxed font-medium">
                    {activeProject.tagline}
                  </p>

                  {/* Interactive Project Switcher Chips */}
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                    {heroShowcase.map((p) => {
                      const isSelected = p.id === activeProject.id
                      return (
                        <button
                          key={p.id}
                          onClick={() => setActiveProjectId(p.id)}
                          className={`p-2.5 rounded-xl text-left transition-all ${
                            isSelected
                              ? 'bg-[#2E0E1D] text-[#FFF0E3] dark:bg-brand-terra dark:text-[#FFF0E3] shadow-md font-semibold dark:shadow-brand-terra/20'
                              : 'bg-[#FFF0E3] dark:bg-[#25121E] text-[#6C4B59] dark:text-[#E6D0C2] hover:bg-[#F3E2D5] dark:hover:bg-[#301627] border border-[#EAD3C4] dark:border-[#EAD3C4]/15'
                          }`}
                        >
                          <div className={`truncate text-[9px] font-mono uppercase tracking-wider ${isSelected ? 'text-brand-ember dark:text-white/80 font-bold' : 'text-[#7A4A38] dark:text-[#B88E7D]'}`}>
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
