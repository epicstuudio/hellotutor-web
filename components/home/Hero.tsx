'use client';

import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';
import { Check, TrendingUp, BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

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

export function Hero() {
 const t = useTranslations();

 return (
 <section className="relative overflow-hidden bg-surface">
 <div className="pt-[calc(72px+8rem)] xl:pt-[calc(88px+8rem)] pb-0">
 <Container className="relative z-10 w-full h-full">
 <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-stretch h-full">
 {/* Left Column - Content */}
 <div className="flex flex-col justify-center z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-start pb-16 lg:pb-24">
 <motion.h1
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.1 }}
 className="text-h1 text-content mb-6 "
 >
 <HighlightText words="grades">{t('hero.titleLine1')}</HighlightText>{' '}
 <br className="hidden lg:block" />
 <HighlightText words="confidence">{t('hero.titleLine2')}</HighlightText>
 </motion.h1>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="text-body-xl text-content-secondary mb-8 max-w-lg mx-auto lg:mx-0"
 >
 {t('hero.subtitle')}
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 mb-4"
 >
 <Button
 href="/book-consultation"
 variant="primary"
 size="lg"
 className="w-full sm:w-auto"
 >
 <WhatsAppIcon className="w-5 h-5" />
 {t('common.bookConsultation')}
 </Button>
 <Button
 href="/how-it-works"
 variant="outline"
 size="lg"
 className="w-full sm:w-auto"
 >
 {t('common.howItWorks')}
 </Button>
 </motion.div>

 <motion.p
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.4 }}
 className="text-body-xs text-content-tertiary mb-12"
 >
 {t('hero.noCommitment')}
 </motion.p>

 {/* Stats Box */}
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.5, delay: 0.5 }}
 className="bg-surface-alt/80 backdrop-blur-md rounded-lg p-6 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-start text-start border border-edge-subtle"
 >
 <div className="flex-1">
 <div className="text-h3 lg:text-h2 text-content mb-1 tracking-tight">
 {t('hero.stat1Value')}
 </div>
 <div className="text-body-sm text-content-secondary">{t('hero.stat1Label')}</div>
 </div>
 <div className="hidden md:block w-px h-12 bg-edge mx-4" />
 <div className="flex-1">
 <div className="text-h3 lg:text-h2 text-content mb-1 tracking-tight">
 {t('hero.stat2Value')}
 </div>
 <div className="text-body-sm text-content-secondary">{t('hero.stat2Label')}</div>
 </div>
 <div className="hidden md:block w-px h-12 bg-edge mx-4" />
 <div className="flex-1">
 <div className="text-h3 lg:text-h2 text-content mb-1 tracking-tight">
 {t('hero.stat3Value')}
 </div>
 <div className="text-body-sm text-content-secondary">{t('hero.stat3Label')}</div>
 </div>
 </motion.div>
 </div>

 {/* Right Column - Image & Badges */}
 <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-end justify-center lg:justify-end animate-fade-in z-0 mt-8 lg:mt-0">
 {/* The main image */}
 <div className="relative w-[85%] h-[95%] z-10">
 <Image
 src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/hero-Image.png"
 alt="Happy student with books"
 fill
 className="object-contain object-bottom drop-shadow-2xl"
 unoptimized
 />
 </div>

 {/* Floating Badges */}
 <div className="absolute inset-0 z-1 pointer-events-none hidden sm:block">
 {/* UK Certified */}
 <div
 className="absolute top-[10%] end-[0%] bg-white rounded-2xl shadow-lg p-3 pe-5 flex items-center gap-3 animate-fade-in-up"
 style={{ animationDelay: '200ms' }}
 >
 <span className="text-2xl" aria-hidden="true">
 🇬🇧
 </span>
 <span className="text-body-sm font-semibold text-content whitespace-nowrap text-start leading-tight">
 {t('hero.badgeUkTitle')}
 <br />
 <span className="text-body-xs font-normal text-content-secondary">
 {t('hero.badgeUkSub')}
 </span>
 </span>
 </div>

 {/* Exam Ready */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.7 }}
 className="absolute top-[30%] start-[5%] bg-white rounded-full shadow-lg p-1 pe-4 flex items-center gap-3 hover-lift"
 >
 <div className="bg-icon-accent-bg text-icon-accent rounded-full p-1.5 w-10 h-10 flex items-center justify-center">
 <Check className="w-5 h-5" />
 </div>
 <span className="text-body-sm font-semibold text-content">
 {t('hero.badgeExamReady')}
 </span>
 </motion.div>

 {/* Homework Done */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.8 }}
 className="absolute top-[50%] end-[5%] bg-white rounded-full shadow-lg p-1 pe-4 flex items-center gap-3 hover-lift"
 >
 <div className="bg-icon-accent-bg text-icon-accent rounded-full p-1.5 w-10 h-10 flex items-center justify-center">
 <BookOpen className="w-5 h-5" />
 </div>
 <span className="text-body-sm font-semibold text-content">
 {t('hero.badgeHomework')}
 </span>
 </motion.div>

 {/* Top Grades */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.9 }}
 className="absolute bottom-[20%] start-[10%] bg-white rounded-full shadow-lg p-1 pe-4 flex items-center gap-3 hover-lift"
 >
 <div className="bg-icon-accent-bg text-icon-accent rounded-full p-1.5 w-10 h-10 flex items-center justify-center">
 <TrendingUp className="w-5 h-5" />
 </div>
 <span className="text-body-sm font-semibold text-content">
 {t('hero.badgeTopGrades')}
 </span>
 </motion.div>

 {/* Goals Achieved */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 1.0 }}
 className="absolute bottom-[20%] start-[0%] bg-white rounded-full shadow-lg p-1 pe-4 flex items-center gap-3 hover-lift"
 >
 <div className="bg-green-100 text-green-600 rounded-full p-1.5 font-bold text-[10px] w-10 h-10 flex items-center justify-center">
 100%
 </div>
 <span className="text-body-sm font-semibold text-content">
 {t('hero.badgeGoals')}
 </span>
 </motion.div>

 {/* Confidence Boost */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 1.1 }}
 className="absolute bottom-[5%] end-[10%] bg-white rounded-full shadow-lg p-1 pe-4 flex items-center gap-3 hover-lift"
 >
 <div className="bg-blue-100 text-blue-600 rounded-full p-1.5 h-10 w-10 flex items-center justify-center">
 <TrendingUp className="w-5 h-5" />
 </div>
 <span className="text-body-sm font-semibold text-content">
 {t('hero.badgeConfidence')}
 </span>
 </motion.div>
 </div>
 </div>
 </div>
 </Container>
 </div>
 </section>
 );
}
