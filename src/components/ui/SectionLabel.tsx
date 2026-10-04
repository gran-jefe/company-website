import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono font-bold text-[11px] uppercase tracking-wider bg-[#FAF0E6] dark:bg-[#1D0E17] text-[#7A4A38] dark:text-[#E6D0C2] border border-[#EAD3C4] dark:border-[#EAD3C4]/15 shadow-xs">
      <div className="w-2 h-2 rounded-full bg-brand-terra animate-pulse flex-shrink-0" />
      {children}
    </div>
  )
}
