'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';
import { Compass, Type, FlaskConical, Languages, Globe } from 'lucide-react';

interface PopularSubjectsProps {
 translationKey: string;
}

export function PopularSubjects({ translationKey }: PopularSubjectsProps) {
 const t = useTranslations(translationKey);

 const icons = [
 <div
 key="1"
 className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-content-info"
 >
 <Compass className="w-5 h-5" />
 </div>,
 <div
 key="2"
 className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-content-info"
 >
 <Type className="w-5 h-5" />
 </div>,
 <div
 key="3"
 className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-content-info"
 >
 <FlaskConical className="w-5 h-5" />
 </div>,
 <div
 key="4"
 className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-content-info"
 >
 <Languages className="w-5 h-5" />
 </div>,
 <div
 key="5"
 className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-content-info"
 >
 <Globe className="w-5 h-5" />
 </div>,
 ];

 const itemsRaw = t.raw('items');
 const itemsData = (
 Array.isArray(itemsRaw)
 ? itemsRaw
 : Object.keys(itemsRaw || {})
 .sort()
 .map((k) => itemsRaw[k])
 ) as { title: string; desc: string }[];

 const gridColsClass =
 itemsData.length === 4
 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
 : itemsData.length === 5
 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
 : 'grid-cols-1 md:grid-cols-3';

 return (
 <section className="bg-surface-alt py-12 lg:py-20">
 <Container>
 <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-h2 md:text-h1 font-bold text-content mb-4"
 >
 <HighlightText words="Subjects">{t('title')}</HighlightText>
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

 <div className={`grid gap-6 ${gridColsClass}`}>
 {itemsData.map((item, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 + i * 0.1 }}
 className="bg-surface-base rounded-3xl p-8 flex flex-col relative min-h-[200px]"
 >
 <div className="absolute top-6 right-6 rtl:left-6 rtl:right-auto">
 {icons[i % icons.length]}
 </div>
 <h3 className="text-h5 font-semibold text-content mb-4 mt-2">{item.title}</h3>
 <p className="text-body-base text-content-secondary leading-relaxed pr-14">
 {item.desc}
 </p>
 </motion.div>
 ))}
 </div>
 </Container>
 </section>
 );
}
