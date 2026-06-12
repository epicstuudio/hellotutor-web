'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { Heart, BadgeCheck, Layers } from 'lucide-react';

interface ValuesSectionProps {
  translationKey: string;
}

export function ValuesSection({ translationKey }: ValuesSectionProps) {
  const t = useTranslations(translationKey);

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      bgClass: 'bg-value-human',
      titleKey: 'humanFirst',
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-white" />,
      bgClass: 'bg-value-quality',
      titleKey: 'qualityAlways',
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      bgClass: 'bg-value-calm',
      titleKey: 'calmLearning',
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-surface overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 text-content mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-content-secondary"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Desktop: overlapping circles */}
        <div className="hidden lg:flex items-center justify-center relative py-8">
          {values.map((value, i) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`relative flex flex-col items-center justify-center text-center text-white rounded-full aspect-square shrink-0 ${
                i === 0
                  ? 'w-95 h-95 -mr-16 z-10'
                  : i === 1
                    ? 'w-85 h-85 -mr-12 z-20'
                    : 'w-90 h-90 z-10'
              } ${value.bgClass}`}
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-h3 mb-3">{t(`items.${value.titleKey}.title`)}</h3>
              <p className="text-body-base text-white/80 max-w-65 leading-relaxed">
                {t(`items.${value.titleKey}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="lg:hidden space-y-4">
          {values.map((value, i) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`${value.bgClass} rounded-3xl p-6 text-white`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-body-xl font-semibold">{t(`items.${value.titleKey}.title`)}</h3>
              </div>
              <p className="text-body-base text-white/80 leading-relaxed">
                {t(`items.${value.titleKey}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
