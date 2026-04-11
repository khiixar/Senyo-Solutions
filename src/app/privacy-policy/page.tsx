import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Privacy Policy | Senyo Solutions' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <style>{`
        .legal-hero {
          padding: 140px 20px 60px; text-align: center;
          position: relative; overflow: hidden;
        }
        .legal-hero::before {
          content: '';
          position: absolute; top: -30%; left: 50%;
          width: 120%; height: 120%;
          background: radial-gradient(circle at center, rgba(37,99,235,0.05), transparent 65%);
          transform: translateX(-50%);
          pointer-events: none;
        }
        .legal-hero h1 {
          font-family: 'Archivo', sans-serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 14px;
          position: relative;
        }
        .legal-hero p { color: var(--text-secondary); font-size: 0.95rem; position: relative; }
        .legal-body { padding: 60px 20px 100px; }
        .legal-container { max-width: 780px; margin: 0 auto; }
        .legal-container h2 {
          font-family: 'Archivo', sans-serif;
          font-size: 1.15rem; font-weight: 700;
          color: var(--text-primary);
          margin: 40px 0 12px;
        }
        .legal-container h2:first-of-type { margin-top: 0; }
        .legal-container p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8; margin-bottom: 14px; }
        .legal-container ul { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8; padding-left: 22px; margin-bottom: 14px; }
        .legal-container ul li { margin-bottom: 6px; }
        .legal-divider { border: none; border-top: 1px solid var(--border-subtle); margin: 32px 0; }
        .legal-updated {
          display: inline-block;
          background: rgba(37,99,235,0.06);
          border: 1px solid rgba(37,99,235,0.18);
          border-radius: var(--radius-sm);
          padding: 8px 16px;
          font-size: 0.82rem;
          color: var(--primary-light);
          margin-bottom: 40px;
        }
      `}</style>

      <div className="legal-hero">
        <h1>Privacy <span className="gradient-text">Policy</span></h1>
        <p>Your privacy matters to us. Learn how we collect and use your information.</p>
      </div>

      <div className="legal-body">
        <div className="legal-container">
          <span className="legal-updated"><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>Last updated: March 2026</span>

          <h2>1. Introduction</h2>
          <p>Senyo Solutions (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.</p>
          <hr className="legal-divider" />

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and billing address provided through contact forms or payment processes.</li>
            <li><strong>Payment Information:</strong> Payment details processed securely through third-party payment processors. We do not store full card numbers on our servers.</li>
            <li><strong>Project Information:</strong> Content, assets, and requirements you provide during the course of a project.</li>
            <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website, collected automatically through standard web technologies.</li>
          </ul>
          <hr className="legal-divider" />

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Deliver and manage the services you have requested.</li>
            <li>Process payments and send invoices or receipts.</li>
            <li>Communicate with you regarding your project, account, or inquiries.</li>
            <li>Improve our website and service offerings.</li>
            <li>Comply with legal obligations and resolve disputes.</li>
          </ul>
          <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          <hr className="legal-divider" />

          <h2>4. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience. You may disable cookies through your browser settings, though some features of our site may not function properly as a result.</p>
          <hr className="legal-divider" />

          <h2>5. Third-Party Services</h2>
          <p>We may use trusted third-party services to support our operations, including:</p>
          <ul>
            <li>Payment processors (e.g., Stripe) for secure transaction handling.</li>
            <li>Email service providers for client communications and notifications.</li>
            <li>Analytics tools to understand website usage and performance.</li>
            <li>Cloud hosting and database services for storing project data.</li>
          </ul>
          <p>These third parties have their own privacy policies and are contractually obligated to handle your data securely and only for the purposes we specify.</p>
          <hr className="legal-divider" />

          <h2>6. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, including for the duration of our business relationship and as required by applicable law.</p>
          <hr className="legal-divider" />

          <h2>7. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.</p>
          <hr className="legal-divider" />

          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete data.</li>
            <li>Request deletion of your personal data, subject to legal obligations.</li>
            <li>Opt out of certain data processing activities.</li>
            <li>Withdraw consent where processing is based on consent.</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the information provided below.</p>
          <hr className="legal-divider" />

          <h2>9. Children&apos;s Privacy</h2>
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.</p>
          <hr className="legal-divider" />

          <h2>10. Links to Other Websites</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>
          <hr className="legal-divider" />

          <h2>11. Changes to This Policy</h2>
          <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.</p>
          <hr className="legal-divider" />

          <h2>12. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
          <ul>
            <li>Email: contact@senyosolutions.com</li>
            <li>Phone: (516) 707-7351</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}
