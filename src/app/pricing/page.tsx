import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Managed IT Services Pricing | Flat-Rate MSP Plans | Senyo Solutions' },
  description: 'Transparent managed IT services pricing for small businesses. Compare Starter, Standard, and Premium MSP plans plus add-on services. Month-to-month, no long-term contracts.',
  alternates: {
    canonical: 'https://senyosolutions.com/pricing',
  },
  openGraph: {
    title: 'Senyo Solutions | Pricing',
    description: 'Compare Starter, Standard, and Premium managed IT plans and review MSP add-on service pricing.',
    url: 'https://senyosolutions.com/pricing',
    type: 'website',
  },
};

const rows: Array<[string, boolean, boolean, boolean]> = [
  ['Monitoring & patching, quietly running in the background', true, true, true],
  ['Backup checks (so they actually work)', true, true, true],
  ['Antivirus oversight', true, true, true],
  ['Email us anytime — a person replies', true, true, true],
  ['Remote fix-it sessions', true, true, true],
  ['Skip-the-line priority when things break', false, true, true],
  ['Quarterly sit-down to plan what\'s next', false, true, true],
  ['MFA & security guidance', false, true, true],
  ['Account clean-up when the team changes', false, true, true],
  ['Top of the queue, always', false, false, true],
  ['A few on-site hours baked in', false, false, true],
  ['Hands-on oversight all month', false, false, true],
];

const Check = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
    <path d="M4 12 Q 8 14 10 17 Q 14 8 20 5" />
  </svg>
);
const Dash = () => (
  <span style={{ color: 'var(--ink-soft)', opacity: 0.35, fontSize: '1.4rem' }}>—</span>
);

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="page-hero">
        <div className="container">
          <p className="kicker">Pricing</p>
          <h1 className="display-serif page-hero-title">
            No mystery invoices. <span className="serif-italic">Just steady work.</span>
          </h1>
          <p className="section-lede page-hero-lede">
            Three plans, month-to-month. Add on what you need. Cancel if we're not earning our keep. That's it.
          </p>
        </div>
      </main>

      <section className="pricing-compare-section">
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="feat-col">What's included</th>
                  <th>
                    <div className="plan-th-name">Starter</div>
                    <div className="plan-th-price">$99<span>/mo</span></div>
                  </th>
                  <th className="plan-th-featured">
                    <span className="plan-th-flag">most picked</span>
                    <div className="plan-th-name">Standard</div>
                    <div className="plan-th-price">$149<span>/mo</span></div>
                  </th>
                  <th>
                    <div className="plan-th-name">Premium</div>
                    <div className="plan-th-price">$199<span>/mo</span></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0] as string}>
                    <td className="feat-cell">{row[0]}</td>
                    <td className="tick-cell">{row[1] ? <Check /> : <Dash />}</td>
                    <td className="tick-cell tick-cell--featured">{row[2] ? <Check /> : <Dash />}</td>
                    <td className="tick-cell">{row[3] ? <Check /> : <Dash />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="addons-section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <p className="kicker">Add-ons</p>
          <h2 className="section-title-serif">One-off help when you need it.</h2>
          <div className="addons-list">
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">On-site visits</div><div className="addon-detail">$75–$125/hr, flat-rated when we can</div></div></div>
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">Same-day emergencies</div><div className="addon-detail">Premium surcharge, no drama</div></div></div>
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">New computer setup or migration</div><div className="addon-detail">Flat rate per machine</div></div></div>
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">Microsoft 365 setup or clean-up</div><div className="addon-detail">Flat quote once we look</div></div></div>
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">Wi-Fi & small office networking</div><div className="addon-detail">Flat rate, one visit usually</div></div></div>
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">Backup restores</div><div className="addon-detail">Flat or hourly, your call</div></div></div>
            <div className="addon-row"><span className="addon-check"><Check /></span><div><div className="addon-label">Printer & scanner exorcisms</div><div className="addon-detail">Hourly, sometimes bundled</div></div></div>
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
            <p className="kicker">Not sure which plan?</p>
            <h3 className="web-cta-title">Talk to a person for fifteen minutes. Free.</h3>
            <p className="web-cta-body">
              We'll poke around, ask about your setup, and tell you honestly what you'd actually need — even if that means recommending you stay where you are.
            </p>
            <div className="hero-editorial-ctas">
              <Link href="/contact" className="btn-hand">Book a tech review</Link>
              <Link href="/services" className="btn-hand btn-hand--paper">Back to services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
