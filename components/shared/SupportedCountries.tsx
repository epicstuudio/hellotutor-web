'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SupportedCountriesProps {
  translationKey: string;
}

export function SupportedCountries({ translationKey }: SupportedCountriesProps) {
  const t = useTranslations(translationKey);

  const countriesList = [
    'GB', 'US', 'IE', 'CA', 'AE', 'DE', 'NL', 'BE', 
    'ES', 'IT', 'FR', 'AU', 'NZ', 'MY', 'SG', 'GE'
  ];

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
            <HighlightText words={['Countries', 'We Support']}>{t('title')}</HighlightText>
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
          {countriesList.map((code) => (
            <motion.div
              key={code}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              className="group flex items-center gap-3 md:gap-4 bg-white border border-edge hover:shadow-md rounded-full p-1.5 pr-4 md:p-2 md:pr-6 hover:border-edge-strong transition-all cursor-default"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-edge shrink-0 bg-surface">
                <Image
                  src={`/flags/${code}.svg`}
                  alt={`${t(`countries.${code}`)} flag`}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-body-sm md:text-body-base font-medium text-content group-hover:text-primary transition-colors whitespace-nowrap">
                {t(`countries.${code}`)}
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
          <Button href="/contact" variant="primary" size="lg">
            {t('buttonText')}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
