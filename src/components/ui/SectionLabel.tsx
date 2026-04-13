import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-dm font-medium text-xs uppercase tracking-widest bg-brand-blush text-brand-clay dark:bg-brand-deep dark:text-brand-plumtext">
      <div className="w-2 h-2 rounded-full bg-brand-terra flex-shrink-0" />
      {children}
    </div>
  )
}
