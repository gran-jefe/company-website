import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined'
  children: React.ReactNode
}

export function Button({
  variant = 'filled',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg px-6 py-3 font-dm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra focus-visible:ring-offset-2',
        variant === 'filled'
          ? 'bg-brand-terra hover:bg-brand-ember text-white'
          : 'border border-brand-terra text-brand-terra hover:bg-brand-terra hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
