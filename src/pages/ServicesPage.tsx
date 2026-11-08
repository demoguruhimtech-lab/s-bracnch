import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Phone, MapPin } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaSection } from '@/components/CtaSection';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { Reveal } from '@/components/Reveal';

export function ServicesPage() {
  useSeo({
    title: 'Electrical Services in Houston, TX | S Branch Electric',
    description:
      'Explore electrical services offered by S Branch Electric in Houston, TX: installation, wiring, panel upgrades, lighting, breakers, outlets, and repairs. Call 832-484-0514.',
    path: '/services',
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Electrical Services' }]} />
      <section className="bg-white py-14 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Zap className="h-3.5 w-3.5" fill="currentColor" />
              Electrical Services
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-900 sm:text-5xl">
              Electrical Services in Houston, TX
            </h1>
            <p className="mt-5 text-lg text-charcoal-600">
              S Branch Electric offers residential and commercial electrical installation, panel work, wiring,
              lighting, breaker, outlet, and troubleshooting services throughout Houston, Texas. Call to confirm
              availability for your project.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.path} delay={i * 50}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Have an Electrical Project in Houston?"
        subtitle="Call S Branch Electric to discuss your electrical installation or repair needs. Every project starts with a phone call."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
