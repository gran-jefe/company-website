'use client'

import Image from 'next/image'

interface LogoProps {
  variant?: 'dark' | 'light' | 'auto'
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ variant = 'auto', size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { width: 135, height: 54 },
    md: { width: 200, height: 80 },
    lg: { width: 280, height: 112 },
  }

  const dimensions = sizeMap[size]

  if (variant === 'dark') {
    return (
      <Image
        src="/logo_dark_clean.png"
        alt="Gran Jefe"
        width={dimensions.width}
        height={dimensions.height}
        style={{ objectFit: 'contain' }}
        priority
      />
    )
  }

  if (variant === 'light') {
    return (
      <Image
        src="/logo_light_clean.png"
        alt="Gran Jefe"
        width={dimensions.width}
        height={dimensions.height}
        style={{ objectFit: 'contain' }}
        priority
      />
    )
  }

  return (
    <div className="relative inline-flex items-center" style={{ width: dimensions.width, height: dimensions.height }}>
      <Image
        src="/logo_light_clean.png"
        alt="Gran Jefe"
        width={dimensions.width}
        height={dimensions.height}
        style={{ objectFit: 'contain' }}
        className="dark:hidden block"
        priority
      />
      <Image
        src="/logo_dark_clean.png"
        alt="Gran Jefe"
        width={dimensions.width}
        height={dimensions.height}
        style={{ objectFit: 'contain' }}
        className="hidden dark:block"
        priority
      />
    </div>
  )
}
