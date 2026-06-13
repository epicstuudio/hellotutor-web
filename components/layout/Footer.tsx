import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { footerTopNav, footerBottomNav, footerLegalNav } from '@/config/navigation';
import { Container } from './Container';
import { Logo } from '@/components/ui/Logo';
import { PaymentMethodsIcon } from '@/components/pricing/PaymentMethodsIcon';

export function Footer() {
 const t = useTranslations();
 const currentYear = new Date().getFullYear();

 return (
 <footer className="bg-content text-content-invert pt-16 pb-6">
 <Container>
 <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-0 mb-12">
 {/* Left Column */}
 <div className="flex flex-col lg:pe-12">
 <div className="mb-6">
 <Logo variant="white" />
 </div>
 <p className="text-xl md:text-2xl font-medium max-w-sm text-white/90 leading-tight">
 {t('footer.tagline')}
 </p>
 <div className="mt-12 lg:mt-auto pt-12">
 {/* Payment icons */}
 <div className="flex items-center overflow-hidden">
 <PaymentMethodsIcon className="h-6 w-auto max-w-full" />
 </div>
 </div>
 </div>

 {/* Right Column with middle divider */}
 <div className="flex flex-col relative lg:ps-16 lg:border-s border-white/10">
 {/* Top Links */}
 <div className="grid grid-cols-2 gap-8 mb-12">
 {footerTopNav.map((column) => (
 <div key={column.titleKey}>
 <h3 className="text-sm font-semibold mb-6">
 {column.titleKey.includes('.')
 ? t(column.titleKey as Parameters<typeof t>[0])
 : column.titleKey}
 </h3>
 <ul className="flex flex-col gap-3.5">
 {column.items.map((item) => (
 <li key={item.titleKey}>
 <Link
 href={item.href || '/'}
 className="text-[13px] text-white/60 hover:text-white transition-colors"
 >
 {item.titleKey.includes('.')
 ? t(item.titleKey as Parameters<typeof t>[0])
 : item.titleKey}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>

 <hr className="border-white/10 mb-12" />

 {/* Bottom Links */}
 <div className="grid grid-cols-2 gap-8">
 {footerBottomNav.map((column) => (
 <div key={column.titleKey}>
 <h3 className="text-sm font-semibold mb-6">
 {column.titleKey.includes('.')
 ? t(column.titleKey as Parameters<typeof t>[0])
 : column.titleKey}
 </h3>
 <ul className="flex flex-col gap-3.5">
 {column.items.map((item) => (
 <li key={item.titleKey}>
 <Link
 href={item.href || '/'}
 className="text-[13px] text-white/60 hover:text-white transition-colors"
 >
 {item.titleKey.includes('.')
 ? t(item.titleKey as Parameters<typeof t>[0])
 : item.titleKey}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Bottom Legal Row */}
 <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/70">
 <p>{t('common.copyright', { year: currentYear })}</p>
 <div className="flex items-center gap-6">
 {footerLegalNav.map((item) => (
 <Link
 key={item.titleKey}
 href={item.href || '/'}
 className="hover:text-white transition-colors"
 >
 {item.titleKey.includes('.')
 ? t(item.titleKey as Parameters<typeof t>[0])
 : item.titleKey}
 </Link>
 ))}
 </div>
 </div>
 </Container>
 </footer>
 );
}
