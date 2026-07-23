import type { Metadata } from 'next';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Pricing' },
  description: 'Compare Starter, Standard, and Premium managed IT plans and review MSP add-on service pricing. Month-to-month, no long-term contracts.',
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

const rows = [
  ['Monitoring & patching', '✔', '✔', '✔'],
  ['Backup checks', '✔', '✔', '✔'],
  ['Antivirus oversight', '✔', '✔', '✔'],
  ['Email support', '✔', '✔', '✔'],
  ['Remote IT support', '✔', '✔', '✔'],
  ['Priority response', '—', '✔', '✔'],
  ['Quarterly reviews', '—', '✔', '✔'],
  ['MFA/security guidance', '—', '✔', '✔'],
  ['Account hygiene support', '—', '✔', '✔'],
  ['Highest-priority queue', '—', '—', '✔'],
  ['Limited on-site time', '—', '—', '✔'],
  ['Hands-on oversight', '—', '—', '✔'],
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ padding: '130px 0 80px' }}>
        <section className="container" style={{ maxWidth: 1100 }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Pricing</p>
          <h1 className="section-title">Straightforward Monthly IT Plans</h1>
          <p className="section-subtitle">Month-to-month plans. No long-term contracts. Choose what fits your practice today.</p>

          <div className="service-detailed-card" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 760 }}>
              <thead>
                <tr>
                  <th style={thStyle}>Feature</th>
                  <th style={thStyle}>Starter<br />$99/mo</th>
                  <th style={thStyle}>Standard<br />$149/mo</th>
                  <th style={thStyle}>Premium<br />$199/mo</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row[0]}>
                    <td style={tdStyle}>{row[0]}</td>
                    <td style={tdStyleCenter}>{row[1]}</td>
                    <td style={tdStyleCenter}>{row[2]}</td>
                    <td style={tdStyleCenter}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="service-detailed-card" style={{ marginTop: 24 }}>
            <h3>Add-ons & One-Time Services</h3>
            <ul>
              <li>On-site support: $75–$125/hour</li>
              <li>Emergency same-day support: premium surcharge</li>
              <li>New computer setup / migration: flat-rate</li>
              <li>Microsoft 365 setup or cleanup: flat-rate</li>
              <li>Wi-Fi and small office network optimization: flat-rate</li>
              <li>Backup restore / recovery testing: flat-rate or hourly</li>
              <li>Printer / scanner troubleshooting: hourly or bundled</li>
            </ul>
            <p style={{ color: 'var(--text-muted)', marginTop: 10 }}>
              On-site work is billed separately unless included in Premium. Emergency/after-hours support is billed at premium rates. Project work is quoted separately.
            </p>
          </div>

          <div className="hero-ctas" style={{ marginTop: 24 }}>
            <Link className="btn btn-primary" href="/contact">Book a Free Tech Review</Link>
            <Link className="btn btn-outline" href="/services">Back to Services</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const thStyle: CSSProperties = {
  textAlign: 'left',
  padding: '14px 12px',
  borderBottom: '1px solid var(--border-subtle)',
  color: 'var(--text-primary)',
  fontSize: '0.95rem',
};

const tdStyle: CSSProperties = {
  padding: '12px',
  borderBottom: '1px solid var(--border-subtle)',
  color: 'var(--text-secondary)',
};

const tdStyleCenter: React.CSSProperties = {
  ...tdStyle,
  textAlign: 'center',
  fontWeight: 600,
};
