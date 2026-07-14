import { getTranslations } from 'next-intl/server';
import { InteractiveNotFound } from '@/components/ui/InteractiveNotFound';

export default async function NotFound() {
  const t = await getTranslations('errors');

  return (
    <InteractiveNotFound 
      title={t('notFound')}
      description={t('notFoundDescription')}
      backToHomeText="Back to Home"
    />
  );
}
