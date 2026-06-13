'use client';

import { useState, useMemo, useCallback, useEffect, useLayoutEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { CTASection } from '@/components/shared/CTASection';
import { HighlightText } from '@/components/ui/HighlightText';
import { useTranslations } from 'next-intl';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const TAB_KEYS = ['students', 'parents', 'tutors'] as const;
type TabKey = (typeof TAB_KEYS)[number];

function RichAnswer({ html }: { html: string }) {
  return (
    <div
      className="text-body-base text-content-secondary leading-relaxed prose prose-sm max-w-none prose-a:text-surface-brand-alt prose-a:underline prose-strong:text-content prose-strong:font-semibold prose-ul:list-disc prose-ul:pl-5 prose-li:marker:text-content-tertiary"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function SectionAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              'rounded-2xl border border-edge-subtle overflow-hidden transition-colors',
              isOpen ? 'bg-surface-base' : 'bg-white hover:bg-surface-base/50',
            )}
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left p-5 lg:p-6 focus:outline-none cursor-pointer gap-4"
            >
              <span className="text-body-lg font-semibold text-content">{item.question}</span>
              <motion.div
                className="text-content-tertiary shrink-0"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 lg:px-6 lg:pb-6">
                    <RichAnswer html={item.answer} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function AllFAQs() {
  const t = useTranslations('allFaqs');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tabFromUrl = searchParams.get('tab') as TabKey | null;
  const activeTab: TabKey = TAB_KEYS.includes(tabFromUrl as TabKey)
    ? (tabFromUrl as TabKey)
    : 'students';

  const [searchQuery, setSearchQuery] = useState('');

  // Prevent scroll restoration + scroll to top before paint on client-side navigation
  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  const tabsData = useMemo(() => {
    return TAB_KEYS.map((key) => {
      const raw = t.raw(`${key}.sections`);
      const sections = (Array.isArray(raw) ? raw : Object.values(raw || {})) as {
        id: string;
        title: string;
        items: { question: string; answer: string }[];
      }[];
      return { key, label: t(`tabs.${key}`), sections };
    });
  }, [t]);

  const currentTabData = tabsData.find((tab) => tab.key === activeTab)!;
  const [activeSection, setActiveSection] = useState<string>('');
  const effectiveActiveSection =
    currentTabData.sections.find((s) => s.id === activeSection)?.id ??
    currentTabData.sections[0]?.id ??
    '';

  const filteredSections = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return currentTabData.sections;
    return currentTabData.sections
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [currentTabData, searchQuery]);

  const hasResults = filteredSections.length > 0;

  const handleTabChange = useCallback(
    (tab: TabKey) => {
      const newTabData = tabsData.find((t) => t.key === tab);
      if (newTabData?.sections.length) {
        setActiveSection(newTabData.sections[0].id);
      }
      setSearchQuery('');
      const params = new URLSearchParams(searchParams.toString());
      params.set('tab', tab);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [tabsData, pathname, router, searchParams, setActiveSection, setSearchQuery],
  );

  // Intersection observer for sidebar highlighting
  useEffect(() => {
    const sectionEls = document.querySelectorAll('[data-faq-section]');
    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-faq-section') || '');
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' },
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab, filteredSections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-12 bg-surface">
        <Container className="max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-brand-alt/10 text-surface-brand-alt text-body-sm font-medium mb-6"
          >
            <span>Help Centre</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-h1 text-content mb-4 tracking-tight"
          >
            <HighlightText words="answers">{t('heroTitle')}</HighlightText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-body-xl text-content-secondary mb-10"
          >
            {t('heroSubtitle')}
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-tertiary" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-surface-base border border-edge-subtle text-content placeholder:text-content-tertiary focus:outline-none focus:border-edge-focus focus:ring-2 focus:ring-edge-focus/20 transition-all"
            />
          </motion.div>
        </Container>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 bg-surface/95 backdrop-blur-sm border-b border-edge-subtle">
        <Container>
          <div className="flex gap-1 py-3 overflow-x-auto hide-scrollbar">
            {tabsData.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={cn(
                  'px-5 py-2.5 rounded-xl text-body-sm font-semibold whitespace-nowrap transition-all cursor-pointer',
                  activeTab === tab.key
                    ? 'bg-surface-brand-alt text-white'
                    : 'text-content-secondary hover:bg-surface-strong hover:text-content',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-surface">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-24">
                <p className="text-label-sm text-content-tertiary uppercase tracking-wider mb-4 hidden lg:block">
                  Jump to
                </p>
                {/* Mobile: horizontal scroll */}
                <div className="flex lg:hidden gap-2 overflow-x-auto hide-scrollbar pb-2">
                  {currentTabData.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        'px-4 py-2 rounded-xl text-body-sm font-medium whitespace-nowrap transition-all cursor-pointer',
                        effectiveActiveSection === section.id
                          ? 'bg-surface-brand-alt/10 text-surface-brand-alt'
                          : 'bg-surface-base text-content-secondary hover:bg-surface-strong',
                      )}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
                {/* Desktop: vertical list */}
                <ul className="hidden lg:flex flex-col gap-1">
                  {currentTabData.sections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                          'w-full text-left px-3 py-2 rounded-lg text-body-sm font-medium transition-all cursor-pointer',
                          effectiveActiveSection === section.id
                            ? 'bg-surface-brand-alt/10 text-surface-brand-alt'
                            : 'text-content-secondary hover:bg-surface-strong hover:text-content',
                        )}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main */}
            <main className="flex-1 min-w-0">
              {!hasResults && searchQuery && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-h4 text-content mb-2">{t('noResults.title')}</p>
                  <p className="text-body-lg text-content-secondary">{t('noResults.body')}</p>
                </motion.div>
              )}

              <div className="flex flex-col gap-12 lg:gap-16">
                {filteredSections.map((section) => (
                  <div key={section.id} id={section.id} data-faq-section={section.id}>
                    <h2 className="text-h3 text-content mb-6 tracking-tight">{section.title}</h2>
                    <SectionAccordion items={section.items} />
                  </div>
                ))}
              </div>

              {/* Help Strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 p-6 lg:p-8 rounded-3xl bg-surface-base border border-edge-subtle"
              >
                <h4 className="text-body-xl font-semibold text-content mb-2">
                  {t(`${activeTab}.helpStrip.title`)}
                </h4>
                <p className="text-body-base text-content-secondary mb-6">
                  {t(`${activeTab}.helpStrip.body`)}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {(
                    [
                      'support@hellotutor.me',
                      'safeguarding@hellotutor.me',
                      'privacy@hellotutor.me',
                    ] as const
                  ).map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="text-body-base text-content font-medium hover:text-surface-brand-alt transition-colors"
                    >
                      {email}
                    </a>
                  ))}
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
