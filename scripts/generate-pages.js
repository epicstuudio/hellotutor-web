/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../app/[locale]');

const pages = [
  '/how-it-works',
  '/pricing',
  '/subjects',
  '/subjects/maths-tutoring',
  '/subjects/english-tutoring',
  '/subjects/science-tutoring',
  '/subjects/physics-tutoring',
  '/subjects/chemistry-tutoring',
  '/subjects/biology-tutoring',
  '/subjects/arabic-tutoring',
  '/subjects/exam-preparation',
  '/levels/primary-tutors',
  '/levels/ks3-tutors',
  '/levels/gcse-tutors',
  '/levels/igcse-tutors',
  '/levels/a-level-tutors',
  '/about',
  '/about/for-parents',
  '/about/safety-and-trust',
  '/contact',
  '/become-a-tutor',
  '/tutors-faqs',
  '/students-faqs',
  '/safeguarding',
  '/tutor-code-of-conduct',
  '/student-code-of-conduct',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-and-conditions',
];

pages.forEach((route) => {
  const dirPath = path.join(baseDir, route);
  fs.mkdirSync(dirPath, { recursive: true });

  const title = route
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Uses ONLY semantic tokens from design.md:
  // bg-surface-alt (gray-100) for hero gradient start
  // bg-surface   (gray-50)  for hero gradient end (same as body)
  // text-content (gray-950) for headings
  // text-content-tertiary(gray-600) for body text
  const content = `import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { JsonLd } from '@/components/seo/JsonLd';

export default async function ${title.replace(/\s+/g, '')}Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <JsonLd />
      <Section className="bg-gradient-to-b from-surface-alt to-surface">
        <Container className="py-20 text-center">
          <h1 className="text-display-lg text-content mb-6">${title}</h1>
          <p className="text-body-xl-regular text-content-tertiary max-w-2xl mx-auto">
            This page is currently under construction. Content strategy pending.
          </p>
        </Container>
      </Section>
    </>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
});

console.log(`Successfully regenerated ${pages.length} pages with semantic tokens.`);
