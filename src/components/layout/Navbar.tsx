'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Studio', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs'
          : 'bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
            aria-label="Gran Jefe Home"
          >
            <Logo variant="auto" size="sm" />
          </button>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
            <span>STUDIO</span>
            <span className="text-zinc-400">/</span>
            <span className="text-zinc-800 dark:text-zinc-200 font-semibold">IBADAN &amp; LONDON</span>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-dm text-sm tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded ${
                  isActive
                    ? 'text-brand-terra font-semibold dark:text-brand-ember'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-brand-terra dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-terra rounded-full"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Right Actions: CAC Verified Tag + Theme + CTA */}
        <div className="flex items-center gap-3">
          {/* CAC Official Registered Pill */}
          <div
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-[11px] font-mono text-emerald-800 dark:text-emerald-300"
            title="Officially registered with the Corporate Affairs Commission (Federal Republic of Nigeria)"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold">CAC BN: 9529101</span>
          </div>

          <ThemeToggle />

          <Button
            variant="filled"
            onClick={() => handleNavClick('#contact')}
            className="hidden md:inline-flex text-xs py-2 px-4 font-dm font-semibold group shadow-md shadow-brand-terra/20"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-800 dark:text-white focus-visible:outline-none rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-4 max-w-7xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-xs font-mono text-emerald-800 dark:text-emerald-300 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Entity: CAC BN 9529101</span>
              </div>

              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left py-2 font-syne text-lg font-bold text-zinc-900 dark:text-white hover:text-brand-terra dark:hover:text-brand-ember transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <Button variant="filled" onClick={() => handleNavClick('#contact')} className="w-full mt-4 py-3">
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
