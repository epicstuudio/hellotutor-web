'use client';

import { useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';
import { siteConfig } from '@/config/site';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

interface CommitmentBannerProps {
 translationKey: string;
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
 <svg
 className={className}
 viewBox="0 0 24 24"
 fill="currentColor"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
 </svg>
);

function FloatingParticle({ delay, x, size }: { delay: number; x: string; size: number }) {
 return (
 <motion.div
 animate={{
 y: [-8, 8, -8],
 opacity: [0.3, 0.7, 0.3],
 }}
 transition={{
 duration: 4 + delay * 0.5,
 repeat: Infinity,
 delay,
 ease: 'easeInOut',
 }}
 className="absolute rounded-full bg-white/20"
 style={{ left: x, width: size, height: size }}
 />
 );
}

export function CommitmentBanner({ translationKey }: CommitmentBannerProps) {
 const t = useTranslations(translationKey);
 const tCommon = useTranslations();
 const ref = useRef<HTMLElement>(null);
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ['start end', 'end start'],
 });
 const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

 return (
 <section ref={ref} className="relative py-12 lg:py-20 overflow-hidden bg-surface-brand-alt">
 {/* Radial glow background */}
 <div className="absolute inset-0 overflow-hidden">
 <motion.div
 style={{ y: bgY }}
 className="absolute inset-0 flex items-center justify-center pointer-events-none"
 >
 <div className="w-150 h-150 rounded-full bg-white/5 blur-[120px]" />
 </motion.div>
 {/* Subtle grid lines */}
 <div
 className="absolute inset-0 opacity-[0.03]"
 style={{
 backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
 backgroundSize: '60px 60px',
 }}
 />
 </div>

 {/* Floating particles */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <FloatingParticle delay={0} x="15%" size={4} />
 <FloatingParticle delay={1.2} x="25%" size={3} />
 <FloatingParticle delay={0.5} x="70%" size={5} />
 <FloatingParticle delay={2} x="85%" size={3} />
 <FloatingParticle delay={1.5} x="50%" size={2} />
 <FloatingParticle delay={0.8} x="40%" size={4} />
 <FloatingParticle delay={2.5} x="60%" size={3} />
 </div>

 <Container className="relative z-10">
 <div className="max-w-3xl mx-auto text-center">
 {/* Shield icon with pulse */}
 <motion.div
 initial={{ opacity: 0, scale: 0.8 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="relative w-24 h-24 mx-auto mb-10"
 >
 {/* Pulse rings — start from the bg circle edge */}
 <motion.div
 animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.05, 0.35] }}
 transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/30"
 />
 <motion.div
 animate={{ scale: [1, 1.35, 1], opacity: [0.25, 0.05, 0.25] }}
 transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/25"
 />
 {/* Glow */}
 <div className="absolute inset-0 rounded-full bg-white/10 blur-xl" />
 {/* Icon background */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/15 flex items-center justify-center">
 <ShieldCheck className="w-8 h-8 text-white" strokeWidth={1.5} />
 </div>
 </motion.div>

 <motion.h2
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="text-h1 text-white mb-6 "
 >
 <HighlightText words="Commitment">{t('title')}</HighlightText>
 </motion.h2>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="text-body-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10"
 >
 {t('body')}
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="flex flex-col sm:flex-row items-center justify-center gap-3"
 >
 <Button
 href="/book-consultation"
 variant="primary"
 size="lg"
 className="w-full sm:w-auto"
 >
 <WhatsAppIcon className="w-5 h-5" />
 {tCommon('common.bookConsultation')}
 </Button>
 <Button
 href="/how-it-works"
 variant="outline"
 size="lg"
 className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
 >
 {tCommon('common.howItWorks')}
 </Button>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.4 }}
 className="text-body-sm text-white/50 mt-8"
 >
 {t('tagline')}
 </motion.p>
 </div>
 </Container>
 </section>
 );
}
