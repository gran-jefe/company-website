import { ViewTransition } from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { InteractiveCanvas } from '@/components/ui/InteractiveCanvas'

// Shared shell for the marketing pages. Page content crossfades between routes
// while the header stays put (see the view transition rules in globals.css).
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#FFF0E3] dark:bg-[#11070D] text-[#2E0E1D] dark:text-[#FFF0E3] selection:bg-brand-terra selection:text-white transition-colors duration-300">
      <InteractiveCanvas />

      <Navbar />

      <ViewTransition default="page-fade">
        {/* Scroll margin clears the sticky header when Next scrolls a new page into view */}
        <main className="relative z-10 flex-1 [&>*]:scroll-mt-32">{children}</main>
      </ViewTransition>

      <Footer />
    </div>
  )
}
