import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, Home } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

export function NotFoundPage() {
  useSeo({
    title: 'Page Not Found | S Branch Electric — Houston, TX',
    description:
      'The page you were looking for could not be found. Call S Branch Electric at 832-484-0514 for electrical services in Houston, TX.',
    path: '/404',
  });

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-display text-7xl font-extrabold text-navy-900 sm:text-8xl">404</span>
          <h1 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-charcoal-600">
            The page you were looking for doesn't exist or may have been moved. Try one of the links below, or call
            S Branch Electric directly.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-7 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-lg hover:shadow-electric-400/30"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-900 px-6 py-3.5 text-base font-semibold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          <div className="mt-12 grid gap-8 text-left sm:grid-cols-2">
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-charcoal-500">
                Popular Services
              </h2>
              <ul className="mt-4 space-y-2.5">
                {services.slice(0, 5).map((s) => (
                  <li key={s.path}>
                    <Link
                      to={s.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-charcoal-700 transition-colors hover:text-navy-900"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-charcoal-400 transition-transform group-hover:translate-x-0.5" />
                      {s.name} — Houston
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-sm font-bold uppercase tracking-wider text-charcoal-500">
                Service Areas
              </h2>
              <ul className="mt-4 space-y-2.5">
                {serviceAreas.slice(0, 5).map((a) => (
                  <li key={a.path}>
                    <Link
                      to={a.path}
                      className="group inline-flex items-center gap-1.5 text-sm text-charcoal-700 transition-colors hover:text-navy-900"
                    >
                      <MapPin className="h-3.5 w-3.5 text-charcoal-400" />
                      {a.shortName}, TX
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
