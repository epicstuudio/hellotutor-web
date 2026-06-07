'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to detect if viewport matches a media query.
 * Uses the 3-breakpoint system: mobile (<768), tablet (768-1279), desktop (1280+).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

/** Convenience hooks for the 3 breakpoints */
export function useIsMobile() {
  return useMediaQuery('(max-width: 767px)');
}

export function useIsTablet() {
  return useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
}

export function useIsDesktop() {
  return useMediaQuery('(min-width: 1280px)');
}
