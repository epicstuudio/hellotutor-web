/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const enPath = 'messages/en.json';
const arPath = 'messages/ar.json';

const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const arData = JSON.parse(fs.readFileSync(arPath, 'utf8'));

// --- ENGLISH UPDATES ---

// 1. Home metadata
enData.metadata.homeTitle = 'Online Tutoring Dubai & UAE | IGCSE, IB & A-Level | Hello Tutor';
enData.metadata.homeDescription =
  'Expert 1:1 online tutoring for IGCSE, IB & A-Level students in Dubai & UAE. 500+ vetted tutors, 95% improve grades. We match the right tutor. Book a free consultation.';

// 2. How It Works
enData.howItWorksPageHero = enData.howItWorksPageHero || {};
enData.howItWorksPageHero.metaTitle = 'How Hello Tutor Works | Expert Tutor Matching Dubai & UAE';
enData.howItWorksPageHero.metaDescription =
  "From free consultation to first lesson in 4 simple steps. We find the right tutor for your child's curriculum and goals. No browsing, no guesswork. See how it works.";

// 3. Pricing
enData.pricingPageHero = enData.pricingPageHero || {};
enData.pricingPageHero.metaTitle = 'Online Tutoring Prices Dubai | From AED 265 | Hello Tutor';
enData.pricingPageHero.metaDescription =
  'Clear online tutoring pricing from AED 265 per lesson. Flexible weekly plans, save up to AED 600/month. No hidden fees. No long-term contracts. Cancel anytime.';

// 4. About Us
enData.aboutPages = enData.aboutPages || {};
enData.aboutPages.aboutUs = enData.aboutPages.aboutUs || {};
enData.aboutPages.aboutUs.metaTitle = 'About Hello Tutor | Online Tutoring Dubai Since 2018';
enData.aboutPages.aboutUs.metaDescription =
  'Hello Tutor has matched students with expert tutors across Dubai & the UAE since 2018. 10,000+ lessons delivered, 5,000+ students supported. Meet the team behind it.';

// 5. For Parents
enData.aboutPages.forParents = enData.aboutPages.forParents || {};
enData.aboutPages.forParents.metaTitle = 'Online Tutoring for Parents in Dubai & UAE | Hello Tutor';
enData.aboutPages.forParents.metaDescription =
  'We handle everything — tutor matching, progress tracking and ongoing support. Stress-free tutoring for busy parents across Dubai & UAE. See why families choose us.';

// 6. Safety & Trust
enData.aboutPages.safetyAndTrust = enData.aboutPages.safetyAndTrust || {};
enData.aboutPages.safetyAndTrust.metaTitle =
  'Child Safety & Safeguarding | Hello Tutor Dubai & UAE';
enData.aboutPages.safetyAndTrust.metaDescription =
  "Every Hello Tutor tutor is DBS-checked and MOHRE licensed. Your child's safety comes first — from first lesson to last. Learn about our safeguarding standards.";

// 7. Contact
enData.contactPage = enData.contactPage || {};
enData.contactPage.metaTitle = 'Contact Hello Tutor | Book a Free Trial Lesson | Dubai & UAE';
enData.contactPage.metaDescription =
  'Get in touch with Hello Tutor. Book a free consultation, ask about tutors, pricing, or subjects. Expert support for IGCSE, IB & A-Level students in Dubai & UAE.';

// 8. Become a Tutor
enData.becomeATutorPage = enData.becomeATutorPage || {};
enData.becomeATutorPage.metaTitle = 'Become an Online Tutor in Dubai & UAE | Hello Tutor';
enData.becomeATutorPage.metaDescription =
  'Join 500+ tutors already teaching with Hello Tutor. We match students to you — no hunting for clients. Flexible hours, competitive pay. Apply in minutes.';

// 9. All FAQs
enData.allFaqs = enData.allFaqs || {};
enData.allFaqs.metaTitle = 'FAQs | Hello Tutor Online Tutoring Dubai & UAE';
enData.allFaqs.metaDescription =
  'Answers to common questions about Hello Tutor. Learn about tutor matching, IGCSE and IB support, pricing, safety and how to get started in Dubai & UAE.';

// 10. Subjects Hub
enData.subjectPages = enData.subjectPages || {};
enData.subjectPages.allSubjects = enData.subjectPages.allSubjects || {};
enData.subjectPages.allSubjects.metaTitle =
  'Online Tutoring Subjects | IGCSE, IB & A-Level | Hello Tutor UAE';
enData.subjectPages.allSubjects.metaDescription =
  "Expert tutoring in Maths, English, Science & Arabic — from Primary through IGCSE, A-Level and IB. Tutors matched to your child's curriculum. Book a free consultation.";

// 11. Maths
enData.subjectPages.mathsTutoring = enData.subjectPages.mathsTutoring || {};
enData.subjectPages.mathsTutoring.metaTitle =
  'Online Maths Tutors Dubai | IGCSE, IB & A-Level | Hello Tutor';
enData.subjectPages.mathsTutoring.metaDescription =
  '1:1 Maths tutoring across Dubai & UAE for IGCSE, IB, A-Level and Primary. Expert tutors matched to your curriculum. Build confidence and improve grades. Book a free consultation.';

// 12. English
enData.subjectPages.englishTutoring = enData.subjectPages.englishTutoring || {};
enData.subjectPages.englishTutoring.metaTitle =
  'Online English Tutors Dubai | IGCSE, A-Level, IB | Hello Tutor';
enData.subjectPages.englishTutoring.metaDescription =
  'Expert 1:1 English tutoring in Dubai & UAE. IGCSE, A-Level and IB support across reading, writing, comprehension and exam technique. Matched to your curriculum.';

// 13. Science
enData.subjectPages.scienceTutoring = enData.subjectPages.scienceTutoring || {};
enData.subjectPages.scienceTutoring.metaTitle =
  'Online Science Tutors Dubai | IGCSE, IB & A-Level | Hello Tutor';
enData.subjectPages.scienceTutoring.metaDescription =
  'Expert Biology, Chemistry and Physics tutoring in Dubai & UAE. IGCSE, IB and A-Level specialists matched to your exam board. 1:1 online sessions. Free consultation.';

// 14. Arabic
enData.subjectPages.arabicTutoring = enData.subjectPages.arabicTutoring || {};
enData.subjectPages.arabicTutoring.metaTitle =
  'Online Arabic Tutors Dubai & UAE | Native & Non-Native | Hello Tutor';
enData.subjectPages.arabicTutoring.metaDescription =
  'Expert Arabic tutoring for native and non-native speakers across Dubai & UAE. All levels and curriculum covered. Build fluency and confidence with a matched tutor.';

// 15. Exam Preparation
enData.subjectPages.examPreparation = enData.subjectPages.examPreparation || {};
enData.subjectPages.examPreparation.metaTitle =
  'Exam Prep Tutors Dubai | IGCSE, IB & A-Level | Hello Tutor';
enData.subjectPages.examPreparation.metaDescription =
  'Focused exam preparation for IGCSE, A-Level, IB and 11+ in Dubai & UAE. Expert tutors who sharpen technique, build confidence and improve results. Book a free consultation.';

// 16. Physics
enData.subjectPages.physicsTutoring = enData.subjectPages.physicsTutoring || {};
enData.subjectPages.physicsTutoring.metaTitle =
  'Online Physics Tutors Dubai | IGCSE, A-Level & IB | Hello Tutor';
enData.subjectPages.physicsTutoring.metaDescription =
  'Expert 1:1 Physics tutoring in Dubai & UAE. IGCSE, A-Level and IB support across forces, electricity, mechanics and exam technique. Matched to your exam board.';

// 17. Chemistry
enData.subjectPages.chemistryTutoring = enData.subjectPages.chemistryTutoring || {};
enData.subjectPages.chemistryTutoring.metaTitle =
  'Online Chemistry Tutors Dubai | IGCSE, A-Level & IB | Hello Tutor';
enData.subjectPages.chemistryTutoring.metaDescription =
  'Expert 1:1 Chemistry tutoring in Dubai & UAE. IGCSE, A-Level and IB support across calculations, mechanisms, and exam technique. Matched to your exam board.';

// 18. Biology
enData.subjectPages.biologyTutoring = enData.subjectPages.biologyTutoring || {};
enData.subjectPages.biologyTutoring.metaTitle =
  'Online Biology Tutors Dubai | IGCSE, A-Level & IB | Hello Tutor';
enData.subjectPages.biologyTutoring.metaDescription =
  'Expert 1:1 Biology tutoring in Dubai & UAE. IGCSE, A-Level and IB support across cells, genetics, ecology and exam technique. Matched to your exam board.';

// 19. Primary
enData.levelPages = enData.levelPages || {};
enData.levelPages.primaryTutors = enData.levelPages.primaryTutors || {};
enData.levelPages.primaryTutors.metaTitle =
  'Primary School Tutors Dubai & UAE | Online 1:1 | Hello Tutor';
enData.levelPages.primaryTutors.metaDescription =
  "Expert 1:1 primary tutoring in Maths, English, Science and Arabic for students in Dubai & UAE. Tutors matched to your child's school, curriculum and learning style.";

// 20. KS3
enData.levelPages.ks3Tutors = enData.levelPages.ks3Tutors || {};
enData.levelPages.ks3Tutors.metaTitle =
  'KS3 Tutors Dubai | Years 7–9 Online Tutoring | Hello Tutor UAE';
enData.levelPages.ks3Tutors.metaDescription =
  "Build confidence before IGCSEs with expert KS3 tutoring in Dubai & UAE. Maths, English and Science support for Years 7–9, matched to your child's curriculum.";

// 21. GCSE
enData.levelPages.gcseTutors = enData.levelPages.gcseTutors || {};
enData.levelPages.gcseTutors.metaTitle = 'GCSE Tutors Dubai & UAE | Expert Exam Prep | Hello Tutor';
enData.levelPages.gcseTutors.metaDescription =
  'GCSE tutoring that improves grades and builds exam confidence in Dubai & UAE. Expert tutors matched to AQA, Edexcel & OCR across all subjects. 95% improve.';

// 22. IGCSE
enData.levelPages.igcseTutors = enData.levelPages.igcseTutors || {};
enData.levelPages.igcseTutors.metaTitle =
  'IGCSE Tutors Dubai & UAE | Cambridge, Edexcel & AQA | Hello Tutor';
enData.levelPages.igcseTutors.metaDescription =
  'IGCSE tutoring that boosts grades and builds exam confidence in Dubai & UAE. Expert tutors matched to Cambridge, Edexcel & AQA across all subjects. 95% improve.';

// 23. A-Level
enData.levelPages.aLevelTutors = enData.levelPages.aLevelTutors || {};
enData.levelPages.aLevelTutors.metaTitle =
  'A-Level Tutors Dubai & UAE | Cambridge & Edexcel | Hello Tutor';
enData.levelPages.aLevelTutors.metaDescription =
  'Expert A-Level tutoring for university entrance in Dubai & UAE. Cambridge and Edexcel specialists matched to your subjects and goals. Book a free consultation.';

// 24. Update existing policy pages
enData.safeguarding.metaTitle = 'Child Safety & Safeguarding | Hello Tutor Dubai & UAE';
enData.safeguarding.metaDescription =
  "Every Hello Tutor tutor is DBS-checked and MOHRE licensed. Your child's safety comes first — from first lesson to last. Learn about our safeguarding standards.";

enData.tutorCodeOfConduct.metaTitle = 'Tutor Code of Conduct | Hello Tutor Teaching Standards UAE';
enData.tutorCodeOfConduct.metaDescription =
  'Professional standards and conduct expectations for all Hello Tutor online tutors in Dubai & UAE. Understand our quality, safety and safeguarding requirements.';

enData.studentCodeOfConduct.metaTitle = 'Student Code of Conduct | Hello Tutor | hellotutor.me';
enData.studentCodeOfConduct.metaDescription =
  "Expected behaviour and conduct standards for students on Hello Tutor's online tutoring platform in Dubai & UAE. Read before your first lesson.";

enData.privacyPolicy.metaTitle = 'Privacy Policy | Hello Tutor | hellotutor.me';
enData.privacyPolicy.metaDescription =
  'How Hello Tutor collects, uses and protects your personal data. Read our full privacy policy and data protection standards for students and tutors.';

enData.termsAndConditions.metaTitle = 'Terms & Conditions | Hello Tutor | hellotutor.me';
enData.termsAndConditions.metaDescription =
  "Read Hello Tutor's full terms and conditions before getting started. Covers lessons, tutor matching, payments and cancellations for Dubai & UAE tutoring.";

enData.cookiePolicy.metaTitle = 'Cookie Policy | Hello Tutor | hellotutor.me';
enData.cookiePolicy.metaDescription =
  'How Hello Tutor uses cookies on hellotutor.me. Understand cookie types, purposes and how to manage or disable your cookie preferences.';

// --- ARABIC UPDATES ---

// Note: For Arabic, we'll use English titles/descriptions for now since the user didn't provide Arabic SEO copy.
// The user's brief says "check and add for each page", so English metadata on Arabic pages is acceptable
// if no Arabic translations were provided. However, for a proper UAE site, we should at least provide
// Arabic versions. Since the user didn't provide them, I'll add them as empty or English placeholders.

// Actually, better to just copy English for now to prevent build issues.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function copyEnToAr(enObj, arObj, path) {
  if (!arObj) return;
  const keys = path.split('.');
  let enCurrent = enObj;
  let arCurrent = arObj;
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    if (!enCurrent[k]) return;
    if (!arCurrent[k]) arCurrent[k] = {};
    if (i === keys.length - 1) {
      arCurrent[k] = { ...arCurrent[k], ...enCurrent[k] };
    } else {
      enCurrent = enCurrent[k];
      arCurrent = arCurrent[k];
    }
  }
}

// For now, just sync the metadata fields that exist in both files
// Since ar.json structure mirrors en.json, we can copy over the new keys

// Home metadata
arData.metadata = arData.metadata || {};
arData.metadata.homeTitle = enData.metadata.homeTitle;
arData.metadata.homeDescription = enData.metadata.homeDescription;

// How It Works
arData.howItWorksPageHero = arData.howItWorksPageHero || {};
arData.howItWorksPageHero.metaTitle = enData.howItWorksPageHero.metaTitle;
arData.howItWorksPageHero.metaDescription = enData.howItWorksPageHero.metaDescription;

// Pricing
arData.pricingPageHero = arData.pricingPageHero || {};
arData.pricingPageHero.metaTitle = enData.pricingPageHero.metaTitle;
arData.pricingPageHero.metaDescription = enData.pricingPageHero.metaDescription;

// About
arData.aboutPages = arData.aboutPages || {};
arData.aboutPages.aboutUs = arData.aboutPages.aboutUs || {};
arData.aboutPages.aboutUs.metaTitle = enData.aboutPages.aboutUs.metaTitle;
arData.aboutPages.aboutUs.metaDescription = enData.aboutPages.aboutUs.metaDescription;

arData.aboutPages.forParents = arData.aboutPages.forParents || {};
arData.aboutPages.forParents.metaTitle = enData.aboutPages.forParents.metaTitle;
arData.aboutPages.forParents.metaDescription = enData.aboutPages.forParents.metaDescription;

arData.aboutPages.safetyAndTrust = arData.aboutPages.safetyAndTrust || {};
arData.aboutPages.safetyAndTrust.metaTitle = enData.aboutPages.safetyAndTrust.metaTitle;
arData.aboutPages.safetyAndTrust.metaDescription = enData.aboutPages.safetyAndTrust.metaDescription;

// Contact
arData.contactPage = arData.contactPage || {};
arData.contactPage.metaTitle = enData.contactPage.metaTitle;
arData.contactPage.metaDescription = enData.contactPage.metaDescription;

// Become a Tutor
arData.becomeATutorPage = arData.becomeATutorPage || {};
arData.becomeATutorPage.metaTitle = enData.becomeATutorPage.metaTitle;
arData.becomeATutorPage.metaDescription = enData.becomeATutorPage.metaDescription;

// All FAQs
arData.allFaqs = arData.allFaqs || {};
arData.allFaqs.metaTitle = enData.allFaqs.metaTitle;
arData.allFaqs.metaDescription = enData.allFaqs.metaDescription;

// Subjects
arData.subjectPages = arData.subjectPages || {};

arData.subjectPages.allSubjects = arData.subjectPages.allSubjects || {};
arData.subjectPages.allSubjects.metaTitle = enData.subjectPages.allSubjects.metaTitle;
arData.subjectPages.allSubjects.metaDescription = enData.subjectPages.allSubjects.metaDescription;

arData.subjectPages.mathsTutoring = arData.subjectPages.mathsTutoring || {};
arData.subjectPages.mathsTutoring.metaTitle = enData.subjectPages.mathsTutoring.metaTitle;
arData.subjectPages.mathsTutoring.metaDescription =
  enData.subjectPages.mathsTutoring.metaDescription;

arData.subjectPages.englishTutoring = arData.subjectPages.englishTutoring || {};
arData.subjectPages.englishTutoring.metaTitle = enData.subjectPages.englishTutoring.metaTitle;
arData.subjectPages.englishTutoring.metaDescription =
  enData.subjectPages.englishTutoring.metaDescription;

arData.subjectPages.scienceTutoring = arData.subjectPages.scienceTutoring || {};
arData.subjectPages.scienceTutoring.metaTitle = enData.subjectPages.scienceTutoring.metaTitle;
arData.subjectPages.scienceTutoring.metaDescription =
  enData.subjectPages.scienceTutoring.metaDescription;

arData.subjectPages.arabicTutoring = arData.subjectPages.arabicTutoring || {};
arData.subjectPages.arabicTutoring.metaTitle = enData.subjectPages.arabicTutoring.metaTitle;
arData.subjectPages.arabicTutoring.metaDescription =
  enData.subjectPages.arabicTutoring.metaDescription;

arData.subjectPages.examPreparation = arData.subjectPages.examPreparation || {};
arData.subjectPages.examPreparation.metaTitle = enData.subjectPages.examPreparation.metaTitle;
arData.subjectPages.examPreparation.metaDescription =
  enData.subjectPages.examPreparation.metaDescription;

arData.subjectPages.physicsTutoring = arData.subjectPages.physicsTutoring || {};
arData.subjectPages.physicsTutoring.metaTitle = enData.subjectPages.physicsTutoring.metaTitle;
arData.subjectPages.physicsTutoring.metaDescription =
  enData.subjectPages.physicsTutoring.metaDescription;

arData.subjectPages.chemistryTutoring = arData.subjectPages.chemistryTutoring || {};
arData.subjectPages.chemistryTutoring.metaTitle = enData.subjectPages.chemistryTutoring.metaTitle;
arData.subjectPages.chemistryTutoring.metaDescription =
  enData.subjectPages.chemistryTutoring.metaDescription;

arData.subjectPages.biologyTutoring = arData.subjectPages.biologyTutoring || {};
arData.subjectPages.biologyTutoring.metaTitle = enData.subjectPages.biologyTutoring.metaTitle;
arData.subjectPages.biologyTutoring.metaDescription =
  enData.subjectPages.biologyTutoring.metaDescription;

// Levels
arData.levelPages = arData.levelPages || {};

arData.levelPages.primaryTutors = arData.levelPages.primaryTutors || {};
arData.levelPages.primaryTutors.metaTitle = enData.levelPages.primaryTutors.metaTitle;
arData.levelPages.primaryTutors.metaDescription = enData.levelPages.primaryTutors.metaDescription;

arData.levelPages.ks3Tutors = arData.levelPages.ks3Tutors || {};
arData.levelPages.ks3Tutors.metaTitle = enData.levelPages.ks3Tutors.metaTitle;
arData.levelPages.ks3Tutors.metaDescription = enData.levelPages.ks3Tutors.metaDescription;

arData.levelPages.gcseTutors = arData.levelPages.gcseTutors || {};
arData.levelPages.gcseTutors.metaTitle = enData.levelPages.gcseTutors.metaTitle;
arData.levelPages.gcseTutors.metaDescription = enData.levelPages.gcseTutors.metaDescription;

arData.levelPages.igcseTutors = arData.levelPages.igcseTutors || {};
arData.levelPages.igcseTutors.metaTitle = enData.levelPages.igcseTutors.metaTitle;
arData.levelPages.igcseTutors.metaDescription = enData.levelPages.igcseTutors.metaDescription;

arData.levelPages.aLevelTutors = arData.levelPages.aLevelTutors || {};
arData.levelPages.aLevelTutors.metaTitle = enData.levelPages.aLevelTutors.metaTitle;
arData.levelPages.aLevelTutors.metaDescription = enData.levelPages.aLevelTutors.metaDescription;

// Policy pages
arData.safeguarding = arData.safeguarding || {};
arData.safeguarding.metaTitle = enData.safeguarding.metaTitle;
arData.safeguarding.metaDescription = enData.safeguarding.metaDescription;

arData.tutorCodeOfConduct = arData.tutorCodeOfConduct || {};
arData.tutorCodeOfConduct.metaTitle = enData.tutorCodeOfConduct.metaTitle;
arData.tutorCodeOfConduct.metaDescription = enData.tutorCodeOfConduct.metaDescription;

arData.studentCodeOfConduct = arData.studentCodeOfConduct || {};
arData.studentCodeOfConduct.metaTitle = enData.studentCodeOfConduct.metaTitle;
arData.studentCodeOfConduct.metaDescription = enData.studentCodeOfConduct.metaDescription;

arData.privacyPolicy = arData.privacyPolicy || {};
arData.privacyPolicy.metaTitle = enData.privacyPolicy.metaTitle;
arData.privacyPolicy.metaDescription = enData.privacyPolicy.metaDescription;

arData.termsAndConditions = arData.termsAndConditions || {};
arData.termsAndConditions.metaTitle = enData.termsAndConditions.metaTitle;
arData.termsAndConditions.metaDescription = enData.termsAndConditions.metaDescription;

arData.cookiePolicy = arData.cookiePolicy || {};
arData.cookiePolicy.metaTitle = enData.cookiePolicy.metaTitle;
arData.cookiePolicy.metaDescription = enData.cookiePolicy.metaDescription;

// Write back
fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n');
fs.writeFileSync(arPath, JSON.stringify(arData, null, 2) + '\n');

console.log('Metadata updated successfully in both en.json and ar.json');
