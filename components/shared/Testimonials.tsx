import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { Sparkle } from 'lucide-react';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { HighlightText } from '@/components/ui/HighlightText';

interface TestimonialsProps {
  translationKey?: string;
}

export function Testimonials({ translationKey = 'testimonials' }: TestimonialsProps = {}) {
  const t = useTranslations(translationKey);

  const reviewIds = ['1', '2', '3'];
  const stats = [t('stats.0'), t('stats.1'), t('stats.2')];

  return (
    <section className="py-10 lg:py-12 bg-surface overflow-hidden flex flex-col">
      <Container className="pb-16 lg:pb-24">
        <h2 className="text-h2 text-content text-center mb-16 tracking-tight">
          <HighlightText words="parents">{t('title')}</HighlightText>
        </h2>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-4">
          {reviewIds.map((id) => (
            <TestimonialCard
              key={id}
              author={t(`reviews.${id}.author`)}
              text={t(`reviews.${id}.text`)}
            />
          ))}
        </div>

        {/* Mobile / Tablet Scroll Snap */}
        <div className="flex lg:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 hide-scrollbar">
          {reviewIds.map((id) => (
            <TestimonialCard
              key={id}
              author={t(`reviews.${id}.author`)}
              text={t(`reviews.${id}.text`)}
              className="w-[85vw] sm:w-[340px] snap-center shrink-0"
            />
          ))}
        </div>
      </Container>

      {/* Ribbon */}
      <div className="bg-surface-alt py-4 lg:py-5 border-y border-content/5 relative group flex overflow-x-hidden">
        <div className="flex gap-8 md:gap-16 pe-8 md:pe-16 min-w-max shrink-0 animate-marquee rtl:animate-marquee-rtl group-hover:[animation-play-state:paused] items-center">
          {stats
            .concat(stats)
            .concat(stats)
            .map((stat, i) => (
              <div key={`first-${i}`} className="flex items-center gap-8 md:gap-16">
                <span className="text-content font-medium text-sm md:text-base whitespace-nowrap">
                  {stat}
                </span>
                <Sparkle className="w-5 h-5 text-content fill-content shrink-0" />
              </div>
            ))}
        </div>
        <div
          className="flex gap-8 md:gap-16 pe-8 md:pe-16 min-w-max shrink-0 animate-marquee rtl:animate-marquee-rtl group-hover:[animation-play-state:paused] items-center"
          aria-hidden="true"
        >
          {stats
            .concat(stats)
            .concat(stats)
            .map((stat, i) => (
              <div key={`second-${i}`} className="flex items-center gap-8 md:gap-16">
                <span className="text-content font-medium text-sm md:text-base whitespace-nowrap">
                  {stat}
                </span>
                <Sparkle className="w-5 h-5 text-content fill-content shrink-0" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
