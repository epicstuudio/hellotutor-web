'use client';

import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { EyeOff, BookOpen, MessageSquare, ShieldCheck, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const t = useTranslations('whyChooseUs');

  const features = [
    { key: 'noBrowsing', icon: EyeOff },
    { key: 'experts', icon: BookOpen },
    { key: 'contact', icon: MessageSquare },
    { key: 'safe', icon: ShieldCheck },
    { key: 'rematching', icon: RefreshCw },
  ];

  return (
    <section className="py-12 lg:py-20 bg-surface-brand-alt overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-h2 text-white mb-4 tracking-tight"
            >
              {t('title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-body-xl text-white/80 mb-12"
            >
              {t('subtitle')}
            </motion.p>

            <div className="flex flex-col gap-6 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`flex items-start gap-5 pb-6 group cursor-default ${index !== features.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <feature.icon className="w-6 h-6 text-surface-base fill-surface-base transition-colors duration-300 group-hover:text-white group-hover:fill-white" />
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <h3 className="text-lg font-semibold text-white">
                      {t(`features.${feature.key}.title`)}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm md:text-base">
                      {t(`features.${feature.key}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-start mt-6">
              <Button href="/about/for-parents" variant="primary" size="lg" className="px-8">
                {t('cta')}
              </Button>
            </div>
          </div>

          {/* Right Column - Image & Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-8 lg:mt-0 px-4 lg:px-0"
          >
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full rounded-4xl overflow-hidden group">
              <Image
                src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/g33.jpg"
                alt={t('title')}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Testimonial Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-8 lg:bottom-12 lg:-start-20 end-4 lg:end-auto bg-surface-base p-6 md:p-8 rounded-3xl shadow-xl max-w-[90%] lg:max-w-[420px] mx-auto z-10 hover-lift"
            >
              <p className="text-content-secondary leading-relaxed mb-6">{t('testimonial.text')}</p>
              <p className="text-content font-semibold text-sm md:text-base">
                {t('testimonial.author')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
