import { siteConfig } from '@/config/site';

interface JsonLdProps {
 type?: 'WebSite' | 'Organization' | 'LocalBusiness' | 'BreadcrumbList' | 'FAQPage';
 data?: Record<string, unknown>;
}

export function JsonLd({ type = 'Organization', data }: JsonLdProps) {
 const baseData = {
 '@context': 'https://schema.org',
 '@type': type,
 };

 const defaultOrganizationData = {
 name: siteConfig.name,
 url: siteConfig.url,
 logo: siteConfig.ogImage,
 sameAs: Object.values(siteConfig.links).filter(Boolean),
 contactPoint: {
 '@type': 'ContactPoint',
 contactType: 'customer support',
 availableLanguage: ['English', 'Arabic'],
 },
 };

 const finalData = {
 ...baseData,
 ...(type === 'Organization' && !data ? defaultOrganizationData : data),
 };

 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(finalData) }}
 />
 );
}
