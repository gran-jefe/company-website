'use client'

import { useEffect, useRef } from 'react'

interface DemoTrackerProps {
  target: string
  targetName: string
}

export function DemoTracker({ target, targetName }: DemoTrackerProps) {
  const hasPinged = useRef(false)

  useEffect(() => {
    if (hasPinged.current) return
    hasPinged.current = true

    // Fire-and-forget visitor beacon
    try {
      fetch('/api/demo-ping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target,
          targetName,
          event: 'page_view',
        }),
      }).catch(() => {
        // Silent failure so user experience is never blocked
      })
    } catch {
      // Ignored
    }
  }, [target, targetName])

  return null
}
