'use client'

import { useTheme } from 'next-themes'
import { useSyncExternalStore } from 'react'
import { Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const emptySubscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )

  if (!mounted) {
    return <div className="min-h-[44px] min-w-[44px] p-2.5" />
  }

  const currentTheme = resolvedTheme || theme
  const isDark = currentTheme === 'dark'

  const handleToggle = () => {
    const nextTheme = isDark ? 'light' : 'dark'
    setTheme(nextTheme)
    if (typeof document !== 'undefined') {
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    }
  }

  return (
    <button
      onClick={handleToggle}
      className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-xl text-[#7A4A38] dark:text-[#FFF0E3] hover:bg-[#EAD3C4]/40 dark:hover:bg-[#25121E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra cursor-pointer"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}
