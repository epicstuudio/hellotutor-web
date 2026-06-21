'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItem {
  question: string;
  answer: string;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="border-b border-edge last:border-b-0 py-6">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer group"
            >
              <h3 className="text-xl lg:text-2xl font-medium text-content pr-8 transition-colors group-hover:text-content-brand-strong">
                {item.question}
              </h3>
              <motion.div
                className="text-content shrink-0"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="text-content-secondary leading-relaxed pb-2">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
