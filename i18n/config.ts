export const locales = ['ae-en', 'ae-ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ae-en';
