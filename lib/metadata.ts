import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface CreateMetadataParams {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  locale?: string;
  noIndex?: boolean;
}

/**
 * Generate consistent metadata for any page.
 * Handles title, description, canonical URL, Open Graph, Twitter card, and hreflang.
 */
export function createMetadata({
  title,
  description = siteConfig.description,
  path = '',
  image = siteConfig.ogImage,
  locale = 'en',
  noIndex = false,
}: CreateMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description: description || undefined,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}${path}`,
        ar: `${siteConfig.url}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description: description || undefined,
      url,
      siteName: siteConfig.name,
      locale: locale === 'ar' ? 'ar_AE' : 'en_GB',
      type: 'website',
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: description || undefined,
      images: image ? [image] : [],
    },
  };
}
