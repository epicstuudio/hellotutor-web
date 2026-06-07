'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('errors');

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
      <h2 className="text-h1 text-content mb-4">
        {t('somethingWentWrong')}
      </h2>
      <p className="text-body-lg text-content-tertiary mb-8 max-w-md">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <Button onClick={() => reset()} variant="primary">
        {t('tryAgain')}
      </Button>
    </Container>
  );
}
