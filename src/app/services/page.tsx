'use client';

import Link from 'next/link';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, StaggerContainer, StaggerItem, HoverScale } from '@/components/MotionWrapper';
const ServicesScene3D = dynamic(() => import('@/components/ServicesScene3D'), { ssr: false });

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />

      <style jsx>{`
        .packages-hero {
          min-height: 40vh;
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
          transform: translateY(-4px);
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
        @media (max-width: 768px) {
          .packages-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <div className="packages-hero">
        <ServicesScene3D />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
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
            Purchase a <span className="gradient-text">Package</span>
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
        </div>
      </div>

      <section className="packages-section">
        <div className="packages-container">
          <StaggerContainer className="packages-grid" staggerDelay={0.1}>
            {/* Web Hosting */}
            <StaggerItem>
              <HoverScale>
                <div className="pkg-card">
                  <div className="pkg-icon"><i className="fas fa-server"></i></div>
                  <p className="pkg-name">Web Hosting</p>
                  <p className="pkg-desc">Fast, secure, managed web hosting with 99.9% uptime guarantee, SSL, and daily backups.</p>
                  <div className="pkg-price"><span className="amount">$100</span><span className="period">/mo</span></div>
                  <ul className="pkg-features">
                    <li><i className="fas fa-check"></i> 99.9% Uptime Guarantee</li>
                    <li><i className="fas fa-check"></i> Daily Backups & Free SSL</li>
                    <li><i className="fas fa-check"></i> 24/7 Technical Support</li>
                    <li><i className="fas fa-check"></i> Scalable Resources</li>
                  </ul>
                  <Link href="/#contact" className="pkg-btn">Get Started</Link>
                </div>
              </HoverScale>
            </StaggerItem>

            {/* SEO */}
            <StaggerItem>
              <HoverScale>
                <div className="pkg-card">
                  <div className="pkg-icon"><i className="fas fa-search"></i></div>
                  <p className="pkg-name">SEO Optimization</p>
                  <p className="pkg-desc">Monthly SEO management with keyword research, on-page optimization, and transparent reporting.</p>
                  <div className="pkg-price"><span className="amount">$200</span><span className="period">/mo</span></div>
                  <ul className="pkg-features">
                    <li><i className="fas fa-check"></i> Keyword Research & Analysis</li>
                    <li><i className="fas fa-check"></i> On-Page Optimization</li>
                    <li><i className="fas fa-check"></i> Monthly Performance Reports</li>
                    <li><i className="fas fa-check"></i> Competitor Analysis</li>
                  </ul>
                  <Link href="/#contact" className="pkg-btn">Get Started</Link>
                </div>
              </HoverScale>
            </StaggerItem>

            {/* Digital Advertising */}
            <StaggerItem>
              <HoverScale>
                <div className="pkg-card">
                  <div className="pkg-icon"><i className="fas fa-bullhorn"></i></div>
                  <p className="pkg-name">Digital Advertising</p>
                  <p className="pkg-desc">Managed Google & Facebook/Instagram ad campaigns with full optimization.</p>
                  <div className="pkg-price"><span className="amount">$150</span><span className="period">/mo</span></div>
                  <ul className="pkg-features">
                    <li><i className="fas fa-check"></i> Google Ads Management</li>
                    <li><i className="fas fa-check"></i> Facebook & Instagram Ads</li>
                    <li><i className="fas fa-check"></i> ROI Tracking & Analytics</li>
                  </ul>
                  <Link href="/#contact" className="pkg-btn">Get Started</Link>
                </div>
              </HoverScale>
            </StaggerItem>

            {/* Website Creation */}
            <StaggerItem>
              <HoverScale>
                <div className="pkg-card featured">
                  <span className="popular-badge">Most Popular</span>
                  <div className="pkg-icon"><i className="fas fa-chart-line"></i></div>
                  <p className="pkg-name">Website Creation Package</p>
                  <p className="pkg-desc">Complete Website Creation — hosting, 24/7 support, and monthly reporting all in one.</p>
                  <div className="pkg-price"><span className="amount">$450</span></div>
                  <ul className="pkg-features">
                    <li><i className="fas fa-check"></i> Everything in SEO & Ads</li>
                    <li><i className="fas fa-check"></i> Hosting</li>
                    <li><i className="fas fa-check"></i> 24/7 Support</li>
                    <li><i className="fas fa-check"></i> Analytics Reporting</li>
                  </ul>
                  <div className="stripe-btn-wrap" dangerouslySetInnerHTML={{ __html: `<stripe-buy-button buy-button-id="buy_btn_1T649OFiNzXfgM2ZHtdrJCZ6" publishable-key="pk_live_51T63tvFiNzXfgM2ZZssIdyEa4NID7xNgQnr3WDc6ptvUjbYhScum4NDkjBk4bMDkAwlM9FcekecHbra1lPX04RcC00wfI9kREJ"></stripe-buy-button>` }} />
                </div>
              </HoverScale>
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

      <Footer />
    </>
  );
}
