'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEP_IMAGES = [
  'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/Tell%20us%20about%20your%20child.jpg',
  'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/We%20match%20the%20perfect%20tutor.jpg',
  'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/Lessons%20begin.jpeg',
  'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works-sm/You%20stay%20in%20the%20loop.jpg',
];

const STEP_IDS = ['1', '2', '3', '4'] as const;

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!section || !track || !progress) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const getDist = () => track.scrollWidth - window.innerWidth + 56;

        const tween = gsap.to(track, {
          x: () => -getDist(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getDist()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(progress, { width: `${self.progress * 100}%` });
            },
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          gsap.set(track, { x: 0 });
          gsap.set(progress, { width: '0%' });
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative bg-surface overflow-hidden">
      <div className="min-h-[85vh] flex items-center py-12 lg:py-8">
        <div
          ref={trackRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-7 items-stretch w-full lg:w-max px-6 lg:px-7"
        >
          {/* Header */}
          <div className="flex-none w-full lg:w-[min(420px,80vw)] flex flex-col justify-center lg:pr-8">
            <h2 className="text-h2 text-content mb-4">{t('title')}</h2>
            <p className="text-body-xl text-content-secondary">{t('subtitle')}</p>
            <div className="h-[3px] bg-edge-subtle rounded-full mt-8 overflow-hidden max-w-[240px]">
              <div ref={progressRef} className="h-full w-0 bg-green-500 rounded-full" />
            </div>
          </div>

          {/* Cards */}
          {STEP_IDS.map((id, index) => (
            <div
              key={id}
              className="group flex-none w-full lg:w-[min(380px,80vw)] bg-surface-base rounded-3xl overflow-hidden border border-edge flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-28px_rgba(0,0,0,0.15)]"
            >
              <div className="aspect-[16/10.5] overflow-hidden bg-surface-strong">
                <Image
                  src={STEP_IMAGES[index]}
                  alt={t(`steps.${id}.title`)}
                  width={760}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <span className="text-sm font-bold text-green-500 tracking-wider uppercase mb-3">
                  {t('stepLabel', { num: String(index + 1).padStart(2, '0') })}
                </span>
                <h3 className="text-h5 font-semibold text-content mb-2">
                  {t(`steps.${id}.title`)}
                </h3>
                <p className="text-body-base text-content-secondary leading-relaxed">
                  {t(`steps.${id}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
