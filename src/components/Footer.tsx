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
                <img src="/images/logo1.png" alt="Senyo Solutions" className="footer-logo-img" />
              </div>
              <p>
                Simple, secure IT support for small practices on Long Island — without expensive MSP contracts.
                We also handle websites and hosting as a value-add so your team can stay focused on patient care.
              </p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services">Managed IT Plans</Link></li>
                <li><Link href="/pricing">Pricing & Add-ons</Link></li>
                <li><Link href="/web-services">Web Services</Link></li>
                <li><Link href="/contact">Book a Free Tech Review</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="footer-contact">
                <p><i className="fas fa-phone"></i> (516) 707-7351</p>
                <p suppressHydrationWarning><i className="fas fa-envelope"></i> contact@senyosolutions.com</p>
                <p><i className="fas fa-location-dot"></i> Long Island, New York</p>
                <p><i className="fas fa-map"></i> Serving NY State, Long Island & New Jersey</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="footer-bottom">
          <p>&copy; 2024-2026 Senyo Solutions. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link href="/terms-of-service">Terms of Service</Link>
            <span>&middot;</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
