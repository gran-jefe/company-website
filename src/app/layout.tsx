import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL('https://thegranjefe.com'),
  title: {
    default: 'Gran Jefe Studio — Websites & Digital Products That Make Brands Impossible to Ignore',
    template: '%s | Gran Jefe Studio',
  },
  description: 'Bespoke creative engineering studio building high-performance web platforms, sovereign payment engines, and mobile applications with sub-second speed.',
  keywords: [
    'Gran Jefe',
    'Creative Engineering Studio',
    'Next.js Agency',
    'Fintech Development',
    'Mobile App Development',
    'React Native',
    'Sub-Second Web Apps',
    'Adeleke Sherifdeen',
    'Nigeria Tech Studio',
  ],
  authors: [{ name: 'Adeleke Sherifdeen' }, { name: 'Gran Jefe Solutions' }],
  creator: 'Gran Jefe Solutions',
  publisher: 'Gran Jefe Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Gran Jefe Studio — Websites & Digital Products That Make Brands Impossible to Ignore',
    description: 'Bespoke creative engineering studio building high-performance web platforms, sovereign payment engines, and mobile applications with sub-second speed.',
    url: 'https://thegranjefe.com',
    siteName: 'Gran Jefe Studio',
    images: [
      {
        url: '/projects/projectcatalogue.jpg',
        width: 1200,
        height: 630,
        alt: 'Gran Jefe Studio — Engineering & Digital Product Showcase',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gran Jefe Studio — Websites & Digital Products That Make Brands Impossible to Ignore',
    description: 'Bespoke creative engineering studio building high-performance web platforms, sovereign payment engines, and mobile applications with sub-second speed.',
    creator: '@thegranjefe',
    images: ['/projects/projectcatalogue.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Gran Jefe Studio',
  legalName: 'GRAN JEFE SOLUTIONS',
  identifier: 'BN: 9529101',
  url: 'https://thegranjefe.com',
  logo: 'https://thegranjefe.com/favicon.png',
  founder: {
    '@type': 'Person',
    name: 'Adeleke Sherifdeen',
  },
  description: 'Creative engineering studio building high-performance web platforms, sovereign payment engines, and mobile applications with sub-second speed.',
  sameAs: [
    'https://github.com/granjefe',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const isDark = theme === 'dark';
                if (isDark) document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
