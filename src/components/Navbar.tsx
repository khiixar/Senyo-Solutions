'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    const handleHamburgerClick = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    hamburger.addEventListener('click', handleHamburgerClick);

    const navLinks = document.querySelectorAll('.nav-link');
    const handleNavLinkClick = () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = 'auto';
    };

    navLinks.forEach(link => link.addEventListener('click', handleNavLinkClick));

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      hamburger.removeEventListener('click', handleHamburgerClick);
      navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" className="logo-link">
            <img src="/images/logo1.png" alt="Senyo Solutions" className="logo-svg" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item"><Link href="/#home" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="/services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link href="/#work" className="nav-link">Our Work</Link></li>
          <li className="nav-item"><Link href="/#contact" className="nav-link">Contact</Link></li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
