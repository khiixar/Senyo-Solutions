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
    icon: (
      <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 8,35 L 155,15 L 152,52 L 60,65 L 8,55 Z" fill="rgba(37,99,235,0.18)" stroke="rgba(37,99,235,0.6)" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="15" cy="44" r="4" fill="rgba(37,99,235,0.7)"/>
        <circle cx="15" cy="44" r="2" fill="white"/>
        <text x="80" y="42" fontFamily="Archivo,sans-serif" fontSize="13" fontWeight="800" fill="rgba(37,99,235,0.75)" textAnchor="middle">Long Island</text>
      </svg>
    ),
  },
  {
    name: 'New York City',
    description: 'On-site and remote IT support for small businesses and practices throughout the five boroughs.',
    towns: ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'],
    icon: (
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="60,10 110,35 110,85 60,110 10,85 10,35" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.55)" strokeWidth="1.8"/>
        <circle cx="60" cy="60" r="14" fill="rgba(37,99,235,0.75)"/>
        <circle cx="60" cy="60" r="6" fill="white"/>
        <text x="60" y="97" fontFamily="Archivo,sans-serif" fontSize="12" fontWeight="800" fill="rgba(37,99,235,0.7)" textAnchor="middle">NYC</text>
      </svg>
    ),
  },
  {
    name: 'New Jersey',
    description: 'Managed IT services for NJ businesses, from North Jersey down through Central and South Jersey.',
    towns: ['Bergen County', 'Essex County', 'Hudson County', 'Middlesex County'],
    icon: (
      <svg viewBox="0 0 110 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 55,8 L 95,20 L 100,55 L 88,90 L 72,130 L 55,152 L 38,130 L 22,90 L 10,55 L 15,20 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.55)" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="55" cy="72" r="10" fill="rgba(37,99,235,0.75)"/>
        <circle cx="55" cy="72" r="4" fill="white"/>
        <text x="55" y="140" fontFamily="Archivo,sans-serif" fontSize="11" fontWeight="800" fill="rgba(37,99,235,0.7)" textAnchor="middle">NJ</text>
      </svg>
    ),
  },
  {
    name: 'Connecticut',
    description: 'IT support for CT businesses in Fairfield County and beyond, with quick on-site response times.',
    towns: ['Fairfield County', 'Greenwich', 'Stamford', 'Bridgeport'],
    icon: (
      <svg viewBox="0 0 160 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 8,12 L 152,8 L 155,75 L 105,82 L 8,78 Z" fill="rgba(6,182,212,0.16)" stroke="rgba(6,182,212,0.6)" strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="80" cy="45" r="10" fill="rgba(6,182,212,0.75)"/>
        <circle cx="80" cy="45" r="4" fill="white"/>
        <text x="80" y="70" fontFamily="Archivo,sans-serif" fontSize="13" fontWeight="800" fill="rgba(6,182,212,0.75)" textAnchor="middle">CT</text>
      </svg>
    ),
  },
  {
    name: 'Westchester, NY',
    description: 'Dedicated IT support for Westchester County businesses, from Yonkers up through White Plains and beyond.',
    towns: ['White Plains', 'Yonkers', 'New Rochelle', 'Mount Vernon'],
    icon: (
      <svg viewBox="0 0 130 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M 65,10 L 112,28 L 118,75 L 100,115 L 65,130 L 30,115 L 12,75 L 18,28 Z" fill="rgba(37,99,235,0.15)" stroke="rgba(37,99,235,0.55)" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M 40,75 L 65,45 L 90,75 L 80,110 L 50,110 Z" fill="rgba(37,99,235,0.2)" stroke="rgba(37,99,235,0.5)" strokeWidth="1.2" strokeLinejoin="round"/>
        <circle cx="65" cy="72" r="9" fill="rgba(37,99,235,0.8)"/>
        <circle cx="65" cy="72" r="3.5" fill="white"/>
        <text x="65" y="122" fontFamily="Archivo,sans-serif" fontSize="10" fontWeight="800" fill="rgba(37,99,235,0.7)" textAnchor="middle">Westchester</text>
      </svg>
    ),
  },
];

export default function CoveragePage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '130px 0 80px' }}>
        <section className="container" style={{ maxWidth: 1100 }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Where We Work</p>
          <h1 className="section-title">Coverage Areas</h1>
          <p className="section-subtitle">
            On-site and remote IT support across the New York metropolitan region — no long-term contracts required.
          </p>

          <div className="coverage-areas-grid">
            {areas.map((area) => (
              <div key={area.name} className="coverage-area-card">
                <div className="coverage-area-icon">{area.icon}</div>
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
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
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
