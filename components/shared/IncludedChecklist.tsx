'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface IncludedChecklistProps {
  translationKey: string;
}

export function IncludedChecklist({ translationKey }: IncludedChecklistProps) {
  const t = useTranslations(translationKey);

  const itemsRaw = t.raw('items');
  const itemsData = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as string[];

  return (
    <section className="bg-surface py-16 lg:py-24 border-t border-content/5 relative overflow-hidden">
      
      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-h3 md:text-h2 font-bold text-content mb-4"
            >
              <HighlightText words="Included">{t('title')}</HighlightText>
            </motion.h2>
            {t.has('subtitle') && t('subtitle') !== '' && t('subtitle') !== ' ' && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-body-lg text-content-secondary max-w-2xl mx-auto"
              >
                {t('subtitle')}
              </motion.p>
            )}
          </div>

          <div className="bg-surface-base border border-content/5 rounded-[2rem] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {itemsData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="shrink-0 mt-0.5 relative">
                    <CheckCircle2 className="w-6 h-6 text-brand relative z-10" />
                  </div>
                  <p className="text-body-lg text-content-secondary leading-relaxed group-hover:text-content transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
