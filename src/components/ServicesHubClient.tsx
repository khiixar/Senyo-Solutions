'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem, ScrollProgressBar } from '@/components/MotionWrapper';

const managedPlans = [
  {
    name: 'Starter',
    price: '$99',
    per: '/mo',
    who: 'Solo operators & 1–3 person shops',
    features: [
      'We watch your machines and patch them quietly',
      'We check your backups actually work',
      'Antivirus that stays out of your way',
      'Email us anytime — a person replies',
      "Remote fix-it sessions when you're stuck",
    ],
  },
  {
    name: 'Standard',
    price: '$149',
    per: '/mo',
    tag: 'most picked',
    who: 'Small practices, 4–12 people',
    features: [
      'Everything in Starter',
      'You jump the line when something breaks',
      "A quarterly sit-down to look at what's next",
      'MFA setup so nobody guesses their way in',
      'Account clean-up so your team list matches reality',
    ],
  },
  {
    name: 'Premium',
    price: '$199',
    per: '/mo',
    who: "Busy offices that can't afford downtime",
    features: [
      'Everything in Standard',
      'Top of the queue when the WiFi dies',
      'A few on-site hours built in',
      'Hands-on eyes on your setup all month',
    ],
  },
];

const addOns = [
  { label: 'On-site visits', detail: '$75–$125/hr, flat-rated when we can' },
  { label: 'Same-day emergencies', detail: 'Premium surcharge, no drama' },
  { label: 'New computer setup or migration', detail: 'Flat rate per machine' },
  { label: 'Microsoft 365 setup or clean-up', detail: 'Flat quote once we look' },
  { label: 'Wi-Fi & small office networking', detail: 'Flat rate, one visit usually' },
  { label: 'Backup restores & recovery testing', detail: 'Flat or hourly, your call' },
  { label: 'Printer & scanner exorcisms', detail: 'Hourly, sometimes bundled' },
];

export default function ServicesPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="page-hero">
        <div className="container">
          <FadeIn direction="up">
            <p className="kicker">What we actually do</p>
            <h1 className="display-serif page-hero-title">
              IT for the small teams <span className="serif-italic">that keep the lights on.</span>
            </h1>
            <p className="section-lede page-hero-lede">
              Three plans, a handful of add-ons, and one promise: we pick up the phone, we explain what happened, and we don't charge you for the mystery.
            </p>
          </FadeIn>
        </div>
      </main>

      <section className="plans-section">
        <div className="container">
          <FadeIn direction="up">
            <p className="kicker">Plans</p>
            <h2 className="section-title-serif">Pick a plan. Change it later.</h2>
            <p className="section-lede">
              Month-to-month, no long lock-ins. Start where it makes sense, move up when you outgrow it.
            </p>
          </FadeIn>
          <StaggerContainer className="plans-grid-studio">
            {managedPlans.map((plan, i) => (
              <StaggerItem key={plan.name}>
                <article className={`plan-studio-card ${i === 1 ? 'tilt-right' : i === 0 ? 'tilt-left' : ''}`}>
                  {plan.tag && <span className="plan-flag">{plan.tag}</span>}
                  <h3 className="plan-studio-name">{plan.name}</h3>
                  <div>
                    <span className="plan-studio-price">{plan.price}</span>
                    <span className="plan-studio-per">{plan.per}</span>
                  </div>
                  <p className="plan-studio-who">{plan.who}</p>
                  <ul className="plan-studio-list">
                    {plan.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-hand plan-studio-cta">Start with {plan.name}</Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="addons-section">
        <div className="container" style={{ maxWidth: 980 }}>
          <FadeIn direction="up">
            <p className="kicker">A la carte</p>
            <h2 className="section-title-serif">One-off help, honestly priced.</h2>
            <p className="section-lede">
              Not everything fits into a monthly plan. When you just need a hand, here's what that looks like.
            </p>
          </FadeIn>

          <div className="addons-list">
            {addOns.map((item) => (
              <div key={item.label} className="addon-row">
                <span className="addon-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12 Q 8 14 10 17 Q 14 8 20 5" />
                  </svg>
                </span>
                <div>
                  <div className="addon-label">{item.label}</div>
                  <div className="addon-detail">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="addons-footnote">
            On-site work is billed separately unless it's baked into Premium. After-hours emergencies run at premium rates. Bigger projects get a proper quote before we start.
          </p>
        </div>
      </section>

      <section className="web-cta-section">
        <div className="container">
          <div className="web-cta-card tilt-right">
            <span className="tape tape--blue" aria-hidden="true"></span>
            <p className="kicker">P.S. — we also do the web thing</p>
            <h3 className="web-cta-title">Websites, hosting, domains, all the boring plumbing.</h3>
            <p className="web-cta-body">
              If your site is embarrassing, slow, or held together with an old developer's spit, we can quietly take it over.
            </p>
            <div className="hero-editorial-ctas">
              <Link href="/web-services" className="btn-hand btn-hand--paper">See web services</Link>
              <Link href="/pricing" className="btn-hand btn-hand--warm">Compare pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
