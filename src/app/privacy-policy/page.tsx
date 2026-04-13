'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, AnimatedGradientBg, MorphingBlob } from '@/components/MotionWrapper';

const sections = [
  { title: '1. Introduction', content: 'Senyo Solutions respects your privacy. This policy explains how we collect, use, and protect information when you use our website and services.' },
  { title: '2. Information We Collect', content: 'We may collect contact details, billing details, device/support context you share with us, and website analytics data used to improve service quality.' },
  { title: '3. How We Use Information', content: 'We use information to deliver IT services, respond to support requests, process payments, maintain security, and communicate service updates.' },
  { title: '4. Data Sharing', content: 'We do not sell your personal information. We only share data with trusted service providers needed to run operations (for example payment processors or cloud platforms).' },
  { title: '5. Security Practices', content: 'We apply reasonable technical and organizational safeguards to protect data. No internet-based system can guarantee absolute security.' },
  { title: '6. Data Retention', content: 'We retain data only as long as needed for service delivery, legal compliance, billing records, or security purposes.' },
  { title: '7. Your Rights', content: 'You may request access, correction, or deletion of your personal information, subject to legal and contractual requirements.' },
  { title: '8. Cookies', content: 'Our site uses cookies for basic functionality and analytics. You can manage cookie preferences through your browser settings.' },
  { title: '9. Contact', content: 'Privacy questions: contact@senyosolutions.com | (516) 707-7351' },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <div className="legal-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(37,99,235,0.05)" size={350} position={{ top: '-10%', left: '-5%' }} />
        <FadeIn direction="up"><h1>Privacy <span className="gradient-text">Policy</span></h1></FadeIn>
        <FadeIn direction="up" delay={0.15}><p>Your privacy matters to us.</p></FadeIn>
      </div>

      <div className="legal-body">
        <div className="legal-container">
          <FadeIn direction="up">
            <span className="legal-updated"><i className="fas fa-calendar-alt" style={{ marginRight: '6px' }}></i>Last updated: April 2026</span>
          </FadeIn>

          {sections.map((section, index) => (
            <FadeIn key={index} direction="up" delay={0.05 * index}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              {index < sections.length - 1 && <hr className="legal-divider" />}
            </FadeIn>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
