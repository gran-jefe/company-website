'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  ExternalLink,
  CheckCircle2,
  Globe,
  Sparkles,
  ArrowRight,
  Monitor,
  LayoutGrid,
  Table,
  ChevronRight,
  Terminal,
  Zap,
  Play,
  Pause,
  ShieldCheck,
  Cpu
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface RealProject {
  id: string
  name: string
  deployGroup: 'custom_domain' | 'vercel'
  category: 'edtech' | 'beauty_retail' | 'saas' | 'health_inst'
  categoryLabel: string
  domain: string
  liveUrl: string
  summary: string
  highlights: string[]
  stack: string[]
  imagePath: string
  accentColor: string
  badgeText: string
}

const allUserProjects: RealProject[] = [
  {
    id: 'shesandhers',
    name: "She's & Hers Beauty Palace",
    deployGroup: 'custom_domain',
    category: 'beauty_retail',
    categoryLabel: 'Beauty Brand & Palace',
    domain: 'shesandhers.com',
    liveUrl: 'https://www.shesandhers.com/',
    summary: 'Beauty Palace brand for wigs, weave-ons, hair accessories, makeup, cosmetics, and jewelry. Serving 3,000+ clients with in-store & WhatsApp ordering in Uyo, Nigeria.',
    highlights: [
      '3,000+ Clients Served Across Nigeria',
      'Wigs, Hair, Makeup & Jewelry Palace',
      'In-Store & WhatsApp Order Direct',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'WhatsApp Business'],
    imagePath: '/projects/shesandhers.jpg',
    accentColor: 'border-t-4 border-t-brand-terra',
    badgeText: '🌐 Custom Domain • Live',
  },
  {
    id: 'romanseries',
    name: 'Roman Series Exam Engine',
    deployGroup: 'custom_domain',
    category: 'edtech',
    categoryLabel: 'EdTech & Assessment',
    domain: 'romanseries.com.ng',
    liveUrl: 'https://www.romanseries.com.ng/',
    summary: 'Interactive examination practice engine for Post-UTME past questions for UI, OAU, UNILAG, ABU, and FUTA. Features timed test simulation, instant scoring, and performance analytics.',
    highlights: [
      'Timed Exam Simulation Engine',
      'Instant Scoring & Analytics',
      'Multi-University Question Bank',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'PostgreSQL'],
    imagePath: '/projects/romanseries.jpg',
    accentColor: 'border-t-4 border-t-amber-500',
    badgeText: '🌐 Custom Domain • Live',
  },
  {
    id: 'techcompass',
    name: 'TechCompass Internship Hub',
    deployGroup: 'custom_domain',
    category: 'edtech',
    categoryLabel: 'EdTech & Talent Portal',
    domain: 'techcompass.org',
    liveUrl: 'https://www.techcompass.org/',
    summary: 'Career platform connecting Nigerian students with top tech internship opportunities, mentorship pathways, and industry talent pipelines.',
    highlights: [
      'Student & Employer Matching',
      'Verified Internship Pipeline',
      'Career Mentorship Pathways',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'Tailwind CSS'],
    imagePath: '/projects/techcompass.jpg',
    accentColor: 'border-t-4 border-t-dev-cyan',
    badgeText: '🌐 Custom Domain • Live',
  },
  {
    id: 'graffytea',
    name: 'GraffyTea Storefront',
    deployGroup: 'custom_domain',
    category: 'beauty_retail',
    categoryLabel: 'Herbal Teas & Wellness',
    domain: 'graffytea.com.ng',
    liveUrl: 'https://www.graffytea.com.ng/',
    summary: 'Artisanal storefront for delicately curated herbal teas and natural wellness products inspired by nature to cultivate mind and body focus.',
    highlights: [
      'Curated Herbal Tea Catalog',
      'Mind & Body Focus Formulations',
      'Fast Mobile Checkout',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Payment Gateway'],
    imagePath: '/projects/graffytea.jpg',
    accentColor: 'border-t-4 border-t-emerald-500',
    badgeText: '🌐 Custom Domain • Live',
  },
  {
    id: 'projectcatalogue',
    name: 'Project Catalogue Limited',
    deployGroup: 'custom_domain',
    category: 'saas',
    categoryLabel: 'Luxury Real Estate & Dev',
    domain: 'projectcataloguelimited.com',
    liveUrl: 'https://www.projectcataloguelimited.com/',
    summary: 'Premier luxury real estate development and architectural firm turning concepts into architectural masterpieces with elegance and precision.',
    highlights: [
      'Luxury Real Estate Showcase',
      'Architectural Design & Planning',
      'High-End Development Projects',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    imagePath: '/projects/projectcatalogue.jpg',
    accentColor: 'border-t-4 border-t-amber-500',
    badgeText: '🌐 Custom Domain • Live',
  },
  {
    id: 'sawt',
    name: 'Sawt Vocal Extractor',
    deployGroup: 'vercel',
    category: 'saas',
    categoryLabel: 'Audio AI & Media Tech',
    domain: 'sawt-sigma.vercel.app',
    liveUrl: 'https://sawt-sigma.vercel.app/',
    summary: 'Specialized audio processing web tool that isolates trending TikTok audio tracks into clean, vocals-only audio stems for creators.',
    highlights: [
      'Vocal Stem Isolation Engine',
      'Instant Audio Export & Download',
      'Fast Client-Side Processing',
    ],
    stack: ['Next.js', 'Web Audio API', 'Python Engine'],
    imagePath: '/projects/sawt.jpg',
    accentColor: 'border-t-4 border-t-dev-violet',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'justbreathe',
    name: 'Just Breathe Wellness',
    deployGroup: 'vercel',
    category: 'health_inst',
    categoryLabel: 'Health & Student Support',
    domain: 'just-breathe-two.vercel.app',
    liveUrl: 'https://just-breathe-two.vercel.app/',
    summary: 'A safe, anonymous wellness coaching platform for Nigerian university students navigating anxiety, burnout, and academic pressure.',
    highlights: [
      'Anonymous Support Space',
      'Peer & Coach Booking System',
      'Mental Health Resource Hub',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Booking API'],
    imagePath: '/projects/justbreathe.jpg',
    accentColor: 'border-t-4 border-t-brand-terra',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'daarul',
    name: 'Daarul Muslimaat Institute',
    deployGroup: 'vercel',
    category: 'edtech',
    categoryLabel: 'EdTech & Global Institute',
    domain: 'daarul-muslimaat.vercel.app',
    liveUrl: 'https://daarul-muslimaat.vercel.app/',
    summary: 'Online Quranic memorization, Tajweed, and Islamic studies institute offering structured online classes for female students worldwide.',
    highlights: [
      'Structured Online Curriculum',
      'Student Portal & Enrollment',
      'Global Female Institute',
    ],
    stack: ['Next.js', 'React', 'Student Portal', 'Video Engine'],
    imagePath: '/projects/daarul.jpg',
    accentColor: 'border-t-4 border-t-emerald-500',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'cvmirror',
    name: 'CV Mirror Checker',
    deployGroup: 'vercel',
    category: 'saas',
    categoryLabel: 'Career Tech & SaaS',
    domain: 'c-vmirror.vercel.app',
    liveUrl: 'https://c-vmirror.vercel.app/',
    summary: 'Automated, structured CV critique tool providing instant feedback, formatting analysis, and actionable improvement recommendations before job submissions.',
    highlights: [
      'Structured CV Scoring Engine',
      'Instant Format & Content Critique',
      'ATS Compliance Recommendations',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Parser Engine'],
    imagePath: '/projects/cvmirror.jpg',
    accentColor: 'border-t-4 border-t-dev-cyan',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'uniabuja',
    name: 'Faculty of Arts | UniAbuja',
    deployGroup: 'vercel',
    category: 'health_inst',
    categoryLabel: 'Academic Portal',
    domain: 'uniabuja-arts.vercel.app',
    liveUrl: 'https://uniabuja-arts.vercel.app/',
    summary: 'Official academic portal for the Faculty of Arts at the University of Abuja. Features departmental news, academic staff profiles, course directories, and campus events.',
    highlights: [
      'Academic Staff Directory',
      'Departmental & Course Catalogs',
      'News & Events Publishing Engine',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Institutional CMS'],
    imagePath: '/projects/uniabuja.jpg',
    accentColor: 'border-t-4 border-t-amber-500',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'techcompass_landing',
    name: 'TechCompass Learning Academy',
    deployGroup: 'vercel',
    category: 'edtech',
    categoryLabel: 'RoboTech Training',
    domain: 'techcompass-landing.vercel.app',
    liveUrl: 'https://tech-compass-landing.vercel.app/',
    summary: 'Specialized landing platform for RoboKids (Ages 6-16) and RoboSteer (16+) tech training programs transforming learners into industry-ready tech professionals.',
    highlights: [
      'RoboKids & RoboSteer Tracks',
      'Interactive Course Previews',
      'Student Enrollment Engine',
    ],
    stack: ['Next.js', 'React', 'Framer Motion', 'Tailwind CSS'],
    imagePath: '/projects/techcompass_landing.jpg',
    accentColor: 'border-t-4 border-t-dev-violet',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'bluelakes',
    name: 'Bluelakes Enterprises Limited',
    deployGroup: 'vercel',
    category: 'saas',
    categoryLabel: 'Property & UK Investment',
    domain: 'bluelakes-enterprises-rbih.vercel.app',
    liveUrl: 'https://bluelakes-enterprises-rbih.vercel.app/',
    summary: 'Trusted property investment and real estate development platform serving property investors and development projects across England.',
    highlights: [
      'UK Property Investment Hub',
      'Portfolio & Asset Management',
      'Investor Relations Platform',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    imagePath: '/projects/bluelakes.jpg',
    accentColor: 'border-t-4 border-t-dev-cyan',
    badgeText: '▲ Vercel App • Live',
  },
  {
    id: 'bexterybites',
    name: 'Bextery Bites',
    deployGroup: 'vercel',
    category: 'beauty_retail',
    categoryLabel: 'Gourmet Pastries & Bakery',
    domain: 'bextery-bites.vercel.app',
    liveUrl: 'https://bextery-bites.vercel.app/',
    summary: 'Artisanal gourmet treats, custom celebration cakes, and event catering storefront engineered for effortless online ordering and customer delight.',
    highlights: [
      'Custom Cake & Pastry Catalog',
      'Event Catering Order Portal',
      '1-Click Mobile Checkout',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel App'],
    imagePath: '/projects/bexterybites.jpg',
    accentColor: 'border-t-4 border-t-amber-500',
    badgeText: '▲ Vercel App • Live',
  },
]

export function Work() {
  const [viewMode, setViewMode] = useState<'workstation' | 'grid' | 'table'>('workstation')
  const [activeDeployGroup, setActiveDeployGroup] = useState<'all' | 'custom_domain' | 'vercel'>('all')
  const [selectedProjectId, setSelectedProjectId] = useState<string>(allUserProjects[0].id)
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false)

  const customDomainProjects = allUserProjects.filter((p) => p.deployGroup === 'custom_domain')
  const vercelProjects = allUserProjects.filter((p) => p.deployGroup === 'vercel')

  const filteredProjects =
    activeDeployGroup === 'all'
      ? allUserProjects
      : allUserProjects.filter((p) => p.deployGroup === activeDeployGroup)

  const activeProject =
    allUserProjects.find((p) => p.id === selectedProjectId) || allUserProjects[0]

  // Auto rotation effect for Workstation mode
  useEffect(() => {
    if (!isAutoRotating) return
    const timer = setInterval(() => {
      const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProjectId)
      const nextIndex = (currentIndex + 1) % filteredProjects.length
      setSelectedProjectId(filteredProjects[nextIndex].id)
    }, 4500)
    return () => clearInterval(timer)
  }, [isAutoRotating, selectedProjectId, filteredProjects])

  return (
    <section id="work" className="bg-white dark:bg-zinc-950 py-20 md:py-28 relative border-t border-zinc-200/60 dark:border-zinc-800/60">
      {/* Background Cyber Glow */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-[0.03] dark:opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <SectionLabel>Production Engineering Studio</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-bold text-zinc-900 dark:text-white tracking-tight">
                Engineering Showcase.{' '}
                <span className="text-brand-terra">Interactive Workstation.</span>
              </h2>
            </div>

            {/* View Mode Switcher + Stats */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-1">
                <button
                  onClick={() => setViewMode('workstation')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
                    viewMode === 'workstation'
                      ? 'bg-brand-terra text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Monitor size={14} />
                  <span>Workstation</span>
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
                    viewMode === 'grid'
                      ? 'bg-brand-terra text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <LayoutGrid size={14} />
                  <span>Spotlight Deck</span>
                </button>

                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
                    viewMode === 'table'
                      ? 'bg-brand-terra text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <Table size={14} />
                  <span>Console Matrix</span>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Group Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveDeployGroup('all')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'all'
                    ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-md'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800'
                }`}
              >
                <span>All Deployments ({allUserProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveDeployGroup('custom_domain')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'custom_domain'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20'
                }`}
              >
                <Globe size={13} />
                <span>Live Custom Domains ({customDomainProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveDeployGroup('vercel')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'vercel'
                    ? 'bg-dev-cyan text-white shadow-md shadow-dev-cyan/20'
                    : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20'
                }`}
              >
                <Zap size={13} />
                <span>Vercel Deployments ({vercelProjects.length})</span>
              </button>
            </div>

            {/* Auto Play Toggle for Workstation Mode */}
            {viewMode === 'workstation' && (
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isAutoRotating
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800'
                }`}
              >
                {isAutoRotating ? <Pause size={13} /> : <Play size={13} />}
                <span>{isAutoRotating ? 'Auto-Cycle ON' : 'Auto-Cycle OFF'}</span>
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* MODE 1: INTERACTIVE WORKSTATION CANVAS (DEFAULT) */}
        {viewMode === 'workstation' && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar: Interactive Project Selector List */}
            <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredProjects.map((project) => {
                const isSelected = project.id === activeProject.id
                return (
                  <motion.button
                    key={project.id}
                    onClick={() => {
                      setSelectedProjectId(project.id)
                      setIsAutoRotating(false)
                    }}
                    whileHover={{ x: 4 }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-zinc-900 dark:bg-zinc-900 border-brand-terra text-white shadow-xl shadow-brand-terra/10'
                        : 'bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-900 border-zinc-200/80 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            project.deployGroup === 'custom_domain' ? 'bg-emerald-500' : 'bg-cyan-500'
                          }`}
                        />
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider ${
                            isSelected ? 'text-brand-terra' : 'text-zinc-500 dark:text-zinc-400'
                          }`}
                        >
                          {project.categoryLabel}
                        </span>
                      </div>

                      <h4 className="font-syne font-bold text-base truncate">
                        {project.name}
                      </h4>

                      <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate flex items-center gap-1">
                        <Globe size={11} className="text-brand-terra flex-shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          project.deployGroup === 'custom_domain'
                            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
                            : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
                        }`}
                      >
                        {project.deployGroup === 'custom_domain' ? 'Custom' : 'Vercel'}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          isSelected ? 'text-brand-terra translate-x-1' : 'text-zinc-400'
                        }`}
                      />
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* Right Stage: Interactive Live Canvas & Browser Mockup */}
            <div className="lg:col-span-7 sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-white flex flex-col"
                >
                  {/* Browser Window Header */}
                  <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-3 text-xs font-mono select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>

                    <div className="flex-1 max-w-md px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 truncate">
                        <ShieldCheck size={12} className="text-emerald-400 flex-shrink-0" />
                        <span className="truncate text-zinc-300 font-mono">
                          {activeProject.liveUrl}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono flex-shrink-0">
                        SSL 256-bit
                      </span>
                    </div>

                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-brand-terra hover:bg-brand-ember text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      title="Open Live Website"
                    >
                      <span>Visit Site</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Live Screenshot Viewport */}
                  <div className="relative w-full h-72 md:h-80 bg-zinc-950 overflow-hidden border-b border-zinc-800 group">
                    <Image
                      src={activeProject.imagePath}
                      alt={activeProject.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                      <div>
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-brand-terra text-white shadow-md">
                          {activeProject.categoryLabel}
                        </span>
                        <h3 className="mt-2 font-syne font-bold text-2xl md:text-3xl text-white drop-shadow-md">
                          {activeProject.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Inspection Metadata Panel */}
                  <div className="p-6 md:p-8 space-y-6 bg-zinc-900">
                    <p className="font-dm text-zinc-300 text-sm md:text-base leading-relaxed">
                      {activeProject.summary}
                    </p>

                    {/* Key Engineering Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {activeProject.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center gap-2.5 text-xs font-dm text-zinc-200"
                        >
                          <CheckCircle2 size={15} className="text-brand-terra flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Matrix Tags */}
                    <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-950 text-zinc-300 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                        <Cpu size={14} className="text-brand-terra" />
                        <span>Status: Operational</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* MODE 2: ANIMATED SPOTLIGHT DECK (SLIDER / PERSPECTIVE GRID) */}
        {viewMode === 'grid' && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div
                    className={`h-full group rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 ${project.accentColor} transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-brand-terra/10`}
                  >
                    <div>
                      {/* Floating Header */}
                      <div className="px-4 py-2.5 bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-2 text-xs font-mono">
                        <div className="truncate px-2.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                          <Globe size={11} className="text-brand-terra flex-shrink-0" />
                          <span className="truncate">{project.domain}</span>
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-brand-terra transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      {/* Screenshot Image */}
                      <div className="relative w-full h-48 bg-zinc-950 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
                        <Image
                          src={project.imagePath}
                          alt={project.name}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                            {project.categoryLabel}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                              project.deployGroup === 'custom_domain'
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                                : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                            }`}
                          >
                            {project.badgeText}
                          </span>
                        </div>

                        <h3 className="font-syne font-bold text-xl text-zinc-900 dark:text-white group-hover:text-brand-terra transition-colors">
                          {project.name}
                        </h3>

                        <p className="font-dm font-normal text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {project.stack.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-brand-terra/10 hover:bg-brand-terra text-brand-terra hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* MODE 3: PRODUCTION CONSOLE MATRIX TABLE */}
        {viewMode === 'table' && (
          <div className="mt-10 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-4 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-brand-terra" />
                <span>PRODUCTION_DEPLOYMENT_MATRIX.log</span>
              </div>
              <div>// Total Entries: {filteredProjects.length}</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-800 bg-zinc-900/80 font-mono text-xs text-zinc-400">
                    <th className="p-4">Deployment Domain</th>
                    <th className="p-4">Project Name</th>
                    <th className="p-4">Group</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Tech Stack</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 text-xs font-dm">
                  {filteredProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="hover:bg-zinc-800/50 transition-colors text-zinc-200"
                    >
                      <td className="p-4 font-mono text-brand-terra">
                        <div className="flex items-center gap-1.5">
                          <Globe size={13} className="text-zinc-500" />
                          <span>{project.domain}</span>
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-white">{project.name}</td>
                      <td className="p-4 font-mono">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            project.deployGroup === 'custom_domain'
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                          }`}
                        >
                          {project.deployGroup === 'custom_domain' ? 'Custom Domain' : 'Vercel App'}
                        </span>
                      </td>
                      <td className="p-4 text-zinc-400">{project.categoryLabel}</td>
                      <td className="p-4 font-mono text-zinc-400">
                        {project.stack.slice(0, 3).join(', ')}
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1 rounded bg-brand-terra/10 hover:bg-brand-terra text-brand-terra hover:text-white transition-colors font-mono text-[11px]"
                        >
                          <span>Open</span>
                          <ExternalLink size={12} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom Call to Action */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-brand-cream dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 text-center shadow-sm">
            <p className="font-dm text-base text-zinc-800 dark:text-zinc-200 font-medium">
              Ready to construct your next web platform or production infrastructure?{' '}
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact')
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-1.5 text-brand-terra font-semibold hover:text-brand-ember transition-colors underline underline-offset-4 ml-1 group"
              >
                <span>Initialize project discussion</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
