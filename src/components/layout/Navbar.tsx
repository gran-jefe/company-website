'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command, Search } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'
import { CommandPalette } from '@/components/ui/CommandPalette'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [paletteOpen, setPaletteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
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
    <>
      <header
        className={`sticky top-0 z-40 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-300 ${
          scrolled ? 'shadow-lg shadow-black/5' : ''
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between gap-4">
          {/* Logo & System Status Badge */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
            >
              <Logo variant="auto" size="sm" />
            </button>

            {/* System Status Pill */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>System Operational • 99.9% Uptime</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`font-dm text-sm tracking-wide transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded ${
                    isActive
                      ? 'text-brand-terra font-semibold dark:text-brand-ember'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-brand-terra dark:hover:text-white'
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

          {/* Right Actions: Command Palette Button + Theme Toggle + Start Project CTA */}
          <div className="flex items-center gap-3">
            {/* Command Palette trigger */}
            <button
              onClick={() => setPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 transition-colors"
              title="Open Command Palette (⌘K)"
            >
              <Search size={14} className="text-brand-terra" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-[10px]">
                <Command size={10} />K
              </kbd>
            </button>

            <ThemeToggle />

            <Button
              variant="filled"
              onClick={() => handleNavClick('#contact')}
              className="hidden md:inline-flex text-xs py-2 px-4 font-mono font-medium"
            >
              Start a project
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-zinc-700 dark:text-white focus-visible:outline-none rounded"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-3 max-w-7xl mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-zinc-100 dark:border-zinc-900 text-xs font-mono text-emerald-500">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    All Systems Operational
                  </span>
                  <span>v2.4.0</span>
                </div>

                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 font-dm text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-brand-terra dark:hover:text-white rounded transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Button variant="filled" onClick={() => handleNavClick('#contact')} className="w-full">
                  Start a project
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  )
}
