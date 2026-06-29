import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { TutorsInDubaiContent } from './TutorsInDubaiContent';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tutorsInDubai' });
  
  return createMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/tutors-in-dubai',
    locale,
  });
}

export default async function TutorsInDubaiPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TutorsInDubaiContent />;
}
