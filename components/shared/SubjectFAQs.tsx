'use client';

import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
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
    <section className={cn('py-20 lg:py-32 bg-surface-alt', className)}>
      <Container className="max-w-4xl">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-h2 text-content tracking-tight mb-4">{t('title')}</h2>
          <p className="text-body-xl text-content-secondary">{t('subtitle')}</p>
        </div>

        <div className="mb-16">
          <Accordion items={items} />
        </div>

        <div className="flex justify-center">
          <Button href="/about/all-faqs" variant="outline" size="lg">
            {t('cta')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
