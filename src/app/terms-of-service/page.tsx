import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Terms of Service | Senyo Solutions' };

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <style>{`
        .legal-hero { padding: 140px 20px 60px; text-align: center; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); }
        .legal-hero h1 { font-size: clamp(2rem, 5vw, 3rem); font-weight: 700; color: var(--text-primary); margin-bottom: 14px; }
        .legal-hero p { color: var(--text-secondary); font-size: 0.95rem; }
        .legal-body { background: #0a0a0a; padding: 60px 20px 100px; }
        .legal-container { max-width: 780px; margin: 0 auto; }
        .legal-container h2 { font-size: 1.2rem; font-weight: 700; color: var(--text-primary); margin: 40px 0 12px; }
        .legal-container h2:first-of-type { margin-top: 0; }
        .legal-container p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8; margin-bottom: 14px; }
        .legal-container ul { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.8; padding-left: 22px; margin-bottom: 14px; }
        .legal-container ul li { margin-bottom: 6px; }
        .legal-divider { border: none; border-top: 1px solid rgba(255,255,255,0.07); margin: 32px 0; }
        .legal-updated { display: inline-block; background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.25); border-radius: 8px; padding: 8px 16px; font-size: 0.82rem; color: var(--primary-light); margin-bottom: 40px; }
      `}</style>

      <div className="legal-hero">
        <h1>Terms of <span className="gradient-text">Service</span></h1>
        <p>Please read these terms carefully before using our services.</p>
      </div>

      <div className="legal-body">
        <div className="legal-container">
          <span className="legal-updated"><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>Last updated: March 2026</span>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the services provided by Senyo Solutions (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          <hr className="legal-divider" />

          <h2>2. Services</h2>
          <p>Senyo Solutions provides web development, design, and digital solution services. The scope of services for each project is defined in a separate project agreement or invoice issued to the client. We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.</p>
          <hr className="legal-divider" />

          <h2>3. Payment Terms</h2>
          <p>All fees are outlined in the applicable project proposal or invoice. Unless otherwise agreed:</p>
          <ul>
            <li>A deposit may be required before work begins.</li>
            <li>Final payment is due upon project completion and before delivery of final files.</li>
            <li>Late payments may incur a late fee of 1.5% per month on the outstanding balance.</li>
            <li>All payments are non-refundable unless otherwise stated in writing.</li>
          </ul>
          <hr className="legal-divider" />

          <h2>4. Intellectual Property</h2>
          <p>Upon receipt of full payment, the client receives ownership rights to the final deliverables as specified in the project agreement. Senyo Solutions retains the right to display completed work in its portfolio unless the client requests confidentiality in writing.</p>
          <p>All tools, frameworks, third-party libraries, and pre-existing code used in development remain the property of their respective owners and are subject to their own licenses.</p>
          <hr className="legal-divider" />

          <h2>5. Client Responsibilities</h2>
          <p>The client agrees to:</p>
          <ul>
            <li>Provide accurate and complete information required for the project.</li>
            <li>Supply content, assets, and feedback in a timely manner.</li>
            <li>Not use delivered services for unlawful, harmful, or fraudulent purposes.</li>
            <li>Maintain the security of any login credentials provided.</li>
          </ul>
          <hr className="legal-divider" />

          <h2>6. Revisions &amp; Project Scope</h2>
          <p>The number of revisions included is outlined in each project proposal. Requests that fall outside the agreed scope may be subject to additional charges. Significant changes to project requirements after work has begun may result in revised timelines and pricing.</p>
          <hr className="legal-divider" />

          <h2>7. Limitation of Liability</h2>
          <p>Senyo Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of revenue, data, or business opportunities. Our total liability in connection with any project shall not exceed the total fees paid by the client for that project.</p>
          <hr className="legal-divider" />

          <h2>8. Warranties</h2>
          <p>We warrant that all work will be performed with reasonable skill and care. We do not guarantee uninterrupted operation of any website or application, as this is subject to third-party hosting, domain, and infrastructure providers outside our control.</p>
          <hr className="legal-divider" />

          <h2>9. Termination</h2>
          <p>Either party may terminate a project agreement with written notice. In the event of termination, the client is responsible for payment for all work completed up to the termination date. Any outstanding invoices become immediately due upon termination.</p>
          <hr className="legal-divider" />

          <h2>10. Governing Law</h2>
          <p>These Terms of Service are governed by the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Nassau County, New York.</p>
          <hr className="legal-divider" />

          <h2>11. Changes to These Terms</h2>
          <p>We reserve the right to update these Terms of Service at any time. Continued use of our services following any changes constitutes acceptance of the revised terms. We encourage you to review this page periodically.</p>
          <hr className="legal-divider" />

          <h2>12. Contact Us</h2>
          <p>If you have any questions about these Terms of Service, please contact us:</p>
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
