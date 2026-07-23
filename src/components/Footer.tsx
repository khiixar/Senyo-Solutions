'use client';

import Link from 'next/link';
import { FadeIn } from './MotionWrapper';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <FadeIn direction="up" threshold={0.05}>
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/images/logo-footer.svg" alt="Senyo Solutions" className="footer-logo-img" />
              </div>
              <p>
                Quiet, dependable IT for the small businesses and practices actual humans run. We handle the boring parts — the machines, the mail, the backups, the websites — so you can get back to your work.
              </p>
              <p className="hand" style={{ marginTop: '16px', color: 'var(--highlight)', fontSize: '1.1rem' }}>
                Made with care on Long Island.
              </p>
            </div>
            <div className="footer-section">
              <h4>Explore</h4>
              <ul>
                <li><Link href="/services">Managed IT</Link></li>
                <li><Link href="/pricing">Plans &amp; add-ons</Link></li>
                <li><Link href="/web-services">Web &amp; hosting</Link></li>
                <li><Link href="/coverage">Where we work</Link></li>
                <li><Link href="/contact">Book a tech review</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Say hello</h4>
              <div className="footer-contact">
                <p><i className="fas fa-phone"></i> (516) 707-7351</p>
                <p suppressHydrationWarning><i className="fas fa-envelope"></i> contact@senyosolutions.com</p>
                <p><i className="fas fa-location-dot"></i> Long Island, New York</p>
                <p><i className="fas fa-map"></i> Serving LI, NYC, NJ, CT &amp; Westchester</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="footer-bottom">
          <p>&copy; 2024–2026 Senyo Solutions. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/terms-of-service">Terms</Link>
            <span>&middot;</span>
            <Link href="/privacy-policy">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
