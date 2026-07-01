import Link from 'next/link';
import ParticlesBackground from '@/components/Particles';

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
};

type LandingPageData = {
  title: string;
  slug: string;
  badge: string;
  badgeColor: string;
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  ctaLink: string;
  ctaColor: string;
  content: string;
  pricingPlans: string;
  customCSS: string;
};

export default function LandingPageRenderer({ page }: { page: LandingPageData }) {
  let pricingPlans: PricingPlan[] = [];

  try {
    pricingPlans = JSON.parse(page.pricingPlans);
  } catch (e) {
    console.error('Error parsing pricing plans:', e);
  }

  return (
    <>
      <ParticlesBackground />

      {/* Custom CSS */}
      {page.customCSS && (
        <style dangerouslySetInnerHTML={{ __html: page.customCSS }} />
      )}

      {/* Breadcrumb */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-8">
        <div className="text-sm text-[var(--color-muted)]">
          <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span>{page.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-16 text-center px-8">
        {page.badge && (
          <div className="inline-block px-4 py-2 mb-6 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.3)] rounded-full">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{ color: page.badgeColor }}
            >
              {page.badge}
            </span>
          </div>
        )}

        <h1 className="text-5xl md:text-6xl font-black mb-6 max-w-4xl mx-auto leading-tight">
          {page.heroTitle || page.title}
        </h1>

        {page.heroSubtitle && (
          <p className="text-xl text-[var(--color-muted)] mb-8 max-w-3xl mx-auto leading-relaxed">
            {page.heroSubtitle}
          </p>
        )}

        {page.ctaText && (
          <Link
            href={page.ctaLink}
            className="inline-block px-8 py-4 font-bold rounded-lg hover:-translate-y-1 transition-all"
            style={{
              backgroundColor: page.ctaColor,
              color: '#0a0a0a',
              boxShadow: `0 10px 30px ${page.ctaColor}30`
            }}
          >
            {page.ctaText}
          </Link>
        )}
      </section>

      {/* Main Content */}
      <article className="relative z-10 max-w-4xl mx-auto px-8 py-12">
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-12 prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-ul:text-lg prose-ul:mb-6 prose-li:mb-2 prose-strong:text-[var(--color-accent)] prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: page.content }}
        />
      </article>

      {/* Pricing Section */}
      {pricingPlans.length > 0 && (
        <section className="relative z-10 max-w-6xl mx-auto px-8 py-12">
          <h2 className="text-4xl font-black mb-12 text-center text-[var(--color-accent)]">
            Planes y Precios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-[var(--color-card)] rounded-xl p-8 hover:-translate-y-2 transition-all ${
                  plan.highlighted
                    ? 'border-2 border-[var(--color-accent)]'
                    : 'border border-[var(--color-border)]'
                }`}
              >
                <h3 className="text-xl font-bold mb-4 text-[var(--color-accent)]">
                  {plan.name}
                </h3>
                <p className="text-5xl font-black text-[var(--color-accent)] mb-2">
                  {plan.price}
                </p>
                <p className="text-[var(--color-muted)] mb-6 text-sm">{plan.period}</p>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Final */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-20">
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-16 text-center">
          <h2 className="text-4xl font-black mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Cotiza sin compromiso
          </p>
          <Link
            href={page.ctaLink}
            className="inline-block px-8 py-4 font-bold rounded-lg hover:-translate-y-1 transition-all"
            style={{
              backgroundColor: page.ctaColor,
              color: '#0a0a0a',
              boxShadow: `0 10px 30px ${page.ctaColor}30`
            }}
          >
            {page.ctaText}
          </Link>
        </div>
      </div>
    </>
  );
}
