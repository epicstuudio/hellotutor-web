'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { TrustBadge } from '@/components/shared/TrustBadge';
import { AnimatedNumber } from '@/components/shared/AnimatedNumber';
import { motion } from 'framer-motion';

export function HeroStatsBanner() {
  const t = useTranslations();

  return (
    <section className="bg-surface py-8 border-b border-content/5 relative z-10 -mt-2">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Trust Badge Left (or top in mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center shrink-0"
          >
            <TrustBadge />
          </motion.div>

          {/* Stats Right (or bottom in mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-h4 lg:text-h3 text-content mb-1 tracking-tight flex items-baseline">
                <AnimatedNumber value={t('hero.stat1Value')} duration={2} delay={0.2} />
                <span className="text-2xl font-extralight text-content ms-1 font-sans">+</span>
              </div>
              <div className="text-body-sm text-content-secondary">{t('hero.stat1Label')}</div>
            </div>
            
            <div className="w-px h-12 bg-content/10 hidden md:block self-center"></div>

            <div className="flex flex-col items-center text-center">
              <div className="text-h4 lg:text-h3 text-content mb-1 tracking-tight">
                <AnimatedNumber value={t('hero.stat2Value')} duration={2} delay={0.4} />
              </div>
              <div className="text-body-sm text-content-secondary">{t('hero.stat2Label')}</div>
            </div>
            
            <div className="w-px h-12 bg-content/10 hidden md:block self-center"></div>

            <div className="flex flex-col items-center text-center">
              <div className="text-h4 lg:text-h3 text-content mb-1 tracking-tight flex items-end gap-1.5">
                <AnimatedNumber value={t('hero.stat3Value')} duration={2} delay={0.6} />
                <svg className="w-5 h-5 mb-1.5 text-content" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <div className="text-body-sm text-content-secondary">{t('hero.stat3Label')}</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
