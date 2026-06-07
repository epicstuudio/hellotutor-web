'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function HowLessonsWork() {
  const t = useTranslations('howLessonsWork');

  const features = [
    {
      id: '1',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/1%20Live%20HD%20video.webp',
    },
    {
      id: '2',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/2%20Interactive%20whiteboard.webp',
    },
    {
      id: '3',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/3%20Screen%20sharing.webp',
    },
    {
      id: '4',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/4%20File%20sharing.webp',
    },
    {
      id: '5',
      image:
        'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/how-it-works/5%20Lesson%20recordings.webp',
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
            className="text-h2 text-content tracking-tight"
          >
            {t('title')}
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
      </Container>
    </section>
  );
}
