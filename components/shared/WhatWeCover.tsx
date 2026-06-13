'use client';

import { Container } from '@/components/layout/Container';
import { HighlightText } from '@/components/ui/HighlightText';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/Button';

interface WhatWeCoverProps {
 translationKey: string;
 images: string[];
 className?: string;
}

const CheckIcon = ({ className }: { className?: string }) => (
 <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="10" cy="10" r="10" className="fill-primary" />
 <path
 d="M6 10L9 13L14 7"
 stroke="white"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
);

export function WhatWeCover({ translationKey, images, className }: WhatWeCoverProps) {
 const t = useTranslations(translationKey);

 // Determine how many blocks are in the translations array
 // Next-intl allows getting an array if defined as such, but normally we might have to map a known length
 // The user provided 5 images, so we assume 5 blocks for now, or we can use the raw messages if next-intl supports returning objects.
 // Next-intl supports t.raw('blocks') to get an array of objects.
 const blocksRaw = t.raw('blocks');
 const blocks = (Array.isArray(blocksRaw) ? blocksRaw : Object.values(blocksRaw || {})) as Array<{
 title: string;
 subtitle?: string;
 desc?: string;
 itemsLabel?: string;
 learnMoreLabel?: string;
 learnMoreHref?: string;
 items: Array<{ title: string; desc: string }>;
 }>;

 return (
 <section className={cn('py-12 lg:py-20 bg-surface', className)}>
 <Container>
 <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
 <h2 className="text-h2 text-content mb-4 ">
 <HighlightText words="Cover">{t('title')}</HighlightText>
 </h2>
 <p className="text-body-lg text-content-secondary">{t('subtitle')}</p>
 </div>

 <div className="flex flex-col gap-12 lg:gap-24">
 {blocks.map((block, index) => {
 const isEven = index % 2 === 0;
 const imageSrc = images[index];

 return (
 <div
 key={index}
 className={cn(
 'flex flex-col gap-8 lg:gap-16 items-center',
 isEven ? 'lg:flex-row' : 'lg:flex-row-reverse',
 )}
 >
 {/* Text Content */}
 <div className="w-full lg:w-1/2">
 <h3 className="text-h4 lg:text-h3 text-content">{block.title}</h3>

 {block.subtitle && (
 <p className="text-body-sm font-medium text-content-secondary mt-2">
 {block.subtitle}
 </p>
 )}
 {block.desc && (
 <p className="text-body text-content-secondary mt-4 mb-8">{block.desc}</p>
 )}

 <div className={cn('flex flex-col gap-4', !block.desc && 'mt-8')}>
 {block.itemsLabel && (
 <p className="text-xs font-semibold text-content-tertiary uppercase tracking-wider mb-2">
 {block.itemsLabel}
 </p>
 )}
 {block.items.map((item, itemIndex) => (
 <div key={itemIndex} className="flex gap-4">
 <CheckIcon className="w-5 h-5 shrink-0 mt-0.5 bg-surface-brand-alt rounded-full" />
 <div>
 {item.title && (
 <p
 className={cn(
 'text-body font-semibold text-content',
 item.desc && 'mb-1',
 )}
 >
 {item.title}
 {item.desc ? ':' : ''}
 </p>
 )}
 {item.desc && (
 <p
 className={cn(
 'text-body-sm text-content-secondary leading-relaxed',
 !item.title && 'text-body font-medium text-content mt-0.5',
 )}
 >
 {item.desc}
 </p>
 )}
 </div>
 </div>
 ))}
 </div>

 {block.learnMoreLabel && (
 <div className="mt-8">
 <Button href={block.learnMoreHref || '#'} variant="outline" className="px-6">
 {block.learnMoreLabel}
 </Button>
 </div>
 )}
 </div>

 {/* Image Content */}
 <div className="w-full lg:w-1/2">
 <div className="relative w-full aspect-[4/3] rounded-3xl lg:rounded-4xl overflow-hidden bg-surface-alt">
 {imageSrc && (
 <Image
 src={imageSrc}
 alt={block.title}
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 50vw"
 />
 )}
 </div>
 </div>
 </div>
 );
 })}
 </div>
 </Container>
 </section>
 );
}
