'use client';

import React from 'react';
import { useCookieConsent } from '../providers/CookieConsentProvider';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function CookieBanner() {
  const { hasInteracted, acceptAll, acceptNecessary, openSettings } = useCookieConsent();
  
  // Since we don't have the exact keys in the translation files yet, we can use a fallback mechanism
  // or hardcode them if next-intl throws errors when keys are missing. For safety, we'll hardcode 
  // the English strings for now, but in a real setup, we'd add these to ae-en.json and ae-ar.json.
  const t = (key: string, fallback: string) => fallback;

  if (hasInteracted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] flex flex-col gap-4 rounded-xl p-6 shadow-2xl md:bottom-8 md:left-8 md:right-auto md:max-w-[400px] bg-surface">
      <h2 className="text-lg font-semibold text-content">
        Cookie Consent
      </h2>
      <p className="text-sm leading-relaxed text-content-secondary">
        Hi, we use cookies to ensure the website&apos;s proper operation, to analyse traffic and performance, and to provide social media features.{' '}
        <button 
          onClick={openSettings}
          className="font-semibold underline underline-offset-2 transition-colors hover:opacity-80 text-surface-brand cursor-pointer"
        >
          Cookie Settings
        </button>
      </p>
      
      <div className="flex flex-col gap-2 mt-2">
        <Button onClick={acceptAll} className="w-full">
          Accept all
        </Button>
        <Button onClick={acceptNecessary} variant="secondary" className="w-full">
          Accept necessary
        </Button>
      </div>
    </div>
  );
}
