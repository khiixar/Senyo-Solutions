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
          overflow: hidden;
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
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .pkg-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .pkg-card:hover {
          border-color: rgba(37,99,235,0.3);
          box-shadow: var(--shadow-md);
        }
        .pkg-card:hover::before { opacity: 1; }
        .pkg-card.featured {
          border-color: rgba(37,99,235,0.35);
          background: rgba(37,99,235,0.05);
        }
        .pkg-card.featured::before { opacity: 1; }
        .popular-badge {
          position: absolute; top: 16px; right: 16px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          font-family: 'Archivo', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 20px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .pkg-icon {
          width: 40px; height: 40px;
          background: rgba(37,99,235,0.1);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem; color: var(--primary-light);
          margin-bottom: 16px;
        }
        .pkg-name {
          font-family: 'Archivo', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        .pkg-desc {
          color: var(--text-secondary);
          font-size: 0.84rem;
          line-height: 1.6;
          margin-bottom: 16px;
          flex: 1;
        }
        .pkg-price { margin-bottom: 16px; }
        .pkg-price .amount {
          font-family: 'Archivo', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .pkg-price .period { font-size: 0.82rem; color: var(--text-muted); margin-left: 2px; }
        .pkg-features { list-style: none; margin-bottom: 20px; padding: 0; }
        .pkg-features li {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.82rem; color: var(--text-secondary);
          padding: 4px 0;
        }
        .pkg-features li i { color: var(--success); font-size: 0.68rem; flex-shrink: 0; }
        .stripe-btn-wrap { display: flex; justify-content: center; }
        .pkg-btn {
          display: block; width: 100%; padding: 9px 18px;
          background: transparent;
          color: var(--primary-light); border: 1.5px solid var(--primary);
          border-radius: 50px;
          font-family: 'Archivo', sans-serif;
          font-size: 0.82rem; font-weight: 600;
          cursor: pointer;
          text-align: center; text-decoration: none;
          transition: all var(--transition-base);
          letter-spacing: 0.01em;
        }
        .pkg-btn:hover {
          background: var(--primary);
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(37,99,235,0.25);
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
          .packages-grid { grid-template-columns: 1fr; }
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
                <div className="pkg-card">
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
                  <MagneticHover strength={0.15}>
                    <Link href="/services/hosting" className="pkg-btn">View Hosting Service</Link>
                  </MagneticHover>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </div>
              </HoverGlow>
            </StaggerItem>

            {/* SEO */}
            <StaggerItem>
              <HoverGlow>
                <div className="pkg-card">
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
                  <MagneticHover strength={0.15}>
                    <Link href="/services/seo" className="pkg-btn">View SEO Service</Link>
                  </MagneticHover>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </div>
              </HoverGlow>
            </StaggerItem>

            {/* Digital Advertising */}
            <StaggerItem>
              <HoverGlow>
                <div className="pkg-card">
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
                  <MagneticHover strength={0.15}>
                    <Link href="/services/digital-marketing" className="pkg-btn">View Digital Marketing Service</Link>
                  </MagneticHover>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </div>
              </HoverGlow>
            </StaggerItem>

            {/* Website Creation */}
            <StaggerItem>
              <HoverGlow>
                <div className="pkg-card featured">
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
                  <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Link href="/services/web-design" className="pkg-btn" style={{ width: 'auto' }}>Web Design Details</Link>
                    <Link href="/services/analytics" className="pkg-btn" style={{ width: 'auto' }}>Analytics Details</Link>
                  </div>
                  <motion.div className="card-shimmer" initial={{ x: '-100%' }} whileHover={{ x: '200%' }} transition={{ duration: 0.6 }} />
                </div>
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