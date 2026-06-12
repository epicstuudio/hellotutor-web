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

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-surface-action text-content hover:brightness-95 active:opacity-85',
  secondary:
    'bg-surface-alt text-content border border-edge hover:bg-surface-hover active:opacity-90',
  outline:
    'bg-surface-base text-content border border-edge hover:bg-surface-hover active:bg-surface-strong',
  ghost:
    'bg-transparent text-content-secondary hover:bg-surface-hover hover:text-content active:bg-surface-strong',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 px-5 text-sm font-semibold rounded-xl',
  md: 'h-12 px-6 text-sm font-semibold rounded-xl',
  lg: 'h-14 px-8 text-base font-semibold rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center whitespace-nowrap select-none cursor-pointer',
    'transition-all duration-normal ease-smooth',
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
          <span className="inline-flex items-center gap-2">{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        <span className="inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonAsButton)}>
      <span className="inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
