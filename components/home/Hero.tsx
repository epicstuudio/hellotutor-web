'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';
import { TrustBadge } from '@/components/shared/TrustBadge';
import { AnimatedNumber } from '@/components/shared/AnimatedNumber';
import { HeroVisual } from './HeroVisual';
import { siteConfig } from '@/config/site';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

/* ─── Tutor data ─── */
const TUTORS = [
  {
    id: 1,
    name: 'Alex P.',
    subject: 'IGCSE Maths Expert',
    tags: ['5+ Years', '4.9★', 'Available'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/1.png',
  },
  {
    id: 2,
    name: 'Maria L.',
    subject: 'Physics Specialist',
    tags: ['8 Years', '4.8★', 'Evenings'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/2.png',
  },
  {
    id: 3,
    name: 'Sam R.',
    subject: 'Chemistry Tutor',
    tags: ['3 Years', '5.0★', 'Flexible'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/3.png',
  },
  {
    id: 4,
    name: 'John K.',
    subject: 'Biology Expert',
    tags: ['6 Years', '4.7★', 'Weekends'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/4.png',
  },
  {
    id: 5,
    name: 'Lisa W.',
    subject: 'English Literature',
    tags: ['4 Years', '4.9★', 'Morning'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/5.png',
  },
  {
    id: 6,
    name: 'Tom H.',
    subject: 'Computer Science',
    tags: ['7 Years', '4.8★', 'Flexible'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/6.png',
  },
  {
    id: 7,
    name: 'Emma D.',
    subject: 'Economics Tutor',
    tags: ['5 Years', '4.6★', 'Evenings'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/7.png',
  },
  {
    id: 8,
    name: 'Ryan M.',
    subject: 'Add Maths Expert',
    tags: ['10 Years', '5.0★', 'Available'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/8.png',
  },
  {
    id: 9,
    name: 'Kate S.',
    subject: 'Physics & Maths',
    tags: ['4 Years', '4.9★', 'Morning'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/9.png',
  },
  {
    id: 10,
    name: 'Dan B.',
    subject: 'Geography Expert',
    tags: ['6 Years', '4.7★', 'Flexible'],
    image: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/white-portrait/10.png',
  },
];

const MATCH_AFTER_STEPS = 4; // Match after rotating through 4 tutors
const MATCHED_HOLD_DURATION = 8000; // Hold matched state for 8 seconds
const STEP_INTERVAL = 4500; // 4.5s per tutor rotation step

export function Hero() {
  const t = useTranslations();

  // ─── Animation state machine ───
  const [phase, setPhase] = useState<'matching' | 'matched'>('matching');
  const [step, setStep] = useState(0);

  // The tutor that gets "matched" after MATCH_AFTER_STEPS rotations
  const count = TUTORS.length;
  const matchedIndex = (count - (step % count)) % count;
  const matchedTutor = TUTORS[matchedIndex];

  // Phase 1: step the dial every STEP_INTERVAL
  useEffect(() => {
    if (phase !== 'matching') return;

    const timer = setInterval(() => {
      setStep((s) => {
        const next = s + 1;
        // After MATCH_AFTER_STEPS rotations, trigger Phase 2
        if (next >= MATCH_AFTER_STEPS) {
          setTimeout(() => setPhase('matched'), 1300); // wait for last rotation to finish
        }
        return next;
      });
    }, STEP_INTERVAL);

    return () => clearInterval(timer);
  }, [phase]);

  // Phase 2: hold matched state, then reset
  useEffect(() => {
    if (phase !== 'matched') return;

    const timer = setTimeout(() => {
      setPhase('matching');
      setStep(0);
    }, MATCHED_HOLD_DURATION);

    return () => clearTimeout(timer);
  }, [phase]);

  const rotation = 180 + step * (360 / count);

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pt-[calc(40px+8rem)] xl:pt-[calc(48px+8rem)] pb-0">
        <Container className="relative z-10 w-full h-full">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 lg:gap-8 items-stretch h-full">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-start pb-16 lg:pb-24">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-h1 text-content mb-6 "
              >
                <HighlightText words="need">{t('hero.titleLine1')}</HighlightText>{' '}
                <br className="hidden lg:block" />
                <HighlightText words="deserve">{t('hero.titleLine2')}</HighlightText>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-base text-content-secondary mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 mb-4"
              >
                <Button
                  href={siteConfig.whatsappUrl}
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  hoverChildren={siteConfig.whatsappFormatted}
                  hoverStartSlot={<WhatsAppIcon className="w-5 h-5" />}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t('common.bookConsultation')}
                </Button>
                <Button
                  href="/how-it-works"
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {t('common.howItWorks')}
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-body-xs text-content-tertiary mb-12"
              >
                {t('hero.noCommitment')}
              </motion.p>

              {/* Stats Strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start text-start pt-4"
              >
                <div className="flex-1">
                  <div className="text-h3 lg:text-h2 text-content mb-1 tracking-tight flex items-baseline">
                    <AnimatedNumber value={t('hero.stat1Value')} duration={2} delay={0.6} />
                    <span className="text-3xl font-extralight text-content ms-1 font-sans">+</span>
                  </div>
                  <div className="text-body-sm text-content-secondary">{t('hero.stat1Label')}</div>
                </div>
                <div className="flex-1">
                  <div className="text-h3 lg:text-h2 text-content mb-1 tracking-tight">
                    <AnimatedNumber value={t('hero.stat2Value')} duration={2} delay={0.8} />
                  </div>
                  <div className="text-body-sm text-content-secondary">{t('hero.stat2Label')}</div>
                </div>
                <div className="flex-1">
                  <div className="text-h3 lg:text-h2 text-content mb-1 tracking-tight flex items-end gap-2">
                    <AnimatedNumber value={t('hero.stat3Value')} duration={2} delay={1} />
                    <svg className="w-6 h-6 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div className="text-body-sm text-content-secondary">{t('hero.stat3Label')}</div>
                </div>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center lg:items-start mt-12 lg:mt-16"
              >
                <TrustBadge />
              </motion.div>
            </div>

            {/* Right Column — Visual + Dial */}
            <div className="relative z-0 mt-8 lg:mt-0 min-w-0 lg:overflow-visible flex items-center justify-center">
              {/* Animation Temporarily Hidden
              <HeroVisual
                phase={phase}
                matchedTutor={{
                  name: matchedTutor.name,
                  subject: matchedTutor.subject,
                  tags: matchedTutor.tags,
                  image: matchedTutor.image,
                }}
              />
              <AnimatePresence>
                {phase === 'matching' && (
                  <motion.div
                    key="dial-container-desktop"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 overflow-visible hidden lg:block pointer-events-none"
                  >
                    <TutorDial
                      step={step}
                      rotation={rotation}
                      matchedIndex={matchedIndex}
                      variant="desktop"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              */}
              <Image
                src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/home/her-home.png"
                alt="Hero Image"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-3xl"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

/* ─── TutorDial (desktop only) ─── */
interface TutorDialProps {
  step: number;
  rotation: number;
  matchedIndex: number;
  variant?: string;
}

function TutorDial({ rotation, matchedIndex }: TutorDialProps) {
  const radius = 340;
  const count = TUTORS.length;

  return (
    <div className="relative w-full h-full">
      <motion.div
        className="absolute"
        style={{
          width: radius * 2,
          height: radius * 2,
          insetInlineEnd: -(radius * 2.27),
          top: '50%',
          translate: '0 -50%',
        }}
        animate={{ rotate: rotation }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Dashed orbit ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-200/60" />

        {/* Tutor avatars — counter-rotated to stay upright */}
        {TUTORS.map((tutor, i) => {
          const angleDeg = (i * 360) / count;
          const rad = (angleDeg * Math.PI) / 180;
          const x = radius + radius * Math.cos(rad);
          const y = radius + radius * Math.sin(rad);
          const isMatched = i === matchedIndex;

          return (
            <div
              key={tutor.id}
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                animate={{
                  rotate: -rotation,
                  scale: isMatched ? 1.3 : 1,
                }}
                transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              >
                <div
                  className={`w-16 h-16 rounded-full border-2 overflow-hidden flex items-center justify-center transition-all duration-700 relative ${isMatched
                    ? 'border-green-400 bg-surface-base shadow-[0_0_20px_var(--color-green-200)]'
                    : 'border-green-200 bg-surface-base'
                    }`}
                >
                  {tutor.image ? (
                    <Image
                      src={tutor.image}
                      alt={tutor.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                      unoptimized
                    />
                  ) : (
                    <span
                      className={`font-semibold text-sm ${isMatched ? 'text-green-600' : 'text-content-success'
                        }`}
                    >
                      {tutor.name[0]}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
