'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { CTASection } from '@/components/shared/CTASection';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
    Clock,
    Monitor,
    MessageSquare,
    UserCheck,
    Heart,
    FileText,
    ShieldAlert,
    Users,
    Lock,
    HeartHandshake,
    Shield,
    Briefcase,
    AlertTriangle,
    ChevronRight,
    GraduationCap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ------------------------------------------------------------------ */
// Types
/* ------------------------------------------------------------------ */

interface GuidelineItem {
    id: string;
    title: string;
    desc: string;
}

interface StudentSupportItem {
    id: string;
    number: string;
    title: string;
    desc: string;
}

interface ContentSection {
    id: string;
    title: string;
    body: string;
    body2?: string;
}

/* ------------------------------------------------------------------ */
// Icon map
/* ------------------------------------------------------------------ */

const GUIDELINE_ICONS: Record<string, React.ReactNode> = {
    'be-on-time': <Clock className="w-6 h-6" />,
    'look-and-sound': <Monitor className="w-6 h-6" />,
    communicate: <MessageSquare className="w-6 h-6" />,
    'profile-up-to-date': <UserCheck className="w-6 h-6" />,
};

const SUPPORT_ICONS: Record<string, React.ReactNode> = {
    'put-students-first': <Heart className="w-6 h-6" />,
    'meaningful-feedback': <FileText className="w-6 h-6" />,
    'stay-within-role': <ShieldAlert className="w-6 h-6" />,
    'keep-professional': <Users className="w-6 h-6" />,
};

const SECTION_ICONS: Record<string, React.ReactNode> = {
    communication: <Lock className="w-6 h-6" />,
    respect: <HeartHandshake className="w-6 h-6" />,
    'keeping-safe': <Shield className="w-6 h-6" />,
    'working-exclusively': <Briefcase className="w-6 h-6" />,
    consequences: <AlertTriangle className="w-6 h-6" />,
};

/* ------------------------------------------------------------------ */
// Sub-components
/* ------------------------------------------------------------------ */

function GuidelineCard({ item, icon }: { item: GuidelineItem; icon: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col p-6 rounded-2xl bg-surface-base border border-edge-subtle"
        >
            <div className="w-11 h-11 rounded-xl bg-surface-brand-alt/10 text-surface-brand-alt flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-h5 font-semibold text-content mb-2">{item.title}</h3>
            <p className="text-body-sm text-content-secondary leading-relaxed">{item.desc}</p>
        </motion.div>
    );
}

function SupportCard({ item, icon }: { item: StudentSupportItem; icon: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex gap-5 p-6 rounded-2xl bg-surface-base border border-edge-subtle"
        >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-surface-brand-alt/10 text-surface-brand-alt flex items-center justify-center">
                {icon}
            </div>
            <div>
                <span className="text-display-sm font-bold text-content-tertiary/40 block mb-1">
                    {item.number}
                </span>
                <h3 className="text-body-lg font-semibold text-content mb-1.5">{item.title}</h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">{item.desc}</p>
            </div>
        </motion.div>
    );
}

function ContentBlock({
    section,
    icon,
    variant = 'default',
}: {
    section: ContentSection;
    icon: React.ReactNode;
    variant?: 'default' | 'warning';
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id={section.id}
            data-tcc-section={section.id}
            className={cn(
                'scroll-mt-28 mb-10 p-6 md:p-8 lg:p-10 rounded-3xl border',
                variant === 'warning'
                    ? 'bg-surface-danger-light border-edge-danger'
                    : 'bg-surface-base border-edge-subtle',
            )}
        >
            <div className="flex items-start gap-5">
                <div
                    className={cn(
                        'shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center',
                        variant === 'warning'
                            ? 'bg-content-danger text-white'
                            : 'bg-surface-brand-alt/10 text-surface-brand-alt',
                    )}
                >
                    {icon}
                </div>
                <div className="flex-1 min-w-0">
                    <h2 className="text-h4 text-content mb-4">{section.title}</h2>
                    <div className="flex flex-col gap-4">
                        <p className="text-body-base text-content-secondary leading-relaxed">{section.body}</p>
                        {section.body2 && (
                            <p className="text-body-base text-content-secondary leading-relaxed">
                                {section.body2}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

/* ------------------------------------------------------------------ */
// Main component
/* ------------------------------------------------------------------ */

export function TutorCodeOfConductContent() {
    const t = useTranslations('tutorCodeOfConduct');
    // Build data from translations
    const guidelines = useMemo<GuidelineItem[]>(() => {
        const raw = t.raw('guidelines.items');
        return (Array.isArray(raw) ? raw : Object.values(raw || {})) as GuidelineItem[];
    }, [t]);

    const supportItems = useMemo<StudentSupportItem[]>(() => {
        const raw = t.raw('supportingStudents.items');
        return (Array.isArray(raw) ? raw : Object.values(raw || {})) as StudentSupportItem[];
    }, [t]);

    const contentSections = useMemo<ContentSection[]>(() => {
        const raw = t.raw('contentSections');
        return (Array.isArray(raw) ? raw : Object.values(raw || {})) as ContentSection[];
    }, [t]);

    const sidebarSections = useMemo(
        () => [
            { id: 'guidelines', number: 1, title: t('guidelines.title') },
            { id: 'supporting-students', number: 2, title: t('supportingStudents.title') },
            ...contentSections.map((s, i) => ({
                id: s.id,
                number: i + 3,
                title: s.title,
            })),
        ],
        [t, contentSections],
    );

    const [activeSection, setActiveSection] = useState<string>(() => sidebarSections[0]?.id || '');

    const resolvedActive = activeSection || sidebarSections[0]?.id || '';

    // Intersection observer
    useEffect(() => {
        const els = document.querySelectorAll('[data-tcc-section]');
        if (!els.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('data-tcc-section');
                        if (id) setActiveSection(id);
                    }
                });
            },
            { rootMargin: '-20% 0px -60% 0px' },
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [contentSections]);

    const scrollToSection = useCallback((id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    return (
        <>
            {/* Hero */}
            <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 bg-surface">
                <Container size="narrow" className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-success-light text-content-success text-body-sm font-medium mb-6"
                    >
                        <GraduationCap className="w-4 h-4" />
                        <span>{t('heroBadge')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-h1 text-content mb-5 "
                    >
                        {t('heroTitle')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-body-xl text-content-secondary max-w-2xl mx-auto mb-6"
                    >
                        {t('heroSubtitle')}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-body-base text-content-tertiary max-w-2xl mx-auto"
                    >
                        {t('heroBody')}
                    </motion.p>
                </Container>
            </section>

            {/* Main two-column */}
            <section className="py-12 lg:py-16 bg-surface-alt">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                        {/* Sidebar */}
                        <aside className="lg:w-64 shrink-0">
                            <div className="lg:sticky lg:top-24">
                                <p className="text-label-sm text-content-tertiary uppercase tracking-wider mb-4 hidden lg:block">
                                    {t('sidebarTitle')}
                                </p>

                                {/* Mobile scroll */}
                                <div className="flex lg:hidden gap-2 overflow-x-auto hide-scrollbar pb-2">
                                    {sidebarSections.map((s) => (
                                        <button
                                            key={s.id}
                                            onClick={() => scrollToSection(s.id)}
                                            className={cn(
                                                'px-4 py-2 rounded-xl text-body-sm font-medium whitespace-nowrap transition-all cursor-pointer',
                                                resolvedActive === s.id
                                                    ? 'bg-surface-brand-alt text-white'
                                                    : 'bg-surface-base text-content-secondary hover:bg-surface-strong',
                                            )}
                                        >
                                            {s.title}
                                        </button>
                                    ))}
                                </div>

                                {/* Desktop list */}
                                <ul className="hidden lg:flex flex-col gap-1">
                                    {sidebarSections.map((s) => (
                                        <li key={s.id}>
                                            <button
                                                onClick={() => scrollToSection(s.id)}
                                                className={cn(
                                                    'w-full text-left px-3 py-2.5 rounded-lg text-body-sm font-medium transition-all cursor-pointer flex items-center gap-2.5',
                                                    resolvedActive === s.id
                                                        ? 'bg-surface-brand-alt/10 text-surface-brand-alt'
                                                        : 'text-content-secondary hover:bg-surface-strong hover:text-content',
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        'w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0',
                                                        resolvedActive === s.id
                                                            ? 'bg-surface-brand-alt text-white'
                                                            : 'bg-surface-strong text-content-tertiary',
                                                    )}
                                                >
                                                    {s.number}
                                                </span>
                                                <span className="truncate">{s.title}</span>
                                                <ChevronRight
                                                    className={cn(
                                                        'w-3.5 h-3.5 ml-auto shrink-0 transition-opacity',
                                                        resolvedActive === s.id ? 'opacity-100' : 'opacity-0',
                                                    )}
                                                />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </aside>

                        {/* Main content */}
                        <main className="flex-1 min-w-0">
                            {/* Guidelines */}
                            <div
                                id="guidelines"
                                data-tcc-section="guidelines"
                                className="scroll-mt-28 mb-12 lg:mb-16"
                            >
                                <div className="mb-6">
                                    <span className="text-label-sm text-content-tertiary uppercase tracking-wider block mb-2">
                                        {t('guidelines.subtitle')}
                                    </span>
                                    <h2 className="text-h3 text-content ">{t('guidelines.title')}</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {guidelines.map((item) => (
                                        <GuidelineCard
                                            key={item.id}
                                            item={item}
                                            icon={GUIDELINE_ICONS[item.id] ?? <Clock className="w-6 h-6" />}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Supporting Students */}
                            <div
                                id="supporting-students"
                                data-tcc-section="supporting-students"
                                className="scroll-mt-28 mb-12 lg:mb-16"
                            >
                                <div className="mb-6">
                                    <span className="text-label-sm text-content-tertiary uppercase tracking-wider block mb-2">
                                        {t('supportingStudents.subtitle')}
                                    </span>
                                    <h2 className="text-h3 text-content ">
                                        {t('supportingStudents.title')}
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {supportItems.map((item) => (
                                        <SupportCard
                                            key={item.id}
                                            item={item}
                                            icon={SUPPORT_ICONS[item.id] ?? <Heart className="w-6 h-6" />}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content sections */}
                            {contentSections.map((section) => (
                                <ContentBlock
                                    key={section.id}
                                    section={section}
                                    icon={SECTION_ICONS[section.id] ?? <Shield className="w-6 h-6" />}
                                    variant={section.id === 'consequences' ? 'warning' : 'default'}
                                />
                            ))}

                            {/* Thank you */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mb-12 p-6 md:p-8 rounded-3xl bg-surface-brand/5 border border-surface-brand/20 text-center"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-surface-brand text-white flex items-center justify-center mx-auto mb-4">
                                    <HeartHandshake className="w-7 h-7" />
                                </div>
                                <p className="text-body-lg text-content font-medium leading-relaxed max-w-2xl mx-auto">
                                    {t('thankYou')}
                                </p>
                            </motion.div>

                            {/* Contact strip */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 lg:p-8 rounded-3xl bg-surface-base border border-edge-subtle"
                            >
                                <h4 className="text-h5 font-semibold text-content mb-2">
                                    {t('contactStrip.title')}
                                </h4>
                                <p className="text-body-base text-content-secondary mb-6">
                                    {t('contactStrip.body')}
                                </p>
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {(['support@hellotutor.me', 'safeguarding@hellotutor.me'] as const).map(
                                        (email) => (
                                            <a
                                                key={email}
                                                href={`mailto:${email}`}
                                                className="text-body-base text-content font-medium hover:text-surface-brand-alt transition-colors"
                                            >
                                                {email}
                                            </a>
                                        ),
                                    )}
                                </div>
                            </motion.div>
                        </main>
                    </div>
                </Container>
            </section>

            <CTASection />
        </>
    );
}
