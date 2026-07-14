'use client';

import dynamic from 'next/dynamic';

export const LazyHowItWorks = dynamic(() => import('@/components/home/HowItWorks').then(mod => mod.HowItWorks), { ssr: false });
export const LazyWhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs').then(mod => mod.WhyChooseUs), { ssr: false });
export const LazyCTASection = dynamic(() => import('@/components/shared/CTASection').then(mod => mod.CTASection), { ssr: false });
