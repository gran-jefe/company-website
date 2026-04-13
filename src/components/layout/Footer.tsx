'use client'

import { Logo } from '@/components/ui/Logo'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-brand-base border-t-2 border-brand-terra py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Logo variant="dark" size="sm" />
          </div>

          {/* Center: Links */}
          <div className="flex justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-brand-plumtext hover:text-brand-terra text-xs font-dm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-terra rounded"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: Copyright */}
          <div className="text-right text-xs text-brand-plumtext font-dm">
            © 2025 Gran Jefe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
