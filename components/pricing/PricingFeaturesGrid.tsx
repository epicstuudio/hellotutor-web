'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GRID_FEATURES = [
  { icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Icon.png', key: 'f1' },
  { icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Secure%20Platform.png', key: 'f2' },
  { icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Dedicated%20Tutor.png', key: 'f3' },
  { icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Recorded%20Lessons.png', key: 'f4' },
  { icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Flexible%20Scheduling.png', key: 'f5' },
  { icon: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Dedicated%20Support.png', key: 'f6' },
];

export function PricingFeaturesGrid() {
  const t = useTranslations();

  return (
    <section className="bg-surface pt-16 lg:pt-24">
      <Container className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl md:rounded-3xl overflow-hidden border border-edge bg-edge"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px">
            {GRID_FEATURES.map((item, i) => (
              <div key={i} className="bg-surface p-6 lg:p-8 flex flex-col justify-between gap-12 lg:gap-16">
                <div className="flex items-center justify-start">
                  <Image
                    src={item.icon}
                    alt={t(`pricingSection.gridFeatures.${item.key}`)}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <span className="text-body-lg font-semibold text-content">
                  {t(`pricingSection.gridFeatures.${item.key}`)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
