import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
 author: string;
 text: string;
 className?: string;
}

export function TestimonialCard({ author, text, className }: TestimonialCardProps) {
 return (
 <div className={cn("bg-surface-base rounded-3xl p-6 lg:p-8 flex flex-col justify-between border border-edge-subtle h-full", className)}>
 <div className="flex flex-col gap-6">
 <div className="flex gap-1">
 {[...Array(5)].map((_, idx) => (
 <Star key={idx} className="w-5 h-5 text-surface-success fill-surface-success" />
 ))}
 </div>
 <p className="text-content-secondary leading-relaxed">
 {text}
 </p>
 </div>
 <p className="text-content font-semibold mt-8">
 {author}
 </p>
 </div>
 );
}
