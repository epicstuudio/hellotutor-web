import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';

export function FAQs() {
 const t = useTranslations('faqs');

 const faqItems = [
 { question: t('items.match.q'), answer: t('items.match.a') },
 { question: t('items.choose.q'), answer: t('items.choose.a') },
 { question: t('items.right.q'), answer: t('items.right.a') },
 { question: t('items.start.q'), answer: t('items.start.a') },
 { question: t('items.trial.q'), answer: t('items.trial.a') },
 { question: t('items.subjects.q'), answer: t('items.subjects.a') },
 ];

 return (
 <section className="py-12 lg:py-20 bg-surface-alt">
 <Container className="max-w-4xl">
 <div className="text-center mb-12 lg:mb-16">
 <h2 className="text-h2 text-content mb-2">
 <HighlightText words="questions">{t('title')}</HighlightText>
 </h2>
 <p className="text-body-xl text-content-secondary">{t('subtitle')}</p>
 </div>

 <div className="mb-16">
 <Accordion items={faqItems} />
 </div>

 <div className="flex justify-center">
 <Button href="/faqs" variant="outline" size="lg">
 {t('cta')}
 </Button>
 </div>
 </Container>
 </section>
 );
}
