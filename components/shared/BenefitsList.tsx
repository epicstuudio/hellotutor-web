'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BenefitsListProps {
  translationKey: string;
  imageSrc: string;
}

export function BenefitsList({ translationKey, imageSrc }: BenefitsListProps) {
  const t = useTranslations(translationKey);

  const itemsRaw = t.raw('items');
  const itemsArray = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 md:text-h1 font-bold text-content mb-4"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-8">
              {itemsArray.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-surface-base flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-body-md font-bold text-content-info">
                      {`0${i + 1}`}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-body-lg font-semibold text-content">
                      {item.title}
                    </h3>
                    <p className="text-body-base text-content-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Card */}
            <div className="bg-surface-base rounded-3xl p-6 lg:p-8 mt-2">
              <span className="text-body-base text-content-secondary block leading-relaxed">
                {t('bottomCardText')}
              </span>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-[2rem] overflow-hidden bg-edge aspect-[4/5] lg:aspect-square"
          >
            <Image
              src={imageSrc}
              alt={t('title')}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
