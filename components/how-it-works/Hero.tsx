'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations();

  return (
    <section className="relative overflow-hidden bg-surface pt-[calc(72px+8rem)] xl:pt-[calc(88px+8rem)] pb-16 lg:pb-24">
      <Container className="relative z-10 w-full text-center max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-h1 text-content mb-6 tracking-tighter"
        >
          {t('howItWorksPageHero.title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-body-xl text-content-secondary max-w-2xl mx-auto mb-10"
        >
          {t('howItWorksPageHero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#75ED4D] hover:bg-[#66d142] text-black border-none"
          >
            {t('common.bookConsultation')}
          </Button>
          <Button
            href="/how-it-works"
            size="lg"
            variant="outline"
            className="w-full sm:w-auto bg-white hover:bg-surface-alt border-edge text-content"
          >
            {t('common.howItWorks')}
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-body-xs text-content-tertiary mb-16"
        >
          {t('hero.noCommitment')}
        </motion.p>

        {/* Video / Image container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full mx-auto flex justify-center items-center"
        >
          {/* We position the video absolutely OVER the monitor image. */}
          <div
            className="absolute z-20 bg-surface overflow-hidden rounded-t-[16px]"
            style={{ top: '8.9%', left: '31.5%', width: '37%', height: '56%' }}
          >
            <video
              src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <Image
            src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/hero-image.png"
            alt="How it works"
            width={1200}
            height={675}
            className="relative z-10 w-full h-auto drop-shadow-2xl pointer-events-none"
            unoptimized
          />
        </motion.div>
      </Container>
    </section>
  );
}
