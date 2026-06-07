import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from '@/components/home/Hero';
import type { Metadata } from 'next';
import { USP } from '@/components/home/USP';
import { Subjects } from '@/components/home/Subjects';

import { Trust } from '@/components/home/Trust';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Testimonials } from '@/components/shared/Testimonials';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FAQs } from '@/components/home/FAQs';
import { CTASection } from '@/components/shared/CTASection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return createMetadata({
    title: t('homeTitle'),
    description: t('homeDescription'),
    path: '/',
    locale,
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <Hero />
      <USP />
      <Subjects />
      <Trust />
      <HowItWorks />
      <Testimonials />
      <WhyChooseUs />
      <FAQs />
      <CTASection />
    </>
  );
}
