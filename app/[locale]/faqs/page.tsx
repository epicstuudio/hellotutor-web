import { AllFAQs } from '@/components/shared/AllFAQs';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'allFaqs' });
  return createMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/faqs',
    locale,
  });
}

export default async function AllFaqsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd />
      <AllFAQs />
    </>
  );
}
