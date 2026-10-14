'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Compass,
  FileText
} from 'lucide-react'

const STORAGE_KEY = 'granjefe_curriculum_popup_dismissed_until'
const DISMISS_DAYS = 7

export function CurriculumPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    // Check localStorage for dismissal
    try {
      const dismissedUntil = localStorage.getItem(STORAGE_KEY)
      if (dismissedUntil && new Date().getTime() < parseInt(dismissedUntil, 10)) {
        setIsMinimized(true)
        return
      }
    } catch {
      // Ignore storage errors in private browsing
    }

    // Delay appearance so initial viewport loads with zero distraction
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2400)

    return () => clearTimeout(timer)
  }, [])

  // Listen for Escape key to close popup (Accessibility Non-Negotiable)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleDismiss()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const handleDismiss = () => {
    setIsOpen(false)
    setIsMinimized(true)
    try {
      const expiry = new Date().getTime() + DISMISS_DAYS * 24 * 60 * 60 * 1000
      localStorage.setItem(STORAGE_KEY, expiry.toString())
    } catch {
      // Ignore storage errors
    }
  }

  const handleReopen = () => {
    setIsMinimized(false)
    setIsOpen(true)
  }

  return (
    <>
      {/* Minimized Floating Discovery Trigger (Non-Negotiable 5: User Agency & Reversibility) */}
      <AnimatePresence>
        {isMinimized && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-5 right-5 z-40"
          >
            <button
              onClick={handleReopen}
              aria-label="Open Curriculum & Learning Hub Quick Guide"
              className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-brand-terra hover:bg-brand-ember text-white shadow-xl shadow-brand-terra/30 border border-white/20 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2 cursor-pointer"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400" />
              </span>
              <BookOpen size={16} />
              <span className="text-xs font-dm font-semibold">9 Free Curriculums</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Notification Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="region"
            aria-label="Gran Jefe Learning Hub Announcement"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm sm:max-w-md w-[calc(100vw-2rem)] sm:w-full"
          >
            <div className="relative overflow-hidden rounded-2xl bg-[#FFF0E3]/95 dark:bg-[#160B12]/95 backdrop-blur-xl border border-brand-terra/30 dark:border-brand-terra/20 shadow-2xl shadow-brand-clay/20 dark:shadow-black/80 text-[#2E0E1D] dark:text-[#FFF0E3] p-5 sm:p-6 transition-colors">
              {/* Top Ambient Glow Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-brand-terra to-purple-500" />

              {/* Close Button (Strict 44x44px accessible touch target) */}
              <button
                onClick={handleDismiss}
                aria-label="Close learning hub announcement"
                className="absolute top-2.5 right-2.5 min-h-[44px] min-w-[44px] w-11 h-11 flex items-center justify-center rounded-xl text-[#7A4A38] dark:text-[#B88E7D] hover:text-[#2E0E1D] dark:hover:text-white hover:bg-[#EAD3C4]/40 dark:hover:bg-[#25121E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="pr-6 space-y-3">
                {/* Header Tag */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-terra text-white shadow-xs">
                    <Sparkles size={11} className="text-amber-300" /> Open Learning Hub
                  </span>
                  <span className="text-[11px] font-mono text-[#7A4A38] dark:text-[#B88E7D]">
                    100% Free
                  </span>
                </div>

                {/* Main Pitch */}
                <div>
                  <h3 className="text-base sm:text-lg font-syne font-bold text-[#2E0E1D] dark:text-[#FFF0E3] leading-snug">
                    Level Up with 9 Production Curriculums &amp; UI/UX Playbook
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-dm text-[#5A3846] dark:text-[#E6D0C2] leading-relaxed">
                    Battle-tested roadmaps bridging tutorial theory to real enterprise systems: Python/Django, Node.js, Fintech Ledgers, React Native, AI Agents, PM, HR, plus accredited Coursera certifications.
                  </p>
                </div>

                {/* Track Highlights Pill Grid */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#7A4A38] dark:text-[#E6D0C2]">
                    Python &bull; Django 5
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#7A4A38] dark:text-[#E6D0C2]">
                    Node.js &bull; NestJS
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#7A4A38] dark:text-[#E6D0C2]">
                    Fintech Ledgers
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#7A4A38] dark:text-[#E6D0C2]">
                    React Native
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF0E6] dark:bg-[#25121E] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#7A4A38] dark:text-[#E6D0C2]">
                    Product &bull; HR
                  </span>
                </div>

                {/* Quality Standard Note */}
                <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-dm text-amber-900 dark:text-amber-300">
                    <FileText size={14} className="text-amber-600 dark:text-amber-400 shrink-0" />
                    <span>Includes 12 UI/UX Non-Negotiables Playbook</span>
                  </div>
                  <Link
                    href="/standards/ui-ux-playbook"
                    onClick={handleDismiss}
                    className="text-[11px] font-semibold text-brand-terra dark:text-amber-300 hover:underline shrink-0 flex items-center gap-0.5"
                  >
                    <span>Read</span>
                    <ArrowRight size={11} />
                  </Link>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Link
                    href="/curriculum"
                    onClick={handleDismiss}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-brand-terra hover:bg-brand-ember text-white font-dm font-semibold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-brand-terra/20 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra text-center"
                  >
                    <span>Explore All 9 Tracks</span>
                    <ArrowRight size={13} />
                  </Link>

                  <button
                    onClick={handleDismiss}
                    className="py-2.5 px-3.5 rounded-xl bg-[#FAF0E6] dark:bg-[#25121E] hover:bg-[#F3E2D5] dark:hover:bg-[#301726] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 text-[#7A4A38] dark:text-[#E6D0C2] font-dm text-xs transition-colors cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
