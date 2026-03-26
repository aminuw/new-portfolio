import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import InteractiveBackground from '@/components/InteractiveBackground';
import CookieBanner from '@/components/CookieBanner';
import AlternancePopup from '@/components/AlternancePopup';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Amine Agnaou — Portfolio',
  description: 'Portfolio de Amine Agnaou, développeur frontend et intégrateur web. Découvrez mes projets, mon expertise technique et mon parcours.',
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Amine Agnaou | Développeur Web",
    description: "Portfolio de Amine Agnaou, développeur frontend et intégrateur web.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-zinc-950 min-h-screen flex flex-col selection:bg-zinc-950 selection:text-white relative bg-zinc-50`}>
        {/* Subtle Noise Texture Overlay */}
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-difference" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <InteractiveBackground />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <CookieBanner />
        <AlternancePopup />
      </body>
    </html>
  );
}
