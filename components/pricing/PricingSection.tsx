'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';
import { siteConfig } from '@/config/site';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type TabType = 'primary' | 'secondary' | 'alevel';

const PRICING_DATA = {
  primary: [
    { id: 'standard', price: '1,100', lessons: 1, perLesson: '275' },
    { id: 'advanced', price: '2,160', lessons: 2, perLesson: '270' },
    { id: 'premium', price: '3,180', lessons: 3, perLesson: '265' },
  ],
  secondary: [
    { id: 'standard', price: '1,180', lessons: 1, perLesson: '295' },
    { id: 'advanced', price: '2,320', lessons: 2, perLesson: '290' },
    { id: 'premium', price: '3,420', lessons: 3, perLesson: '285' },
  ],
  alevel: [
    { id: 'standard', price: '1,440', lessons: 1, perLesson: '360' },
    { id: 'advanced', price: '2,800', lessons: 2, perLesson: '350' },
    { id: 'premium', price: '4,080', lessons: 3, perLesson: '340' },
  ],
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export function PricingSection() {
  const t = useTranslations();
  const [activeTab, setActiveTab] = useState<TabType>('primary');

  const features = Array.from({ length: 8 }).map((_, i) => t(`pricingSection.features.f${i + 1}`));

  return (
    <section className="relative bg-surface-alt py-12 lg:py-16">
      <Container className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 text-content mb-4 "
          >
            <HighlightText words="Monthly">{t('pricingSection.title')}</HighlightText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-base md:text-body-lg text-content-secondary"
          >
            {t('pricingSection.subtitle')}
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-surface-base rounded-full p-1 border border-edge inline-flex items-center max-w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {(['primary', 'secondary', 'alevel'] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={twMerge(
                  'px-5 sm:px-6 py-2.5 rounded-full text-body-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap snap-center flex-shrink-0',
                  activeTab === tab
                    ? 'bg-content text-content-invert shadow-sm'
                    : 'text-content-secondary hover:text-content',
                )}
              >
                {t(`pricingSection.tabs.${tab}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
          {PRICING_DATA[activeTab].map((plan, index) => {
            const isAdvanced = plan.id === 'advanced';
            const isPremium = plan.id === 'premium';

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={twMerge(
                  'relative flex flex-col h-full',
                  isAdvanced ? 'z-10 lg:-mt-4 lg:-mb-4' : '',
                  isPremium ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:col-span-1 lg:w-full' : '',
                )}
              >
                <div
                  className={twMerge(
                    'flex flex-col h-full rounded-[2rem]',
                    isAdvanced
                      ? 'bg-surface-base p-2 border-2 border-surface-action shadow-xl'
                      : 'bg-surface-base p-6 lg:p-8 border border-edge-subtle',
                  )}
                >
                  {/* Advanced Plan Green Inner Card */}
                  <div
                    className={twMerge(
                      'flex flex-col',
                      isAdvanced ? 'bg-surface-action rounded-[1.5rem] p-6 lg:p-8' : '',
                    )}
                  >
                    {/* Plan Header */}
                    <div className="mb-6">
                      <h3 className="text-h5 text-content mb-1">
                        {t(`pricingSection.plans.${plan.id}.name`)}
                      </h3>
                      <p className="text-body-sm text-content-tertiary">
                        {t(`pricingSection.plans.${plan.id}.description`)}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-[3.5rem] leading-[1] font-bold tracking-tighter text-content">
                          {plan.price}
                        </span>
                        <span className="text-body-base font-semibold text-content-tertiary">
                          {t('pricingSection.perMonth')}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-body-sm font-semibold">
                        <span className="text-content-secondary">
                          {plan.lessons} lesson{plan.lessons > 1 ? 's' : ''} / week
                        </span>
                        <span className="text-content">
                          AED {plan.perLesson}{' '}
                          <span className="font-medium text-content-tertiary">
                            {t('pricingSection.perLesson')}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      href={siteConfig.whatsappUrl}
                      size="lg"
                      variant={isAdvanced ? 'outline' : 'primary'}
                      className={twMerge('w-full', !isAdvanced && 'mb-10')}
                      target="_blank"
                      rel="noopener noreferrer"
                      hoverChildren="+971 585989768"
                      hoverStartSlot={<WhatsAppIcon className="w-5 h-5" />}
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      {t('common.bookConsultation')}
                    </Button>
                  </div>

                  {/* Features list */}
                  <ul
                    className={twMerge(
                      'flex flex-col gap-4 mt-auto',
                      isAdvanced ? 'px-6 pb-8 pt-8 lg:px-8 lg:pb-10' : 'pt-0',
                    )}
                  >
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={twMerge(
                            'flex-shrink-0 mt-0.5 rounded-full p-1 flex items-center justify-center',
                            'bg-content text-content-invert',
                          )}
                        >
                          <Check className="w-3 h-3" strokeWidth={4} />
                        </div>
                        <span
                          className={twMerge(
                            'text-body-sm font-medium',
                            isAdvanced ? 'text-content' : 'text-content-secondary',
                          )}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
