'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { ShieldCheck, CreditCard, EyeOff, CheckCircle2, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PaymentMethodsIcon } from './PaymentMethodsIcon';

export function SecurePayments() {
  const t = useTranslations();

  const features = [
    {
      icon: CreditCard,
      title: t('pricingSection.securePayments.f1.title'),
      desc: t('pricingSection.securePayments.f1.desc'),
    },
    {
      icon: ShieldCheck,
      title: t('pricingSection.securePayments.f2.title'),
      desc: t('pricingSection.securePayments.f2.desc'),
    },
    {
      icon: EyeOff,
      title: t('pricingSection.securePayments.f3.title'),
      desc: t('pricingSection.securePayments.f3.desc'),
    },
  ];

  return (
    <section className="bg-surface py-12 lg:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 md:text-h1 font-bold text-content mb-4"
          >
            <HighlightText words="simple">{t('pricingSection.securePayments.title')}</HighlightText>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body-lg text-content-secondary"
          >
            {t('pricingSection.securePayments.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-md bg-surface-base flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-content-info" />
                  </div>
                  <div className="flex flex-col gap-1 mt-1">
                    <span className="text-h6 text-content">{feature.title}</span>
                    <span className="text-body-sm text-content-secondary">{feature.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Supported Payment Methods */}
            <div className="bg-surface-alt rounded-3xl p-6 lg:p-8 mt-4 border border-edge-subtle">
              <span className="text-body-base font-semibold text-content block mb-4">
                {t('pricingSection.securePayments.supportedMethods')}
              </span>
              <div className="flex items-center overflow-hidden">
                <PaymentMethodsIcon className="h-6 w-auto object-left" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image & Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative rounded-[2rem] overflow-hidden bg-edge aspect-[4/5] lg:aspect-square"
          >
            {/* Placeholder image since we don't have the original asset */}
            <Image
              src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/pricing/Secure%20payments.jpg"
              alt="Secure Payments"
              fill
              className="object-cover"
            />

            {/* Glassmorphism Card */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-surface-base/70 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-2xl border border-white/40">
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 bg-surface-base rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-content-info" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-content-secondary font-medium">
                      Payment Successful
                    </span>
                    <span className="text-sm font-bold text-content">
                      Transaction ID: #88349-22
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-xs text-content-secondary font-medium mb-1">Amount</span>
                  <span className="text-lg font-bold text-content">
                    265.00 <span className="text-sm font-semibold">AED</span>
                  </span>
                </div>
                <button className="w-10 h-8 bg-surface-base rounded-xl flex items-center justify-center text-content-secondary">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
