export interface NavItem {
  titleKey: string;
  href?: string;
  children?: NavItem[];
  external?: boolean;
}

/**
 * Main navigation items — used by Header.
 * \`titleKey\` maps to messages/[locale].json via \`nav.*\` or \`subjects.*\` etc.
 */
export const mainNav: NavItem[] = [
  { titleKey: 'nav.howItWorks', href: '/how-it-works' },
  { titleKey: 'nav.pricing', href: '/pricing' },
  {
    titleKey: 'nav.subjects',
    children: [
      { titleKey: 'subjects.mathsTutoring', href: '/subjects/maths-tutoring' },
      { titleKey: 'subjects.englishTutoring', href: '/subjects/english-tutoring' },
      {
        titleKey: 'subjects.scienceTutoring',
        children: [
          { titleKey: 'subjects.scienceTutoring', href: '/subjects/science-tutoring' },
          { titleKey: 'subjects.physicsTutoring', href: '/subjects/physics-tutoring' },
          { titleKey: 'subjects.chemistryTutoring', href: '/subjects/chemistry-tutoring' },
          { titleKey: 'subjects.biologyTutoring', href: '/subjects/biology-tutoring' },
        ],
      },
      { titleKey: 'subjects.arabicTutoring', href: '/subjects/arabic-tutoring' },
      { titleKey: 'subjects.examPreparation', href: '/subjects/exam-preparation' },
      { titleKey: 'subjects.allSubjects', href: '/subjects' },
    ],
  },
  {
    titleKey: 'nav.levels',
    children: [
      { titleKey: 'levels.primaryTutors', href: '/levels/primary-tutors' },
      { titleKey: 'levels.ks3Tutors', href: '/levels/ks3-tutors' },
      { titleKey: 'levels.gcseTutors', href: '/levels/gcse-tutors' },
      { titleKey: 'levels.igcseTutors', href: '/levels/igcse-tutors' },
      { titleKey: 'levels.aLevelTutors', href: '/levels/a-level-tutors' },
    ],
  },
  {
    titleKey: 'nav.about',
    children: [
      { titleKey: 'about.forParents', href: '/about/for-parents' },
      { titleKey: 'about.aboutUs', href: '/about' },
      { titleKey: 'about.safetyAndTrust', href: '/about/safety-and-trust' },
      { titleKey: 'about.allFaqs', href: '/about/all-faqs' },
    ],
  },
  { titleKey: 'nav.contact', href: '/contact' },
  { titleKey: 'nav.becomeATutor', href: '/become-a-tutor' },
];

/**
 * Footer Top Navigation (Right Side)
 */
export const footerTopNav: { titleKey: string; items: NavItem[] }[] = [
  {
    titleKey: 'footer.helloTutor',
    items: [
      { titleKey: 'about.aboutUs', href: '/about' },
      { titleKey: 'footer.parentsFaqs', href: '/about/all-faqs?tab=parents' },
      { titleKey: 'nav.howItWorks', href: '/how-it-works' },
      { titleKey: 'subjects.allSubjects', href: '/subjects' },
    ],
  },
  {
    titleKey: 'footer.resources',
    items: [
      { titleKey: 'footer.safeguarding', href: '/safeguarding' },
      { titleKey: 'nav.contact', href: '/contact' },
    ],
  },
];

/**
 * Footer Bottom Navigation (Right Side)
 */
export const footerBottomNav: { titleKey: string; items: NavItem[] }[] = [
  {
    titleKey: 'footer.tutors',
    items: [
      { titleKey: 'nav.becomeATutor', href: '/become-a-tutor' },
      { titleKey: 'footer.tutorCodeOfConduct', href: '/tutor-code-of-conduct' },
      { titleKey: 'footer.tutorsFaqs', href: '/about/all-faqs?tab=tutors' },
    ],
  },
  {
    titleKey: 'footer.students',
    items: [
      { titleKey: 'footer.studentsFaqs', href: '/about/all-faqs?tab=students' },
      { titleKey: 'footer.studentCodeOfConduct', href: '/student-code-of-conduct' },
    ],
  },
];

/**
 * Footer Legal Navigation (Bottom Row)
 */
export const footerLegalNav: NavItem[] = [
  { titleKey: 'footer.privacyPolicy', href: '/privacy-policy' },
  { titleKey: 'footer.cookiePolicy', href: '/cookie-policy' },
  { titleKey: 'footer.termsAndConditions', href: '/terms-and-conditions' },
];
