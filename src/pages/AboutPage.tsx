import { Link } from 'react-router-dom';
import { Phone, MapPin, Zap, Wrench, ShieldCheck, Star, ArrowRight, Home, Building2 } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';

export function AboutPage() {
  useSeo({
    title: 'About S Branch Electric | Houston Electrical Installation Service',
    description:
      'S Branch Electric is an electrical installation service based in Houston, TX offering residential and commercial electrical work. Call 832-484-0514.',
    path: '/about',
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'About Us' }]} />

      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Professional electrician working on wiring in an indoor setting"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="container-page relative py-16 sm:py-20">
          <div className="max-w-2xl">
            <span className="eyebrow text-electric-400">
              <Zap className="h-3.5 w-3.5" fill="currentColor" />
              About S Branch Electric
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Houston Electrical Installation Service
            </h1>
            <p className="mt-5 text-lg text-charcoal-200">
              S Branch Electric is an electrical installation service based in Houston, Texas, offering residential
              and commercial electrical work throughout the area.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              An Electrician You Reach by Phone
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal-700">
              <p>
                S Branch Electric is an electrical installation service located at {BUSINESS.address}. The business
                serves residential and commercial customers throughout Houston, with a particular presence in the
                Spring Branch area where it is based.
              </p>
              <p>
                Customers call S Branch Electric for a range of electrical needs — from breaker repairs and panel
                inspections to lighting installation and dedicated appliance circuits. The business has responded to
                both scheduled and after-hours calls for Houston homeowners dealing with power outages, appliance
                connection issues, and other electrical problems.
              </p>
              <p>
                Every project starts with a direct phone call. Calling lets you describe what you need, ask questions,
                and confirm service availability for your specific location before any work begins.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-6 py-3.5 text-base font-semibold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Skilled electrician using a drill to repair electrical equipment indoors in Houston"
                loading="lazy"
                className="h-80 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal-50 py-16 sm:py-20">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">What We Do</h2>
            <p className="mt-4 text-base text-charcoal-600">
              S Branch Electric handles both residential and commercial electrical installation and repair work
              throughout the Houston area.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Home, title: 'Residential', body: 'Electrical installation, wiring, panels, outlets, and lighting for Houston homes.' },
              { icon: Building2, title: 'Commercial', body: 'Electrical installation and wiring for Houston businesses and commercial spaces.' },
              { icon: Wrench, title: 'Installation & Repair', body: 'From new installations to troubleshooting and repairing existing electrical systems.' },
              { icon: ShieldCheck, title: 'Safety First', body: 'Work performed with attention to proper connections and electrical safety.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-400 text-navy-900">
                    <item.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-8 rounded-2xl border border-charcoal-100 bg-charcoal-50 p-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="eyebrow">
                <MapPin className="h-3.5 w-3.5" />
                Location
              </span>
              <p className="mt-2 font-display text-base font-bold text-navy-900">{BUSINESS.name}</p>
              <p className="mt-1 text-sm text-charcoal-600">{BUSINESS.address}</p>
            </div>
            <div>
              <span className="eyebrow">
                <Phone className="h-3.5 w-3.5" />
                Phone
              </span>
              <a
                href={BUSINESS.phoneHref}
                className="mt-2 block font-display text-base font-bold text-navy-900 transition-colors hover:text-electric-500"
              >
                {BUSINESS.phone}
              </a>
              <p className="mt-1 text-sm text-charcoal-600">Call to discuss your project</p>
            </div>
            <div>
              <span className="eyebrow">
                <Star className="h-3.5 w-3.5" fill="currentColor" />
                Reviews
              </span>
              <p className="mt-2 font-display text-base font-bold text-navy-900">{BUSINESS.rating} / 5.0</p>
              <p className="mt-1 text-sm text-charcoal-600">{BUSINESS.reviewCount} Google reviews</p>
            </div>
            <div>
              <span className="eyebrow">
                <Zap className="h-3.5 w-3.5" fill="currentColor" />
                Category
              </span>
              <p className="mt-2 font-display text-base font-bold text-navy-900">Electrical Installation</p>
              <p className="mt-1 text-sm text-charcoal-600">Residential & Commercial</p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Discuss Your Electrical Project?"
        subtitle={`Call S Branch Electric at ${BUSINESS.phone} to talk about your electrical installation or repair needs.`}
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
