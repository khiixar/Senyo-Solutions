'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedGradientBg, ParticleField, ScrollProgressBar } from '@/components/MotionWrapper';

const managedPlans = [
  {
    name: 'Starter',
    price: '$99/month',
    features: ['Monitoring and patching', 'Backup checks', 'Antivirus', 'Email support', 'Remote IT support'],
  },
  {
    name: 'Standard',
    price: '$149/month',
    features: ['Everything in Starter', 'Priority response', 'Quarterly reviews', 'MFA/security guidance', 'Account hygiene support'],
  },
  {
    name: 'Premium',
    price: '$199/month',
    features: ['Everything in Standard', 'Highest priority support', 'Limited on-site time', 'Hands-on oversight'],
  },
];

const addOns = [
  'On-site support: $75–$125/hour',
  'Emergency same-day support (premium surcharge)',
  'New computer setup or migration (flat-rate)',
  'Microsoft 365 setup or cleanup (flat-rate)',
  'Wi-Fi and small office network optimization (flat-rate)',
  'Backup restore / recovery testing (flat-rate or hourly)',
  'Printer and scanner troubleshooting (hourly or bundled)',
];

export default function ServicesPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content" className="hero" style={{ minHeight: 'auto', paddingBottom: 70, position: 'relative' }}>
        <ParticleField count={16} />
        <AnimatedGradientBg />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <FadeIn direction="up">
            <h1 className="section-title">IT Services</h1>
            <p className="section-subtitle">
              Reliable, professional IT support for small businesses and practices across New York and New Jersey.
            </p>
          </FadeIn>
        </div>
      </main>

      <section className="digital-services">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Managed IT Plans</h2>
          </FadeIn>
          <StaggerContainer className="services-detailed-grid">
            {managedPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <article className="service-detailed-card">
                  <div className="service-detailed-content">
                    <h3>{plan.name} <span className="gradient-text">{plan.price}</span></h3>
                    <ul>{plan.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="our-work">
        <div className="container" style={{ maxWidth: 980 }}>
          <FadeIn direction="up">
            <h2 className="section-title">Add-ons & One-Time Services</h2>
          </FadeIn>
          <div className="service-detailed-card" style={{ marginTop: 20 }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {addOns.map((item) => (
                <li key={item} style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>
                  <i className="fas fa-check-circle" style={{ marginRight: 10, color: 'var(--primary)' }}></i>{item}
                </li>
              ))}
            </ul>
            <p style={{ marginTop: 16, color: 'var(--text-muted)' }}>
              On-site work is billed separately unless included in Premium. Emergency/after-hours support is billed at premium rates.
              Project work is quoted separately.
            </p>
          </div>

          <div className="work-cta" style={{ marginTop: 28 }}>
            <h3>Website Services Available</h3>
            <p>Need help with your online presence too? We offer website development, hosting, updates, and domain management.</p>
            <div className="hero-ctas">
              <Link href="/web-services" className="btn btn-outline">View Web Services</Link>
              <Link href="/pricing" className="btn btn-primary">Compare Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
