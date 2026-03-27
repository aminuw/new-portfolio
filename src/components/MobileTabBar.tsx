'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Layers, Terminal, Radio, Mail } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

export function MobileTabBar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const tabs = [
    { href: '/', icon: Home, label: t.nav.home },
    { href: '/projets', icon: Layers, label: t.nav.projects },
    { href: '/competences', icon: Terminal, label: t.nav.expertise },
    { href: '/veille', icon: Radio, label: t.nav.watch },
    { href: '/contact', icon: Mail, label: t.nav.contact },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-6 pt-2 pointer-events-none">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50 shadow-2xl dark:shadow-none rounded-2xl flex items-center justify-around p-2 pointer-events-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-zinc-950 dark:bg-orange-600 text-white shadow-md -translate-y-2' 
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100'
              }`}
            >
              <Icon size={20} className={isActive ? 'mb-1' : ''} />
              <span className={`text-[9px] font-mono tracking-wider font-bold uppercase transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
              }`}>
                {tab.label.substring(0, 4)}
              </span>
              {isActive && (
                <span className="absolute -bottom-2 w-1 h-1 bg-zinc-950 dark:bg-orange-500 rounded-full" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
