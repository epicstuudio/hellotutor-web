'use client';

import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { HighlightText } from '@/components/ui/HighlightText';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface SubjectFAQsProps {
 translationKey: string;
 className?: string;
}

export function SubjectFAQs({ translationKey, className }: SubjectFAQsProps) {
 const t = useTranslations(translationKey);
 const itemsRaw = t.raw('items');
 const items = (Array.isArray(itemsRaw) ? itemsRaw : Object.values(itemsRaw || {})) as {
 question: string;
 answer: string;
 }[];

 return (
 <section className={cn('py-12 lg:py-20 bg-surface-alt', className)}>
 <Container className="max-w-4xl">
 <div className="text-center mb-12 lg:mb-16">
 <h2 className="text-h2 text-content mb-4">
 <HighlightText words="asked">{t('title')}</HighlightText>
 </h2>
 <p className="text-body-xl text-content-secondary">{t('subtitle')}</p>
 </div>

 <div className="mb-16">
 <Accordion items={items} />
 </div>

 <div className="flex justify-center">
 <Button href="/faqs" variant="outline" size="lg">
 {t('cta')}
 </Button>
 </div>
 </Container>
 </section>
 );
}
