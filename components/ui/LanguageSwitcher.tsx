'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

/**
 * Language switcher with UK 🇬🇧 and UAE 🇦🇪 flag icons.
 */
export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === 'ae-en' ? 'ae-ar' : 'ae-en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1.5 rounded-lg border border-edge px-3 py-1.5 text-sm font-medium text-content-secondary transition-colors hover:bg-surface-hover cursor-pointer"
      aria-label={`Switch to ${locale === 'ae-en' ? 'Arabic' : 'English'}`}
    >
      {locale === 'ae-en' ? (
        <>
          <FlagAE className="h-4 w-5 shrink-0" />
          <span>AR</span>
        </>
      ) : (
        <>
          <FlagGB className="h-4 w-5 shrink-0" />
          <span>EN</span>
        </>
      )}
    </button>
  );
}

/** Inline SVG — United Kingdom flag */
function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <rect width="60" height="40" fill="#00247D" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,40 M60,0 L0,40" stroke="#CF142B" strokeWidth="3" />
      <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 V40 M0,20 H60" stroke="#CF142B" strokeWidth="6" />
    </svg>
  );
}

/** Inline SVG — United Arab Emirates flag */
function FlagAE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <rect y="0" width="60" height="13.33" fill="#00732F" />
      <rect y="13.33" width="60" height="13.33" fill="#FFFFFF" />
      <rect y="26.66" width="60" height="13.34" fill="#000000" />
      <rect x="0" y="0" width="15" height="40" fill="#FF0000" />
    </svg>
  );
}
