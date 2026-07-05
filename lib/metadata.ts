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
  const hasBrand = title.includes('Hello Tutor') || title.includes('HelloTutor');
  const finalTitle = hasBrand ? title : `${title} | Hello Tutor`;

  return {
    title: finalTitle,
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
        'ae-en': `${siteConfig.url}${path}`,
        'ae-ar': `${siteConfig.url}/ae-ar${path}`,
      },
    },
    openGraph: {
      title: finalTitle,
      description: description || undefined,
      url,
      siteName: siteConfig.name,
      locale: locale === 'ae-ar' ? 'ar_AE' : 'en_GB',
      type: 'website',
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: finalTitle,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: description || undefined,
      images: image ? [image] : [],
    },
    icons: {
      icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/favicon/favicon-2.png',
      shortcut: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/favicon/favicon-2.png',
      apple: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/favicon/favicon-2.png',
    },
  };
}
