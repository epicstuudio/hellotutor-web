'use client';

import { useRef, useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { motion, useInView, animate } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface StatsGridProps {
  translationKey: string;
}

function AnimatedStat({ value, suffix, label, delay }: { value: string; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue = parseFloat(value);
  const isDecimal = value.includes('.');

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const controls = animate(0, numericValue, {
      duration: 2,
      ease: 'easeOut',
      delay: delay * 0.15,
      onUpdate: (latest) => {
        if (!ref.current) return;
        if (isDecimal) {
          ref.current.textContent = latest.toFixed(1) + suffix;
        } else {
          ref.current.textContent = Math.round(latest).toLocaleString() + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, numericValue, suffix, isDecimal, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-white rounded-3xl p-6 lg:p-8 border border-edge-subtle shrink-0 snap-start"
    >
      <span
        ref={ref}
        className="text-h2 lg:text-h1 text-content block mb-2 tracking-tight"
      >
        {value + suffix}
      </span>
      <span className="text-body-base text-content-secondary">{label}</span>
    </motion.div>
  );
}

export function StatsGrid({ translationKey }: StatsGridProps) {
  const t = useTranslations(translationKey);

  const itemsRaw = t.raw('items');
  const items = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as {
    value: string;
    suffix: string;
    label: string;
  }[];

  return (
    <section className="py-12 lg:py-20 bg-surface">
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

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-5 gap-4">
          {items.map((item, i) => (
            <AnimatedStat
              key={i}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              delay={i}
            />
          ))}
        </div>

        {/* Mobile scroll snap */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 hide-scrollbar">
          {items.map((item, i) => (
            <AnimatedStat
              key={i}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
              delay={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
