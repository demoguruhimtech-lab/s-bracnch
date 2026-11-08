import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface CallButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  showNumber?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: 'bg-electric-400 text-navy-900 hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30',
  secondary: 'border-2 border-white/30 bg-white/5 text-white backdrop-blur-sm hover:border-white hover:bg-white/10',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  navy: 'bg-navy-900 text-white hover:bg-navy-800',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3.5 text-base gap-2',
  lg: 'px-8 py-4 text-lg gap-2.5',
};

export function CallButton({
  variant = 'primary',
  size = 'md',
  label,
  showNumber = true,
  className = '',
}: CallButtonProps) {
  const text = label ?? `Call ${BUSINESS.phone}`;
  return (
    <a
      href={BUSINESS.phoneHref}
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <Phone className={size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} strokeWidth={2.5} />
      <span>
        {text}
        {showNumber && label && <span className="ml-1 opacity-90">{BUSINESS.phone}</span>}
      </span>
    </a>
  );
}
