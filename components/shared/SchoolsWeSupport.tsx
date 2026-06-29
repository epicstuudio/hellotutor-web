'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { motion } from 'framer-motion';

interface SchoolsWeSupportProps {
  translationKey: string;
}

export function SchoolsWeSupport({ translationKey }: SchoolsWeSupportProps) {
  const t = useTranslations(translationKey);

  // We read the list of schools from translation JSON which is an array
  const listRaw = t.raw('list');
  const schoolsList = (Array.isArray(listRaw) ? listRaw : Object.values(listRaw || {})) as string[];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } },
  };

  return (
    <section className="bg-surface py-12 lg:py-24 overflow-hidden">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 md:text-h1 font-bold text-content mb-4"
          >
            <HighlightText words={['Schools', 'Students', 'المدارس', 'طلابها']}>{t('title')}</HighlightText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-content-secondary"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto mb-16"
        >
          {schoolsList.map((school, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group flex items-center justify-center bg-white border border-edge hover:shadow-md rounded-full px-6 py-3 hover:border-edge-strong transition-all cursor-default"
            >
              <span className="text-body-sm md:text-body-base font-medium text-content group-hover:text-primary transition-colors whitespace-nowrap text-center">
                {school}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-6 max-w-xl mx-auto"
        >
          <p className="text-center text-body-base text-content-secondary">
            {t('footer')}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
