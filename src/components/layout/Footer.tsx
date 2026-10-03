'use client'

import React from 'react'
import { Logo } from '@/components/ui/Logo'
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-white pt-16 pb-12 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-terra/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        {/* Top Call to Action Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-zinc-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-terra">
              // LET'S COLLABORATE
            </span>
            <h2 className="text-3xl sm:text-5xl font-syne font-extrabold text-white tracking-tight leading-tight">
              Let's engineer something{' '}
              <span className="font-serif italic font-normal text-brand-terra">impossible</span> to ignore.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="py-3.5 px-7 rounded-xl bg-brand-terra hover:bg-brand-ember text-white font-dm font-semibold text-sm flex items-center gap-2 shadow-lg shadow-brand-terra/20 transition-all hover:scale-[1.02]"
            >
              <span>Start a Project</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href="https://wa.me/2349061770885"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 font-dm font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight size={14} className="text-emerald-400" />
            </a>
          </div>
        </div>

        {/* Middle Navigation & Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Narrative (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="dark" size="sm" />
            <p className="font-dm text-sm text-zinc-400 max-w-sm leading-relaxed">
              Gran Jefe is an independent digital product and creative engineering studio building high-performance web platforms, sovereign payment engines, and mobile applications.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
              <ShieldCheck size={13} />
              <span>Certified CAC Entity: BN 9529101</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">Navigation</h4>
            <div className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-dm text-zinc-400 hover:text-brand-terra transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Channels (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">Direct Inquiries</h4>
            <div className="space-y-2 text-sm font-dm text-zinc-400">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-terra flex-shrink-0" />
                <a href="mailto:granjefetech@gmail.com" className="hover:text-white transition-colors">
                  granjefetech@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                <a href="tel:+2349061770885" className="hover:text-white transition-colors">
                  +234 906 177 0885
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-500 pt-1">
                <MapPin size={14} className="text-zinc-400 flex-shrink-0" />
                <span>Ibadan &amp; Abuja, Nigeria • Operating Globally</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Registry Attribution */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm text-zinc-300">
          <div>
            © 2026 <strong className="text-zinc-200">GRAN JEFE SOLUTIONS</strong> (CAC Registration: BN 9529101). All rights reserved.
          </div>
          <div className="text-zinc-400 font-mono text-[11px]">
            Founder &amp; Principal Engineer: Adeleke Sherifdeen
          </div>
        </div>
      </div>
    </footer>
  )
}
