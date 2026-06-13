'use client';

import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

interface MeetOurTutorsProps {
  translationKey: string;
  imageSrc: string;
  className?: string;
}

export function MeetOurTutors({ translationKey, imageSrc, className }: MeetOurTutorsProps) {
  const t = useTranslations(translationKey);
  const standardsRaw = t.raw('standards');
  const standards = (
    Array.isArray(standardsRaw) ? standardsRaw : Object.values(standardsRaw || {})
  ) as string[];

  return (
    <section className={cn('py-12 lg:py-20 bg-surface-brand-alt text-content-invert', className)}>
      <Container>
        {/* Header section */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 mb-6 tracking-tight text-content-invert">
            <HighlightText
              words={[
                'Tutors',
                'English',
                'Arabic',
                'Science',
                'Maths',
                'Physics',
                'Chemistry',
                'Biology',
              ]}
            >
              {t('title')}
            </HighlightText>
          </h2>
          <p className="text-body-lg text-content-invert/90">{t('subtitle')}</p>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Standards & Matching Card */}
          <div className="flex flex-col">
            <h3 className="text-body font-semibold mb-6 text-content-invert/80">
              {t('standardsTitle')}
            </h3>

            <div className="flex flex-col gap-6 mb-12">
              {standards.map((standard, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start border-b border-content-invert/10 pb-6 last:border-b-0 last:pb-0"
                >
                  <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-content-invert opacity-80" />
                  <p className="text-body text-content-invert/90 leading-relaxed">{standard}</p>
                </div>
              ))}
            </div>

            {/* Matching Card */}
            <div className="bg-surface-base text-content rounded-lg p-6">
              <p className="text-body-sm leading-relaxed text-content-secondary">
                {t('matchingCardText')}
              </p>
            </div>
          </div>

          {/* Right Column - Image & Floating Tag */}
          <div className="relative w-full aspect-[4/5] lg:aspect-square rounded-xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Tutor"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Floating Tag */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-surface-base text-content px-6 py-4 rounded-md shadow-lg whitespace-nowrap">
              <p className="text-body-sm font-medium">{t('imageTag')}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
