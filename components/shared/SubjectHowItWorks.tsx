'use client';

import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SubjectHowItWorksProps {
  translationKey: string;
  imageSrc: string;
  className?: string;
}

export function SubjectHowItWorks({ translationKey, imageSrc, className }: SubjectHowItWorksProps) {
  const t = useTranslations(translationKey);
  const stepsRaw = t.raw('steps');
  const steps = (Array.isArray(stepsRaw) ? stepsRaw : Object.values(stepsRaw || {})) as {
    title: string;
    desc: string;
  }[];

  return (
    <section className={cn('py-12 lg:py-20 bg-surface', className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column - Header & Image */}
          <div className="flex flex-col gap-10 lg:col-span-4">
            <div>
              <h2 className="text-h2 mb-4 tracking-tight text-content">
                <HighlightText words="Works">{t('title')}</HighlightText>
              </h2>
              <p className="text-body-lg text-content-secondary">{t('subtitle')}</p>
            </div>

            <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-4xl overflow-hidden shadow-sm">
              <Image
                src={imageSrc}
                alt={t('title')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Column - Timeline Card */}
          <div className="bg-surface-base rounded-4xl p-8 lg:p-12 lg:col-span-8">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 relative">
                  {/* Vertical Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-[15px] top-10 bottom-[-24px] w-0.5 bg-surface-brand-alt/20" />
                  )}

                  {/* Step Indicator */}
                  <div className="relative z-10 w-8 h-8 rounded-full bg-surface-brand-alt text-content-invert flex items-center justify-center shrink-0 mt-1 shadow-sm">
                    <span className="text-sm font-semibold">0{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className={cn('pb-12', index === steps.length - 1 ? 'pb-0' : '')}>
                    <h4 className="text-h5 text-content mb-3">{step.title}</h4>
                    <p className="text-body text-content-secondary leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
