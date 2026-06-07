import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Button variants — hover is handled by the blob goo animation (see globals.css).
 * Tailwind hover classes removed; CSS `.blob-btn--*:hover` drives the text color change.
 */
const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-surface-action text-content active:opacity-85 blob-btn--primary',
  secondary: 'bg-surface-alt text-content border border-edge active:opacity-90 blob-btn--secondary',
  outline:
    'bg-surface-base text-content border border-edge active:bg-surface-strong blob-btn--outline',
  ghost: 'bg-transparent text-content-secondary active:bg-surface-strong blob-btn--ghost',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm font-semibold rounded-xl',
  md: 'h-12 px-6 text-sm font-semibold rounded-xl',
  lg: 'h-14 px-8 text-base font-semibold rounded-xl',
};

/** SVG goo filter + 4 animated blobs that rise on hover */
const BlobInner = () => (
  <span className="blob-btn__inner" aria-hidden="true">
    <span className="blob-btn__blobs">
      <span className="blob-btn__blob" />
      <span className="blob-btn__blob" />
      <span className="blob-btn__blob" />
      <span className="blob-btn__blob" />
    </span>
    {/* Inline SVG filter — avoids cross-document URL issues in Next.js SPA routing */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style={{ position: 'absolute', width: 0, height: 0 }}
    >
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
            result="goo"
          />
          <feBlend in2="goo" in="SourceGraphic" result="mix" />
        </filter>
      </defs>
    </svg>
  </span>
);

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'blob-btn inline-flex items-center justify-center whitespace-nowrap select-none cursor-pointer',
    'transition-colors duration-normal ease-smooth',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-edge-focus',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ('href' in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    const isExternal = href.startsWith('http');

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
          <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>
          <BlobInner />
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>
        <BlobInner />
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonAsButton)}>
      <span className="relative z-[2] inline-flex items-center gap-2">{children}</span>
      <BlobInner />
    </button>
  );
}
