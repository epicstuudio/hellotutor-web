'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
} | null;

interface CookieConsentContextType {
  consent: ConsentState;
  hasInteracted: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  updateConsent: (newConsent: NonNullable<ConsentState>) => void;
  openSettings: () => void;
  closeSettings: () => void;
  isSettingsOpen: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [hasInteracted, setHasInteracted] = useState(true); // Default true to avoid flash before effect runs
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('hellotutor-cookie-consent');
    if (stored) {
      try {
        setConsent(JSON.parse(stored));
        setHasInteracted(true);
      } catch (e) {
        console.error('Failed to parse cookie consent', e);
        setHasInteracted(false);
      }
    } else {
      setHasInteracted(false);
    }
  }, []);

  const saveConsent = (newConsent: NonNullable<ConsentState>) => {
    localStorage.setItem('hellotutor-cookie-consent', JSON.stringify(newConsent));
    setConsent(newConsent);
    setHasInteracted(true);
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const updateConsent = (newConsent: NonNullable<ConsentState>) => {
    saveConsent(newConsent);
  };

  const openSettings = () => setIsSettingsOpen(true);
  const closeSettings = () => setIsSettingsOpen(false);

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasInteracted,
        acceptAll,
        acceptNecessary,
        updateConsent,
        isSettingsOpen,
        openSettings,
        closeSettings,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
