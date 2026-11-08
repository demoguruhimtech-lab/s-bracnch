import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  label?: string;
}

export function CtaSection({ title, subtitle, label }: CtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #FACC15 0%, transparent 40%), radial-gradient(circle at 80% 80%, #FACC15 0%, transparent 40%)',
        }}
      />
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-charcoal-300">{subtitle}</p>
        <a
          href={BUSINESS.phoneHref}
          className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-8 py-4 text-lg font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" strokeWidth={2.5} />
          {label ?? `Call ${BUSINESS.phone}`}
        </a>
      </div>
    </section>
  );
}
