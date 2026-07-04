'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Compass, Users, BookOpen, PartyPopper, Calendar, TrendingUp, Award } from 'lucide-react';
import clsx from 'clsx';

export function Steps() {
  const t = useTranslations('howItWorksPageDetailed');

  const steps = [
    {
      num: 1,
      color: '#FF9F43',
      colorClass: 'text-[#FF9F43]',
      bgClass: 'bg-[#FF9F43]/10',
      borderColor: 'border-[#FF9F43]',
      badgeColor: 'bg-[#FF9F43]',
      icon: Compass,
      layout: 'left', // text left, image right
      badgePos: '-top-6 right-8 lg:right-[-24px]', // badge position on the card
    },
    {
      num: 2,
      color: '#4C6FFF',
      colorClass: 'text-[#4C6FFF]',
      bgClass: 'bg-[#4C6FFF]/10',
      borderColor: 'border-[#4C6FFF]',
      badgeColor: 'bg-[#4C6FFF]',
      icon: Users,
      layout: 'right', // image left, text right
      badgePos: '-top-6 right-8 lg:right-[-24px]',
    },
    {
      num: 3,
      color: '#75ED4D',
      colorClass: 'text-[#66d142]',
      bgClass: 'bg-[#75ED4D]/10',
      borderColor: 'border-[#75ED4D]',
      badgeColor: 'bg-[#66d142]',
      icon: BookOpen,
      layout: 'left',
      badgePos: '-top-6 left-8 lg:left-[-24px]',
    },
    {
      num: 4,
      color: '#FF4C4C',
      colorClass: 'text-[#FF4C4C]',
      bgClass: 'bg-[#FF4C4C]/10',
      borderColor: 'border-[#FF4C4C]',
      badgeColor: 'bg-[#FF4C4C]',
      icon: PartyPopper,
      layout: 'center', // single centered layout
      badgePos: '-top-6 left-1/2 -translate-x-1/2',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-surface py-12 lg:py-20">
      <Container className="relative z-10 w-full max-w-[1091px] mx-auto">
        <div className="text-center flex flex-col pb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 text-content "
          >
            <HighlightText words="Works">{t('title')}</HighlightText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-body-xl text-content-secondary"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Background SVG Path (Desktop only) */}
        <div className="absolute inset-0 hidden lg:block pointer-events-none z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1091 1638"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M545.397 5.39648C545.397 106.504 665.397 182.334 905.397 232.888C1145.4 283.441 1145.4 409.825 905.397 612.039C665.397 814.254 425.397 890.084 185.396 839.53C-54.6035 788.977 -54.6035 940.638 185.396 1294.51C425.397 1648.39 545.397 1724.22 545.397 1522"
              stroke="#FF9F43"
              strokeWidth="10.7924"
              strokeLinecap="round"
              strokeDasharray="26.98 20.24"
            />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col gap-20 lg:gap-32">
          {/* STEP 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full lg:w-1/2 relative"
            >
              <div
                className={clsx(
                  'bg-white rounded-3xl p-8 lg:p-10 border-b-[6px] flex flex-col gap-4',
                  steps[0].borderColor,
                )}
              >
                <div className="absolute -top-6 right-8 lg:-right-6 w-12 h-12 rounded-full text-white font-bold text-xl flex items-center justify-center bg-[#FF9F43]">
                  1
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF9F43]/10 text-[#FF9F43] self-start">
                  <Compass className="w-4 h-4" />
                  {t('steps.1.badge')}
                </div>
                <h3 className="text-h4 text-content">{t('steps.1.title')}</h3>
                <p className="text-body-lg text-content-secondary leading-relaxed">
                  {t('steps.1.desc')}
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full lg:w-1/2"
            >
              <Image
                src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/home/how-it-works-1.png"
                alt={t('steps.1.title')}
                width={800}
                height={600}
                className="w-full rounded-3xl object-cover aspect-[4/3] rotate-2 hover:rotate-0 transition-transform duration-500"
                unoptimized
              />
            </motion.div>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
            {/* Image (Custom Tutor Card) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="bg-white rounded-[2rem] p-8 w-full max-w-sm border border-edge relative -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-[#E6E8FF]"></div>
                <div className="relative z-10 flex flex-col items-center gap-1 mt-12">
                  <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-surface mb-2">
                    <Image
                      src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/home/how-it-works-sara.png"
                      alt="Tutor"
                      fill
                      className="object-cover scale-[1.7] origin-[50%_25%]"
                      unoptimized
                      sizes="96px"
                    />
                  </div>
                  <h4 className="text-h5 text-content">Sarah Jenkins</h4>
                  <p className="text-[#4C6FFF] font-medium text-sm">Math Wizard</p>

                  <div className="flex gap-2 pt-4">
                    <span className="px-3 py-1 bg-surface-alt rounded-full text-xs font-medium text-content-secondary">
                      Patient
                    </span>
                    <span className="px-3 py-1 bg-surface-alt rounded-full text-xs font-medium text-content-secondary">
                      Fun
                    </span>
                    <span className="px-3 py-1 bg-surface-alt rounded-full text-xs font-medium text-content-secondary">
                      Expert
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full lg:w-1/2 relative"
            >
              <div
                className={clsx(
                  'bg-white rounded-3xl p-8 lg:p-10 border-b-[6px] flex flex-col gap-4',
                  steps[1].borderColor,
                )}
              >
                <div className="absolute -top-6 right-8 lg:-right-6 w-12 h-12 rounded-full text-white font-bold text-xl flex items-center justify-center bg-[#4C6FFF]">
                  2
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#4C6FFF]/10 text-[#4C6FFF] self-start">
                  <Users className="w-4 h-4" />
                  {t('steps.2.badge')}
                </div>
                <h3 className="text-h4 text-content">{t('steps.2.title')}</h3>
                <p className="text-body-lg text-content-secondary leading-relaxed">
                  {t('steps.2.desc')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* STEP 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full lg:w-1/2 relative"
            >
              <div
                className={clsx(
                  'bg-white rounded-3xl p-8 lg:p-10 border-b-[6px] flex flex-col gap-4',
                  steps[2].borderColor,
                )}
              >
                <div className="absolute -top-6 left-8 lg:-left-6 w-12 h-12 rounded-full text-white font-bold text-xl flex items-center justify-center bg-[#66d142]">
                  3
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#75ED4D]/20 text-[#66d142] self-start">
                  <BookOpen className="w-4 h-4" />
                  {t('steps.3.badge')}
                </div>
                <h3 className="text-h4 text-content">{t('steps.3.title')}</h3>
                <p className="text-body-lg text-content-secondary leading-relaxed">
                  {t('steps.3.desc')}
                </p>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full lg:w-1/2"
            >
              <div className="rounded-2xl overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 bg-black/5 p-2">
                <Image
                  src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/whiteboard.webp"
                  alt={t('steps.3.title')}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl"
                  unoptimized
                />
              </div>
            </motion.div>
          </div>

          {/* STEP 4 */}
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full max-w-4xl relative"
            >
              <div
                className={clsx(
                  'bg-white rounded-[2rem] p-8 lg:p-12 border-b-[6px] flex flex-col lg:flex-row gap-12 items-center',
                  steps[3].borderColor,
                )}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full text-white font-bold text-xl flex items-center justify-center bg-[#FF4C4C]">
                  4
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 pt-4 lg:pt-0 flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-[#FF4C4C]/10 text-[#FF4C4C] self-start">
                      <PartyPopper className="w-4 h-4" />
                      {t('steps.4.badge')}
                    </div>
                    <h3 className="text-h4 text-content">{t('steps.4.title')}</h3>
                    <p className="text-body-lg text-content-secondary leading-relaxed">
                      {t('steps.4.desc')}
                    </p>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <div className="flex items-center gap-2 bg-surface-alt px-4 py-2 rounded-xl text-sm font-medium text-content-secondary">
                      <TrendingUp className="w-4 h-4 text-[#FF4C4C]" /> Growth
                    </div>
                    <div className="flex items-center gap-2 bg-surface-alt px-4 py-2 rounded-xl text-sm font-medium text-content-secondary">
                      <Award className="w-4 h-4 text-[#FF9F43]" /> Rewards
                    </div>
                  </div>
                </div>

                {/* Progress Card Mock UI */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-surface rounded-2xl p-6 border border-edge/50 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#FF4C4C]/10 flex items-center justify-center text-[#FF4C4C]">
                          <Calendar className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[10px] uppercase font-bold tracking-wider text-content-tertiary">
                            Progress
                          </p>
                          <p className="font-semibold text-content">October</p>
                        </div>
                      </div>
                      <div className="text-h1 text-[#FF4C4C]">A+</div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="w-full h-3 rounded-full bg-[#00D2D3]"></div>
                      <div className="w-11/12 h-3 rounded-full bg-[#00B894]"></div>
                      <div className="w-4/5 h-3 rounded-full bg-[#FF9F43]"></div>
                    </div>

                    <div className="pt-2 flex justify-center">
                      <span className="px-4 py-1.5 bg-[#FFF3CD] text-[#856404] text-xs font-bold rounded-full">
                        ⭐ Keep it up!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
