'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TargetAudienceListProps {
  translationKey: string;
  imageSrc: string;
}

export function TargetAudienceList({ translationKey, imageSrc }: TargetAudienceListProps) {
  const t = useTranslations(translationKey);
  
  const itemsRaw = t.raw('items');
  const items = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="py-16 lg:py-24 bg-surface border-t border-edge overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square lg:aspect-[4/5] rounded-4xl overflow-hidden bg-surface-alt border border-edge order-last lg:order-first"
          >
            <Image 
              src={imageSrc} 
              alt={t('title')} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700" 
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-h2 md:text-h1 font-bold text-content mb-4">
              <HighlightText words={['Who', 'This', 'Is', 'For']}>{t('title')}</HighlightText>
            </h2>
            <p className="text-body-lg text-content-secondary mb-10 lg:mb-12">
              {t('subtitle')}
            </p>

            <div className="flex flex-col gap-8">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col gap-2 group"
                >
                  <h3 className="text-h5 font-semibold text-content group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-body-base text-content-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
