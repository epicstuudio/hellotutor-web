import { getTranslations } from 'next-intl/server';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default async function NotFound() {
  const t = await getTranslations('errors');

  return (
    <Container className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-h1 text-content-brand mb-4">404</h1>
      <h2 className="text-h4 text-content mb-4">
        {t('notFound')}
      </h2>
      <p className="text-body-lg text-content-tertiary mb-8 max-w-md">
        {t('notFoundDescription')}
      </p>
      <Button href="/" variant="primary">
        Back to Home
      </Button>
    </Container>
  );
}
