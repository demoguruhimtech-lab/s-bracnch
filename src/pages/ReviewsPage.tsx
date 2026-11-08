import { Star, ExternalLink, Quote, Phone } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { BUSINESS } from '@/data/business';
import { reviews } from '@/data/reviews';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaSection } from '@/components/CtaSection';
import { Reveal } from '@/components/Reveal';

export function ReviewsPage() {
  useSeo({
    title: 'Customer Reviews | S Branch Electric — Houston, TX',
    description:
      'Read genuine customer reviews for S Branch Electric, an electrical installation service in Houston, TX. Rated 5.0 on Google. Call 832-484-0514.',
    path: '/reviews',
  });

  return (
    <>
      <Breadcrumbs items={[{ label: 'Reviews' }]} />

      <section className="relative overflow-hidden bg-navy-900">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(250,204,21,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="container-page relative py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-electric-400">
              <Star className="h-3.5 w-3.5" fill="currentColor" />
              Customer Reviews
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              S Branch Electric Reviews
            </h1>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-3">
              <span className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 text-electric-400" fill="currentColor" />
                ))}
              </span>
              <span className="text-lg font-bold text-white">{BUSINESS.rating}</span>
              <span className="text-sm text-charcoal-300">· {BUSINESS.reviewCount} Google reviews</span>
            </div>
            <p className="mt-5 text-base text-charcoal-200">
              Genuine reviews from Houston customers who called S Branch Electric for electrical installation and
              repair work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-2">
            {reviews.map((review, i) => (
              <Reveal key={i} delay={i * 60}>
                <figure className="flex h-full flex-col rounded-2xl border border-charcoal-100 bg-charcoal-50 p-7">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-electric-400" />
                    <span className="flex items-center gap-0.5">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} className="h-4 w-4 text-electric-400" fill="currentColor" />
                      ))}
                    </span>
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-700">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 border-t border-charcoal-200 pt-4 text-sm font-semibold text-navy-900">
                    {review.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl bg-navy-900 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h2 className="font-display text-xl font-bold text-white">Read All Reviews on Google</h2>
              <p className="mt-1 text-sm text-charcoal-300">
                See all {BUSINESS.reviewCount} reviews on the S Branch Electric Google listing.
              </p>
            </div>
            <a
              href={BUSINESS.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-electric-400 px-6 py-3.5 text-base font-bold text-navy-900 transition-all hover:bg-electric-300"
            >
              Open Google Reviews
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <CtaSection
        title="Call S Branch Electric for Your Electrical Needs"
        subtitle={`Join Houston homeowners who trust S Branch Electric. Call ${BUSINESS.phone} to discuss your project.`}
        label={`Call ${BUSINESS.phone}`}
      />
    </>
  );
}
