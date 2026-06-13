'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { HighlightText } from '@/components/ui/HighlightText';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js';
import {
 Mail,
 Phone,
 MessageCircle,
 Loader2,
 Check,
 CheckCircle2,
 AlertCircle,
 ChevronDown,
} from 'lucide-react';

interface FormData {
 fullName: string;
 email: string;
 phoneCountryCode: string;
 phoneCountryIso: string;
 phoneNumber: string;
 message: string;
 preferredContact: string[];
}

interface FormErrors {
 fullName?: string;
 email?: string;
 phoneNumber?: string;
 message?: string;
 preferredContact?: string;
 api?: string;
}

const contactOptions = [
 { key: 'email', labelKey: 'contactPage.form.preferredEmail', icon: Mail },
 { key: 'phone', labelKey: 'contactPage.form.preferredPhone', icon: Phone },
 { key: 'whatsapp', labelKey: 'contactPage.form.preferredWhatsApp', icon: MessageCircle },
];

const isoPlaceholderMap: Record<string, string> = {
 AE: '55 123 4567',
 SA: '55 123 4567',
 KW: '55 123 456',
 QA: '55 123 456',
 BH: '55 123 456',
 OM: '55 123 456',
 EG: '100 123 4567',
 GB: '7700 900 000',
 US: '123 456 7890',
 IN: '98765 43210',
 PK: '300 123 4567',
 TR: '530 123 4567',
 CN: '138 0013 8000',
 DE: '1512 3456789',
 FR: '6 12 34 56 78',
 IT: '312 345 6789',
 ES: '612 34 56 78',
 NL: '6 12345678',
 BE: '470 12 34 56',
 CH: '79 123 45 67',
};

function getPhonePlaceholder(iso: string): string {
 return isoPlaceholderMap[iso] ?? '55 123 4567';
}

function validate(data: FormData, t: ReturnType<typeof useTranslations>): FormErrors {
 const errors: FormErrors = {};

 if (!data.fullName.trim()) {
 errors.fullName = t('contactPage.form.errorRequired');
 }

 if (!data.email.trim()) {
 errors.email = t('contactPage.form.errorRequired');
 } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
 errors.email = t('contactPage.form.errorEmail');
 }

 if (!data.phoneNumber.trim()) {
 errors.phoneNumber = t('contactPage.form.errorRequired');
 } else if (!isValidPhoneNumber(data.phoneNumber, data.phoneCountryIso as CountryCode)) {
 errors.phoneNumber = t('contactPage.form.errorPhone');
 }

 if (!data.message.trim()) {
 errors.message = t('contactPage.form.errorRequired');
 }

 if (data.preferredContact.length === 0) {
 errors.preferredContact = t('contactPage.form.errorPreferred');
 }

 return errors;
}

const inputBase =
 'w-full rounded-xl border bg-white px-4 py-3 text-body-base text-content outline-none transition-colors placeholder:text-content-disabled focus:border-edge-focus focus:ring-1 focus:ring-edge-focus';

/** Convert ISO country code to emoji flag */
function isoToFlag(iso: string): string {
 return iso
 .toUpperCase()
 .split('')
 .map((char) => String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65))
 .join('');
}

interface CountryCodeItem {
 code: string;
 country: string;
 iso: string;
}

function CountryCodeDropdown({
 value,
 onChange,
}: {
 value: string;
 onChange: (code: string, countryIso: string) => void;
}) {
 const [open, setOpen] = useState(false);
 const [search, setSearch] = useState('');
 const [items, setItems] = useState<CountryCodeItem[]>([]);
 const [loading, setLoading] = useState(true);
 const containerRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
 fetch('https://api.hellotutor.me/api/leads/country-codes', {
 headers: { Referer: 'https://hellotutor.me/' },
 })
 .then((res) => res.json())
 .then((json) => {
 if (json.success && Array.isArray(json.data)) {
 setItems(json.data);
 }
 })
 .catch(() => {
 // fallback
 setItems([
 { code: '+971', country: 'United Arab Emirates', iso: 'AE' },
 { code: '+966', country: 'Saudi Arabia', iso: 'SA' },
 { code: '+965', country: 'Kuwait', iso: 'KW' },
 ]);
 })
 .finally(() => setLoading(false));
 }, []);

 // Close on outside click
 useEffect(() => {
 function handleClick(e: MouseEvent) {
 if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
 setOpen(false);
 }
 }
 if (open) {
 document.addEventListener('mousedown', handleClick);
 return () => document.removeEventListener('mousedown', handleClick);
 }
 }, [open]);

 const filtered = items.filter((item) => {
 const q = search.toLowerCase().trim();
 if (!q) return true;
 return item.country.toLowerCase().includes(q) || item.code.toLowerCase().includes(q);
 });

 const selected = items.find((i) => i.code === value);

 return (
 <div ref={containerRef} className="relative shrink-0">
 {/* Trigger */}
 <button
 type="button"
 onClick={() => {
 setOpen((prev) => {
 const next = !prev;
 if (next) {
 setSearch('');
 setTimeout(() => inputRef.current?.focus(), 10);
 }
 return next;
 });
 }}
 className={cn(
 inputBase,
 'inline-flex items-center gap-2 pr-8 pl-3 py-3 cursor-pointer border-edge min-w-[120px] select-none',
 )}
 >
 {selected ? (
 <>
 <span className="text-base">{isoToFlag(selected.iso)}</span>
 <span className="text-body-sm font-medium text-content">{selected.code}</span>
 </>
 ) : (
 <span className="text-body-sm text-content-disabled">+971</span>
 )}
 <ChevronDown
 className={cn(
 'w-4 h-4 text-content-tertiary absolute right-2.5 top-1/2 -translate-y-1/2 transition-transform',
 open && 'rotate-180',
 )}
 />
 </button>

 {/* Dropdown panel */}
 <AnimatePresence>
 {open && (
 <motion.div
 initial={{ opacity: 0, y: -4, scale: 0.98 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 exit={{ opacity: 0, y: -4, scale: 0.98 }}
 transition={{ duration: 0.15, ease: 'easeOut' }}
 className="absolute z-50 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl border border-edge shadow-xl overflow-hidden"
 >
 {/* Search */}
 <div className="p-3 border-b border-edge-subtle">
 <div className="relative">
 <input
 ref={inputRef}
 type="text"
 value={search}
 onChange={(e) => setSearch(e.target.value)}
 placeholder="Search for countries"
 className={cn(inputBase, 'pr-3 pl-9 py-2.5 text-body-sm border-edge')}
 />
 <svg
 className="w-4 h-4 text-content-tertiary absolute left-3 top-1/2 -translate-y-1/2"
 fill="none"
 viewBox="0 0 24 24"
 stroke="currentColor"
 strokeWidth={2}
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
 />
 </svg>
 </div>
 </div>

 {/* List */}
 <div className="max-h-72 overflow-y-auto p-1.5">
 {loading ? (
 <div className="py-8 text-center text-body-sm text-content-secondary">
 Loading...
 </div>
 ) : filtered.length === 0 ? (
 <div className="py-8 text-center text-body-sm text-content-secondary">
 No countries found
 </div>
 ) : (
 filtered.map((item) => {
 const isSelected = item.code === value;
 return (
 <button
 key={`${item.iso}-${item.code}`}
 type="button"
 onClick={() => {
 onChange(item.code, item.iso);
 setOpen(false);
 }}
 className={cn(
 'w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors',
 isSelected ? 'bg-surface-alt' : 'hover:bg-surface-strong',
 )}
 >
 <span className="text-xl shrink-0">{isoToFlag(item.iso)}</span>
 <span className="flex-1 text-body-sm text-content truncate">
 {item.country} <span className="text-content-secondary">({item.code})</span>
 </span>
 {isSelected && <Check className="w-4 h-4 text-surface-brand shrink-0" />}
 </button>
 );
 })
 )}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}

export function ContactForm() {
 const t = useTranslations();
 const [formData, setFormData] = useState<FormData>({
 fullName: '',
 email: '',
 phoneCountryCode: '+971',
 phoneCountryIso: 'AE',
 phoneNumber: '',
 message: '',
 preferredContact: [],
 });
 const [errors, setErrors] = useState<FormErrors>({});
 const [touched, setTouched] = useState<Record<string, boolean>>({});
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [isSuccess, setIsSuccess] = useState(false);

 const updateField = useCallback(
 <K extends keyof FormData>(field: K, value: FormData[K]) => {
 setFormData((prev) => ({ ...prev, [field]: value }));
 if (touched[field]) {
 setErrors((prev) => {
 const next = { ...prev };
 delete next[field as keyof FormErrors];
 return next;
 });
 }
 // Re-validate phone number when country changes and phone is already touched
 if (field === 'phoneCountryIso' && touched.phoneNumber && formData.phoneNumber.trim()) {
 if (!isValidPhoneNumber(formData.phoneNumber, value as CountryCode)) {
 setErrors((prev) => ({ ...prev, phoneNumber: t('contactPage.form.errorPhone') }));
 }
 }
 },
 [touched, formData.phoneNumber, t],
 );

 const togglePreferred = useCallback(
 (key: string) => {
 setFormData((prev) => {
 const exists = prev.preferredContact.includes(key);
 const next = exists
 ? prev.preferredContact.filter((k) => k !== key)
 : [...prev.preferredContact, key];
 return { ...prev, preferredContact: next };
 });
 if (touched.preferredContact) {
 setErrors((prev) => {
 const next = { ...prev };
 delete next.preferredContact;
 return next;
 });
 }
 },
 [touched],
 );

 const handleBlur = useCallback((field: string) => {
 setTouched((prev) => ({ ...prev, [field]: true }));
 }, []);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setTouched({
 fullName: true,
 email: true,
 phoneNumber: true,
 message: true,
 preferredContact: true,
 });

 const validationErrors = validate(formData, t);
 setErrors(validationErrors);

 if (Object.keys(validationErrors).length > 0) return;

 setIsSubmitting(true);
 setErrors({});

 try {
 const res = await fetch('https://api.hellotutor.me/api/leads', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 Referer: 'https://hellotutor.me/',
 },
 body: JSON.stringify({
 fullName: formData.fullName.trim(),
 email: formData.email.trim(),
 phoneCountryCode: formData.phoneCountryCode,
 phoneNumber: formData.phoneNumber.trim().replace(/\s/g, ''),
 message: formData.message.trim(),
 preferredContact: formData.preferredContact,
 }),
 });

 const data = await res.json().catch(() => ({}));

 if (!res.ok) {
 setErrors({ api: data.message || t('contactPage.form.errorGeneric') });
 return;
 }

 setIsSuccess(true);
 setFormData({
 fullName: '',
 email: '',
 phoneCountryCode: '+971',
 phoneCountryIso: 'AE',
 phoneNumber: '',
 message: '',
 preferredContact: [],
 });
 setTouched({});
 } catch {
 setErrors({ api: t('contactPage.form.errorNetwork') });
 } finally {
 setIsSubmitting(false);
 }
 };

 return (
 <Section className="bg-surface">
 <Container>
 <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
 {/* Form Card */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5 }}
 className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-edge-subtle"
 >
 <AnimatePresence mode="wait">
 {isSuccess ? (
 <motion.div
 key="success"
 initial={{ opacity: 0, scale: 0.95 }}
 animate={{ opacity: 1, scale: 1 }}
 exit={{ opacity: 0, scale: 0.95 }}
 className="flex flex-col items-center justify-center text-center py-12"
 >
 <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
 <CheckCircle2 className="w-8 h-8 text-green-600" />
 </div>
 <h3 className="text-h4 text-content mb-3">
 <HighlightText words="Sent">{t('contactPage.form.successTitle')}</HighlightText>
 </h3>
 <p className="text-body-base text-content-secondary max-w-sm">
 {t('contactPage.form.successBody')}
 </p>
 <Button
 type="button"
 variant="outline"
 size="md"
 onClick={() => setIsSuccess(false)}
 className="mt-6"
 >
 {t('contactPage.form.sendAnother')}
 </Button>
 </motion.div>
 ) : (
 <motion.form
 key="form"
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onSubmit={handleSubmit}
 noValidate
 className="flex flex-col gap-6"
 >
 {/* Full Name */}
 <div>
 <label className="block text-body-sm font-medium text-content mb-2">
 {t('contactPage.form.nameLabel')}
 </label>
 <input
 type="text"
 value={formData.fullName}
 onChange={(e) => updateField('fullName', e.target.value)}
 onBlur={() => handleBlur('fullName')}
 placeholder={t('contactPage.form.namePlaceholder')}
 className={cn(
 inputBase,
 touched.fullName && errors.fullName
 ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
 : 'border-edge',
 )}
 />
 <AnimatePresence>
 {touched.fullName && errors.fullName && (
 <motion.p
 initial={{ opacity: 0, y: -4 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -4 }}
 className="text-body-xs text-red-500 mt-1.5 flex items-center gap-1"
 >
 <AlertCircle className="w-3.5 h-3.5 shrink-0" />
 {errors.fullName}
 </motion.p>
 )}
 </AnimatePresence>
 </div>

 {/* Email */}
 <div>
 <label className="block text-body-sm font-medium text-content mb-2">
 {t('contactPage.form.emailLabel')}
 </label>
 <input
 type="email"
 value={formData.email}
 onChange={(e) => updateField('email', e.target.value)}
 onBlur={() => handleBlur('email')}
 placeholder={t('contactPage.form.emailPlaceholder')}
 className={cn(
 inputBase,
 touched.email && errors.email
 ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
 : 'border-edge',
 )}
 />
 <AnimatePresence>
 {touched.email && errors.email && (
 <motion.p
 initial={{ opacity: 0, y: -4 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -4 }}
 className="text-body-xs text-red-500 mt-1.5 flex items-center gap-1"
 >
 <AlertCircle className="w-3.5 h-3.5 shrink-0" />
 {errors.email}
 </motion.p>
 )}
 </AnimatePresence>
 </div>

 {/* Phone */}
 <div>
 <label className="block text-body-sm font-medium text-content mb-2">
 {t('contactPage.form.phoneLabel')}
 </label>
 <div className="flex gap-2">
 <CountryCodeDropdown
 value={formData.phoneCountryCode}
 onChange={(code, countryIso) => {
 updateField('phoneCountryCode', code);
 updateField('phoneCountryIso', countryIso);
 }}
 />
 <input
 type="tel"
 inputMode="numeric"
 value={formData.phoneNumber}
 onChange={(e) =>
 updateField('phoneNumber', e.target.value.replace(/\D/g, ''))
 }
 onBlur={() => handleBlur('phoneNumber')}
 placeholder={getPhonePlaceholder(formData.phoneCountryIso)}
 className={cn(
 inputBase,
 'flex-1',
 touched.phoneNumber && errors.phoneNumber
 ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
 : 'border-edge',
 )}
 />
 </div>
 <AnimatePresence>
 {touched.phoneNumber && errors.phoneNumber && (
 <motion.p
 initial={{ opacity: 0, y: -4 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -4 }}
 className="text-body-xs text-red-500 mt-1.5 flex items-center gap-1"
 >
 <AlertCircle className="w-3.5 h-3.5 shrink-0" />
 {errors.phoneNumber}
 </motion.p>
 )}
 </AnimatePresence>
 </div>

 {/* Message */}
 <div>
 <label className="block text-body-sm font-medium text-content mb-2">
 {t('contactPage.form.messageLabel')}
 </label>
 <textarea
 value={formData.message}
 onChange={(e) => updateField('message', e.target.value)}
 onBlur={() => handleBlur('message')}
 placeholder={t('contactPage.form.messagePlaceholder')}
 rows={4}
 className={cn(
 inputBase,
 'resize-none',
 touched.message && errors.message
 ? 'border-red-400 focus:border-red-400 focus:ring-red-200'
 : 'border-edge',
 )}
 />
 <AnimatePresence>
 {touched.message && errors.message && (
 <motion.p
 initial={{ opacity: 0, y: -4 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -4 }}
 className="text-body-xs text-red-500 mt-1.5 flex items-center gap-1"
 >
 <AlertCircle className="w-3.5 h-3.5 shrink-0" />
 {errors.message}
 </motion.p>
 )}
 </AnimatePresence>
 </div>

 {/* Preferred Contact */}
 <div>
 <label className="block text-body-sm font-medium text-content mb-3">
 {t('contactPage.form.preferredLabel')}
 </label>
 <div className="flex flex-wrap gap-2">
 {contactOptions.map((opt) => {
 const isSelected = formData.preferredContact.includes(opt.key);
 return (
 <button
 key={opt.key}
 type="button"
 onClick={() => togglePreferred(opt.key)}
 className={cn(
 'inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all cursor-pointer',
 isSelected
 ? 'bg-surface-action border-surface-action text-content'
 : 'bg-white border-edge text-content-secondary hover:border-edge-focus hover:text-content',
 )}
 >
 <opt.icon className="w-4 h-4" />
 {t(opt.labelKey)}
 {isSelected && (
 <motion.span
 layoutId="check"
 initial={{ scale: 0 }}
 animate={{ scale: 1 }}
 className="ml-0.5"
 >
 <Check className="w-4 h-4" />
 </motion.span>
 )}
 </button>
 );
 })}
 </div>
 <AnimatePresence>
 {touched.preferredContact && errors.preferredContact && (
 <motion.p
 initial={{ opacity: 0, y: -4 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -4 }}
 className="text-body-xs text-red-500 mt-1.5 flex items-center gap-1"
 >
 <AlertCircle className="w-3.5 h-3.5 shrink-0" />
 {errors.preferredContact}
 </motion.p>
 )}
 </AnimatePresence>
 </div>

 {/* API Error */}
 <AnimatePresence>
 {errors.api && (
 <motion.div
 initial={{ opacity: 0, y: -4 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -4 }}
 className="rounded-xl bg-red-50 border border-red-200 p-4 flex items-start gap-3"
 >
 <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
 <p className="text-body-sm text-red-700">{errors.api}</p>
 </motion.div>
 )}
 </AnimatePresence>

 {/* Submit */}
 <Button
 type="submit"
 variant="primary"
 size="lg"
 disabled={isSubmitting}
 className="w-full"
 >
 {isSubmitting ? (
 <>
 <Loader2 className="w-5 h-5 animate-spin" />
 {t('contactPage.form.submitting')}
 </>
 ) : (
 t('contactPage.form.submit')
 )}
 </Button>
 </motion.form>
 )}
 </AnimatePresence>
 </motion.div>

 {/* Other Ways to Reach Us */}
 <ContactWays />
 </div>
 </Container>
 </Section>
 );
}

function ContactWays() {
 const t = useTranslations();

 const ways = [
 {
 key: 'email',
 icon: Mail,
 value: 'support@hellotutor.me',
 href: 'mailto:support@hellotutor.me',
 color: 'bg-purple-50 text-purple-600',
 },
 {
 key: 'whatsapp',
 icon: MessageCircle,
 value: '+971 58 581 7335',
 href: 'https://api.whatsapp.com/send/?phone=971585817335&text&type=phone_number&app_absent=0',
 color: 'bg-green-50 text-green-600',
 },
 {
 key: 'phone',
 icon: Phone,
 value: '+971 58 581 7335',
 href: 'tel:+971585817335',
 color: 'bg-blue-50 text-blue-600',
 },
 ];

 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: 0.15 }}
 className="flex flex-col"
 >
 <div className="mb-8">
 <h2 className="text-h3 text-content mb-3 ">
 <HighlightText words="Reach">{t('contactPage.ways.title')}</HighlightText>
 </h2>
 <p className="text-body-lg text-content-secondary">{t('contactPage.ways.subtitle')}</p>
 </div>

 <div className="flex flex-col gap-4">
 {ways.map((way) => (
 <a
 key={way.key}
 href={way.href}
 target={way.key === 'whatsapp' ? '_blank' : undefined}
 rel={way.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
 className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-edge-subtle transition-all hover:border-edge hover:shadow-lg hover:-translate-y-0.5"
 >
 <div
 className={cn(
 'w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110',
 way.color,
 )}
 >
 <way.icon className="w-5 h-5" />
 </div>
 <div className="flex-1 min-w-0">
 <p className="text-label-sm text-content-secondary mb-0.5">
 {t(`contactPage.ways.${way.key}Label`)}
 </p>
 <p className="text-body-base font-semibold text-content truncate">{way.value}</p>
 </div>
 <ChevronDown className="w-4 h-4 text-content-tertiary -rotate-90 rtl:rotate-90 rtl:-scale-x-100 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
 </a>
 ))}
 </div>

 <div className="mt-8 p-6 rounded-2xl bg-surface-strong border border-edge-subtle">
 <p className="text-label-sm font-semibold text-content mb-1">
 {t('contactPage.ways.hoursTitle')}
 </p>
 <p className="text-body-sm text-content-secondary">{t('contactPage.ways.hoursBody')}</p>
 </div>
 </motion.div>
 );
}
