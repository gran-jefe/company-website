'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Button } from '@/components/ui/Button'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    const observerOptions = {
      threshold: 0.5,
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
      className={`sticky top-0 z-50 bg-white dark:bg-brand-base border-b border-brand-blush dark:border-brand-deep transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
        >
          <Logo variant="auto" size="sm" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`font-dm font-medium text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded ${
                activeSection === item.href.slice(1)
                  ? 'text-brand-terra underline'
                  : 'text-brand-clay dark:text-brand-plumtext hover:text-brand-terra'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side: Theme toggle + CTA button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="filled"
            onClick={() => handleNavClick('#contact')}
            className="hidden md:inline-block"
          >
            Start a project
          </Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-clay dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
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
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-brand-blush dark:border-brand-deep bg-white dark:bg-brand-deep"
          >
            <div className="px-4 py-4 space-y-3 max-w-7xl mx-auto">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 font-dm font-medium text-brand-clay dark:text-brand-plumtext hover:text-brand-terra rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra"
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
  )
}
