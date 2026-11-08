import { Link } from 'react-router-dom';
import {
  Phone,
  ArrowRight,
  MapPin,
  Star,
  ShieldCheck,
  Clock,
  Wrench,
  Zap,
  MessageCircle,
  ExternalLink,
  Quote,
  Home,
  Building2,
  Cable,
  Lightbulb,
  PlugZap,
  HelpCircle,
  Plus,
  Check,
} from 'lucide-react';
import * as Icons from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';
import { reviews } from '@/data/reviews';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';

export function HomePage() {
  useSeo({
    title: 'S Branch Electric | Electrical Installation Service in Houston, TX',
    description:
      'S Branch Electric is an electrical installation service in Houston, TX. Call 832-484-0514 for electrical installation, panel upgrades, wiring, lighting, and repairs.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <WhyChoose />
      <ProcessSection />
      <HoustonElectricalSection />
      <ReviewsPreview />
      <AreasPreview />
      <HomeFaqSection />
      <CtaSection
        title="Need Electrical Installation in Houston?"
        subtitle="Call S Branch Electric to discuss your electrical installation and service requirements."
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920"
          alt="Professional electrician using a drill on an indoor circuit breaker panel in Houston"
          className="h-full w-full object-cover opacity-25"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/70" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 90% 10%, rgba(250,204,21,0.15) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container-page relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow text-electric-400">
            <Zap className="h-3.5 w-3.5" fill="currentColor" />
            Houston Electrical Installation Service
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Professional Electrical Services in Houston, TX
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal-200">
            Looking for electrical installation or electrical service in Houston? Call S Branch Electric to discuss
            your project and confirm service availability.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-electric-400 px-8 py-4 text-lg font-bold text-navy-900 transition-all hover:bg-electric-300 hover:shadow-xl hover:shadow-electric-400/30 active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" strokeWidth={2.5} />
              Call {BUSINESS.phone}
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
            >
              Explore Electrical Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-charcoal-300">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-electric-400" />
              {BUSINESS.mainLocation}
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="h-4 w-4 text-electric-400" fill="currentColor" />
              {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-electric-400" />
              Call to confirm availability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: 'Residential & Commercial' },
    { icon: Wrench, label: 'Installation & Repairs' },
    { icon: Phone, label: 'Direct Phone — No Forms' },
    { icon: MapPin, label: 'Houston, TX Based' },
  ];
  return (
    <section className="border-b border-charcoal-100 bg-white">
      <div className="container-page grid grid-cols-2 gap-4 py-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
              <item.icon className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="text-sm font-semibold text-charcoal-700">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Zap className="h-3.5 w-3.5" fill="currentColor" />
            Electrical Services
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Electrical Services in Houston, TX
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            S Branch Electric handles a range of residential and commercial electrical installation and repair work
            throughout Houston. Call to confirm availability for your specific project.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.path} delay={i * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-navy-900 px-6 py-3.5 text-base font-semibold text-navy-900 transition-all hover:bg-navy-900 hover:text-white"
          >
            View All Electrical Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const points = [
    {
      icon: MessageCircle,
      title: 'Talk Directly About Your Project',
      body: 'Every project starts with a phone call. Describe what you need — an installation, a repair, an upgrade — and get clear guidance on next steps.',
    },
    {
      icon: Wrench,
      title: 'Residential & Commercial Work',
      body: 'From a single outlet to a full panel installation, S Branch Electric handles both residential and commercial electrical projects in Houston.',
    },
    {
      icon: ShieldCheck,
      title: 'Installation Done Right',
      body: 'Electrical installation is performed with attention to safety and proper connections, so your system works reliably after the job is done.',
    },
    {
      icon: Clock,
      title: 'Call When You Need Help',
      body: 'Houston homeowners have called for weekend and after-hours issues. When something goes wrong with your electrical system, calling is the first step.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <ShieldCheck className="h-3.5 w-3.5" />
              Why Call S Branch Electric
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              A Houston Electrician You Can Reach by Phone
            </h2>
            <p className="mt-4 text-base text-charcoal-600">
              S Branch Electric is an electrical installation service based in Houston, Texas. The focus is on
              understanding your electrical requirements and doing the installation or repair work correctly.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Professional electrician working on wiring in a Houston home during an installation"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-400 text-navy-900">
                    <point.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Call S Branch Electric',
      body: 'Pick up the phone and call 832-484-0514. Describe your electrical project, whether it\'s an installation, repair, or upgrade.',
    },
    {
      num: '02',
      title: 'Discuss Your Needs',
      body: 'Explain what you need done — a new panel, lighting installation, outlet addition, or troubleshooting a problem. Get clear guidance on next steps.',
    },
    {
      num: '03',
      title: 'Confirm Availability',
      body: 'Confirm that service is available for your specific Houston-area location and discuss scheduling for the work.',
    },
    {
      num: '04',
      title: 'Get the Work Done',
      body: 'The electrical installation or repair is performed with attention to safety and proper connections.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <Phone className="h-3.5 w-3.5" />
            How It Works
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Simple, Phone-First Process
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            No forms, no online booking, no waiting for an email reply. Just call and talk directly about your
            electrical project.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 70}>
              <div className="relative h-full rounded-2xl border border-charcoal-100 bg-charcoal-50 p-6">
                <span className="font-display text-4xl font-extrabold text-electric-400/40">{step.num}</span>
                <h3 className="mt-3 font-display text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HoustonElectricalSection() {
  const features = [
    {
      icon: Home,
      title: 'Residential Electrical',
      body: 'Whole-home wiring, outlet and switch installation, lighting, ceiling fans, panel upgrades, and dedicated appliance circuits for Houston homes.',
    },
    {
      icon: Building2,
      title: 'Commercial Electrical',
      body: 'Tenant build-outs, equipment hookups, commercial lighting, dedicated circuits, and panel installation for Houston businesses.',
    },
    {
      icon: Cable,
      title: 'Wiring & Rewiring',
      body: 'New wiring for additions and remodels, whole-home rewiring for older Houston homes, and damaged wiring repair from storms and age.',
    },
    {
      icon: Zap,
      title: 'Panel & Breaker Work',
      body: 'Electrical panel installation, panel upgrades from 100 to 200 amps, breaker replacement, and GFCI/AFCI breaker installation.',
    },
    {
      icon: Lightbulb,
      title: 'Lighting Installation',
      body: 'Indoor fixtures, recessed lighting, outdoor and landscape lighting, ceiling fans, and dimmer switch installation.',
    },
    {
      icon: PlugZap,
      title: 'Troubleshooting & Repair',
      body: 'Diagnosing tripping breakers, dead outlets, flickering lights, and GFCI issues — then performing the correct repair.',
    },
  ];

  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-24">
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              Houston Electrical Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Electrical Work for Houston Homes & Businesses
            </h2>
            <p className="mt-4 text-base text-charcoal-600">
              Houston's mix of older neighborhoods and new construction creates a wide range of electrical needs.
              From Spring Branch homes built decades ago to new commercial build-outs, S Branch Electric handles
              installation and repair work across the city.
            </p>
            <p className="mt-4 text-base text-charcoal-600">
              Houston's storms and humidity put particular stress on outdoor electrical equipment and breakers.
              Having a local electrician you can call means faster response when something goes wrong.
            </p>
            <div className="mt-7 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/32497160/pexels-photo-32497160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Electrician examining a residential fuse box during an electrical service call in Houston"
                loading="lazy"
                className="h-56 w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700 transition-colors group-hover:bg-electric-400 group-hover:text-navy-900">
                    <feature.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeFaqSection() {
  const faqs = [
    {
      question: 'How do I contact S Branch Electric?',
      answer:
        'Call 832-484-0514. S Branch Electric uses phone calls as the only contact method — no forms, no email, no online booking. Just call and discuss your electrical project directly.',
    },
    {
      question: 'Does S Branch Electric serve my area of Houston?',
      answer:
        'S Branch Electric is based in the Spring Branch area of Houston and serves the surrounding area, including Memorial, Bellaire, Spring, Cypress, and Katy. Call to confirm availability for your specific address.',
    },
    {
      question: 'Do you handle both residential and commercial electrical work?',
      answer:
        'Yes. S Branch Electric offers both residential and commercial electrical services in Houston. From a single outlet in a home to commercial lighting and equipment circuits, call to discuss your project.',
    },
    {
      question: 'Can you help with electrical emergencies in Houston?',
      answer:
        'S Branch Electric has responded to after-hours and weekend calls for Houston homeowners dealing with power outages and appliance issues. Call 832-484-0514 to describe your situation.',
    },
    {
      question: 'Do I need a permit for electrical work in Houston?',
      answer:
        'Many electrical installations in Houston require a permit and inspection, including panel upgrades and new circuit installations. Call to discuss your specific project and what may be involved.',
    },
    {
      question: 'What areas of Houston do you focus on?',
      answer:
        'S Branch Electric is located in Spring Branch and many recurring customers are in the immediate area. Service extends to neighborhoods across Houston and surrounding communities. Call to confirm your location is served.',
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
              Houston Electrical FAQs
            </h2>
            <p className="mt-4 text-base text-charcoal-600">
              Common questions about S Branch Electric's services, service areas, and how to get started with your
              electrical project in Houston.
            </p>
            <div className="mt-7 rounded-2xl bg-navy-900 p-7 text-white">
              <h3 className="font-display text-lg font-bold">Still Have Questions?</h3>
              <p className="mt-2 text-sm text-charcoal-300">
                Call S Branch Electric directly. The fastest way to get answers about your electrical project is a
                phone call.
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="mt-5 inline-flex items-center gap-2.5 rounded-lg bg-electric-400 px-6 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call {BUSINESS.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-charcoal-100 bg-white p-5 shadow-sm open:bg-charcoal-50"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold text-navy-900">
                    <span className="flex items-start gap-2.5">
                      <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-electric-500" />
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-charcoal-400 transition-transform group-open:rotate-45">
                      <Icons.Plus className="h-5 w-5" />
                    </span>
                  </summary>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-charcoal-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ReviewsPreview() {
  return (
    <section className="bg-navy-900 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-electric-400">
            <Star className="h-3.5 w-3.5" fill="currentColor" />
            Customer Reviews
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl">
            What Houston Customers Say
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5">
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 text-electric-400" fill="currentColor" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">
              {BUSINESS.rating} · {BUSINESS.reviewCount} Google reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((review, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Quote className="h-8 w-8 text-electric-400" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-200">
                  &ldquo;{review.quote.slice(0, 240)}…&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4 text-xs font-medium text-charcoal-400">
                  {review.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            Read All Google Reviews
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AreasPreview() {
  return (
    <section className="bg-charcoal-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <MapPin className="h-3.5 w-3.5" />
            Service Areas
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
            Areas Served Around Houston
          </h2>
          <p className="mt-4 text-base text-charcoal-600">
            S Branch Electric is based in Houston and serves the surrounding area. Call to confirm service
            availability for your specific location.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, i) => (
            <Reveal key={area.path} delay={i * 50}>
              <Link
                to={area.path}
                className="group flex items-center justify-between rounded-xl border border-charcoal-100 bg-white p-5 shadow-sm transition-all hover:border-electric-400 hover:shadow-lg hover:shadow-navy-900/5"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">{area.shortName}, TX</h3>
                  <p className="mt-1 text-sm text-charcoal-500">Electrical services available</p>
                </div>
                <ArrowRight className="h-5 w-5 text-charcoal-400 transition-all group-hover:translate-x-1 group-hover:text-electric-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
