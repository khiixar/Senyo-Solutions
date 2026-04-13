'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedGradientBg, ScrollProgressBar, ParticleField, MorphingBlob } from '@/components/MotionWrapper';

const plans = [
  {
    name: 'Starter',
    price: '$99/mo',
    forWho: 'Solo providers and very small offices',
    features: ['Monitoring & patching', 'Backup checks', 'Antivirus oversight', 'Email support', 'Remote IT support'],
  },
  {
    name: 'Standard',
    price: '$149/mo',
    forWho: 'Growing offices',
    features: ['Everything in Starter', 'Priority response', 'Quarterly reviews', 'MFA/security guidance', 'Account hygiene support'],
  },
  {
    name: 'Premium',
    price: '$199/mo',
    forWho: 'Higher-touch practices',
    features: ['Everything in Standard', 'Highest priority response', 'Limited on-site time included', 'Hands-on IT oversight'],
  },
];

const trustPoints = [
  'Month-to-month plans with no long-term contracts',
  'Local support across Long Island, New York State, and New Jersey',
  'Plain-English communication for therapists and small practices',
  'Security-focused support for day-to-day reliability',
];

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <section id="home" className="hero" style={{ position: 'relative' }}>
        <ParticleField count={20} />
        <AnimatedGradientBg />
        <MorphingBlob className="hero-blob-1" color="rgba(37,99,235,0.09)" size={320} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content">
            <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              Senyo Solutions • Micro MSP
            </motion.p>
            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              Simple, secure IT support for small practices on Long Island
            </motion.h1>
            <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              We help therapists, counselors, psychologists, and small wellness teams stay protected and productive —
              without expensive MSP contracts.
            </motion.p>
            <motion.div className="hero-ctas" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              <Link className="btn btn-primary btn-large" href="/contact">Book a Free Tech Review</Link>
              <Link className="btn btn-outline btn-large" href="/pricing">See Plans & Pricing</Link>
            </motion.div>
            <p style={{ marginTop: 16, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Month-to-month plans • Local support in NY & NJ • Web services available as a value-add
            </p>
          </div>
        </div>
      </section>

      <section className="digital-services">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Managed IT Support Plans</h2>
            <p className="section-subtitle">Choose a right-sized plan for your practice. Upgrade any time.</p>
          </FadeIn>

          <StaggerContainer className="services-detailed-grid" staggerDelay={0.12}>
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <article className="service-detailed-card">
                  <div className="service-detailed-content">
                    <h3>{plan.name} <span className="gradient-text">{plan.price}</span></h3>
                    <p>{plan.forWho}</p>
                    <ul>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="our-work" id="positioning">
        <div className="container" style={{ maxWidth: 980 }}>
          <FadeIn direction="up">
            <h2 className="section-title">Why Small Practices Choose Senyo Solutions</h2>
          </FadeIn>
          <div className="service-detailed-card" style={{ marginTop: 24 }}>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {trustPoints.map((point) => (
                <li key={point} style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>
                  <i className="fas fa-shield-check" style={{ marginRight: 10, color: 'var(--primary)' }}></i>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="work-cta" style={{ marginTop: 36 }}>
            <h3>Need web design and hosting too?</h3>
            <p>We handle your tech, including your online presence, so you have one reliable partner.</p>
            <div className="hero-ctas">
              <Link className="btn btn-outline" href="/web-services">Explore Web Services</Link>
              <Link className="btn btn-primary" href="/contact">Talk to Senyo Solutions</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
