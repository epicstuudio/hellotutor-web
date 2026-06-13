'use client';

import { cn } from '@/lib/utils';

interface HighlightTextProps {
  children: string;
  words: string | string[];
  className?: string;
  emClassName?: string;
}

export function HighlightText({ children, words, className, emClassName }: HighlightTextProps) {
  const targets = Array.isArray(words) ? words : [words];
  const parts: React.ReactNode[] = [];
  let remaining = children;

  targets.forEach((word, wi) => {
    const idx = remaining.indexOf(word);
    if (idx !== -1) {
      const before = remaining.slice(0, idx);
      const after = remaining.slice(idx + word.length);
      if (before) parts.push(<span key={`b-${wi}`}>{before}</span>);
      parts.push(
        <em key={`w-${wi}`} className={cn('italic', emClassName)}>
          {word}
        </em>
      );
      remaining = after;
    }
  });

  if (remaining) parts.push(<span key="end">{remaining}</span>);

  return <span className={className}>{parts.length ? parts : children}</span>;
}
