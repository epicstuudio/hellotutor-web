'use client';

import React, { useState, useEffect } from 'react';
import { useCookieConsent } from '../providers/CookieConsentProvider';
import { Button } from '@/components/ui/Button';

export function CookieSettingsModal() {
  const { consent, updateConsent, isSettingsOpen, closeSettings } = useCookieConsent();
  
  const [localConsent, setLocalConsent] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    if (consent) {
      setLocalConsent({
        necessary: true,
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
    }
  }, [consent, isSettingsOpen]);

  if (!isSettingsOpen) {
    return null;
  }

  const handleSave = () => {
    updateConsent(localConsent);
    closeSettings();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-xl p-6 shadow-2xl bg-surface max-h-full overflow-y-auto">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-content">Cookie Settings</h2>
          <button 
            onClick={closeSettings}
            className="rounded-full p-2 hover:bg-surface-hover transition-colors text-content cursor-pointer"
            aria-label="Close settings"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Necessary Cookies */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg text-content">Strictly Necessary</h3>
              <p className="text-sm mt-1 text-content-secondary">
                These cookies are essential for the website to function properly. They cannot be disabled.
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked="true"
              disabled
              className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-edge-focus focus:ring-offset-2 bg-surface-brand opacity-50 cursor-not-allowed"
            >
              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
            </button>
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg text-content">Analytics</h3>
              <p className="text-sm mt-1 text-content-secondary">
                Help us improve our website by collecting and reporting information on its usage (e.g., Google Analytics, Microsoft Clarity).
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={localConsent.analytics}
              onClick={() => setLocalConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
              className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-edge-focus focus:ring-offset-2 cursor-pointer ${
                localConsent.analytics ? 'bg-surface-brand' : 'bg-surface-strong'
              }`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  localConsent.analytics ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-lg text-content">Marketing</h3>
              <p className="text-sm mt-1 text-content-secondary">
                Used to track visitors across websites to display relevant advertisements.
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={localConsent.marketing}
              onClick={() => setLocalConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
              className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-edge-focus focus:ring-offset-2 cursor-pointer ${
                localConsent.marketing ? 'bg-surface-brand' : 'bg-surface-strong'
              }`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  localConsent.marketing ? 'translate-x-6' : 'translate-x-1'
                }`} 
              />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Button onClick={handleSave} className="w-full">
            Save preferences
          </Button>
        </div>
      </div>
    </div>
  );
}
