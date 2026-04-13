'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const mainLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/faq', label: 'FAQ' },
  { href: '/#work', label: 'Our Work' },
  { href: '/#contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Overview' },
  { href: '/services/web-design', label: 'Web Design' },
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/hosting', label: 'Hosting' },
  { href: '/services/digital-marketing', label: 'Digital Marketing' },
  { href: '/services/analytics', label: 'Analytics' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (event: MouseEvent) => {
      if (!servicesRef.current) return;
      if (!servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobile = () => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    if (!next) {
      setIsMobileServicesOpen(false);
    }
    document.body.style.overflow = next ? 'hidden' : 'auto';
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
            >
              <Link href={link.href} className="nav-link" onClick={closeMobile}>
                {link.label}
              </Link>
            </motion.li>
          ))}

          <motion.li
            ref={servicesRef}
            className="nav-item nav-item-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.35 }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              className="nav-link dropdown-toggle"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
            >
              Services <span className={`dropdown-caret ${isServicesOpen ? 'open' : ''}`}>▾</span>
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.ul
                  className="services-dropdown"
                  role="menu"
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                >
                  {serviceLinks.map((service) => (
                    <li key={service.href} role="none">
                      <Link href={service.href} role="menuitem" className="dropdown-link" onClick={() => setIsServicesOpen(false)}>
                        {service.label}
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
              background: 'rgba(9,9,11,0.97)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '34px 24px 40px',
              gap: 8,
              overflowY: 'auto',
            }}
          >
            {mainLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className="nav-link"
                  onClick={closeMobile}
                  style={{
                    display: 'block',
                    fontSize: '1.2rem',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(63,63,70,0.25)',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: mainLinks.length * 0.07, duration: 0.3 }}
              className="mobile-services-wrap"
            >
              <button
                type="button"
                className="mobile-services-toggle"
                onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                aria-expanded={isMobileServicesOpen}
              >
                <span>Services</span>
                <span className={`mobile-services-icon ${isMobileServicesOpen ? 'open' : ''}`}>+</span>
              </button>

              <AnimatePresence>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mobile-services-list"
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="mobile-service-link"
                        onClick={closeMobile}
                      >
                        {service.label}
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
