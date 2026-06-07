import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/how-it-works',
    '/pricing',
    '/subjects',
    '/levels',
    '/about',
    '/contact',
    '/become-a-tutor',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add more dynamic routes here as they are developed (e.g. subjects/[slug])
  
  return routes;
}
