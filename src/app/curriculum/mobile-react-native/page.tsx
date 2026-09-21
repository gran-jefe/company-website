import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  ExternalLink, 
  Code2, 
  Smartphone, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShieldCheck, 
  WifiOff, 
  Fingerprint, 
  Cpu
} from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Logo } from '@/components/ui/Logo'
import { CurriculumLeadCapture } from '@/components/curriculum/CurriculumLeadCapture'

export const metadata: Metadata = {
  title: 'Mobile Engineering Curriculum (React Native & Expo) | Gran Jefe Learning Hub',
  description: 'A production-grade mobile engineering roadmap from web concepts to cross-platform iOS and Android apps with React Native, Expo Router, offline caching, and biometric auth.',
}

export default function MobileCurriculumPage() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-base text-brand-base dark:text-white selection:bg-brand-terra selection:text-white transition-colors duration-300 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#curriculum"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-dm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-brand-terra dark:hover:text-brand-ember transition-colors py-1.5 px-2.5 sm:px-3 rounded-lg bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
            >
              <ArrowLeft size={14} />
              <span>Back to Curriculums</span>
            </Link>
            <div className="hidden sm:block h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
            <Link href="/" className="hidden sm:block">
              <Logo variant="auto" size="sm" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <Smartphone size={13} className="text-emerald-500" /> iOS &amp; Android Native
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Hero */}
        <div className="space-y-5 border-b border-zinc-200 dark:border-zinc-800 pb-10 mb-12">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
              <Smartphone size={14} /> Mobile Engineering Track
            </div>
            <span className="text-xs font-mono text-zinc-500">Track 04</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
            Mobile Engineering Curriculum with React Native &amp; Expo
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
            Leverage your existing React &amp; TypeScript skills to build, publish, and scale production-grade cross-platform mobile apps for iOS and Android.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <Zap size={18} /> Zero Objective-C / Swift Barrier
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Modern Expo Application Services (EAS) and Expo Prebuild allow you to write 100% TypeScript while accessing native camera, secure hardware storage, and push notification modules.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-brand-terra dark:text-brand-ember font-bold text-sm">
                <WifiOff size={18} /> Real Offline-First UX
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-dm">
                Unlike web browsers with persistent network connections, mobile engineering requires handling dead zones, background app refreshes, MMKV local key-value caches, and local SQLite data sync.
              </p>
            </div>
          </div>
        </div>

        {/* Mental Model Translation */}
        <section className="mb-14">
          <div className="flex items-center gap-2.5 mb-2">
            <Layers className="text-emerald-500" size={22} />
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Web React vs. React Native Mental Model
            </h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-dm">
            Quickly translate your browser DOM instincts into native mobile primitives:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs bg-white dark:bg-zinc-900">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-bold font-mono">
                  <th className="p-4">Web React Component</th>
                  <th className="p-4">React Native Equivalent</th>
                  <th className="p-4">Mobile Specific Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300 font-dm">
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs"><code>&lt;div&gt;</code></td>
                  <td className="p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400"><code>&lt;View&gt;</code></td>
                  <td className="p-4">Defaults to <code>flex-direction: column</code> instead of row/block.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs"><code>&lt;p&gt;</code> / <code>&lt;span&gt;</code></td>
                  <td className="p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400"><code>&lt;Text&gt;</code></td>
                  <td className="p-4">All raw strings MUST be enclosed inside <code>&lt;Text&gt;</code> or the app crashes.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs"><code>&lt;button&gt;</code> / <code>&lt;a&gt;</code></td>
                  <td className="p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400"><code>&lt;Pressable&gt;</code></td>
                  <td className="p-4">Provides haptic feedback hooks, hit slop touch expansion, and ripple states.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs"><code>overflow-y: scroll</code></td>
                  <td className="p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400"><code>&lt;FlatList&gt;</code> / <code>FlashList</code></td>
                  <td className="p-4">Virtualizes views off-screen to preserve limited mobile RAM during long feeds.</td>
                </tr>
                <tr className="hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40">
                  <td className="p-4 font-mono text-xs"><code>localStorage</code></td>
                  <td className="p-4 font-mono text-xs text-emerald-600 dark:text-emerald-400"><code>expo-secure-store</code> / MMKV</td>
                  <td className="p-4">Secure Store encrypts auth tokens inside iOS Keychain &amp; Android Keystore.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Phase 1: Native Primitives */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Phase 1
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Expo Core &amp; Native Mobile Primitives
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 2 to 3 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Set up a modern Expo development environment, learn file-based routing with Expo Router, and master touch and layout primitives.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Modern Expo Setup:</strong> Initializing projects with <code>create-expo-app</code>, Expo Go vs. Custom Development Builds (<code>npx expo run:ios</code> / <code>android</code>).</li>
              <li><strong>Expo Router v4:</strong> File-based routing (tabs, stacks, modal presentations) mirroring Next.js conventions.</li>
              <li><strong>Styling with NativeWind:</strong> Writing Tailwind CSS in React Native with <code>nativewind</code> v4.</li>
              <li><strong>Safe Area &amp; Notches:</strong> <code>react-native-safe-area-context</code> handling dynamic island, notches, and software keyboard avoidance.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <BookOpen size={14} className="text-emerald-500" /> High-Yield Reading
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://docs.expo.dev/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Expo Official Documentation <ExternalLink size={11} /></a></li>
                <li><a href="https://docs.expo.dev/router/introduction/" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Expo Router Guide <ExternalLink size={11} /></a></li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono flex items-center gap-1.5">
                <Code2 size={14} className="text-emerald-500" /> Video Tutorials
              </h4>
              <ul className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1.5">
                <li><a href="https://www.youtube.com/watch?v=0-S5a0eXPoc" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">freeCodeCamp: React Native Mobile Course <ExternalLink size={11} /></a></li>
                <li><a href="https://www.youtube.com/watch?v=kLH_gR_UfTI" target="_blank" rel="noopener noreferrer" className="text-brand-terra hover:underline inline-flex items-center gap-1">Simon Grimm: Expo Router Crash Course <ExternalLink size={11} /></a></li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a cross-platform Expense Tracker mobile app with Stack &amp; Bottom Tab navigation, category filtering, and customized NativeWind styling that respects iOS and Android system notches.
          </div>
        </section>

        {/* Phase 2: Native Features & Hardware */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                Phase 2
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Hardware APIs, Biometrics &amp; Secure Storage
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Connect to device hardware capabilities: FaceID/fingerprint scanning, hardware camera for QR scanning, and push notifications.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>Biometric Authentication:</strong> <code>expo-local-authentication</code> for FaceID / TouchID / Fingerprint lock gates.</li>
              <li><strong>Keychain Security:</strong> Storing JWTs and sensitive user secrets inside <code>expo-secure-store</code>.</li>
              <li><strong>Camera &amp; QR Scanning:</strong> <code>expo-camera</code> and BarCode scanner integration for QR payment codes.</li>
              <li><strong>Push Notifications:</strong> Setting up Expo Push Tokens and handling background notification taps.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs sm:text-sm text-emerald-900 dark:text-emerald-300">
            <strong>Checkmark Project:</strong> Build a Biometric Secure Authenticator app that requires FaceID/fingerprint unlock, reads QR codes to authorize mock logins, and stores session tokens inside device Keychain storage.
          </div>
        </section>

        {/* Phase 3: Performance, Lists & Publishing */}
        <section className="mb-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                Phase 3
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                Performance, Offline Sync &amp; App Store Deployment
              </h2>
            </div>
            <span className="text-xs font-mono font-medium text-zinc-500">Timeline: 3 to 4 Weeks</span>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-dm leading-relaxed">
            <strong>Goal:</strong> Optimize memory, handle offline queues, build production binaries with EAS Build, and submit to Apple TestFlight and Google Play Console.
          </p>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-200 font-mono">
              Core Skills to Master
            </h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400 list-disc pl-5 font-dm">
              <li><strong>High-Speed Lists:</strong> Replacing FlatList with Shopify&apos;s <code>@shopify/flash-list</code> to eliminate frame drops and stuttering.</li>
              <li><strong>Offline Data Sync:</strong> TanStack Query paired with <code>react-native-mmkv</code> or WatermelonDB / local SQLite for instant UI rendering without network lag.</li>
              <li><strong>Over-The-Air (OTA) Updates:</strong> Configuring Expo EAS Update so bug fixes deploy instantly without waiting for app store review.</li>
              <li><strong>App Store Deployment:</strong> Generating iOS certificates, provisioning profiles, Android keystores, and running <code>eas build --platform all</code>.</li>
            </ul>
          </div>
        </section>

        {/* Capstone */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/30 shadow-xs space-y-5">
          <div className="flex items-center gap-3">
            <Sparkles className="text-emerald-500" size={26} />
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
              The Capstone: Production Fintech Mobile Wallet
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-dm leading-relaxed">
            Architect a production-grade remittance agent / consumer wallet app similar to the ones engineered at enterprise scale:
          </p>

          <div className="space-y-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-dm">
            <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <p className="font-bold text-zinc-900 dark:text-white text-sm">Deliverables:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-600 dark:text-zinc-400">
                <li>Biometric gate (FaceID / Fingerprint) to unlock app and confirm transfer transactions.</li>
                <li>Multi-currency wallet balances with pull-to-refresh and real-time offline caching via MMKV.</li>
                <li>QR code scanner to initiate instant peer-to-peer money transfers.</li>
                <li>Virtual transaction feed powered by FlashList with search, status filtering, and PDF receipt exports.</li>
                <li>Compiled and published on Apple TestFlight and Google Play Internal Track using EAS Build.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <CurriculumLeadCapture trackTitle="Mobile Engineering (React Native & Expo)" />

        {/* Footer Navigation */}
        <div className="mt-14 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#curriculum"
            className="inline-flex items-center gap-2 text-sm font-dm font-semibold text-brand-terra dark:text-brand-ember hover:underline"
          >
            <ArrowLeft size={16} /> Explore All Learning Tracks
          </Link>
          <span className="text-xs text-zinc-500 font-mono">
            Gran Jefe Engineering Curriculum &bull; 2025
          </span>
        </div>
      </main>
    </div>
  )
}
