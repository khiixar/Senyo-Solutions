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

      <section className="digital-services">
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Managed IT Support Plans</h2>
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

      <section className="coverage-section">
        <div className="container" style={{ maxWidth: 980 }}>
          <FadeIn direction="up">
            <h2 className="section-title">Our Coverage Area</h2>
            <p className="section-subtitle">Serving businesses and practices across the New York metropolitan region</p>
          </FadeIn>
          <div className="coverage-maps-grid">
            <div className="coverage-map-card">
              <div className="coverage-map-svg-wrap">
                <svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg" aria-label="NY area map showing NY, NJ, CT, and Long Island">
                  <path d="M 10,10 L 158,10 L 153,118 L 112,138 L 55,132 L 10,98 Z" fill="rgba(37,99,235,0.18)" stroke="rgba(37,99,235,0.55)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M 158,10 L 308,10 L 308,88 L 153,88 L 153,118 L 158,10 Z" fill="rgba(6,182,212,0.16)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M 112,138 L 55,132 L 28,168 L 62,202 L 103,198 L 112,168 Z" fill="rgba(37,99,235,0.13)" stroke="rgba(37,99,235,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M 112,143 L 308,118 L 305,155 L 178,163 L 112,156 Z" fill="rgba(6,182,212,0.14)" stroke="rgba(6,182,212,0.4)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <circle cx="112" cy="140" r="7" fill="rgba(37,99,235,0.85)"/>
                  <circle cx="112" cy="140" r="3" fill="white"/>
                  <text x="75" y="68" fontFamily="Archivo,sans-serif" fontSize="20" fontWeight="800" fill="rgba(37,99,235,0.65)" textAnchor="middle">NY</text>
                  <text x="228" y="52" fontFamily="Archivo,sans-serif" fontSize="16" fontWeight="700" fill="rgba(6,182,212,0.7)" textAnchor="middle">CT</text>
                  <text x="73" y="172" fontFamily="Archivo,sans-serif" fontSize="15" fontWeight="700" fill="rgba(37,99,235,0.55)" textAnchor="middle">NJ</text>
                  <text x="210" y="143" fontFamily="Archivo,sans-serif" fontSize="13" fontWeight="700" fill="rgba(6,182,212,0.65)" textAnchor="middle">Long Island</text>
                  <text x="112" cy="136" x="112" y="136" fontFamily="Archivo,sans-serif" fontSize="9" fontWeight="700" fill="white" textAnchor="middle">NYC</text>
                </svg>
              </div>
              <h3 className="coverage-map-label">Local Service Area</h3>
              <p className="coverage-map-sub">NY &bull; NJ &bull; CT &bull; Long Island</p>
            </div>

            <Link href="/coverage" className="coverage-map-card coverage-map-card--link">
              <div className="coverage-map-svg-wrap">
                <svg viewBox="0 0 350 210" xmlns="http://www.w3.org/2000/svg" aria-label="Map of the United States">
                  <path d="M 48,26 L 44,52 L 41,80 L 43,112 L 49,136 L 67,136 L 97,120 L 112,140 L 136,132 L 149,128 L 157,136 L 176,166 L 192,140 L 222,120 L 247,104 L 261,90 L 266,70 L 261,54 L 271,34 L 256,20 L 200,18 L 154,22 L 108,18 L 70,20 Z" fill="rgba(37,99,235,0.12)" stroke="rgba(37,99,235,0.45)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M 120,42 L 162,37 L 168,57 L 117,60 Z" fill="rgba(6,182,212,0.25)" stroke="rgba(6,182,212,0.4)" strokeWidth="1"/>
                  <path d="M 157,52 L 172,50 L 177,86 L 152,89 Z" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.35)" strokeWidth="1"/>
                  <path d="M 172,45 L 197,41 L 207,70 L 177,76 Z" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.35)" strokeWidth="1"/>
                  <path d="M 191,70 L 227,65 L 231,80 L 187,82 Z" fill="rgba(6,182,212,0.18)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
                  <path d="M 226,60 L 251,58 L 255,70 L 221,72 Z" fill="rgba(6,182,212,0.18)" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
                  <circle cx="262" cy="72" r="6" fill="rgba(37,99,235,0.9)"/>
                  <circle cx="262" cy="72" r="2.5" fill="white"/>
                  <text x="262" y="60" fontFamily="Archivo,sans-serif" fontSize="9" fontWeight="700" fill="rgba(37,99,235,0.9)" textAnchor="middle">NY</text>
                </svg>
              </div>
              <h3 className="coverage-map-label">View Coverage Details</h3>
              <p className="coverage-map-sub">See all areas we serve</p>
              <span className="coverage-map-cta">Explore Coverage &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="trusted-by-strip" aria-label="Powered by industry tools">
        <p className="trusted-by-label">Powered By</p>
        <div className="trusted-by-logos">
          <div className="trusted-logo" aria-label="Freshdesk">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="#25C16F"/>
              <path d="M13 12h10a5 5 0 0 1 0 10H13V12z" fill="white"/>
              <rect x="13" y="24" width="6" height="4" rx="1" fill="white"/>
            </svg>
            <span>Freshdesk</span>
          </div>
          <div className="trusted-logo" aria-label="NinjaRMM">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#1A1A2E"/>
              <polygon points="20,6 24,16 35,16 26,23 29,34 20,27 11,34 14,23 5,16 16,16" fill="#FFC200"/>
            </svg>
            <span>NinjaRMM</span>
          </div>
          <div className="trusted-logo" aria-label="ConnectWise">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="#005DA8"/>
              <path d="M28 13a10 10 0 1 0 0 14" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
              <path d="M24 17a5 5 0 1 0 0 6" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
            <span>ConnectWise</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
