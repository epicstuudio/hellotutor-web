import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Remove default vertical padding */
  noPadding?: boolean;
}

export function Section({ children, id, className, noPadding = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(!noPadding && 'py-16 md:py-20 xl:py-24', className)}
    >
      {children}
    </section>
  );
}
