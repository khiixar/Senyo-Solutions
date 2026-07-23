import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'IT Support Coverage Areas | Long Island, NYC, NJ, CT | Senyo Solutions' },
  description: 'Senyo Solutions provides managed IT support and MSP services across Long Island, New York City, New Jersey, Connecticut, and Westchester NY.',
  alternates: {
    canonical: 'https://senyosolutions.com/coverage',
  },
  openGraph: {
    title: 'Senyo Solutions | Coverage Areas',
    description: 'Managed IT support across Long Island, NYC, NJ, CT, and Westchester NY.',
    url: 'https://senyosolutions.com/coverage',
    type: 'website',
  },
};

const areas = [
  {
    name: 'Long Island',
    description: 'Full managed IT coverage across Nassau and Suffolk counties, from the Five Towns to the East End.',
    towns: ['Nassau County', 'Suffolk County', 'North Shore', 'South Shore'],
  },
  {
    name: 'New York City',
    description: 'On-site and remote IT support for small businesses and practices throughout the five boroughs.',
    towns: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'],
  },
  {
    name: 'New Jersey',
    description: 'Managed IT services for NJ businesses, from North Jersey down through Central and South Jersey.',
    towns: ['Bergen County', 'Essex County', 'Hudson County', 'Middlesex County'],
  },
  {
    name: 'Connecticut',
    description: 'IT support for CT businesses in Fairfield County and beyond, with quick on-site response times.',
    towns: ['Fairfield County', 'Greenwich', 'Stamford', 'Bridgeport'],
  },
  {
    name: 'Westchester, NY',
    description: 'Dedicated IT support for Westchester County businesses, from Yonkers up through White Plains and beyond.',
    towns: ['White Plains', 'Yonkers', 'New Rochelle', 'Mount Vernon'],
  },
];

export default function CoveragePage() {
  const tilts = ['tilt-left', 'tilt-right', 'tilt-none', 'tilt-right', 'tilt-left'];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="page-hero">
          <div className="container" style={{ maxWidth: 900 }}>
            <p className="kicker">Where we show up</p>
            <h1 className="page-hero-title">
              We work across the <span className="serif-italic">tri-state</span> — on paper and in person.
            </h1>
            <p className="page-hero-lede">
              On-site when you need hands, remote when you don&rsquo;t. No long drives billed as &ldquo;travel time.&rdquo;
            </p>
          </div>
        </section>

        <section className="container" style={{ maxWidth: 1100, paddingBottom: 80 }}>
          <div className="coverage-studio-grid">
            {areas.map((area, i) => (
              <div key={area.name} className={`sticker-card ${tilts[i % tilts.length]} coverage-tile`}>
                <h3 className="display-serif" style={{ fontSize: '1.5rem', margin: '0 0 10px' }}>{area.name}</h3>
                <p style={{ margin: '0 0 16px', color: 'var(--ink)', opacity: 0.82 }}>{area.description}</p>
                <ul className="coverage-town-list">
                  {area.towns.map((town) => (
                    <li key={town}>{town}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sticker-card tilt-none" style={{ marginTop: 56, textAlign: 'center', padding: '40px 32px' }}>
            <p className="hand" style={{ fontSize: '1.35rem', color: 'var(--primary-ink)', marginBottom: 8 }}>P.S.</p>
            <h3 className="display-serif" style={{ fontSize: '1.6rem', margin: '0 0 12px' }}>Not sure if we cover your spot?</h3>
            <p style={{ color: 'var(--ink)', opacity: 0.78, marginBottom: 24, maxWidth: 520, marginInline: 'auto' }}>
              Ask us. We stretch the map when it makes sense &mdash; sometimes we&rsquo;re already down the road.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn-hand btn-hand--primary" href="/contact">Say hi</Link>
              <Link className="btn-hand btn-hand--paper" href="/services">See what we do</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}