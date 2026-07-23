'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem, ScrollProgressBar } from '@/components/MotionWrapper';

const plans = [
  {
    name: 'Starter',
    price: '$99',
    forWho: 'Solo providers & very small offices',
    features: ['Monitoring & patching', 'Backup checks', 'Antivirus oversight', 'Email support', 'Remote IT support'],
    tilt: 'tilt-left',
    tape: false,
    accent: 'var(--accent-warm-soft)',
  },
  {
    name: 'Standard',
    price: '$149',
    forWho: 'Growing offices',
    features: ['Everything in Starter', 'Priority response', 'Quarterly reviews', 'MFA / security guidance', 'Account hygiene support'],
    tilt: 'tilt-right',
    tape: true,
    accent: 'var(--primary-light)',
  },
  {
    name: 'Premium',
    price: '$199',
    forWho: 'Higher-touch practices',
    features: ['Everything in Standard', 'Highest priority response', 'Limited on-site time included', 'Hands-on IT oversight'],
    tilt: 'tilt-left',
    tape: false,
    accent: 'var(--accent-warm)',
  },
];

const steps = [
  { n: '01', title: 'A quick chat', body: 'We talk for 20 minutes. No pitch deck, no jargon. Just what your team actually deals with day-to-day.' },
  { n: '02', title: 'A free tech review', body: 'We poke around your setup — endpoints, backups, security posture — and hand you a plain-English rundown.' },
  { n: '03', title: 'A right-sized plan', body: 'Pick the plan that fits. Month-to-month. Cancel any time. Grow into more when you\u2019re ready.' },
];

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      {/* ============ EDITORIAL HERO ============ */}
      <section id="home" className="hero hero-editorial">
        <div className="container hero-editorial-grid">
          <div className="hero-editorial-left">
            <FadeIn direction="up" delay={0.05}>
              <span className="kicker">Long Island &middot; NY &amp; NJ &middot; Est. small</span>
            </FadeIn>
            <FadeIn direction="up" delay={0.15}>
              <h1 className="display-serif hero-editorial-title">
                Quiet, dependable IT
                {' '}
                <em>for the businesses</em>
                {' '}
                <span className="lasso">actual humans</span>
                {' '}
                run.
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.25}>
              <p className="hero-editorial-lede">
                We&rsquo;re a small, local shop looking after the tech for small businesses and
                professional practices across <span className="ink-mark">Long Island, NY &amp; NJ</span>.
                No sprawling MSP contracts. No mystery invoices. Just steady, careful work.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.35}>
              <div className="hero-editorial-ctas">
                <Link className="btn-hand" href="/contact">Book a free tech review &rarr;</Link>
                <Link className="btn-hand btn-hand--paper" href="/pricing">See plans &amp; pricing</Link>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.45}>
              <p className="hero-editorial-signature">
                <span className="hand" style={{ fontSize: '1.5rem', color: 'var(--primary-ink)' }}>
                  &mdash; the Senyo team
                </span>
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.3} className="hero-editorial-right">
            <aside className="sticker-card sticker-card--blue tilt-right tape tape--blue hero-notecard">
              <p className="hand hero-notecard-heading">A few things we care about:</p>
              <ul className="hero-notecard-list">
                <li><strong>No lock-in.</strong> Month-to-month, always.</li>
                <li><strong>Actual humans</strong> answer the phone.</li>
                <li><strong>Local hands</strong> when remote isn&rsquo;t enough.</li>
                <li><strong>Security first</strong>, without the theater.</li>
              </ul>
              <p className="hero-notecard-footnote">
                <span className="serif-italic">P.S.</span> If you already have an MSP and things
                feel off &mdash; we&rsquo;ll give you a second opinion, free.
              </p>
            </aside>
          </FadeIn>
        </div>
        <span className="hand-divider hand-divider--blue" aria-hidden="true" />
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="how-it-works">
        <div className="container" style={{ maxWidth: 1080 }}>
          <FadeIn direction="up">
            <span className="kicker">How this actually goes</span>
            <h2 className="section-title-serif">
              Three <span className="scribble scribble--blue">unremarkable</span> steps.
            </h2>
            <p className="section-lede">
              We keep it boring on purpose. Boring means predictable, and predictable is what your
              team wants from IT.
            </p>
          </FadeIn>

          <StaggerContainer className="steps-grid" staggerDelay={0.1}>
            {steps.map((s, i) => (
              <StaggerItem key={s.n}>
                <article className={`step-card ${i % 2 ? 'tilt-right' : 'tilt-left'}`}>
                  <span className="step-number serif-italic">{s.n}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-body">{s.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ PLANS ============ */}
      <section className="plans-section">
        <div className="container">
          <FadeIn direction="up">
            <span className="kicker">Right-sized plans</span>
            <h2 className="section-title-serif">
              Pick the one that <em className="serif-italic">fits today.</em>
            </h2>
            <p className="section-lede">Grow into a bigger plan when you need to. Downgrade when you don&rsquo;t. Simple.</p>
          </FadeIn>

          <StaggerContainer className="plans-grid-studio" staggerDelay={0.12}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={`sticker-card ${plan.tape ? 'sticker-card--blue tape tape--blue' : ''} ${plan.tilt} plan-studio-card`}
                  style={{ borderTopColor: plan.accent }}
                >
                  {plan.tape && <span className="hand plan-flag">most picked</span>}
                  <h3 className="plan-studio-name">{plan.name}</h3>
                  <p className="plan-studio-price">
                    <span className="serif-italic">{plan.price}</span>
                    <span className="plan-studio-per">/mo</span>
                  </p>
                  <p className="plan-studio-who">{plan.forWho}</p>
                  <ul className="plan-studio-list">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link className="btn-hand btn-hand--paper plan-studio-cta" href="/contact">
                    Start with {plan.name}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ============ COVERAGE ============ */}
      <section className="coverage-section coverage-studio">
        <div className="container" style={{ maxWidth: 1080 }}>
          <FadeIn direction="up">
            <span className="kicker">Where we work</span>
            <h2 className="section-title-serif">
              Local hands. <em className="serif-italic">Wider reach.</em>
            </h2>
            <p className="section-lede">
              We&rsquo;re rooted in the New York metropolitan region, and we support remote-first
              teams from all over.
            </p>
          </FadeIn>

          <div className="coverage-maps-grid">
            <div className="sticker-card tilt-left coverage-map-card">
              <div className="coverage-map-svg-wrap">
                <img src="/map-world.png" alt="Local service area map" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="coverage-map-label">Local Service Area</h3>
              <p className="coverage-map-sub">NY &bull; NJ &bull; CT &bull; Long Island</p>
            </div>

            <Link href="/coverage" className="sticker-card sticker-card--blue tilt-right coverage-map-card coverage-map-card--link">
              <div className="coverage-map-svg-wrap">
                <img src="/Area.png" alt="Map of the United States" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <h3 className="coverage-map-label">View Coverage Details</h3>
              <p className="coverage-map-sub">See all areas we serve</p>
              <span className="coverage-map-cta">Explore coverage &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WEB SERVICES NOTECARD ============ */}
      <section className="web-cta-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <FadeIn direction="up">
            <aside className="sticker-card tilt-right tape web-cta-card">
              <span className="kicker">Also &mdash; while you&rsquo;re here</span>
              <h3 className="web-cta-title">
                Need a <span className="scribble scribble--terra">website</span> too?
              </h3>
              <p className="web-cta-body">
                We build and host simple, fast sites for the same clients we support. One partner,
                one invoice, one phone number. Handy, that.
              </p>
              <div className="hero-editorial-ctas">
                <Link className="btn-hand btn-hand--warm" href="/web-services">Explore web services</Link>
                <Link className="btn-hand btn-hand--paper" href="/contact">Say hello</Link>
              </div>
            </aside>
          </FadeIn>
        </div>
      </section>

      {/* ============ PARTNERS ============ */}
      <section className="trusted-by-strip" aria-label="Partners with industry tools">
        <p className="trusted-by-label">
          <span className="serif-italic" style={{ textTransform: 'none', letterSpacing: 0, fontSize: '1.05rem' }}>
            Partners with
          </span>
        </p>
        <div className="trusted-by-logos">
          <div className="trusted-logo" aria-label="ConnectWise">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#005DA8"/>
              <path d="M28 13a10 10 0 1 0 0 14" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M24 17a5 5 0 1 0 0 6" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>
          <div className="trusted-logo" aria-label="Microsoft">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="15" height="15" fill="#F25022"/>
              <rect x="21" y="4" width="15" height="15" fill="#7FBA00"/>
              <rect x="4" y="21" width="15" height="15" fill="#00A4EF"/>
              <rect x="21" y="21" width="15" height="15" fill="#FFB900"/>
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
