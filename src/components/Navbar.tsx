'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMobile = () => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    document.body.style.overflow = next ? 'hidden' : 'auto';
  };

  const links = [
    { href: '/#home', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/#work', label: 'Our Work' },
    { href: '/#contact', label: 'Contact' },
  ];

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

        {/* Desktop nav */}
        <ul className="nav-menu" style={{ transform: isMobileOpen ? 'translateX(0)' : undefined }}>
          {links.map((link, i) => (
            <motion.li
              key={link.href}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            >
              <Link href={link.href} className="nav-link" onClick={closeMobile}>
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div
          className={`hamburger ${isMobileOpen ? 'active' : ''}`}
          onClick={toggleMobile}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>

      {/* Mobile overlay */}
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
              padding: '40px 24px',
              gap: 12,
            }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
              >
                <Link
                  href={link.href}
                  className="nav-link"
                  onClick={closeMobile}
                  style={{
                    display: 'block',
                    fontSize: '1.3rem',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(63,63,70,0.25)',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
