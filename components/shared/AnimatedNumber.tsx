'use client';

import { useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';

function parseNumber(value: string): { num: number; suffix: string; decimals: number } {
  const match = value.match(/^(\d+(\.\d+)?)(.*)$/);
  if (!match) return { num: 0, suffix: value, decimals: 0 };
  const num = parseFloat(match[1]);
  const suffix = match[3];
  const decimals = (match[1].split('.')[1] || '').length;
  return { num, suffix, decimals };
}

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  delay?: number;
}

export function AnimatedNumber({ value, duration = 2, delay = 0 }: AnimatedNumberProps) {
  const { num, suffix, decimals } = parseNumber(value);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(decimals));

  useEffect(() => {
    const controls = animate(count, num, { duration, ease: 'easeOut', delay });
    return controls.stop;
  }, [count, num, duration, delay]);

  return (
    <>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </>
  );
}
