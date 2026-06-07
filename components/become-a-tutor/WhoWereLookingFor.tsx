'use client';

import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function WhoWereLookingFor() {
  const t = useTranslations('becomeATutorPage.whoWereLookingFor');

  const itemsRaw = t.raw('items');
  const items = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className="py-20 lg:py-24 bg-purple-600">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-h2 text-white mb-4"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-body-lg text-purple-100"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Numbered list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            {items.map((item, index) => (
              <div key={index} className="flex gap-5 py-6 border-b border-white/10 first:pt-0">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <span className="text-body-md font-bold text-white/80">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-body-lg font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-body-sm text-purple-100/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Image + overlapping testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square bg-purple-700">
              <Image
                src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/become-a-tutor/tutor-who.jpg"
                alt={t('title')}
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping testimonial card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 lg:-left-10 right-12 lg:right-auto lg:w-[380px] bg-white rounded-2xl p-6 shadow-xl"
            >
              <p className="text-body-sm text-content-secondary leading-relaxed mb-4">
                {t('testimonial.text')}
              </p>
              <p className="text-body-sm font-semibold text-content">{t('testimonial.author')}</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
