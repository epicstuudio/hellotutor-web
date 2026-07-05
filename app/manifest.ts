import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'HelloTutor',
    description: 'Expert Online Tutoring across the UK and UAE',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff5ed',
    theme_color: '#fff5ed', // Surface color
    icons: [
      {
        src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/favicon/favicon-2.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/favicon/favicon-2.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
