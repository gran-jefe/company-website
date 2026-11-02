'use client'

import React, { ViewTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { orderedProjects, projectData, projectSlug } from '@/data/projects'

// Studio client work not already shown in the hero showcase
const FEATURED_IDS = ['graffytea', 'romanseries', 'techcompass']
const featured = FEATURED_IDS.map((id) => projectData.find((p) => p.id === id)).filter((p) => p !== undefined)

export function FeaturedWork() {
  return (
    <section className="py-16 md:py-24 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>Recent Work</SectionLabel>
              <h2 className="mt-4 text-3xl sm:text-4xl font-syne font-extrabold tracking-tight">
                Shipped for real businesses.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex min-h-[44px] items-center gap-2 font-dm text-sm font-semibold text-brand-terra-ink dark:text-brand-ember hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
            >
              See all {orderedProjects.length} projects
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </AnimatedSection>

        {/* Swipeable row on phones, three columns from tablet up */}
        <div className="mt-8 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 swipe-row md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {featured.map((project) => (
            <Link
              key={project.id}
              href={`/work/${projectSlug(project)}`}
              className="group w-[82%] shrink-0 snap-start md:w-auto rounded-[20px] overflow-hidden border border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#FAF0E6] dark:bg-[#1D0E17] transition-colors hover:border-brand-terra/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
            >
              <div className="relative aspect-[4/3] bg-[#1D0E17] overflow-hidden">
                <ViewTransition name={`project-${project.id}`} share="project-morph">
                  <Image
                    src={project.imagePath}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 82vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </ViewTransition>
              </div>
              <div className="p-5">
                <p className="text-xs font-mono font-semibold text-[#7A4A38] dark:text-[#B88E7D]">{project.categoryLabel}</p>
                <h3 className="mt-1 font-syne font-bold text-lg leading-snug">{project.name}</h3>
                <p className="mt-2 font-dm text-sm text-[#6C4B59] dark:text-[#E6D0C2] leading-relaxed line-clamp-2">{project.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-dm text-sm font-semibold text-brand-terra-ink dark:text-brand-ember">
                  Read the case study
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
