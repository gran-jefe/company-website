'use client'

import React, { useState, ViewTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  ExternalLink,
  CheckCircle2,
  Globe,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { RealProject, isLaunched, orderedProjects as allUserProjects, projectSlug } from '@/data/projects'

type ProjectFilterId = 'all' | 'fintech' | 'retail' | 'education' | 'business'

// Filters by the client's industry, which is how buyers look for relevant work
const projectFilters: { id: ProjectFilterId; label: string; categories: RealProject['category'][] }[] = [
  { id: 'all', label: 'All work', categories: [] },
  { id: 'fintech', label: 'Payments & fintech', categories: ['fintech'] },
  { id: 'retail', label: 'Brands & retail', categories: ['beauty_retail'] },
  { id: 'education', label: 'Education', categories: ['edtech'] },
  { id: 'business', label: 'Business & organisations', categories: ['saas', 'health_inst'] },
]


export function Work({ isPage = false }: { isPage?: boolean }) {
  const Heading = isPage ? 'h1' : 'h2'
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>('all')
  const [selectedProjectId, setSelectedProjectId] = useState<string>(allUserProjects[0].id)

  const currentFilter = projectFilters.find((f) => f.id === activeFilter) ?? projectFilters[0]
  const filteredProjects =
    activeFilter === 'all'
      ? allUserProjects
      : allUserProjects.filter((p) => currentFilter.categories.includes(p.category))

  // Keep the preview in sync with the visible list when the filter changes
  const activeProject =
    filteredProjects.find((p) => p.id === selectedProjectId) ?? filteredProjects[0] ?? allUserProjects[0]

  return (
    <section id="work" className="bg-transparent py-20 md:py-28 relative border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3] transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:32px_32px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <SectionLabel>Selected Work &amp; Case Studies</SectionLabel>
              <Heading className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold text-[#2E0E1D] dark:text-[#FFF0E3] tracking-tight">
                Crafted for impact.{' '}
                <span className="font-serif italic font-normal text-brand-terra-ink dark:text-brand-ember">Engineered to scale.</span>
              </Heading>
            </div>
          </div>
        </AnimatedSection>

        {/* Industry Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="mt-8 flex flex-nowrap sm:flex-wrap gap-2 pb-4 border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 swipe-row">
            {projectFilters.map((filter) => {
              const count = filter.id === 'all' ? allUserProjects.length : allUserProjects.filter((p) => filter.categories.includes(p.category)).length
              const isActive = activeFilter === filter.id
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap min-h-[40px] px-4 py-2 rounded-xl text-xs font-dm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra ${
                    isActive
                      ? 'bg-[#2E0E1D] text-[#FFF0E3] dark:bg-[#FFF0E3] dark:text-[#2E0E1D] shadow-md'
                      : 'bg-[#FAF0E6] dark:bg-[#1D0E17] text-[#6C4B59] dark:text-[#E6D0C2] hover:text-[#2E0E1D] dark:hover:text-[#FFF0E3] border border-[#EAD3C4] dark:border-[#EAD3C4]/15'
                  }`}
                >
                  {filter.label} ({count})
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* MODE 1: INTERACTIVE WORKSTATION CANVAS (DEFAULT) */}
        {filteredProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar: Interactive Project Selector List (swipeable row above the preview on phones and tablets) */}
            <div className="lg:col-span-5 flex lg:block gap-3 lg:space-y-3 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none scroll-px-4 sm:scroll-px-0 lg:max-h-[640px] lg:overflow-y-auto -mx-4 px-4 sm:mx-0 sm:px-0 lg:pr-2 pb-2 lg:pb-0 custom-scrollbar swipe-row">
              {filteredProjects.map((project) => {
                const isSelected = project.id === activeProject.id
                return (
                  <motion.button
                    key={project.id}
                    onClick={() => setSelectedProjectId(project.id)}
                    whileHover={{ x: 4 }}
                    className={`w-[82%] sm:w-[48%] lg:w-full shrink-0 snap-start text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#2E0E1D] border-brand-terra text-[#FFF0E3] shadow-xl shadow-brand-terra/20 dark:bg-brand-terra dark:text-white dark:border-brand-terra'
                        : 'bg-[#FAF0E6] dark:bg-[#1D0E17] hover:bg-[#F3E2D5] dark:hover:bg-[#25121E] border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3]'
                    }`}
                  >
                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isLaunched(project) ? 'bg-[#0E6247]' : 'bg-amber-500'}`} />
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider ${
                            isSelected ? 'text-[#FF6A3D] dark:text-white font-bold' : 'text-[#7A4A38] dark:text-[#B88E7D]'
                          }`}
                        >
                          {project.categoryLabel}
                        </span>
                        {project.founderRole && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                              isSelected ? 'border-white/30 text-[#EAD3C4] dark:text-white/85' : 'border-[#EAD3C4] dark:border-[#EAD3C4]/20 text-[#7A4A38] dark:text-[#B88E7D]'
                            }`}
                          >
                            Founder experience
                          </span>
                        )}
                        {!isLaunched(project) && (
                          <span
                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                              isSelected ? 'border-white/30 text-[#EAD3C4] dark:text-white/85' : 'border-amber-500/40 text-amber-800 dark:text-amber-300'
                            }`}
                          >
                            Preview
                          </span>
                        )}
                      </div>

                      <h4 className="font-syne font-bold text-base truncate">
                        {project.name}
                      </h4>

                      <div className={`text-xs font-mono truncate flex items-center gap-1 ${isSelected ? 'text-[#EAD3C4] dark:text-white/85' : 'text-[#7A4A38] dark:text-[#E6D0C2]'}`}>
                        <Globe size={11} className={`flex-shrink-0 ${isSelected ? 'text-[#FF6A3D] dark:text-white' : 'text-brand-terra-ink'}`} />
                        <span className="truncate">{project.domain}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          isSelected ? 'text-brand-terra-ink translate-x-1 dark:text-white' : 'text-[#7A4A38] dark:text-[#B88E7D]'
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
                      <span className={`text-[10px] font-mono flex-shrink-0 ${isLaunched(activeProject) ? 'text-[#0E6247] dark:text-emerald-400' : 'text-amber-800 dark:text-amber-300'}`}>
                        {isLaunched(activeProject) ? 'Live site' : 'Preview link'}
                      </span>
                    </div>

                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-brand-terra hover:bg-[#B82A00] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                      title={isLaunched(activeProject) ? 'Open live website' : 'Open preview build'}
                    >
                      <span>{isLaunched(activeProject) ? 'Visit Site' : 'Open Preview'}</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>

                  {/* Live Screenshot Viewport */}
                  <div className="relative w-full h-72 md:h-80 bg-[#1D0E17] overflow-hidden border-b border-[#EAD3C4] dark:border-[#EAD3C4]/15 group">
                    <ViewTransition name={`project-${activeProject.id}`} share="project-morph">
                      <Image
                        src={activeProject.imagePath}
                        alt={activeProject.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        unoptimized
                      />
                    </ViewTransition>
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

                  {/* Project Details */}
                  <div className="p-6 md:p-8 space-y-6 bg-[#FAF0E6] dark:bg-[#1D0E17]">
                    <p className="font-dm text-[#5A3846] dark:text-[#E6D0C2] text-sm md:text-base leading-relaxed">
                      {activeProject.summary}
                    </p>

                    {activeProject.founderRole && (
                      <div className="p-3.5 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 font-dm text-sm text-[#5A3846] dark:text-[#E6D0C2] flex items-start gap-2.5 leading-relaxed">
                        <ShieldCheck size={16} className="flex-shrink-0 mt-0.5 text-brand-terra-ink" />
                        <span>
                          <strong className="text-[#2E0E1D] dark:text-[#FFF0E3]">Founder experience.</strong> Built by Adeleke Sherifdeen as {activeProject.founderRole} at Mabilla Group. Shown to illustrate payments expertise, not as a Gran Jefe client project.
                        </span>
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {activeProject.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-[#FFF0E3] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 flex items-center gap-2.5 text-xs font-dm text-[#2E0E1D] dark:text-[#FFF0E3]"
                        >
                          <CheckCircle2 size={15} className="text-brand-terra-ink flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/work/${projectSlug(activeProject)}`}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-brand-terra/40 px-4 font-dm text-sm font-semibold text-brand-terra-ink hover:bg-brand-terra/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
                    >
                      <span>Read the case study</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>

                    {/* Built With */}
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
                        <CheckCircle2 size={14} className={isLaunched(activeProject) ? 'text-[#0E6247] dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'} />
                        <span>{isLaunched(activeProject) ? 'Live and in use' : 'Built and running on a preview link, not yet launched on its own domain'}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Empty State Fallback (Non-Negotiable 4: High-Intent Empty States) */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-brand-terra/10 border border-brand-terra/20 flex items-center justify-center text-brand-terra-ink">
              <Sparkles size={22} />
            </div>
            <h3 className="text-lg font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3]">
              No projects in this category yet
            </h3>
            <p className="text-xs sm:text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed">
              We haven&rsquo;t published work in this category yet. Browse everything we&rsquo;ve shipped, or tell us about your project.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-terra hover:bg-[#B82A00] text-white font-dm text-xs font-semibold transition-all cursor-pointer min-h-[44px]"
            >
              <span>Show all work</span>
            </button>
          </div>
        )}

        {/* Bottom Call to Action */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-center shadow-sm">
            <p className="font-dm text-base text-[#2E0E1D] dark:text-[#E6D0C2] font-medium">
              Have a project like these in mind?{' '}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-brand-terra-ink font-semibold hover:text-[#9A2400] dark:hover:text-brand-ember transition-colors underline underline-offset-4 ml-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
              >
                <span>Tell us about it</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
