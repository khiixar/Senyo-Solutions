import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Coverage Areas' },
  description: 'Senyo Solutions provides managed IT support across Long Island, New York City, New Jersey, Connecticut, and Westchester NY.',
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
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ padding: '130px 0 80px' }}>
        <section className="container" style={{ maxWidth: 1100 }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Where We Work</p>
          <h1 className="section-title">Coverage Areas</h1>
          <p className="section-subtitle">
            On-site and remote IT support across the New York metropolitan region — no long-term contracts required.
          </p>

          <div className="coverage-areas-grid">
            {areas.map((area) => (
              <div key={area.name} className="coverage-area-card">
                <div className="coverage-area-body">
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                  <ul className="coverage-area-towns">
                    {area.towns.map((town) => (
                      <li key={town}>{town}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="service-detailed-card" style={{ marginTop: 48, textAlign: 'center' }}>
            <h3 style={{ marginBottom: 12 }}>Not sure if we cover your area?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
              Reach out — we regularly expand our service area and may already serve your location.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link className="btn btn-primary" href="/contact">Contact Us</Link>
              <Link className="btn btn-outline" href="/services">View Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}