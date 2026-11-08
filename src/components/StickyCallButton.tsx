import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { useLocation } from 'react-router-dom';

export function StickyCallButton() {
  const location = useLocation();
  const labelMap: Record<string, string> = {
    '/contact': 'Call Now',
  };

  const label = labelMap[location.pathname] ?? 'Call Now';

  return (
    <a
      href={BUSINESS.phoneHref}
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 bg-electric-400 py-3.5 text-center font-bold text-navy-900 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-colors hover:bg-electric-300 lg:hidden"
      aria-label={`Call ${BUSINESS.phone}`}
    >
      <Phone className="h-5 w-5" strokeWidth={2.5} />
      {label} · {BUSINESS.phone}
    </a>
  );
}
