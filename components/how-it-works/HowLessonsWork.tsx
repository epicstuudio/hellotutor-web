'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HowLessonsWork() {
  const t = useTranslations('howLessonsWork');

  const features = [
    {
      id: '1',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/hd-call-new.png',
    },
    {
      id: '2',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/whiteboard-new.png',
    },
    {
      id: '3',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/screenshare-new.png',
    },
    {
      id: '4',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/fileshare-new.png',
    },
    {
      id: '5',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/lessons-recording-new.png',
    },
    {
      id: '6',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/6%20Secure%20platform.webp',
    },
  ];

  return (
    <section className="pb-20 lg:pb-32 bg-surface">
      <Container className="flex flex-col gap-16">
        <div className="text-center flex flex-col">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 text-content "
          >
            <HighlightText words={['online lessons', 'الدروس الأونلاين']}>{t('title')}</HighlightText>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-4xl p-8 flex flex-col gap-10 border border-edge/50 overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-h5 text-content">{t(`features.${feature.id}.title`)}</h3>
                <p className="text-body-base text-content-secondary">
                  {t(`features.${feature.id}.desc`)}
                </p>
              </div>
              <div className="-mx-2 lg:-mx-4">
                <Image
                  src={feature.image}
                  alt={t(`features.${feature.id}.title`)}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-xl"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl flex flex-col items-center text-center gap-4 pt-12"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-h5 text-content">{t('homeTutoringTitle')}</h3>
            <p className="text-body-base text-content-secondary leading-relaxed max-w-2xl mx-auto">
              {t('homeTutoringDesc')}
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
