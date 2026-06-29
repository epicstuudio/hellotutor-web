import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { TutorsInSharjahContent } from './TutorsInSharjahContent';
import { createMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tutorsInSharjah' });
  
  return createMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/tutors-in-sharjah',
    locale,
  });
}

export default async function TutorsInSharjahPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TutorsInSharjahContent />;
}
