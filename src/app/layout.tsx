import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Frontend Developer',
  description: 'A modern, high-performance portfolio built with Next.js and Framer Motion.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-zinc-50 text-zinc-950 min-h-screen flex flex-col selection:bg-zinc-950 selection:text-white bg-grid-pattern relative`}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50 pointer-events-none" />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 w-full flex flex-col items-center">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
