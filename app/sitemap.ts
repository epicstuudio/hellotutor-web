import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/how-it-works',
    '/pricing',
    '/subjects',
    '/subjects/maths-tutoring',
    '/subjects/science-tutoring',
    '/subjects/english-tutoring',
    '/subjects/chemistry-tutoring',
    '/subjects/physics-tutoring',
    '/subjects/biology-tutoring',
    '/subjects/arabic-tutoring',
    '/levels',
    '/levels/primary-tutors',
    '/levels/secondary-tutors/ks3',
    '/levels/secondary-tutors/gcse',
    '/levels/secondary-tutors/igcse',
    '/levels/secondary-tutors/a-level',
    '/university-admissions',
    '/admissions-abroad',
    '/exam-preparation',
    '/tutors-in-dubai',
    '/tutors-in-abu-dhabi',
    '/tutors-in-sharjah',
    '/about',
    '/contact',
    '/become-a-tutor',
    '/faqs',
    '/students-faqs',
    '/tutors-faqs',
    '/parents',
    '/safety-and-trust',
    '/safeguarding',
    '/privacy-policy',
    '/cookie-policy',
    '/terms-and-conditions',
    '/student-code-of-conduct',
    '/tutor-code-of-conduct',
  ].map((route) => {
    const url = `${siteConfig.url}${route}`;
    const url_ar = `${siteConfig.url}/ae-ar${route}`;
    return {
      url,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
      alternates: {
        languages: {
          'ae-en': url,
          'ae-ar': url_ar,
        },
      },
    };
  });

  return routes;
}
