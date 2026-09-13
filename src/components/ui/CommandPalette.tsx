'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Terminal, Code, Cpu, User, Mail, Moon, Sun, ArrowRight, X } from 'lucide-react'
import { useTheme } from 'next-themes'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const { theme, setTheme } = useTheme()
  const [copied, setCopied] = useState(false)

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // Open handled by parent or state
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const items = [
    {
      id: 'services',
      title: 'Services & Capabilities',
      subtitle: 'Mobile, Web, Distributed Backends, Fintech',
      icon: <Cpu size={18} className="text-brand-terra" />,
      action: () => scrollToSection('#services'),
    },
    {
      id: 'stack',
      title: 'Tech Stack Matrix',
      subtitle: 'React, Next.js, React Native, Node.js, Python',
      icon: <Code size={18} className="text-emerald-500" />,
      action: () => scrollToSection('#stack'),
    },
    {
      id: 'work',
      title: 'Shipped Engineering Work',
      subtitle: 'Explore case studies, mobile wallets & SaaS platforms',
      icon: <Terminal size={18} className="text-dev-cyan" />,
      action: () => scrollToSection('#work'),
    },
    {
      id: 'about',
      title: 'About Gran Jefe Studio',
      subtitle: 'Engineering background & technical philosophy',
      icon: <User size={18} className="text-purple-500" />,
      action: () => scrollToSection('#about'),
    },
    {
      id: 'contact',
      title: 'Start a Project',
      subtitle: 'Reach out to collaborate or send a spec',
      icon: <Mail size={18} className="text-amber-500" />,
      action: () => scrollToSection('#contact'),
    },
    {
      id: 'toggle-theme',
      title: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
      subtitle: 'Toggle global website color scheme',
      icon: theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-indigo-400" />,
      action: () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        onClose()
      },
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied!' : 'Copy Direct Email Address',
      subtitle: 'granjefetech@gmail.com',
      icon: <Mail size={18} className="text-brand-terra" />,
      action: () => {
        navigator.clipboard.writeText('granjefetech@gmail.com')
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
          onClose()
        }, 1200)
      },
    },
  ]

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    onClose()
  }

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-28 px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/50">
              <Search size={18} className="text-zinc-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent font-dm text-sm text-zinc-900 dark:text-white outline-none placeholder:text-zinc-400"
                autoFocus
              />
              <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded">
                ESC
              </kbd>
              <button
                onClick={onClose}
                className="p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-white rounded"
              >
                <X size={16} />
              </button>
            </div>

            {/* Command Results */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-sm font-dm text-zinc-500">
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full text-left p-3 rounded-lg flex items-center justify-between hover:bg-brand-terra/10 dark:hover:bg-zinc-800 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 group-hover:bg-white dark:group-hover:bg-zinc-700 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-dm font-medium text-sm text-zinc-900 dark:text-white">
                          {item.title}
                        </div>
                        <div className="font-dm text-xs text-zinc-500 dark:text-zinc-400">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-zinc-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                    />
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 bg-zinc-100/50 dark:bg-zinc-950/50 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Gran Jefe Developer Palette</span>
              <span>
                Use <kbd className="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-800 rounded">⌘K</kbd> anytime
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
