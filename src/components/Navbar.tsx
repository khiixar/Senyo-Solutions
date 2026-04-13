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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isPortalsOpen, setIsPortalsOpen] = useState(false);
  const [isMobilePortalsOpen, setIsMobilePortalsOpen] = useState(false);
  const portalsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (!portalsRef.current) return;
      if (!portalsRef.current.contains(event.target as Node)) {
        setIsPortalsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsMobilePortalsOpen(false);
    setIsPortalsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobile = () => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    if (!next) setIsMobilePortalsOpen(false);
    document.body.style.overflow = next ? 'hidden' : 'auto';
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link" onClick={closeMobile}>
            <img src="/images/logo1.png" alt="Senyo Solutions" className="logo-svg" />
          </Link>
        </div>

        <ul className="nav-menu" role="menubar" aria-label="Main navigation">
          {mainLinks.map((link, i) => (
            <motion.li
              key={link.href}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 + i * 0.04, duration: 0.3 }}
            >
              <Link href={link.href} className="nav-link" onClick={closeMobile}>
                {link.label}
              </Link>
            </motion.li>
          ))}

          <motion.li
            ref={portalsRef}
            className="nav-item nav-item-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.3 }}
            onMouseEnter={() => setIsPortalsOpen(true)}
            onMouseLeave={() => setIsPortalsOpen(false)}
          >
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={() => setIsPortalsOpen((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={isPortalsOpen}
            >
              Portals <span className={`dropdown-caret ${isPortalsOpen ? 'open' : ''}`}>▾</span>
            </button>

            <AnimatePresence>
              {isPortalsOpen && (
                <motion.ul
                  className="services-dropdown"
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                >
                  {portalLinks.map((item) => (
                    <li key={item.href} role="none">
                      <Link href={item.href} role="menuitem" className="dropdown-link" onClick={() => setIsPortalsOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>
        </ul>

        <button
          type="button"
          className={`hamburger ${isMobileOpen ? 'active' : ''}`}
          onClick={toggleMobile}
          aria-label="Toggle menu"
          aria-expanded={isMobileOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              top: 72,
              background: 'rgba(247, 250, 253, 0.98)',
              backdropFilter: 'blur(16px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '24px',
              gap: 8,
              overflowY: 'auto',
            }}
          >
            {mainLinks.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                <Link
                  href={link.href}
                  className="nav-link"
                  onClick={closeMobile}
                  style={{
                    display: 'block',
                    fontSize: '1.08rem',
                    color: 'var(--text-primary)',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="mobile-services-wrap">
              <button
                type="button"
                className="mobile-services-toggle"
                onClick={() => setIsMobilePortalsOpen((prev) => !prev)}
                aria-expanded={isMobilePortalsOpen}
              >
                <span>Portals</span>
                <span className={`mobile-services-icon ${isMobilePortalsOpen ? 'open' : ''}`}>+</span>
              </button>

              <AnimatePresence>
                {isMobilePortalsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mobile-services-list"
                  >
                    {portalLinks.map((item) => (
                      <Link key={item.href} href={item.href} className="mobile-service-link" onClick={closeMobile}>
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
