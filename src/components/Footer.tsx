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
                We craft modern digital experiences that help businesses grow — from design to
                deployment and everything in between.
              </p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><Link href="/services">Website Creation</Link></li>
                <li><Link href="/services">Web Hosting</Link></li>
                <li><Link href="/services">Marketing</Link></li>
                <li><Link href="/services">SEO Optimization</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <div className="footer-contact">
                <p><i className="fas fa-phone"></i> (516) 707-7351</p>
                <p suppressHydrationWarning><i className="fas fa-envelope"></i> contact@senyosolutions.com</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="footer-follow-us">
          <h4>Follow Us</h4>
          <div className="footer-social-buttons">
            <a
              href="https://www.linkedin.com/company/senyo-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn linkedin-btn"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/SenyoSolutions/#"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn instagram-btn"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

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
