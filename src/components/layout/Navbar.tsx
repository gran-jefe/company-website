'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/studio' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      // Keeps the header still while page content crossfades between routes
      style={{ viewTransitionName: 'site-header' }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FFF0E3]/90 dark:bg-[#11070D]/90 backdrop-blur-xl border-b border-[#EAD3C4]/80 dark:border-[#EAD3C4]/15 shadow-xs'
          : 'bg-[#FFF0E3]/75 dark:bg-[#11070D]/75 backdrop-blur-md border-b border-[#EAD3C4]/40 dark:border-[#EAD3C4]/10'
      }`}
    >
      <nav aria-label="Main" className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
            aria-label="Gran Jefe home"
          >
            <Logo variant="auto" size="sm" />
          </Link>

          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-[#EAD3C4] dark:border-[#EAD3C4]/20 text-xs font-mono text-[#7A4A38] dark:text-[#C4A0B8]">
            <span>STUDIO</span>
            <span className="text-[#C4A0B8] dark:text-[#7A4A38]">/</span>
            <span className="text-[#2E0E1D] dark:text-[#FFF0E3] font-semibold">REMOTE, WORLDWIDE</span>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`font-dm text-sm tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded ${
                  active
                    ? 'text-brand-terra-ink font-semibold dark:text-brand-ember'
                    : 'text-[#6C4B59] dark:text-[#E6D0C2] hover:text-brand-terra-ink dark:hover:text-[#FFF0E3]'
                }`}
              >
                {item.label}
                {active && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-terra rounded-full" aria-hidden="true" />}
              </Link>
            )
          })}
        </div>

        {/* Right Actions: Theme + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1 rounded-lg bg-brand-terra hover:bg-[#B82A00] text-white text-xs py-2 px-4 min-h-[44px] font-dm font-semibold group shadow-md shadow-brand-terra/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          {/* Mobile menu trigger (Minimum 44x44px tap target) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 text-[#2E0E1D] dark:text-[#FFF0E3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded-xl cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#EAD3C4] dark:border-[#EAD3C4]/15 bg-[#FFF0E3]/98 dark:bg-[#11070D]/98 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`min-h-[44px] flex items-center w-full text-left py-2.5 font-syne text-lg font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded ${
                    isActive(item.href) ? 'text-brand-terra-ink dark:text-brand-ember' : 'text-[#2E0E1D] dark:text-[#FFF0E3] hover:text-brand-terra-ink dark:hover:text-brand-ember'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand-terra hover:bg-[#B82A00] text-white font-dm font-semibold transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
