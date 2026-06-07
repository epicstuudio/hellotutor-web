'use client';

import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Users, Wallet, Monitor, Headphones, Globe, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const icons = [
  <Users key="1" className="w-5 h-5 text-icon-accent" />,
  <Wallet key="2" className="w-5 h-5 text-icon-accent" />,
  <Monitor key="3" className="w-5 h-5 text-icon-accent" />,
  <Headphones key="4" className="w-5 h-5 text-icon-accent" />,
  <Globe key="5" className="w-5 h-5 text-icon-accent" />,
  <TrendingUp key="6" className="w-5 h-5 text-icon-accent" />,
];

export function WhyTutor() {
  const t = useTranslations('becomeATutorPage.whyTutor');

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
            const isWide = index === 0 || index === 3;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={cn('bg-surface-base rounded-3xl p-6', isWide && 'lg:col-span-2')}
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
