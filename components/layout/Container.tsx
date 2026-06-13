import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface ContainerProps {
 children: ReactNode;
 size?: 'narrow' | 'default' | 'wide';
 className?: string;
}

const sizeClasses = {
 narrow: 'max-w-3xl',
 default: 'max-w-7xl',
 wide: 'max-w-[1440px]',
} as const;

export function Container({ children, size = 'default', className }: ContainerProps) {
 return (
 <div
 className={cn(
 'mx-auto w-full px-6 md:px-8 xl:px-10',
 sizeClasses[size],
 className,
 )}
 >
 {children}
 </div>
 );
}
