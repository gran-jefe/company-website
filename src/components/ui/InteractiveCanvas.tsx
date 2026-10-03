'use client'

import React, { useEffect, useRef } from 'react'

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    let mouseX = width / 2
    let mouseY = height / 3
    let targetX = mouseX
    let targetY = mouseY

    // Particle nodes for ambient depth
    const particleCount = Math.min(Math.floor(width / 32), 45)
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.6 + 0.8,
      alpha: Math.random() * 0.35 + 0.15,
    }))

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      // Smooth interpolation for mouse aura
      mouseX += (targetX - mouseX) * 0.05
      mouseY += (targetY - mouseY) * 0.05

      ctx.clearRect(0, 0, width, height)

      // Ambient radial gradient following mouse (Cerebrium glow)
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width * 0.4, 400))
      gradient.addColorStop(0, 'rgba(226, 85, 43, 0.08)') // Warm terracotta
      gradient.addColorStop(0.45, 'rgba(10, 10, 14, 0.03)')
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Subtle particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // Distance to cursor
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const maxDist = 200

        let extraAlpha = 0
        if (dist < maxDist) {
          extraAlpha = (1 - dist / maxDist) * 0.35
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240, 235, 227, ${p.alpha + extraAlpha})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70 transition-opacity duration-1000"
      aria-hidden="true"
    />
  )
}
