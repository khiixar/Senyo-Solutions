'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DecryptedText from '@/components/DecryptedText';
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
  'Security-focused support for day-to-day reliability',
];

export default function HomePage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <main id="main-content">
        <section id="home" className="hero" style={{ position: 'relative' }}>
          <ParticleField count={20} />
          <AnimatedGradientBg />
          <MorphingBlob className="hero-blob-1" color="rgba(37,99,235,0.09)" size={320} />

          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-content">
              <motion.h1 className="hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
                <DecryptedText
                  text="Simple, secure IT support for small businesses and professional practices"
                  animateOn="view"
                  speed={50}
                  maxIterations={8}
                  sequential={true}
                  revealDirection="center"
                  parentClassName="decrypted-hero-title"
                />
              </motion.h1>
              <motion.p className="hero-subtitle" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                We help small businesses and professional practices stay protected and productive —
                without expensive MSP contracts.
              </motion.p>
              <motion.div className="hero-ctas" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
                <Link className="btn btn-primary btn-large" href="/contact">Book a Free Tech Review</Link>
                <Link className="btn btn-outline btn-large" href="/pricing">See Plans & Pricing</Link>
              </motion.div>
              <p style={{ marginTop: 16, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Month-to-month plans • No long-term contracts • Local support in NY & NJ
              </p>
            </div>
          </div>
        </section>

        <section className="digital-services" aria-labelledby="managed-it-support-title">
          <div className="container">
            <FadeIn direction="up">
              <h2 id="managed-it-support-title" className="section-title">Managed IT Support Plans</h2>
              <p className="section-subtitle">Choose a right-sized plan for your practice. Upgrade any time.</p>
            </FadeIn>

            <StaggerContainer className="services-detailed-grid" staggerDelay={0.12}>
              {plans.map((plan) => (
                <StaggerItem key={plan.name}>
                  <div className="service-detailed-card">
                    <div className="service-detailed-content">
                      <h3>{plan.name} <span className="gradient-text">{plan.price}</span></h3>
                      <p>{plan.forWho}</p>
                      <ul>
                        {plan.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="our-work" id="positioning" aria-labelledby="why-choose-title">
          <div className="container" style={{ maxWidth: 980 }}>
            <FadeIn direction="up">
              <h2 id="why-choose-title" className="section-title">Why Choose Senyo Solutions</h2>
            </FadeIn>
            <div className="service-detailed-card" style={{ marginTop: 24 }}>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {trustPoints.map((point) => (
                  <li key={point} style={{ padding: '8px 0', color: 'var(--text-secondary)' }}>
                    <i className="fas fa-shield-check" aria-hidden="true" style={{ marginRight: 10, color: 'var(--primary)' }}></i>
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

        <section className="coverage-section" aria-labelledby="coverage-title">
          <div className="container" style={{ maxWidth: 980 }}>
            <FadeIn direction="up">
              <h2 id="coverage-title" className="section-title">Our Coverage Area</h2>
              <p className="section-subtitle">Serving businesses and practices across the New York metropolitan region</p>
            </FadeIn>
            <div className="coverage-maps-grid">
              <div className="coverage-map-card">
                <div className="coverage-map-svg-wrap">
                  <img src="/Area.png" alt="Local service area map" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="coverage-map-label">Local Service Area</h3>
                <p className="coverage-map-sub">NY &bull; NJ &bull; CT &bull; Long Island</p>
              </div>

              <Link href="/coverage" className="coverage-map-card coverage-map-card--link" aria-label="View coverage details and all areas served">
                <div className="coverage-map-svg-wrap">
                  <img src="/map-world.png" alt="Map of the United States" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="coverage-map-label">View Coverage Details</h3>
                <p className="coverage-map-sub">See all areas we serve</p>
                <span className="coverage-map-cta">Explore Coverage &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="trusted-by-strip" aria-labelledby="powered-by-title">
          <h2 id="powered-by-title" className="trusted-by-label">Powered By</h2>
          <ul className="trusted-by-logos" aria-label="Platforms and tools we use">
            <li className="trusted-logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="20" cy="20" r="20" fill="#25C16F"/>
                <path d="M13 12h10a5 5 0 0 1 0 10H13V12z" fill="white"/>
                <rect x="13" y="24" width="6" height="4" rx="1" fill="white"/>
              </svg>
              <span>Freshdesk</span>
            </li>
            <li className="trusted-logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="#1A1A2E"/>
                <polygon points="20,6 24,16 35,16 26,23 29,34 20,27 11,34 14,23 5,16 16,16" fill="#FFC200"/>
              </svg>
              <span>NinjaRMM</span>
            </li>
            <li className="trusted-logo">
              <svg viewBox="0 0 40 40" fill="none" xmlns="https://images.vexels.com/media/users/3/148162/isolated/preview/c3267358473adbc91b32f26dfafc5e16-abstract-blue-square-background.png" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="#005DA8"/>
                <path d="M28 13a10 10 0 1 0 0 14" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
                <path d="M24 17a5 5 0 1 0 0 6" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
              <span>ConnectWise</span>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
