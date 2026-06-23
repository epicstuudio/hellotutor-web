import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { HighlightText } from '@/components/ui/HighlightText';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Subjects() {
  const t = useTranslations('subjectsWeCover');

  const subjects = [
    { key: 'maths', href: '/subjects/maths-tutoring' },
    { key: 'english', href: '/subjects/english-tutoring' },
    { key: 'science', href: '/subjects/science-tutoring' },
    { key: 'arabic', href: '/subjects/arabic-tutoring' },
    { key: 'examPrep', href: '/exam-preparation' },
  ];

  return (
    <section className="pt-10 pb-20 lg:pt-12 lg:pb-24 bg-surface-alt">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-h2 text-content ">
            <HighlightText words="Subjects">{t('title')}</HighlightText>
          </h2>
          <p className="text-body-xl text-content-secondary">{t('subtitle')}</p>
        </div>

        <div className="flex overflow-x-auto gap-4 mb-16 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {subjects.map((subject) => (
            <Link
              key={subject.key}
              href={subject.href}
              className="bg-surface-base rounded-3xl p-6 border border-edge-subtle flex flex-col group cursor-pointer hover:border-content/20 transition-colors text-start min-w-[280px] sm:min-w-[320px] lg:min-w-0 lg:flex-1 snap-start"
            >
              <div className="flex justify-end mb-12">
                <div className="bg-surface-alt w-10 h-10 rounded-full flex items-center justify-center text-content">
                  <ArrowUpRight className="w-5 h-5 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-h5 font-semibold text-content mb-1">
                  {t(`cards.${subject.key}.title`)}
                </h3>
                <p className="text-base text-content-secondary">{t(`cards.${subject.key}.desc`)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-6">
          <p className="text-body-base text-content-secondary">{t('footerText')}</p>
          <Button href="/subjects" variant="outline" size="lg" className="hover:text-white group">
            {t('browseButton')}
          </Button>
        </div>
      </Container>
    </section>
  );
}
