import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/:locale(ae-en|ae-ar)?/about/all-faqs', destination: '/:locale/faqs', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/about/for-parents', destination: '/:locale/parents', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/about/safety-and-trust', destination: '/:locale/safety-and-trust', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/subjects/exam-preparation', destination: '/:locale/exam-preparation', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/levels/gcse-tutors', destination: '/:locale/levels/secondary-tutors/gcse', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/levels/igcse-tutors', destination: '/:locale/levels/secondary-tutors/igcse', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/levels/a-level-tutors', destination: '/:locale/levels/secondary-tutors/a-level', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/levels/ks3-tutors', destination: '/:locale/levels/secondary-tutors/ks3', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/tutors-in-abuDhabi', destination: '/:locale/tutors-in-abu-dhabi', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/students-faqs', destination: '/:locale/faqs?tab=students', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/tutors-faqs', destination: '/:locale/faqs?tab=tutors', permanent: true },
      { source: '/:locale(ae-en|ae-ar)?/levels', destination: '/:locale', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
