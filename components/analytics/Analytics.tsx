'use client';

import Script from 'next/script';
import { useCookieConsent } from '../providers/CookieConsentProvider';

export function Analytics() {
  const { consent } = useCookieConsent();
  
  // Only load analytics if user has explicitly granted consent
  if (!consent || !consent.analytics) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T2NP7DBH');
        `}
      </Script>
    </>
  );
}
