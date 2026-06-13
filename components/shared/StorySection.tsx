'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PenTool, MessageSquare, Lightbulb } from 'lucide-react';

interface StorySectionProps {
 translationKey: string;
 imageSrc: string;
}

export function StorySection({ translationKey, imageSrc }: StorySectionProps) {
 const t = useTranslations(translationKey);

 const icons = [
 <PenTool key="1" className="w-5 h-5 text-icon-accent" />,
 <MessageSquare key="2" className="w-5 h-5 text-icon-accent" />,
 <Lightbulb key="3" className="w-5 h-5 text-icon-accent" />,
 ];

 const itemsRaw = t.raw('items');
 const itemsArray = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as {
 title: string;
 desc: string;
 }[];

 const items = itemsArray.map((item, index) => ({
 id: index.toString(),
 title: item.title,
 desc: item.desc,
 icon: icons[index],
 }));

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
 <HighlightText words="Story">{t('title')}</HighlightText>
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
 {/* Left Side - Story items */}
 <motion.div
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="flex flex-col gap-10"
 >
 {items.map((item, index) => (
 <motion.div
 key={item.id}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 * index }}
 className="flex gap-4 items-start"
 >
 <div className="w-12 h-12 rounded-xl bg-surface-base flex items-center justify-center shrink-0 mt-0.5">
 {item.icon}
 </div>
 <div className="flex flex-col gap-1.5">
 <h3 className="text-body-lg font-semibold text-content">{item.title}</h3>
 <p className="text-body-base text-content-secondary leading-relaxed">
 {item.desc}
 </p>
 </div>
 </motion.div>
 ))}
 </motion.div>

 {/* Right Side - Image */}
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3 }}
 className="relative rounded-[2rem] overflow-hidden bg-edge aspect-[4/5] lg:aspect-square"
 >
 <Image src={imageSrc} alt={t('title')} fill className="object-cover" />
 </motion.div>
 </div>
 </Container>
 </section>
 );
}
