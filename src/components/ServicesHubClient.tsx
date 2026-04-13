'use client';

import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  HoverGlow,
  MagneticHover,
  AnimatedGradientBg,
  ScrollProgressBar,
  ParticleField,
  MorphingBlob,
  AnimatedDivider,
  AnimatedIcon,
  AnimatedLine,
  FloatingElement,
  RotatingElement,
  PulseEffect,
  ParallaxScroll,
} from '@/components/MotionWrapper';

export default function ServicesPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />

      <style jsx>{`
        .packages-hero {
          min-height: 50vh;
          padding: 140px 20px 60px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .packages-hero::before {
          content: '';
          position: absolute;
          top: -30%; left: 50%;
          width: 120%; height: 120%;
          background: radial-gradient(circle at center, rgba(37,99,235,0.06), transparent 65%);
          transform: translateX(-50%);
          pointer-events: none;
        }
        .packages-section {
          padding: 0 20px 100px;
          position: relative;
          overflow: visible;
        }
        .packages-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-sub {
          color: var(--text-secondary);
          margin-bottom: 48px;
          max-width: 580px;
          font-size: 1rem;
          line-height: 1.7;
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        .pkg-card {
          background: linear-gradient(170deg, rgba(15, 23, 42, 0.92), rgba(16, 24, 40, 0.86) 55%, rgba(30, 64, 175, 0.2));
          border: 1px solid rgba(96, 165, 250, 0.24);
          border-radius: 20px;
          padding: 30px 24px 26px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: visible;
          isolation: isolate;
          min-height: 100%;
          transition: border-color var(--transition-base), box-shadow var(--transition-base), transform var(--transition-base);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 18px 34px rgba(2, 6, 23, 0.42);
        }
        .pkg-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0.7;
          transition: opacity var(--transition-base);
        }
        .pkg-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(96,165,250,0.12), transparent 55%);
          pointer-events: none;
        }
        .pkg-card:hover {
          border-color: rgba(103, 232, 249, 0.45);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 26px 54px rgba(2, 6, 23, 0.62), 0 0 0 1px rgba(96, 165, 250, 0.1);
        }
        .pkg-card:hover .pkg-icon {
          transform: translateY(-2px) scale(1.05);
          background: rgba(37,99,235,0.24);
          border-color: rgba(96,165,250,0.45);
        }
        .pkg-card:hover .pkg-features li {
          color: #e4e4e7;
        }
        .pkg-card.featured {
          border-color: rgba(56,189,248,0.45);
          background: linear-gradient(165deg, rgba(37,99,235,0.14), rgba(6,182,212,0.08));
        }
        .pkg-card.featured::before { opacity: 1; }
        .popular-badge {
          position: absolute; top: 16px; right: 16px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          font-family: 'Archivo', sans-serif;
          font-size: 0.66rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .pkg-icon {
          width: 46px; height: 46px;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(96,165,250,0.32);
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.05rem; color: var(--primary-light);
          margin-bottom: 16px;
          transition: transform var(--transition-base), background var(--transition-base), border-color var(--transition-base);
          position: relative;
          z-index: 1;
        }
        .pkg-name {
          font-family: 'Archivo', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }
        .pkg-desc {
          color: #c4c4cd;
          font-size: 0.93rem;
          line-height: 1.65;
          margin-bottom: 20px;
          flex: 1;
          position: relative;
          z-index: 1;
        }
        .pkg-price {
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .pkg-price .amount {
          font-family: 'Archivo', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .pkg-price .period { font-size: 0.9rem; color: var(--text-muted); margin-left: 4px; }
        .pkg-features {
          list-style: none;
          margin-bottom: 22px;
          padding: 0;
          position: relative;
          z-index: 1;
        }
        .pkg-features li {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.86rem;
          color: var(--text-secondary);
          padding: 7px 0;
          line-height: 1.5;
        }
        .pkg-features li i {
          color: var(--success);
          font-size: 0.72rem;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .stripe-btn-wrap { display: flex; justify-content: center; position: relative; z-index: 1; }
        .pkg-actions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          margin-top: auto;
          padding-top: 8px;
          position: relative;
          z-index: 2;
        }
        .pkg-magnetic {
          display: block;
          width: 100%;
          border-radius: 12px;
        }
        .pkg-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          min-height: 48px;
          padding: 12px 18px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 55%, #0f7ac7 100%);
          color: #ffffff !important;
          border: 1px solid rgba(147, 197, 253, 0.62);
          border-radius: 12px;
          font-family: 'Archivo', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          text-decoration: none !important;
          transition: transform var(--transition-base), box-shadow var(--transition-base), filter var(--transition-base), border-color var(--transition-base);
          letter-spacing: 0.01em;
          box-shadow: 0 12px 24px rgba(37, 99, 235, 0.32);
          position: relative;
          overflow: hidden;
        }
        .pkg-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.24) 50%, transparent 75%);
          transform: translateX(-120%);
          transition: transform 0.45s ease;
          pointer-events: none;
        }
        .pkg-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-2px);
          border-color: rgba(165, 243, 252, 0.85);
          box-shadow: 0 18px 34px rgba(37, 99, 235, 0.44);
        }
        .pkg-btn:hover::before {
          transform: translateX(120%);
        }
        .pkg-btn:active {
          transform: translateY(0);
          box-shadow: 0 8px 16px rgba(37,99,235,0.26);
        }
        .pkg-btn:focus-visible {
          outline: 2px solid rgba(103,232,249,0.8);
          outline-offset: 2px;
        }

        .why-section {
          padding: 100px 20px;
          position: relative;
          overflow: hidden;
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .why-card {
          text-align: center;
          padding: 36px 24px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .why-card:hover {
          border-color: rgba(37,99,235,0.3);
          box-shadow: var(--shadow-md);
        }
        .why-icon {
          width: 56px; height: 56px;
          background: rgba(37,99,235,0.1);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          font-size: 1.2rem;
          color: var(--primary-light);
        }
        .why-card h4 {
          font-size: 1rem;
          margin-bottom: 8px;
        }
        .why-card p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .faq-section {
          padding: 0 20px 100px;
          position: relative;
        }
        .faq-container {
          max-width: 700px;
          margin: 0 auto;
        }
        .faq-item {
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          margin-bottom: 12px;
          overflow: hidden;
          background: var(--bg-card);
          transition: all var(--transition-base);
        }
        .faq-item:hover {
          border-color: rgba(37,99,235,0.3);
        }
        .faq-q {
          padding: 18px 24px;
          font-family: 'Archivo', sans-serif;
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-q i {
          color: var(--primary-light);
          font-size: 0.8rem;
          transition: transform var(--transition-base);
        }
        .faq-a {
          padding: 0 24px 18px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .services-cta-section {
          padding: 0 20px 100px;
        }
        .services-cta {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.04));
          border: 1px solid rgba(37,99,235,0.15);
          border-radius: var(--radius-xl);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .packages-hero {
            min-height: auto;
            padding: 118px 16px 52px;
          }
          .packages-section {
            padding: 0 16px 84px;
          }
          .packages-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .pkg-card {
            border-radius: 16px;
            padding: 24px 18px 18px;
          }
          .pkg-name {
            font-size: 1.08rem;
          }
          .pkg-desc {
            font-size: 0.9rem;
            margin-bottom: 16px;
          }
          .pkg-price .amount {
            font-size: 1.8rem;
          }
          .pkg-features li {
            font-size: 0.84rem;
            padding: 6px 0;
          }
          .pkg-btn {
            min-height: 48px;
            font-size: 0.88rem;
          }
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ═══ Hero ═══ */}
      <div className="packages-hero">
        <ParticleField count={20} />
        <AnimatedGradientBg />

        {/* Floating decorations */}
        <FloatingElement className="hero-deco hero-deco-1" duration={7} distance={12}>
          <RotatingElement duration={20}>
            <div className="deco-shape deco-diamond" />
          </RotatingElement>
        </FloatingElement>
        <FloatingElement className="hero-deco hero-deco-3" duration={6} distance={10} delay={1}>
          <div className="deco-shape deco-circle" />
        </FloatingElement>

        <MorphingBlob className="hero-blob-1" color="rgba(37,99,235,0.06)" size={300} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Pricing
          </motion.p>
          <motion.h1
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Purchase a{' '}
            <motion.span
              className="gradient-text"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                backgroundSize: '200% 200%',
                background: 'linear-gradient(135deg, var(--primary-light), var(--accent), var(--primary-light))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Package
            </motion.span>
          </motion.h1>
          <motion.p
            style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto' }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Choose a standard service package and pay instantly. Not sure what you need?{' '}
            <Link href="/#contact" style={{ color: 'var(--primary-light)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Contact us first</Link>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ marginTop: 24 }}
          >
            <AnimatedLine />
          </motion.div>
        </div>
      </div>

      {/* ═══ Packages ═══ */}
      <section className="packages-section">
        <MorphingBlob className="section-blob section-blob-right" color="rgba(6,182,212,0.03)" size={300} />
        <div className="packages-container">
          <StaggerContainer className="packages-grid" staggerDelay={0.12}>
            {/* Web Hosting */}
            <StaggerItem>
              <HoverGlow>
                <motion.article
                  className="pkg-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <AnimatedIcon>
                    <div className="pkg-icon"><i className="fas fa-server"></i></div>
                  </AnimatedIcon>
                  <p className="pkg-name">Web Hosting</p>
                  <p className="pkg-desc">Fast, secure, managed web hosting with 99.9% uptime guarantee, SSL, and daily backups.</p>
                  <motion.div
                    className="pkg-price"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  >
                    <span className="amount">$100</span><span className="period">/mo</span>
                  </motion.div>
                  <ul className="pkg-features">
                    {['99.9% Uptime Guarantee', 'Daily Backups & Free SSL', '24/7 Technical Support', 'Scalable Resources'].map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 + 0.3 }}
                      >
                        <i className="fas fa-check"></i> {f}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pkg-actions">
                    <MagneticHover className="pkg-magnetic" strength={0.12}>
                      <Link href="/#contact" className="pkg-btn">Get Started</Link>
                    </MagneticHover>
                  </div>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </motion.article>
              </HoverGlow>
            </StaggerItem>

            {/* SEO */}
            <StaggerItem>
              <HoverGlow>
                <motion.article
                  className="pkg-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: 0.04 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <AnimatedIcon delay={0.1}>
                    <div className="pkg-icon"><i className="fas fa-search"></i></div>
                  </AnimatedIcon>
                  <p className="pkg-name">SEO Optimization</p>
                  <p className="pkg-desc">Monthly SEO management with keyword research, on-page optimization, and transparent reporting.</p>
                  <motion.div
                    className="pkg-price"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                  >
                    <span className="amount">$200</span><span className="period">/mo</span>
                  </motion.div>
                  <ul className="pkg-features">
                    {['Keyword Research & Analysis', 'On-Page Optimization', 'Monthly Performance Reports', 'Competitor Analysis'].map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 + 0.4 }}
                      >
                        <i className="fas fa-check"></i> {f}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pkg-actions">
                    <MagneticHover className="pkg-magnetic" strength={0.12}>
                      <Link href="/#contact" className="pkg-btn">Get Started</Link>
                    </MagneticHover>
                  </div>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </motion.article>
              </HoverGlow>
            </StaggerItem>

            {/* Digital Advertising */}
            <StaggerItem>
              <HoverGlow>
                <motion.article
                  className="pkg-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <AnimatedIcon delay={0.2}>
                    <div className="pkg-icon"><i className="fas fa-bullhorn"></i></div>
                  </AnimatedIcon>
                  <p className="pkg-name">Digital Advertising</p>
                  <p className="pkg-desc">Managed Google & Facebook/Instagram ad campaigns with full optimization.</p>
                  <motion.div
                    className="pkg-price"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <span className="amount">$150</span><span className="period">/mo</span>
                  </motion.div>
                  <ul className="pkg-features">
                    {['Google Ads Management', 'Facebook & Instagram Ads', 'ROI Tracking & Analytics'].map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 + 0.5 }}
                      >
                        <i className="fas fa-check"></i> {f}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="pkg-actions">
                    <MagneticHover className="pkg-magnetic" strength={0.12}>
                      <Link href="/#contact" className="pkg-btn">Get Started</Link>
                    </MagneticHover>
                  </div>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </motion.article>
              </HoverGlow>
            </StaggerItem>

            {/* Website Creation */}
            <StaggerItem>
              <HoverGlow>
                <motion.article
                  className="pkg-card featured"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  <motion.span
                    className="popular-badge"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Most Popular
                  </motion.span>
                  <AnimatedIcon delay={0.3}>
                    <div className="pkg-icon"><i className="fas fa-chart-line"></i></div>
                  </AnimatedIcon>
                  <p className="pkg-name">Website Creation Package</p>
                  <p className="pkg-desc">Complete Website Creation — hosting, 24/7 support, and monthly reporting all in one.</p>
                  <motion.div
                    className="pkg-price"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
                  >
                    <span className="amount">$450</span>
                  </motion.div>
                  <ul className="pkg-features">
                    {['Everything in SEO & Ads', 'Hosting', '24/7 Support', 'Analytics Reporting'].map((f, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.08 + 0.6 }}
                      >
                        <i className="fas fa-check"></i> {f}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="stripe-btn-wrap" dangerouslySetInnerHTML={{ __html: `<stripe-buy-button buy-button-id="buy_btn_1T649OFiNzXfgM2ZHtdrJCZ6" publishable-key="pk_live_51T63tvFiNzXfgM2ZZssIdyEa4NID7xNgQnr3WDc6ptvUjbYhScum4NDkjBk4bMDkAwlM9FcekecHbra1lPX04RcC00wfI9kREJ"></stripe-buy-button>` }} />
                  <div className="pkg-actions" style={{ marginTop: 12 }}>
                    <MagneticHover className="pkg-magnetic" strength={0.12}>
                      <Link href="/#contact" className="pkg-btn">Get Started</Link>
                    </MagneticHover>
                  </div>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </motion.article>
              </HoverGlow>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn direction="up" delay={0.2}>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', paddingBottom: 20 }}>
              Need a custom quote?{' '}
              <Link href="/#contact" style={{ color: 'var(--primary-light)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Get in touch</Link>{' '}
              and we&apos;ll tailor a package for your business.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ Why Choose Us ═══ */}
      <section className="why-section">
        <MorphingBlob className="section-blob section-blob-left" color="rgba(37,99,235,0.04)" size={350} />
        <div className="container">
          <FadeIn direction="up">
            <h2 className="section-title">Why Choose Senyo Solutions?</h2>
            <p className="section-subtitle">We go above and beyond to deliver exceptional results for every client.</p>
            <AnimatedDivider />
          </FadeIn>

          <StaggerContainer className="why-grid" staggerDelay={0.12}>
            {[
              { icon: 'fa-bolt', title: 'Fast Delivery', desc: 'We deliver projects on time without compromising quality. Your website goes live when promised.' },
              { icon: 'fa-shield-alt', title: 'Secure & Reliable', desc: 'Enterprise-grade security with SSL, daily backups, and 99.9% uptime guarantee.' },
              { icon: 'fa-headset', title: '24/7 Support', desc: 'Round-the-clock technical support. We\'re always here when you need us.' },
              { icon: 'fa-chart-bar', title: 'Data-Driven', desc: 'Every decision backed by analytics. We track, measure, and optimize continuously.' },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <HoverGlow>
                  <div className="why-card">
                    <AnimatedIcon delay={i * 0.1}>
                      <div className="why-icon">
                        <i className={`fas ${item.icon}`} />
                      </div>
                    </AnimatedIcon>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                  </div>
                </HoverGlow>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="faq-section">
        <div className="faq-container">
          <FadeIn direction="up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <AnimatedDivider />
          </FadeIn>

          {[
            { q: 'How long does it take to build a website?', a: 'Most websites are delivered within 2-4 weeks, depending on complexity. We provide a detailed timeline during the discovery phase.' },
            { q: 'Do you offer ongoing support?', a: 'Yes! All our packages include ongoing support. We offer 24/7 technical support and monthly check-ins to ensure everything runs smoothly.' },
            { q: 'Can I upgrade my package later?', a: 'Absolutely. You can upgrade or customize your package at any time. We\'ll seamlessly transition your services with zero downtime.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards through Stripe, as well as bank transfers and invoicing for enterprise clients.' },
          ].map((faq, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <motion.div
                className="faq-item"
                whileHover={{ borderColor: 'rgba(37,99,235,0.4)' }}
              >
                <div className="faq-q">
                  {faq.q}
                  <motion.i
                    className="fas fa-plus"
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <motion.div
                  className="faq-a"
                  initial={{ height: 0, opacity: 0, padding: '0 24px' }}
                  whileInView={{ height: 'auto', opacity: 1, padding: '0 24px 18px' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  {faq.a}
                </motion.div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="services-cta-section">
        <ScaleIn>
          <div className="services-cta">
            <ParticleField count={10} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>
                Ready to Get Started?
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 28, fontSize: '1rem', maxWidth: 500, margin: '0 auto 28px' }}>
                Let&apos;s build something amazing together. Contact us today for a free consultation.
              </p>
              <MagneticHover strength={0.15}>
                <PulseEffect>
                  <Link href="/#contact" className="btn btn-primary btn-large btn-shimmer">
                    Start Your Project
                    <span className="btn-shine" />
                  </Link>
                </PulseEffect>
              </MagneticHover>
            </div>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </>
  );
}