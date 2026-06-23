import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { HighlightText } from '@/components/ui/HighlightText';

export function FAQs() {
 const t = useTranslations('howItWorksFaqs');

 const faqItems = [
 { question: t('items.1.q'), answer: t('items.1.a') },
 { question: t('items.2.q'), answer: t('items.2.a') },
 { question: t('items.3.q'), answer: t('items.3.a') },
 { question: t('items.4.q'), answer: t('items.4.a') },
 { question: t('items.5.q'), answer: t('items.5.a') },
 { question: t('items.6.q'), answer: t('items.6.a') },
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
