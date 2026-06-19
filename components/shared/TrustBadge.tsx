import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TrustBadgeProps {
  className?: string;
  textClassName?: string;
}

export function TrustBadge({ className, textClassName }: TrustBadgeProps) {
  const t = useTranslations('common');

  return (
    <div className={cn('flex flex-col items-start gap-3', className)}>
      <Image
        src="https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/MOHRE-DBS.png"
        alt="MoHRE & DBS"
        width={90}
        height={45}
        className="h-11 w-auto"
        unoptimized
      />
      <span className={cn('text-body-sm text-content-secondary', textClassName)}>
        {t('trustBadge')}
      </span>
    </div>
  );
}
