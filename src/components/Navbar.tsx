'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/web-services', label: 'Web Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

const portalLinks = [
  { href: '/client-portal', label: 'Support Portal' },
  { href: '/admin-portal', label: 'Operations Portal' },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);
  const portalsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (!portalsRef.current) return;
      if (!portalsRef.current.contains(event.target as Node)) {
        setIsPortalsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPortalsOpen(false);
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsPortalsOpen(false);
  };

  return (
    <>
      <header className="navbar-wrapper">
        <div className="nav-utility-bar" aria-label="Contact information">
          <div className="nav-utility-inner">
            <a className="nav-utility-item" href="tel:+15167077351">
              <i className="fas fa-phone" aria-hidden="true" />
              <span>(516) 707-7351</span>
            </a>
            <span className="nav-utility-sep" aria-hidden="true">|</span>
            <a className="nav-utility-item" href="mailto:contact@senyosolutions.com">
              <i className="fas fa-envelope" aria-hidden="true" />
              <span>contact@senyosolutions.com</span>
            </a>
            <span className="nav-utility-sep" aria-hidden="true">|</span>
            <span className="nav-utility-item">
              <i className="fas fa-location-dot" aria-hidden="true" />
              <span>Long Island, NYC, NJ, CT &amp; Westchester</span>
            </span>
          </div>
        </div>

        <nav className="navbar" aria-label="Primary">
          <div className="nav-container">
            <div className="nav-logo">
              <Link href="/" className="logo-link" onClick={closeMobile}>
                <img src="/images/logo.svg" alt="Senyo Solutions" className="logo-svg" />
              </Link>
            </div>

            <ul className="nav-menu" aria-label="Main navigation">
              {mainLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <Link href={link.href} className="nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}

              <li
                ref={portalsRef}
                className="nav-item nav-item-dropdown"
                onMouseEnter={() => setIsPortalsOpen(true)}
                onMouseLeave={() => setIsPortalsOpen(false)}
                onBlur={(event) => {
                  const nextFocused = event.relatedTarget as Node | null;
                  if (nextFocused && portalsRef.current?.contains(nextFocused)) return;
                  setIsPortalsOpen(false);
                }}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  onClick={() => setIsPortalsOpen((prev) => !prev)}
                  aria-haspopup="true"
                  aria-expanded={isPortalsOpen}
                  aria-controls="portals-menu"
                >
                  Portals <span className={`dropdown-caret ${isPortalsOpen ? 'open' : ''}`}>▾</span>
                </button>

                <AnimatePresence>
                  {isPortalsOpen && (
                    <motion.ul
                      id="portals-menu"
                      className="services-dropdown"
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18 }}
                    >
                      {portalLinks.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="dropdown-link" onClick={() => setIsPortalsOpen(false)}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            <button
              type="button"
              className={`hamburger ${isMobileOpen ? 'active' : ''}`}
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            className="mobile-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="mobile-overlay-header">
              <Link href="/" className="logo-link" onClick={closeMobile}>
                <img src="/images/logo.svg" alt="Senyo Solutions" className="logo-svg" />
              </Link>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mobile-nav-links">
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.22 }}
                >
                  <Link href={link.href} className="mobile-nav-link" onClick={closeMobile}>
                    {link.label}
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + mainLinks.length * 0.05, duration: 0.22 }}
              >
                <div className="mobile-nav-divider">Portals</div>
                {portalLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="mobile-portal-link" onClick={closeMobile}>
                    {item.label}
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </motion.div>
            </div>

            <div className="mobile-overlay-footer">
              <Link href="/contact" className="btn btn-primary btn-full" onClick={closeMobile}>
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
