'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xaqpkkee', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-32 items-center">

        {/* Left Side: Editorial Typography */}
        <div className="flex flex-col justify-center order-1 mt-12 lg:mt-0">
          <h1 className="text-[clamp(40px,12vw,90px)] lg:text-[9vw] leading-[0.85] font-playfair font-bold text-zinc-950 dark:text-zinc-100 tracking-tighter mb-12">
            {t.contact.title1}<br />
            <span className="italic font-light text-zinc-500 dark:text-zinc-400">{t.contact.title2}</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-md uppercase tracking-widest mb-16 leading-relaxed border-l-[3px] border-zinc-950 dark:border-orange-600 pl-8 py-2">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-12 font-mono text-xs uppercase tracking-widest pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div>
              <span className="text-zinc-400 block mb-3 text-[10px] font-bold">{t.contact.emailLabel}</span>
              <a href="mailto:agnaouamine17@gmail.com" className="text-zinc-950 dark:text-zinc-100 hover:text-orange-600 transition-colors border-b border-zinc-950 dark:border-zinc-400 pb-1">
                agnaouamine17@gmail.com
              </a>
            </div>
            <div>
              <span className="text-zinc-400 block mb-3 text-[10px] font-bold">{t.contact.availabilityLabel}</span>
              <span className="text-zinc-950 dark:text-zinc-100">{t.contact.availability}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Redesigned Minimalist Form */}
        <div className="w-full bg-white dark:bg-zinc-900 p-8 md:p-14 lg:p-12 rounded-[3rem] border border-zinc-200 dark:border-zinc-800 relative overflow-hidden shadow-2xl shadow-zinc-950/5 dark:shadow-black/20 order-2">
          <form className="flex flex-col gap-10 relative z-10" onSubmit={handleSubmit}>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="fullname" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950 dark:group-focus-within:text-orange-500">{t.contact.nameLabel}</label>
              <input type="text" name="fullname" id="fullname" required className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 text-lg font-playfair text-zinc-950 dark:text-zinc-100 focus:outline-none focus:border-zinc-950 dark:focus:border-orange-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-600 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder={t.contact.namePlaceholder} />
            </div>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="email" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950 dark:group-focus-within:text-orange-500">{t.contact.emailFieldLabel}</label>
              <input type="email" name="email" id="email" required className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 text-lg font-playfair text-zinc-950 dark:text-zinc-100 focus:outline-none focus:border-zinc-950 dark:focus:border-orange-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-600 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder={t.contact.emailPlaceholder} />
            </div>

            <div className="flex flex-col gap-2 group">
              <label htmlFor="subject" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950 dark:group-focus-within:text-orange-500">{t.contact.subjectLabel}</label>
              <input type="text" name="subject" id="subject" className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 text-lg font-playfair text-zinc-950 dark:text-zinc-100 focus:outline-none focus:border-zinc-950 dark:focus:border-orange-500 transition-colors placeholder:text-zinc-300 dark:placeholder:text-zinc-600 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder={t.contact.subjectPlaceholder} />
            </div>

            <div className="flex flex-col gap-2 group mt-4">
              <label htmlFor="message" className="font-mono text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] transition-colors group-focus-within:text-zinc-950 dark:group-focus-within:text-orange-500">{t.contact.messageLabel}</label>
              <textarea name="message" id="message" rows={4} required className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 text-lg font-playfair text-zinc-950 dark:text-zinc-100 resize-none focus:outline-none focus:border-zinc-950 dark:focus:border-orange-500 transition-colors leading-relaxed placeholder:text-zinc-300 dark:placeholder:text-zinc-600 placeholder:font-mono placeholder:text-sm placeholder:italic" placeholder={t.contact.messagePlaceholder}></textarea>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full py-6 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-2xl flex items-center justify-center font-mono text-sm tracking-widest mt-6"
                >
                  {t.contact.success}
                </motion.div>
              ) : (
                <motion.button
                  key="submit"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full group py-6 bg-zinc-950 dark:bg-orange-600 text-white rounded-2xl font-mono text-xs uppercase tracking-[0.2em] hover:bg-orange-600 dark:hover:bg-orange-500 transition-all duration-500 mt-6 overflow-hidden relative shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {status === 'submitting' ? t.contact.submitting : t.contact.submit}
                    {status !== 'submitting' && <span className="text-lg leading-none transform group-hover:translate-x-3 transition-transform duration-300">→</span>}
                  </span>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-[10px] font-mono mt-4 text-center absolute -bottom-6 w-full uppercase tracking-widest"
                >
                  {t.contact.error}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>

      </div>
    </div>
  );
}
