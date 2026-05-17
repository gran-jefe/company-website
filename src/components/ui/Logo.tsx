'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light' | 'auto'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant = 'auto', size = 'md' }: LogoProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  let actualVariant = variant
  if (variant === 'auto') {
    actualVariant = theme === 'dark' ? 'dark' : 'light'
  }

  const sizeMap = {
    sm: { width: 140, height: 32 },
    md: { width: 280, height: 64 },
    lg: { width: 420, height: 96 },
  }

  const dimensions = sizeMap[size]

  if (!mounted) {
    return <div style={{ width: dimensions.width, height: dimensions.height }} />
  }

  return (
    <Image
      src={actualVariant === 'dark' ? '/Logo_one.jpeg' : '/Logo_two.jpeg'}
      alt="Gran Jefe"
      width={dimensions.width}
      height={dimensions.height}
      style={{ objectFit: 'contain' }}
    />
  )
}
