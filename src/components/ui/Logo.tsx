'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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

  const darkSvg = (
    <svg viewBox="0 0 280 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="8" width="46" height="46" rx="23" fill="#3D1F2E" />
      <rect x="0" y="8" width="46" height="46" rx="23" fill="none" stroke="#C4522A" strokeWidth="2.5" />
      <text x="23" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="900" fill="#E8764A" textAnchor="middle">GJ</text>
      <text x="58" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" fontWeight="700" fill="#FFFFFF" letterSpacing="-0.5">Gran Jefe</text>
    </svg>
  )

  const lightSvg = (
    <svg viewBox="0 0 280 64" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="8" width="46" height="46" rx="23" fill="#FDF4EE" />
      <rect x="0" y="8" width="46" height="46" rx="23" fill="none" stroke="#C4522A" strokeWidth="2.5" />
      <text x="23" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="900" fill="#C4522A" textAnchor="middle">GJ</text>
      <text x="58" y="38" fontFamily="Arial, Helvetica, sans-serif" fontSize="26" fontWeight="700" fill="#1C1118" letterSpacing="-0.5">Gran Jefe</text>
    </svg>
  )

  return (
    <div style={{ width: dimensions.width, height: dimensions.height }}>
      {actualVariant === 'dark' ? darkSvg : lightSvg}
    </div>
  )
}
