const whatsappNumber = '971585817335';
const whatsappFormatted = '+971 58 581 7335';

export const siteConfig = {
  name: 'HelloTutor',
  description: '', // To be provided
  url: 'https://hellotutor.me',
  ogImage: 'https://hellotutor.me/og.png',
  locale: 'ae-en',
  loginUrl: 'https://app.hellotutor.me',
  whatsappNumber,
  whatsappFormatted,
  whatsappUrl: `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`,
  links: {
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
  },
} as const;
