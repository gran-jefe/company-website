'use client'

import { ChangeEvent, useState } from 'react'

interface NumberFieldOptions {
  min: number
  max: number
  label: string
  format?: (n: number) => string
}

// Keeps the raw text the visitor typed (never wiped on error) and exposes the
// last valid number so live calculations stay stable while they edit.
export function useNumberField(initial: number, { min, max, label, format = String }: NumberFieldOptions) {
  const [raw, setRaw] = useState(String(initial))
  const [value, setValue] = useState(initial)

  const validate = (text: string): string | null => {
    if (text.trim() === '') return `Enter ${label}`
    const n = Number(text.replace(/[,\s]/g, ''))
    if (!Number.isFinite(n)) return 'Use numbers only'
    if (n < min) return `Minimum is ${format(min)}`
    if (n > max) return `Maximum is ${format(max)}`
    return null
  }

  const error = validate(raw)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setRaw(text)
    if (!validate(text)) setValue(Number(text.replace(/[,\s]/g, '')))
  }

  const set = (n: number) => {
    setRaw(String(n))
    setValue(n)
  }

  return { raw, value, error, onChange, set }
}
