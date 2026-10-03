'use client'

import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 350 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse/trackpad), not touch screens
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const projectCard = target.closest('[data-cursor-project]')
      const interactiveEl = target.closest('a, button, [role="button"]')

      if (projectCard) {
        setIsHovering(true)
        setCursorText('VIEW ↗')
      } else if (interactiveEl) {
        setIsHovering(true)
        setCursorText('')
      } else {
        setIsHovering(false)
        setCursorText('')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className={`pointer-events-none fixed z-50 flex items-center justify-center rounded-full transition-all duration-200 select-none ${
        cursorText
          ? 'h-20 w-20 bg-brand-terra text-white text-[11px] font-mono font-bold shadow-2xl backdrop-blur-md'
          : isHovering
          ? 'h-10 w-10 border border-brand-terra bg-brand-terra/20 backdrop-blur-xs'
          : 'h-4 w-4 bg-brand-terra/80'
      }`}
    >
      {cursorText && <span>{cursorText}</span>}
    </motion.div>
  )
}
