'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useIsRtl } from '@/lib/useIsRtl';

/* Animated waveform bars for the "Matching" indicator */
export function MatchingWaveform() {
  const bars = 7;
  return (
    <div className="flex items-center gap-[2px] h-4">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-green-400"
          animate={{
            height: ['4px', '14px', '4px'],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

interface MatchedTutor {
  name: string;
  subject: string;
  tags: string[];
  image: string;
}

interface HeroVisualProps {
  phase: 'matching' | 'matched';
  matchedTutor: MatchedTutor | null;
}

export function HeroVisual({ phase, matchedTutor }: HeroVisualProps) {
  const isRtl = useIsRtl();
  const xDir = isRtl ? -1 : 1;

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[520px] flex items-center justify-center lg:justify-start">
      {/* Student Card — centered on mobile, left-aligned on desktop */}
      <div className="relative w-[75%] max-w-[280px] lg:max-w-[340px] shrink-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative aspect-[3/4] rounded-[2rem] border-[5px] border-green-200 overflow-hidden shadow-2xl"
        >
          <Image
            src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/hero-image-2.png"
            alt="Student learning"
            fill
            className="object-cover"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Student Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute bottom-5 start-5 end-5"
          >
            <h3 className="text-white text-h5 font-semibold mb-0.5">Sarah J.</h3>
            <p className="text-white/80 text-body-sm mb-3">Grade 8</p>
            <div className="flex flex-wrap gap-2">
              {['IGCSE Maths', 'Physics', 'Evening'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/15 text-white text-body-xs backdrop-blur-md border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Tutor Card — overlapping stack when matched */}
        <AnimatePresence>
          {phase === 'matched' && matchedTutor && (
            <motion.div
              key="tutor-card"
              initial={{ opacity: 0, x: 60 * xDir, y: -30, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60 * xDir, y: -30, scale: 0.85 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="absolute -top-6 lg:-top-8 -end-[10%] lg:-end-[55%] w-[65%] lg:w-[80%] z-20"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] border-[5px] border-green-300 overflow-hidden shadow-2xl bg-surface-base">
                {matchedTutor.image ? (
                  <Image
                    src={matchedTutor.image}
                    alt={matchedTutor.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-green-50 to-surface-base flex items-center justify-center">
                    <span className="text-[3rem] lg:text-[4rem] font-bold text-green-300">
                      {matchedTutor.name[0]}
                    </span>
                  </div>
                )}

                {/* Bottom gradient overlay & Tutor Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 lg:p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <h3 className="text-h6 text-white mb-1">
                    {matchedTutor.name}
                  </h3>
                  <p className="text-white/80 text-body-xs lg:text-body-sm mb-2 lg:mb-3">
                    {matchedTutor.subject}
                  </p>
                  <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {matchedTutor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 lg:px-3 py-0.5 lg:py-1 rounded-full bg-white/15 text-white text-[10px] lg:text-body-xs backdrop-blur-md border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* "Match Found" badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 lg:gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full border-2 border-green-300 bg-surface-base whitespace-nowrap"
              >
                <svg
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-[10px] lg:text-body-xs font-semibold text-content-secondary">
                  Match Found
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Matching pill — below card, only on mobile, during matching phase */}
        <AnimatePresence>
          {phase === 'matching' && (
            <motion.div
              key="mobile-matching"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="flex lg:hidden justify-center mt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-green-200 bg-surface-base">
                <MatchingWaveform />
                <span className="text-body-xs font-semibold text-content-secondary whitespace-nowrap">
                  Matching
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Matching Connector — visible only on lg+ during matching phase */}
      <AnimatePresence>
        {phase === 'matching' && (
          <motion.div
            key="connector"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center shrink-0"
          >
            <div className="w-6 h-[2px] bg-green-200 shrink-0" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border-2 border-green-200 bg-surface-base shrink-0">
              <MatchingWaveform />
              <span className="text-body-xs font-semibold text-content-secondary whitespace-nowrap">
                Matching
              </span>
            </div>
            <div className="w-14 h-[2px] bg-green-200 shrink-0" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
