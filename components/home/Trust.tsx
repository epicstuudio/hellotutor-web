import { Container } from '@/components/layout/Container';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const schools = [
  { name: 'Dubai College', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/DC.png' },
  { name: 'DESS', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Dess.png' },
  { name: 'Dubai British School Emirates Hills', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Dubai%20British%20School%20Emirates%20Hills.png' },
  { name: 'GEMS Modern Academy', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/GEMS%20Modern%20Academy.png' },
  { name: 'GEMS Education', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Gems.png' },
  { name: 'Horizon English School', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Horizon%20English%20School.png' },
  { name: 'JESS Dubai', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Jess%20Dubai.png' },
  { name: 'Kings School', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Kings.png' },
  { name: 'Nord Anglia International School', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/NORD%20ANGLIA%20INTERNATIONAL%20SCHOOL%20DUBAI.png' },
  { name: 'Repton Dubai', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/Repton%20Dubai.png' },
  { name: 'Victory Heights Primary School', src: 'https://pub-c1e8cebadf004f2fb0c59e13ab317896.r2.dev/web/schools/VICTORY%20HEIGHTS%20PRIMARY%20SCHOOL.png' },
];

export function Trust() {
  const t = useTranslations('trust');

  return (
    <section className="py-16 lg:py-20 bg-surface overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
          <h2 className="text-h2 text-content max-w-xl leading-tight tracking-tight">
            {t('title')}
          </h2>
          <p className="text-content-secondary max-w-lg text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex gap-12 md:gap-20 pe-12 md:pe-20 min-w-max shrink-0 animate-marquee rtl:animate-marquee-rtl group-hover:[animation-play-state:paused]">
            {schools.concat(schools).concat(schools).map((school, i) => (
              <div key={`first-${i}`} className="flex items-center justify-center shrink-0 w-32 h-20 relative transition-all duration-300 hover:scale-105">
                <Image
                  src={school.src}
                  alt={school.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-12 md:gap-20 pe-12 md:pe-20 min-w-max shrink-0 animate-marquee rtl:animate-marquee-rtl group-hover:[animation-play-state:paused]" aria-hidden="true">
            {schools.concat(schools).concat(schools).map((school, i) => (
              <div key={`second-${i}`} className="flex items-center justify-center shrink-0 w-32 h-20 relative transition-all duration-300 hover:scale-105">
                <Image
                  src={school.src}
                  alt={school.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 128px, 128px"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
