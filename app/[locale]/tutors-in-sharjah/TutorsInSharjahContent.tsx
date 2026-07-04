import { useTranslations } from 'next-intl';
import { BaseHero } from '@/components/shared/BaseHero';
import { CommonChallenges } from '@/components/shared/CommonChallenges';
import { SchoolsWeSupport } from '@/components/shared/SchoolsWeSupport';
import { WhatWeCover } from '@/components/shared/WhatWeCover';
import { Testimonials } from '@/components/shared/Testimonials';
import { SubjectHowItWorks } from '@/components/shared/SubjectHowItWorks';
import { SubjectFAQs } from '@/components/shared/SubjectFAQs';
import { CTASection } from '@/components/shared/CTASection';

export function TutorsInSharjahContent() {
  const t = useTranslations('tutorsInSharjah');

  return (
    <div className="flex flex-col min-h-screen bg-background w-full">
      {/* SECTION 1 — HERO */}
      <BaseHero
        title={t('hero.headline')}
        subtitle={t('hero.subheadline')}
        imageSrc="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/Primary-Tutors/PrimaryHero.png"
        imageClassName="object-bottom lg:object-[center_60%]"
        trustText={t('hero.trustText')}
      />



      {/* SECTION 3 — WHY DUBAI FAMILIES CHOOSE ONLINE TUTORING */}
      <CommonChallenges translationKey="tutorsInSharjah.whyChoose" />

      {/* SECTION 4 — SCHOOLS WE SUPPORT STUDENTS FROM */}
      <SchoolsWeSupport translationKey="tutorsInSharjah.schools" />

      {/* SECTION 5 — WHAT WE COVER */}
      <WhatWeCover 
        translationKey="tutorsInSharjah.whatWeCover" 
        images={[
          '/images/subjects/maths-hero.jpg',
          '/images/subjects/english-hero.jpg',
          '/images/subjects/science-hero.jpg'
        ]}
      />

      {/* SECTION 6 — TRUSTED BY PARENTS ACROSS DUBAI */}
      <Testimonials translationKey="tutorsInSharjah.testimonials" />

      {/* SECTION 4 — HOW IT WORKS */}
      <SubjectHowItWorks 
        translationKey="tutorsInSharjah.howItWorks" 
        imageSrc="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/Primary-Tutors/PrimaryStudents.jpg"
      />

      {/* SECTION 8 — FAQS */}
      <SubjectFAQs translationKey="tutorsInSharjah.faqs" />

      {/* SECTION 9 — CTA FOOTER */}
      <CTASection
        title={t('cta.title')}
        subtitle={t('cta.subtitle')}
        buttonText={t('cta.primaryBtn')}
        buttonHref="/contact"
      />
    </div>
  );
}
