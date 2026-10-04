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
  category: 'fintech' | 'edtech' | 'beauty_retail' | 'saas' | 'health_inst'
  categoryLabel: string
  domain: string
  liveUrl: string
  summary: string
  highlights: string[]
  stack: string[]
  imagePath: string
  accentColor: string
  badgeText: string
  attribution?: string
}

const allUserProjects: RealProject[] = [
  {
    id: 'nhc_london',
    name: 'Nigeria High Commission Payment Platform',
    deployGroup: 'custom_domain',
    category: 'fintech',
    categoryLabel: 'Sovereign Digital Payments',
    domain: 'payments.nigeriahc.org.uk',
    liveUrl: 'https://payments.nigeriahc.org.uk',
    summary: 'Official digital payment collection portal for administrative and consular charges for the Nigeria High Commission United Kingdom. Engineered full-stack architecture featuring consular service cart, fast secure Open Banking settlement processed in minutes, and automated receipt generation. Engineered in-house as Full-Stack Engineer at Mabilla Group.',
    highlights: [
      'Solo Full Stack (Next.js 15 & NestJS API)',
      'Open Banking & Instant Bank Settlement',
      'Automated PDF Receipts & Audit Queue',
    ],
    stack: ['Next.js 15', 'NestJS', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'AWS S3'],
    imagePath: '/projects/nhc_london.png',
    accentColor: 'border-t-4 border-t-emerald-500',
    badgeText: '🏢 In-House • Mabilla Group',
    attribution: 'In-House Product of Mabilla Group | Full-Stack Engineering (Next.js 15 & NestJS)',
  },
  {
    id: 'celergate_suite',
    name: 'Celergate Open Banking Platform',
    deployGroup: 'custom_domain',
    category: 'fintech',
    categoryLabel: 'UK Open Banking Payments',
    domain: 'celergate.co.uk',
    liveUrl: 'https://celergate.co.uk',
    summary: 'Instant bank payment solution for modern businesses to accept payments directly from bank accounts with instant settlement and zero chargebacks. Built around the central Account identity hub powering sub-products Disbuz for enterprise payouts, Endoz for merchant collections, and Utility for bill payments. Engineered in-house as Full-Stack Engineer at Mabilla Group.',
    highlights: [
      'Central Account SSO & Identity Hub',
      'Instant Settlement & Zero Chargebacks',
      'Modular Design System (40% Speedup)',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Mantine'],
    imagePath: '/projects/celergate.png',
    accentColor: 'border-t-4 border-t-dev-cyan',
    badgeText: '🏢 In-House • Mabilla Group',
    attribution: 'In-House Product of Mabilla Group | Full-Stack & Frontend Engineering',
  },
  {
    id: 'remglo_agent',
    name: 'Remglo Payceler Remittance Agent Mobile App',
    deployGroup: 'custom_domain',
    category: 'fintech',
    categoryLabel: 'Remittance Mobile App | Solo Build',
    domain: 'agentapi.payceler.net',
    liveUrl: 'https://payceler.com',
    summary: 'Dedicated cross-platform remittance field agent mobile application for Payceler and Remglo. Solo-engineered with React Native and Expo in-house at Mabilla Group, featuring dynamic multi-tenant configuration, biometric KYC identity verification using SumSub Mobile SDK, transaction authorization, and real-time cross-border transfer processing.',
    highlights: [
      'Solo Mobile Engineer (React Native & Expo)',
      'SumSub Biometric KYC Mobile SDK',
      'Dynamic Multi-Tenant Agent Architecture',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Redux Toolkit', 'SumSub Mobile SDK', 'EAS Build'],
    imagePath: '/projects/remglo_agent.png',
    accentColor: 'border-t-4 border-t-brand-terra',
    badgeText: '🏢 In-House • Mabilla Group',
    attribution: 'In-House Product of Mabilla Group | Solo Mobile Engineer',
  },
  {
    id: 'payceler_remit',
    name: 'Payceler Global Payments & Remittance Web',
    deployGroup: 'custom_domain',
    category: 'fintech',
    categoryLabel: 'Global Payments & Remittance',
    domain: 'payceler.com',
    liveUrl: 'https://payceler.com',
    summary: 'Global payments, remittances, collections, and payouts web platform built to deliver the 4S: Smart, Safe, Speed, Scale. Encompasses a multi-tenant sender web application, PWA, and enterprise operations admin dashboard with role-based access control and live transaction monitoring. Engineered in-house as Full-Stack Engineer at Mabilla Group.',
    highlights: [
      'Multi-Tenant Remittance Web & PWA',
      'Role-Based Operations Console (RBAC)',
      'Sub-Second Global Rate Calculator',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'SumSub WebSDK'],
    imagePath: '/projects/payceler.png',
    accentColor: 'border-t-4 border-t-amber-500',
    badgeText: '🏢 In-House • Mabilla Group',
    attribution: 'In-House Product of Mabilla Group | Full-Stack & Frontend Engineering',
  },
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
  const [activeDeployGroup, setActiveDeployGroup] = useState<'all' | 'fintech' | 'custom_domain' | 'vercel'>('all')
  const [selectedProjectId, setSelectedProjectId] = useState<string>(allUserProjects[0].id)
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(false)

  const fintechProjects = allUserProjects.filter((p) => p.category === 'fintech')
  const customDomainProjects = allUserProjects.filter((p) => p.deployGroup === 'custom_domain')
  const vercelProjects = allUserProjects.filter((p) => p.deployGroup === 'vercel')

  const filteredProjects =
    activeDeployGroup === 'all'
      ? allUserProjects
      : activeDeployGroup === 'fintech'
      ? fintechProjects
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
    <section id="work" className="bg-transparent py-20 md:py-28 relative border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <SectionLabel>Selected Work &amp; Case Studies</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
                Crafted for impact.{' '}
                <span className="font-serif italic font-normal text-brand-terra dark:text-brand-ember">Engineered to scale.</span>
              </h2>
            </div>

            {/* View Mode Switcher + Stats */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="p-1 rounded-xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center gap-1">
                <button
                  onClick={() => setViewMode('workstation')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all flex items-center gap-1.5 ${
                    viewMode === 'workstation'
                      ? 'bg-brand-terra text-white shadow-sm'
                      : 'text-[#6C4B59] dark:text-[#E6D0C2] hover:text-[#2E0E1D] dark:hover:text-[#FFF0E3]'
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
                      : 'text-[#6C4B59] dark:text-[#E6D0C2] hover:text-[#2E0E1D] dark:hover:text-[#FFF0E3]'
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
                      : 'text-[#6C4B59] dark:text-[#E6D0C2] hover:text-[#2E0E1D] dark:hover:text-[#FFF0E3]'
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
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveDeployGroup('all')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'all'
                    ? 'bg-[#2E0E1D] text-[#FFF0E3] dark:bg-[#FFF0E3] dark:text-[#2E0E1D] shadow-md font-bold'
                    : 'bg-[#FAF0E6] dark:bg-[#1D0E17] text-[#6C4B59] dark:text-[#E6D0C2] hover:text-[#2E0E1D] dark:hover:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15'
                }`}
              >
                <span>All Deployments ({allUserProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveDeployGroup('fintech')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'fintech'
                    ? 'bg-brand-terra text-white shadow-md shadow-brand-terra/20'
                    : 'bg-brand-terra/10 text-brand-terra border border-brand-terra/30 hover:bg-brand-terra/20'
                }`}
              >
                <ShieldCheck size={13} />
                <span>In-House Track Record ({fintechProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveDeployGroup('custom_domain')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'custom_domain'
                    ? 'bg-[#0E6247] text-white shadow-md shadow-emerald-600/20'
                    : 'bg-[#E1F5EE] text-[#0E6247] dark:bg-emerald-950/40 dark:text-emerald-300 border border-[#A7E3D0] dark:border-emerald-800/60 hover:opacity-90'
                }`}
              >
                <Globe size={13} />
                <span>Live Custom Domains ({customDomainProjects.length})</span>
              </button>

              <button
                onClick={() => setActiveDeployGroup('vercel')}
                className={`px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all flex items-center gap-2 ${
                  activeDeployGroup === 'vercel'
                    ? 'bg-brand-terra text-white shadow-md shadow-brand-terra/20'
                    : 'bg-[#FAF0E6] dark:bg-[#1D0E17] text-[#6C4B59] dark:text-[#E6D0C2] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 hover:text-[#2E0E1D] dark:hover:text-[#FFF0E3]'
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
                    : 'bg-zinc-100 dark:bg-[#1D0E17] text-zinc-500 dark:text-[#B88E7D] border border-zinc-200 dark:border-[#EAD3C4]/15'
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
                        ? 'bg-[#2E0E1D] border-brand-terra text-[#FFF0E3] shadow-xl shadow-brand-terra/20 dark:bg-brand-terra dark:text-white dark:border-brand-terra'
                        : 'bg-[#FAF0E6] dark:bg-[#1D0E17] hover:bg-[#F3E2D5] dark:hover:bg-[#25121E] border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3]'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            project.deployGroup === 'custom_domain' ? 'bg-[#0E6247]' : 'bg-brand-terra'
                          }`}
                        />
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider ${
                            isSelected ? 'text-brand-terra dark:text-white font-bold' : 'text-[#7A4A38] dark:text-[#B88E7D]'
                          }`}
                        >
                          {project.categoryLabel}
                        </span>
                      </div>

                      <h4 className="font-syne font-bold text-base truncate">
                        {project.name}
                      </h4>

                      <div className="text-xs font-mono text-[#7A4A38] dark:text-[#E6D0C2] truncate flex items-center gap-1">
                        <Globe size={11} className="text-brand-terra flex-shrink-0" />
                        <span className="truncate">{project.domain}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                          project.deployGroup === 'custom_domain'
                            ? 'bg-[#E1F5EE] text-[#0E6247] dark:bg-emerald-950/40 dark:text-emerald-300 border-[#A7E3D0] dark:border-emerald-500/30'
                            : 'bg-brand-terra/10 text-brand-terra border-brand-terra/30'
                        }`}
                      >
                        {project.deployGroup === 'custom_domain' ? 'Custom' : 'Vercel'}
                      </span>
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          isSelected ? 'text-brand-terra translate-x-1 dark:text-white' : 'text-[#7A4A38] dark:text-[#B88E7D]'
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
                  className="rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-2xl overflow-hidden text-[#2E0E1D] dark:text-[#FFF0E3] flex flex-col"
                >
                  {/* Browser Window Header */}
                  <div className="px-4 py-3 bg-[#F3E2D5] dark:bg-[#25121E] border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center justify-between gap-3 text-xs font-mono select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>

                    <div className="flex-1 max-w-md px-3 py-1 rounded-lg bg-[#FFF0E3] dark:bg-[#170A13] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[11px] text-[#6C4B59] dark:text-[#E6D0C2] flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 truncate">
                        <ShieldCheck size={12} className="text-[#0E6247] dark:text-emerald-400 flex-shrink-0" />
                        <span className="truncate text-[#2E0E1D] dark:text-[#FFF0E3] font-mono">
                          {activeProject.liveUrl}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#0E6247] dark:text-emerald-400 font-mono flex-shrink-0">
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
                  <div className="relative w-full h-72 md:h-80 bg-[#1D0E17] overflow-hidden border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 group">
                    <Image
                      src={activeProject.imagePath}
                      alt={activeProject.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

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
                  <div className="p-6 md:p-8 space-y-6 bg-[#FAF0E6] dark:bg-[#1D0E17]">
                    <p className="font-dm text-[#5A3846] dark:text-[#E6D0C2] text-sm md:text-base leading-relaxed">
                      {activeProject.summary}
                    </p>

                    {activeProject.attribution && (
                      <div className="p-3.5 rounded-xl bg-brand-terra/10 border border-brand-terra/30 font-mono text-xs text-brand-terra flex items-center gap-2">
                        <ShieldCheck size={15} className="flex-shrink-0" />
                        <span>{activeProject.attribution}</span>
                      </div>
                    )}

                    {/* Key Engineering Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {activeProject.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center gap-2.5 text-xs font-dm text-[#2E0E1D] dark:text-[#FFF0E3]"
                        >
                          <CheckCircle2 size={15} className="text-brand-terra flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Matrix Tags */}
                    <div className="pt-4 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {activeProject.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg text-xs font-mono bg-[#FFF0E3] dark:bg-[#25121E] text-[#6C4B59] dark:text-[#E6D0C2] border border-[#EAD3C4] dark:border-[#EAD3C4]/15"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-[#7A4A38] dark:text-[#B88E7D]">
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
                    className={`h-full group rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 ${project.accentColor} transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-2xl hover:shadow-brand-clay/10 dark:hover:shadow-black/70`}
                  >
                    <div>
                      {/* Floating Header */}
                      <div className="px-4 py-2.5 bg-[#F3E2D5] dark:bg-[#25121E] border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center justify-between gap-2 text-xs font-mono">
                        <div className="truncate px-2.5 py-0.5 rounded bg-[#FFF0E3] dark:bg-[#1A0C15] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[11px] text-[#6C4B59] dark:text-[#E6D0C2] flex items-center gap-1">
                          <Globe size={11} className="text-brand-terra flex-shrink-0" />
                          <span className="truncate">{project.domain}</span>
                        </div>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#7A4A38] dark:text-[#E6D0C2] hover:text-brand-terra transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      {/* Screenshot Image */}
                      <div className="relative w-full h-48 bg-[#1D0E17] overflow-hidden border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                        <Image
                          src={project.imagePath}
                          alt={project.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3}
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#FFF0E3] dark:bg-[#25121E] text-[#2E0E1D] dark:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                            {project.categoryLabel}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-medium ${
                              project.deployGroup === 'custom_domain'
                                ? 'bg-[#E1F5EE] text-[#0E6247] dark:bg-emerald-950/40 dark:text-emerald-300 border-[#A7E3D0] dark:border-emerald-500/30'
                                : 'bg-brand-terra/10 text-brand-terra border-brand-terra/30'
                            }`}
                          >
                            {project.badgeText}
                          </span>
                        </div>

                        <h3 className="font-syne font-bold text-xl text-[#2E0E1D] dark:text-[#FFF0E3] group-hover:text-brand-terra transition-colors">
                          {project.name}
                        </h3>

                        <p className="font-dm font-normal text-[#5A3846] dark:text-[#E6D0C2] text-sm leading-relaxed">
                          {project.summary}
                        </p>

                        {project.attribution && (
                          <div className="pt-2 text-[11px] font-mono text-brand-terra font-medium flex items-center gap-1.5">
                            <ShieldCheck size={13} className="flex-shrink-0" />
                            <span>{project.attribution}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 pt-4 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5 flex-1">
                        {project.stack.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#FFF0E3] dark:bg-[#25121E] text-[#2E0E1D] dark:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15"
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
          <div className="mt-10 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#F3E2D5] dark:bg-[#25121E] border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center justify-between gap-4 font-mono text-xs text-[#7A4A38] dark:text-[#E6D0C2]">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-brand-terra" />
                <span>PRODUCTION_DEPLOYMENT_MATRIX.log</span>
              </div>
              <div>// Total Entries: {filteredProjects.length}</div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#FAF0E6]/80 dark:bg-[#1D0E17]/80 font-mono text-xs text-[#7A4A38] dark:text-[#E6D0C2]">
                    <th className="p-4">Deployment Domain</th>
                    <th className="p-4">Project Name</th>
                    <th className="p-4">Group</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Tech Stack</th>
                    <th className="p-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAD3C4] dark:divide-[#EAD3C4]/15 text-xs font-dm">
                  {filteredProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="hover:bg-[#F3E2D5]/50 dark:hover:bg-[#25121E] transition-colors text-[#2E0E1D] dark:text-[#FFF0E3]"
                    >
                      <td className="p-4 font-mono text-brand-terra">
                        <div className="flex items-center gap-1.5">
                          <Globe size={13} className="text-[#7A4A38] dark:text-[#E6D0C2]" />
                          <span>{project.domain}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="font-semibold text-[#2E0E1D] dark:text-[#FFF0E3]">{project.name}</div>
                        {project.attribution && (
                          <div className="text-[10px] font-mono text-brand-terra mt-0.5">
                            {project.attribution}
                          </div>
                        )}
                      </td>
                      <td className="p-4 font-mono">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            project.deployGroup === 'custom_domain'
                              ? 'bg-[#E1F5EE] text-[#0E6247] dark:bg-emerald-950/40 dark:text-emerald-300 border border-[#A7E3D0] dark:border-emerald-800/60'
                              : 'bg-brand-terra/10 text-brand-terra border border-brand-terra/30'
                          }`}
                        >
                          {project.deployGroup === 'custom_domain' ? 'Custom Domain' : 'Vercel App'}
                        </span>
                      </td>
                      <td className="p-4 text-[#6C4B59] dark:text-[#E6D0C2]">{project.categoryLabel}</td>
                      <td className="p-4 font-mono text-[#7A4A38] dark:text-[#E6D0C2]">
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
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-center shadow-sm">
            <p className="font-dm text-base text-[#2E0E1D] dark:text-[#E6D0C2] font-medium">
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
