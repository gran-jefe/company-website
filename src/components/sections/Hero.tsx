'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Zap, Globe, ExternalLink, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface HeroProject {
  id: string
  title: string
  client: string
  category: string
  image: string
  url: string
  metric: string
}

const heroShowcase: HeroProject[] = [
  {
    id: 'projectcatalogue',
    title: 'Project Catalogue Limited',
    client: 'Luxury Architecture & Real Estate',
    category: 'Digital Flagship',
    image: '/projects/projectcatalogue.jpg',
    url: 'https://www.projectcataloguelimited.com/',
    metric: 'Sub-Second Fluid Showcase',
  },
  {
    id: 'nhc',
    title: 'Nigeria High Commission (UK)',
    client: 'Diplomatic Consular Mission, London',
    category: 'Sovereign Digital Payments',
    image: '/projects/nhc_london.png',
    url: 'https://payments.nigeriahc.org.uk',
    metric: 'Thousands of UK Applicants Processed',
  },
  {
    id: 'celergate',
    title: 'Celergate Open Banking',
    client: 'Enterprise UK Payment Infrastructure',
    category: 'Fintech Architecture',
    image: '/projects/celergate.png',
    url: 'https://celergate.co.uk',
    metric: 'Instant Bank Settlement • 0% Chargebacks',
  },
]

export function Hero() {
  const [activeProject, setActiveProject] = useState<HeroProject>(heroShowcase[0])

  // 3D Perspective Tilt on Mouse Move
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

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
    <section className="relative min-h-[92vh] pt-12 pb-20 md:py-24 overflow-hidden flex items-center">
      {/* Ambient Radial Mesh (Cerebrium feel) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-[550px] h-[550px] bg-brand-terra/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-dev-cyan/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-dev-violet/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono backdrop-blur-md shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-terra animate-pulse" />
              <span className="text-zinc-400">CREATIVE ENGINEERING STUDIO</span>
              <span className="text-zinc-600">//</span>
              <span className="text-white font-semibold">IBADAN • LONDON</span>
            </div>

            {/* Giant Hero Headline (Awwwards Bold Style) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-syne font-extrabold text-zinc-950 dark:text-white leading-[1.04] tracking-tight">
              We engineer digital products that make brands{' '}
              <span className="font-serif italic font-normal text-brand-terra underline decoration-brand-terra/30 underline-offset-8">
                impossible
              </span>{' '}
              to ignore.
            </h1>

            {/* Plain-English Outcome-Driven Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl font-dm text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
              High-converting storefronts, sovereign payment architectures, and custom web applications. Engineered for sub-second speed, fluid micro-interactions, and measurable revenue growth.
            </p>

            {/* Key Business Outcome Proof Badges */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xs">
                <div className="flex items-center gap-1.5 text-brand-terra text-xs font-mono font-bold">
                  <Zap size={14} /> SPEED SCORE
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-zinc-900 dark:text-white">
                  99/100 Core Web Vitals
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xs">
                <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-mono font-bold">
                  <ShieldCheck size={14} /> REGISTRY
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-zinc-900 dark:text-white">
                  CAC BN: 9529101
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md shadow-xs">
                <div className="flex items-center gap-1.5 text-dev-cyan text-xs font-mono font-bold">
                  <Globe size={14} /> TRACK RECORD
                </div>
                <div className="mt-1 text-sm font-mono font-extrabold text-zinc-900 dark:text-white">
                  UK &amp; Global Clients
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Button
                variant="filled"
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="py-4 px-8 text-sm font-dm font-semibold flex items-center justify-center gap-2 group shadow-xl shadow-brand-terra/25 hover:scale-[1.02] transition-all"
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
                className="py-4 px-8 text-sm font-dm font-medium flex items-center justify-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all"
              >
                <span>Explore Selected Work ↓</span>
              </Button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Project Showcase (Recent.design style) (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative">
              {/* Rotating "Available for Q4 Sprints" Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-6 z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 rounded-full border border-dashed border-brand-terra/40 bg-zinc-950/90 text-zinc-300 backdrop-blur-md flex items-center justify-center text-[9px] font-mono uppercase tracking-widest text-center shadow-xl p-2 select-none"
                >
                  <span className="leading-tight">● AVAILABLE FOR Q4 SPRINTS ●</span>
                </motion.div>
              </div>

              {/* 3D Tilted Interactive Card */}
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-white backdrop-blur-2xl transition-shadow duration-300 hover:shadow-brand-terra/15"
                data-cursor-project="true"
              >
                {/* Browser-like Stage Header */}
                <div className="px-5 py-3.5 bg-zinc-950/95 border-b border-zinc-800/90 flex items-center justify-between text-xs font-mono select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="text-[11px] text-zinc-400 truncate max-w-[200px]">
                    {activeProject.client}
                  </div>

                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-semibold text-brand-terra hover:text-brand-ember transition-colors"
                  >
                    <span>Live ↗</span>
                  </a>
                </div>

                {/* Screenshot Viewport with Smooth Image Crossfade */}
                <div className="relative w-full h-64 sm:h-72 bg-zinc-950 overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-85" />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <div>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-brand-terra text-white uppercase tracking-wider">
                        {activeProject.category}
                      </span>
                      <h3 className="mt-1 font-syne font-bold text-xl sm:text-2xl text-white drop-shadow-md">
                        {activeProject.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Interactive Project Switcher Bar */}
                <div className="p-4 bg-zinc-950/80 border-t border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Zap size={13} /> {activeProject.metric}
                    </span>
                    <span>3 Featured Builds</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {heroShowcase.map((p) => {
                      const isSelected = p.id === activeProject.id
                      return (
                        <button
                          key={p.id}
                          onClick={() => setActiveProject(p)}
                          className={`p-2 rounded-xl text-left text-xs font-dm transition-all ${
                            isSelected
                              ? 'bg-zinc-800 border border-brand-terra text-white font-semibold'
                              : 'bg-zinc-900/60 border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-900'
                          }`}
                        >
                          <div className="truncate text-[10px] font-mono text-zinc-500 uppercase">
                            {p.id === 'projectcatalogue' ? 'Property' : p.id === 'nhc' ? 'Sovereign' : 'Fintech'}
                          </div>
                          <div className="truncate text-xs font-syne font-bold">{p.title.split(' ')[0]}</div>
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
