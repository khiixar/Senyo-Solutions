'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  useEffect(() => {
    // Mobile nav init handled by Navbar component
  }, []);

  return (
    <>
      <Navbar />
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />

      <style jsx>{`
        .section-title-sm {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .section-sub {
          color: var(--text-secondary);
          margin-bottom: 48px;
          max-width: 580px;
        }
        .packages-section {
          padding: 80px 20px;
        }
        .packages-container {
          max-width: 1100px;
          margin: 0 auto;
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          margin-bottom: 40px;
        }
        .pkg-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .pkg-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0;
          transition: opacity 0.3s;
        }
        .pkg-card:hover {
          border-color: rgba(99,102,241,0.3);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }
        .pkg-card:hover::before { opacity: 1; }
        .pkg-card.featured {
          border-color: rgba(99,102,241,0.4);
          background: rgba(99,102,241,0.07);
        }
        .pkg-card.featured::before { opacity: 1; }
        .popular-badge {
          position: absolute; top: 16px; right: 16px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff; font-size: 0.7rem; font-weight: 700;
          padding: 4px 10px; border-radius: 20px;
          letter-spacing: 0.06em; text-transform: uppercase;
        }
        .pkg-icon {
          width: 48px; height: 48px;
          background: rgba(99,102,241,0.15); border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.25rem; color: var(--primary-light); margin-bottom: 20px;
        }
        .pkg-name { font-size: 1.05rem; font-weight: 600; color: var(--text-primary); margin-bottom: 8px; }
        .pkg-desc { color: var(--text-secondary); font-size: 0.875rem; line-height: 1.6; margin-bottom: 20px; flex: 1; }
        .pkg-price { margin-bottom: 20px; }
        .pkg-price .amount { font-size: 2rem; font-weight: 700; color: var(--text-primary); }
        .pkg-price .period { font-size: 0.875rem; color: var(--text-muted); margin-left: 2px; }
        .pkg-features { list-style: none; margin-bottom: 24px; padding: 0; }
        .pkg-features li { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--text-secondary); padding: 4px 0; }
        .pkg-features li i { color: var(--success); font-size: 0.75rem; flex-shrink: 0; }
        .stripe-btn-wrap { display: flex; justify-content: center; }
        .pkg-btn {
          display: block; width: 100%; padding: 13px 20px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          color: #fff; border: none; border-radius: 10px;
          font-size: 0.95rem; font-weight: 600; cursor: pointer;
          text-align: center; text-decoration: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }
        .pkg-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.4); }
        @media (max-width: 768px) {
          .packages-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="packages-section">
        <div className="packages-container">
          <h2 className="section-title-sm">Purchase a Package</h2>
          <p className="section-sub">
            Choose a standard service package and pay instantly. Not sure what you need?{' '}
            <Link href="/#contact" style={{ color: 'var(--primary-light)' }}>Contact us first</Link>
          </p>

          <div className="packages-grid">
            {/* Web Hosting */}
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

            {/* SEO */}
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

            {/* Digital Advertising */}
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

            {/* Website Creation */}
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
          </div>

          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', paddingBottom: '20px' }}>
            Need a custom quote?{' '}
            <Link href="/#contact" style={{ color: 'var(--primary-light)' }}>Get in touch</Link>{' '}
            and we&apos;ll tailor a package for your business.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
