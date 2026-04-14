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
            <motion.p className="hero-eyebrow" style={{ fontSize: '1rem' }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              MSP &nbsp;·&nbsp; Senyo Solutions
            </motion.p>
            <motion.h1 className="hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
              Simple, secure IT support for small businesses and professional practices
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

      <section className="trusted-by-strip" aria-label="Trusted by leading companies">
        <p className="trusted-by-label">Trusted By</p>
        <div className="trusted-by-logos">
          <div className="trusted-logo" aria-label="Microsoft">
            <svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="11" height="11" fill="#F25022"/>
              <rect x="12" width="11" height="11" fill="#7FBA00"/>
              <rect y="12" width="11" height="11" fill="#00A4EF"/>
              <rect x="12" y="12" width="11" height="11" fill="#FFB900"/>
            </svg>
            <span>Microsoft</span>
          </div>
          <div className="trusted-logo" aria-label="Google Cloud">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09A6.97 6.97 0 0 1 5.48 12c0-.72.13-1.43.36-2.09V7.07H2.18A11.96 11.96 0 0 0 .96 12c0 1.94.46 3.77 1.22 5.33l2.66-2.84v-.4z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Google</span>
          </div>
          <div className="trusted-logo" aria-label="Slack">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.04 15.16a2.53 2.53 0 0 1-2.52 2.52A2.53 2.53 0 0 1 0 15.16a2.53 2.53 0 0 1 2.52-2.52h2.52v2.52zm1.27 0a2.53 2.53 0 0 1 2.52-2.52 2.53 2.53 0 0 1 2.52 2.52v6.32A2.53 2.53 0 0 1 8.83 24a2.53 2.53 0 0 1-2.52-2.52v-6.32z" fill="#E01E5A"/>
              <path d="M8.83 5.04a2.53 2.53 0 0 1-2.52-2.52A2.53 2.53 0 0 1 8.83 0a2.53 2.53 0 0 1 2.52 2.52v2.52H8.83zm0 1.27a2.53 2.53 0 0 1 2.52 2.52 2.53 2.53 0 0 1-2.52 2.52H2.52A2.53 2.53 0 0 1 0 8.83a2.53 2.53 0 0 1 2.52-2.52h6.31z" fill="#36C5F0"/>
              <path d="M18.96 8.83a2.53 2.53 0 0 1 2.52-2.52A2.53 2.53 0 0 1 24 8.83a2.53 2.53 0 0 1-2.52 2.52h-2.52V8.83zm-1.27 0a2.53 2.53 0 0 1-2.52 2.52 2.53 2.53 0 0 1-2.52-2.52V2.52A2.53 2.53 0 0 1 15.17 0a2.53 2.53 0 0 1 2.52 2.52v6.31z" fill="#2EB67D"/>
              <path d="M15.17 18.96a2.53 2.53 0 0 1 2.52 2.52A2.53 2.53 0 0 1 15.17 24a2.53 2.53 0 0 1-2.52-2.52v-2.52h2.52zm0-1.27a2.53 2.53 0 0 1-2.52-2.52 2.53 2.53 0 0 1 2.52-2.52h6.31A2.53 2.53 0 0 1 24 15.17a2.53 2.53 0 0 1-2.52 2.52h-6.31z" fill="#ECB22E"/>
            </svg>
            <span>Slack</span>
          </div>
          <div className="trusted-logo" aria-label="Cisco">
            <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
              <g fill="#049fd9">
                <rect x="20" y="20" width="6" height="30" rx="3"/>
                <rect x="35" y="10" width="6" height="40" rx="3"/>
                <rect x="50" y="0" width="6" height="50" rx="3"/>
                <rect x="65" y="10" width="6" height="40" rx="3"/>
                <rect x="80" y="20" width="6" height="30" rx="3"/>
                <rect x="95" y="10" width="6" height="40" rx="3"/>
                <rect x="110" y="0" width="6" height="50" rx="3"/>
                <rect x="125" y="10" width="6" height="40" rx="3"/>
                <rect x="140" y="20" width="6" height="30" rx="3"/>
              </g>
              <text x="23" y="72" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="#049fd9">CISCO</text>
            </svg>
            <span>Cisco</span>
          </div>
          <div className="trusted-logo" aria-label="Dropbox">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 1.807L0 5.629l6 3.822 6-3.822zM18 1.807l-6 3.822 6 3.822 6-3.822zM0 13.274l6 3.822 6-3.822-6-3.822zM18 9.452l-6 3.822 6 3.822 6-3.822zM6 18.371l6 3.822 6-3.822-6-3.822z" fill="#0061FF"/>
            </svg>
            <span>Dropbox</span>
          </div>
          <div className="trusted-logo" aria-label="Zoom">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12c0 6.627-5.373 12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z" fill="#2D8CFF"/>
              <path d="M4.5 8.25A1.5 1.5 0 0 1 6 6.75h7.5A1.5 1.5 0 0 1 15 8.25v4.5a1.5 1.5 0 0 1-1.5 1.5h-1.8l2.85 2.1V10.8L18 8.55v6.9l-3.45-2.55v1.35a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-4.5z" fill="white"/>
            </svg>
            <span>Zoom</span>
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
            <h2 className="section-title">Why Choose Senyo Solutions</h2>
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
