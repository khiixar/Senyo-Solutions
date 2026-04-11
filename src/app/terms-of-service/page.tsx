'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, AnimatedGradientBg, MorphingBlob, AnimatedDivider } from '@/components/MotionWrapper';

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing or using the services provided by Senyo Solutions (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
  { title: '2. Services', content: 'Senyo Solutions provides web development, design, and digital solution services. The scope of services for each project is defined in a separate project agreement or invoice issued to the client. We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice.' },
  { title: '3. Payment Terms', content: 'All fees are outlined in the applicable project proposal or invoice. Unless otherwise agreed:', list: ['A deposit may be required before work begins.', 'Final payment is due upon project completion and before delivery of final files.', 'Late payments may incur a late fee of 1.5% per month on the outstanding balance.', 'All payments are non-refundable unless otherwise stated in writing.'] },
  { title: '4. Intellectual Property', content: 'Upon receipt of full payment, the client receives ownership rights to the final deliverables as specified in the project agreement. Senyo Solutions retains the right to display completed work in its portfolio unless the client requests confidentiality in writing.', content2: 'All tools, frameworks, third-party libraries, and pre-existing code used in development remain the property of their respective owners and are subject to their own licenses.' },
  { title: '5. Client Responsibilities', content: 'The client agrees to:', list: ['Provide accurate and complete information required for the project.', 'Supply content, assets, and feedback in a timely manner.', 'Not use delivered services for unlawful, harmful, or fraudulent purposes.', 'Maintain the security of any login credentials provided.'] },
  { title: '6. Revisions & Project Scope', content: 'The number of revisions included is outlined in each project proposal. Requests that fall outside the agreed scope may be subject to additional charges. Significant changes to project requirements after work has begun may result in revised timelines and pricing.' },
  { title: '7. Limitation of Liability', content: 'Senyo Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to loss of revenue, data, or business opportunities. Our total liability in connection with any project shall not exceed the total fees paid by the client for that project.' },
  { title: '8. Warranties', content: 'We warrant that all work will be performed with reasonable skill and care. We do not guarantee uninterrupted operation of any website or application, as this is subject to third-party hosting, domain, and infrastructure providers outside our control.' },
  { title: '9. Termination', content: 'Either party may terminate a project agreement with written notice. In the event of termination, the client is responsible for payment for all work completed up to the termination date. Any outstanding invoices become immediately due upon termination.' },
  { title: '10. Governing Law', content: 'These Terms of Service are governed by the laws of the State of New York, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Nassau County, New York.' },
  { title: '11. Changes to These Terms', content: 'We reserve the right to update these Terms of Service at any time. Continued use of our services following any changes constitutes acceptance of the revised terms. We encourage you to review this page periodically.' },
  { title: '12. Contact Us', content: 'If you have any questions about these Terms of Service, please contact us:', list: ['Email: contact@senyosolutions.com', 'Phone: (516) 707-7351'] },
];

export default function TermsOfServicePage() {
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
        <MorphingBlob color="rgba(37,99,235,0.05)" size={350} position={{ top: '-10%', right: '-5%' }} />

        <FadeIn direction="up">
          <h1>Terms of <span className="gradient-text">Service</span></h1>
        </FadeIn>
        <FadeIn direction="up" delay={0.15}>
          <p>Please read these terms carefully before using our services.</p>
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
              {section.content2 && <p>{section.content2}</p>}
              {section.list && (
                <ul>
                  {section.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
              {index < sections.length - 1 && <hr className="legal-divider" />}
            </FadeIn>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
