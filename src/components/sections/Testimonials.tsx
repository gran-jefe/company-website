'use client'

import React from 'react'
import { Quote } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  project: string
  // Placeholders render in local development only, never on the live site
  placeholder?: boolean
}

// To publish a testimonial: replace the bracketed text with the client's real words
// (with their permission) and delete `placeholder: true`.
const testimonials: Testimonial[] = [
  {
    id: 'shesandhers',
    quote: '[Client quote: 2-3 sentences on what working with Gran Jefe was like and what changed after launch.]',
    name: '[Client name]',
    role: "[Role], She's & Hers Beauty Palace",
    project: "She's & Hers storefront",
    placeholder: true,
  },
  {
    id: 'projectcatalogue',
    quote: '[Client quote: 2-3 sentences on what working with Gran Jefe was like and what changed after launch.]',
    name: '[Client name]',
    role: '[Role], Project Catalogue Limited',
    project: 'Property showcase website',
    placeholder: true,
  },
  {
    id: 'techcompass',
    quote: '[Client quote: 2-3 sentences on what working with Gran Jefe was like and what changed after launch.]',
    name: '[Client name]',
    role: '[Role], TechCompass Academy',
    project: 'UK academy website',
    placeholder: true,
  },
]

const visibleTestimonials =
  process.env.NODE_ENV === 'production' ? testimonials.filter((t) => !t.placeholder) : testimonials

export function Testimonials() {
  if (visibleTestimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-20 md:py-28 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#2E0E1D] dark:text-[#FFF0E3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection>
          <SectionLabel>Client Words</SectionLabel>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-syne font-extrabold tracking-tight">
            In their words.{' '}
            <span className="font-serif italic font-normal text-brand-terra-ink dark:text-brand-ember">Not ours.</span>
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleTestimonials.map((t, index) => (
            <AnimatedSection key={t.id} delay={index * 0.06}>
              <figure
                className={`h-full p-6 rounded-2xl bg-[#FAF0E6] dark:bg-[#1D0E17] flex flex-col justify-between gap-6 ${
                  t.placeholder
                    ? 'border-2 border-dashed border-amber-500/60'
                    : 'border border-[#EAD3C4] dark:border-[#EAD3C4]/15'
                }`}
              >
                <div className="space-y-4">
                  {t.placeholder && (
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold bg-amber-500/15 text-amber-800 dark:text-amber-300">
                      Placeholder: replace before launch
                    </span>
                  )}
                  <Quote size={22} className="text-brand-terra-ink dark:text-brand-ember" aria-hidden="true" />
                  <blockquote className="font-dm text-base leading-relaxed text-[#2E0E1D] dark:text-[#FFF0E3]">
                    {t.quote}
                  </blockquote>
                </div>

                <figcaption className="pt-4 border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15">
                  <div className="font-syne font-bold text-sm">{t.name}</div>
                  <div className="text-sm font-dm text-[#6C4B59] dark:text-[#E6D0C2]">{t.role}</div>
                  <div className="mt-1 text-xs font-mono text-[#7A4A38] dark:text-[#B88E7D]">{t.project}</div>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
