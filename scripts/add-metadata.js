/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const pages = [
  {
    file: 'app/[locale]/subjects/page.tsx',
    namespace: 'subjectPages.allSubjects',
    path: '/subjects',
  },
  {
    file: 'app/[locale]/subjects/maths-tutoring/page.tsx',
    namespace: 'subjectPages.mathsTutoring',
    path: '/subjects/maths-tutoring',
  },
  {
    file: 'app/[locale]/subjects/english-tutoring/page.tsx',
    namespace: 'subjectPages.englishTutoring',
    path: '/subjects/english-tutoring',
  },
  {
    file: 'app/[locale]/subjects/science-tutoring/page.tsx',
    namespace: 'subjectPages.scienceTutoring',
    path: '/subjects/science-tutoring',
  },
  {
    file: 'app/[locale]/subjects/arabic-tutoring/page.tsx',
    namespace: 'subjectPages.arabicTutoring',
    path: '/subjects/arabic-tutoring',
  },
  {
    file: 'app/[locale]/subjects/exam-preparation/page.tsx',
    namespace: 'subjectPages.examPreparation',
    path: '/subjects/exam-preparation',
  },
  {
    file: 'app/[locale]/subjects/physics-tutoring/page.tsx',
    namespace: 'subjectPages.physicsTutoring',
    path: '/subjects/physics-tutoring',
  },
  {
    file: 'app/[locale]/subjects/chemistry-tutoring/page.tsx',
    namespace: 'subjectPages.chemistryTutoring',
    path: '/subjects/chemistry-tutoring',
  },
  {
    file: 'app/[locale]/subjects/biology-tutoring/page.tsx',
    namespace: 'subjectPages.biologyTutoring',
    path: '/subjects/biology-tutoring',
  },
  {
    file: 'app/[locale]/levels/primary-tutors/page.tsx',
    namespace: 'levelPages.primaryTutors',
    path: '/levels/primary-tutors',
  },
  {
    file: 'app/[locale]/levels/ks3-tutors/page.tsx',
    namespace: 'levelPages.ks3Tutors',
    path: '/levels/ks3-tutors',
  },
  {
    file: 'app/[locale]/levels/gcse-tutors/page.tsx',
    namespace: 'levelPages.gcseTutors',
    path: '/levels/gcse-tutors',
  },
  {
    file: 'app/[locale]/levels/igcse-tutors/page.tsx',
    namespace: 'levelPages.igcseTutors',
    path: '/levels/igcse-tutors',
  },
  {
    file: 'app/[locale]/levels/a-level-tutors/page.tsx',
    namespace: 'levelPages.aLevelTutors',
    path: '/levels/a-level-tutors',
  },
];

const generateMetadataFn = ({ namespace, path }) => `export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: '${namespace}' });
  return createMetadata({
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '${path}',
    locale,
  });
}

`;

for (const page of pages) {
  let content = fs.readFileSync(page.file, 'utf8');

  // Skip if already has generateMetadata
  if (content.includes('generateMetadata')) {
    console.log(`Skipping ${page.file} (already has generateMetadata)`);
    continue;
  }

  // Add imports after the first import block or before JsonLd if possible
  // Insert createMetadata and Metadata imports after the last import from 'next-intl/server'
  content = content.replace(
    "import { setRequestLocale } from 'next-intl/server';\nimport { getTranslations } from 'next-intl/server';",
    "import { setRequestLocale } from 'next-intl/server';\nimport { getTranslations } from 'next-intl/server';\nimport { createMetadata } from '@/lib/metadata';\nimport type { Metadata } from 'next';",
  );

  // Add generateMetadata before export default
  const metadataBlock = generateMetadataFn(page);
  content = content.replace(
    /export default async function/,
    metadataBlock + 'export default async function',
  );

  fs.writeFileSync(page.file, content);
  console.log(`Updated ${page.file}`);
}
