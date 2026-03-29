import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import CookieBanner from '@/components/CookieBanner';
import AlternancePopup from '@/components/AlternancePopup';
import CustomCursor from '@/components/CustomCursor';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import { MobileTabBar } from '@/components/MobileTabBar';
import { ScrollToTop } from '@/components/ScrollToTop';
import { PageTransitionOverlay } from '@/components/PageTransitionOverlay';
import { Preloader } from '@/components/Preloader';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Amine Agnaou — Développeur Web & Mobile',
  description: 'Portfolio de Amine Agnaou. Je conçois des expériences digitales sur-mesure, alliant de hautes performances techniques à un design raffiné.',
  keywords: ['Amine Agnaou', 'Développeur Web', 'Développeur Frontend', 'UX/UI Design', 'Next.js', 'React', 'Portfolio', 'BTS SIO'],
  authors: [{ name: 'Amine Agnaou' }],
  creator: 'Amine Agnaou',
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: 'https://amine-agnaou.com',
    title: "Amine Agnaou | Développeur Web & Mobile",
    description: "Portfolio de Amine Agnaou. Conception d'applications web modernes et performantes.",
    siteName: 'Amine Agnaou Portfolio',
    images: [
      {
        url: '/icon.svg',
        width: 800,
        height: 600,
        alt: 'Amine Agnaou Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amine Agnaou | Développeur Web',
    description: "Portfolio de Amine Agnaou. Conception d'applications web modernes.",
    images: ['/icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply dark mode class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                  if (sessionStorage.getItem('hasSeenPreloader')) {
                    document.documentElement.classList.add('hide-preloader');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Amine Agnaou',
              url: 'https://amine-agnaou.com',
              jobTitle: 'Développeur Web & Mobile',
              sameAs: [
                'https://github.com/aminuw',
                'https://www.linkedin.com/in/amine-agnaou/',
              ],
              knowsAbout: ['Next.js', 'React', 'TypeScript', 'PHP', 'MySQL', 'UI/UX Design'],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-zinc-950 selection:text-white dark:selection:bg-orange-600 dark:selection:text-white relative bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-500`}>
        <ThemeProvider>
          <LanguageProvider>
              {/* Subtle Noise Texture Overlay (Hidden on mobile to optimize scroll performance) */}
              <div className="hidden md:block pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-difference" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
              <InteractiveBackground />
              <SmoothScroll>
                <Navbar />
                <main className="flex-1 w-full flex flex-col items-center pb-24 md:pb-0">
                  {children}
                </main>
                <Footer />
              </SmoothScroll>
              <MobileTabBar />
              <CookieBanner />
              <AlternancePopup />
              <CustomCursor />
              <ScrollToTop />
              <PageTransitionOverlay />
              <Preloader />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
