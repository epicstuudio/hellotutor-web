import { Link } from '@/i18n/routing';
import Image from 'next/image';

interface LogoProps {
 className?: string;
 variant?: 'black' | 'white';
}

export function Logo({ className, variant = 'black' }: LogoProps) {
 const src = variant === 'black' ? '/logo-black.svg' : '/logo-white.svg';
 return (
 <Link
 href="/"
 className={`inline-flex items-center transition-opacity hover:opacity-80 ${className || ''}`}
 aria-label="HelloTutor — Home"
 >
 <Image src={src} alt="HelloTutor" width={164} height={26} priority className="w-auto h-5" />
 </Link>
 );
}
