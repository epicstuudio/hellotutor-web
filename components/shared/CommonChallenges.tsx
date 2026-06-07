'use client';

import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { TrendingDown, EyeOff, Timer, MessageCircleQuestion, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommonChallengesProps {
  translationKey: string;
}

export function CommonChallenges({ translationKey }: CommonChallengesProps) {
  const t = useTranslations(translationKey);

  const icons = [
    <TrendingDown key="1" className="w-5 h-5 text-icon-accent" />,
    <EyeOff key="2" className="w-5 h-5 text-icon-accent" />,
    <Timer key="3" className="w-5 h-5 text-icon-accent" />,
    <MessageCircleQuestion key="4" className="w-5 h-5 text-icon-accent" />,
    <Target key="5" className="w-5 h-5 text-icon-accent" />,
  ];

  const cardsRaw = t.raw('cards');
  const cardsData = (Array.isArray(cardsRaw) ? cardsRaw : Object.values(cardsRaw || {})) as {
    title: string;
    desc: string;
  }[];

  const cards = cardsData.map((card, index) => ({
    id: index.toString(),
    title: card.title,
    desc: card.desc,
    icon: icons[index],
  }));

  return (
    <section className="py-20 lg:py-24 bg-surface">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-h2 text-content mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-content-tertiary"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => {
            let colSpanClass = 'lg:col-span-1';
            if (cards.length === 5) {
              if (index === 0) colSpanClass = 'lg:col-span-2';
              else if (index === 1) colSpanClass = 'lg:col-span-1';
              else if (index === 2) colSpanClass = 'lg:col-span-1';
              else if (index === 3) colSpanClass = 'lg:col-span-2';
              else if (index === 4) colSpanClass = 'lg:col-span-2';
            }

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cn('bg-surface-base rounded-3xl p-6', colSpanClass)}
              >
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-body-lg font-semibold text-content mb-3">{card.title}</h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
