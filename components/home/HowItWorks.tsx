'use client';

import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';

const steps = [
 {
 id: '1',
 image:
 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/Tell%20us%20about%20your%20child.jpg',
 },
 {
 id: '2',
 image:
 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/We%20match%20the%20perfect%20tutor.jpg',
 },
 {
 id: '3',
 image:
 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/Lessons%20begin.jpeg',
 },
 {
 id: '4',
 image:
 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/You%20stay%20in%20the%20loop.jpg',
 },
];

export function HowItWorks() {
 const t = useTranslations('howItWorks');

 return (
 <section className="py-16 lg:py-20 bg-surface-alt">
 <Container>
 <div className="text-center max-w-2xl mx-auto mb-16">
 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="text-h2 text-content "
 >
 <HighlightText words="Works">{t('title')}</HighlightText>
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="text-body-xl text-content-secondary"
 >
 {t('subtitle')}
 </motion.p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {steps.map((step, index) => (
 <motion.div
 key={step.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
 className="bg-surface-base rounded-3xl p-3 flex flex-col border border-edge-subtle hover:border-content/20 transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
 >
 <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-6">
 <Image
 src={step.image}
 alt={t(`steps.${step.id}.title`)}
 fill
 className="object-cover transition-transform duration-500 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
 />
 <div className="absolute bottom-3 end-3 bg-surface-base text-content font-semibold text-sm px-3 py-1.5 rounded-lg shadow-sm">
 0{step.id}
 </div>
 </div>
 <div className="px-2 pb-3">
 <h3 className="text-lg font-semibold text-content mb-2">
 {t(`steps.${step.id}.title`)}
 </h3>
 <p className="text-sm text-content-secondary leading-relaxed">
 {t(`steps.${step.id}.desc`)}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </Container>
 </section>
 );
}
