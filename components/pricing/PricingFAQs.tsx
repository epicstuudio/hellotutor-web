'use client';

import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';

export function PricingFAQs() {
 const t = useTranslations('pricingSection.faqs');

 const faqItems = [
 { question: t('items.q1'), answer: t('items.a1') },
 { question: t('items.q2'), answer: t('items.a2') },
 { question: t('items.q3'), answer: t('items.a3') },
 { question: t('items.q4'), answer: t('items.a4') },
 { question: t('items.q5'), answer: t('items.a5') },
 { question: t('items.q6'), answer: t('items.a6') },
 ];

 return (
 <section className="py-12 lg:py-20 bg-surface">
 <Container className="max-w-4xl">
 <div className="text-center mb-12 lg:mb-16">
 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-h2 text-content mb-2"
 >
 <HighlightText words="questions">{t('title')}</HighlightText>
 </motion.h2>
 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-body-xl text-content-secondary"
 >
 {t('subtitle')}
 </motion.p>
 </div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 className="mb-16"
 >
 <Accordion items={faqItems} />
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3 }}
 className="flex justify-center"
 >
 <Button href="/about/all-faqs" variant="outline" size="lg">
 {t('cta')}
 </Button>
 </motion.div>
 </Container>
 </section>
 );
}
