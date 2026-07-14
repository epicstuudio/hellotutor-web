import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { Hero } from '@/components/home/Hero';
import type { Metadata } from 'next';
import { USP } from '@/components/home/USP';
import { Subjects } from '@/components/home/Subjects';

import dynamic from 'next/dynamic';
import { Trust } from '@/components/home/Trust';
import { Testimonials } from '@/components/shared/Testimonials';
import { FAQs } from '@/components/home/FAQs';

const HowItWorks = dynamic(() => import('@/components/home/HowItWorks').then(mod => mod.HowItWorks), { ssr: false });
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs').then(mod => mod.WhyChooseUs), { ssr: false });
const CTASection = dynamic(() => import('@/components/shared/CTASection').then(mod => mod.CTASection), { ssr: false });

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
