'use client';

import { useLocale } from 'next-intl';

/**
 * Returns true when the current locale is RTL (e.g. Arabic).
 * Works on both server and client since next-intl provides the locale
 * from the nearest NextIntlClientProvider.
 */
export function useIsRtl(): boolean {
  const locale = useLocale();
  return locale === 'ae-ar';
}
