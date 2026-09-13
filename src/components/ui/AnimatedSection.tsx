'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedSection({ children, delay = 0, className = '' }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
