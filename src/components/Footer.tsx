import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/images/logo1.png" alt="Senyo Solutions" className="footer-logo-img" />
            </div>
            <p>Professional web solutions for modern businesses</p>
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
              <p><i className="fas fa-envelope"></i> contact@senyosolutions.com</p>
            </div>
          </div>
        </div>

        <div className="footer-follow-us">
          <h4>Follow Us</h4>
          <div className="footer-social-buttons">
            <a href="https://www.linkedin.com/company/senyo-solutions" target="_blank" rel="noopener noreferrer" className="footer-social-btn linkedin-btn">
              <i className="fab fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/SenyoSolutions/#" target="_blank" rel="noopener noreferrer" className="footer-social-btn instagram-btn">
              <i className="fab fa-instagram"></i>
              <span>Instagram</span>
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
