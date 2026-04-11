'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, AnimatedGradientBg, MorphingBlob } from '@/components/MotionWrapper';

const sections = [
  { title: '1. Introduction', content: 'Senyo Solutions (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.' },
  { title: '2. Information We Collect', content: 'We may collect the following types of information:', list: ['Personal Identification Information: Name, email address, phone number, and billing address provided through contact forms or payment processes.', 'Payment Information: Payment details processed securely through third-party payment processors. We do not store full card numbers on our servers.', 'Project Information: Content, assets, and requirements you provide during the course of a project.', 'Usage Data: Browser type, IP address, pages visited, and time spent on our website, collected automatically through standard web technologies.'] },
  { title: '3. How We Use Your Information', content: 'We use the information we collect to:', list: ['Deliver and manage the services you have requested.', 'Process payments and send invoices or receipts.', 'Communicate with you regarding your project, account, or inquiries.', 'Improve our website and service offerings.', 'Comply with legal obligations and resolve disputes.'], content2: 'We do not sell, rent, or trade your personal information to third parties for marketing purposes.' },
  { title: '4. Cookies and Tracking Technologies', content: 'Our website may use cookies and similar tracking technologies to enhance your browsing experience. You may disable cookies through your browser settings, though some features of our site may not function properly as a result.' },
  { title: '5. Third-Party Services', content: 'We may use trusted third-party services to support our operations, including:', list: ['Payment processors (e.g., Stripe) for secure transaction handling.', 'Email service providers for client communications and notifications.', 'Analytics tools to understand website usage and performance.', 'Cloud hosting and database services for storing project data.'], content2: 'These third parties have their own privacy policies and are contractually obligated to handle your data securely and only for the purposes we specify.' },
  { title: '6. Data Retention', content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, including for the duration of our business relationship and as required by applicable law.' },
  { title: '7. Data Security', content: 'We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.' },
  { title: '8. Your Rights', content: 'Depending on your location, you may have the right to:', list: ['Access the personal information we hold about you.', 'Request correction of inaccurate or incomplete data.', 'Request deletion of your personal data, subject to legal obligations.', 'Opt out of certain data processing activities.', 'Withdraw consent where processing is based on consent.'], content2: 'To exercise any of these rights, please contact us using the information provided below.' },
  { title: '9. Children\'s Privacy', content: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors.' },
  { title: '10. Links to Other Websites', content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.' },
  { title: '11. Changes to This Policy', content: 'We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated revision date.' },
  { title: '12. Contact Us', content: 'If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:', list: ['Email: contact@senyosolutions.com', 'Phone: (516) 707-7351'] },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <style jsx global>{`
        .legal-hero {
          padding: 140px 20px 60px; text-align: center;
          position: relative; overflow: hidden;
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
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(37,99,235,0.05)" size={350} position={{ top: '-10%', left: '-5%' }} />

        <FadeIn direction="up">
          <h1>Privacy <span className="gradient-text">Policy</span></h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.15}>
          <p>Your privacy matters to us. Learn how we collect and use your information.</p>
        </FadeIn>
      </div>

      <div className="legal-body">
        <div className="legal-container">
          <FadeIn direction="up">
            <span className="legal-updated"><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>Last updated: March 2026</span>
          </FadeIn>

          {sections.map((section, index) => (
            <FadeIn key={index} direction="up" delay={0.05 * index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              {section.list && (
                <ul>
                  {section.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {section.content2 && <p>{section.content2}</p>}
              {index < sections.length - 1 && <hr className="legal-divider" />}
            </FadeIn>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
