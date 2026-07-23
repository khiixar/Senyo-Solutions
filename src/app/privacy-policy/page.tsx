'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/MotionWrapper';

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

      <main id="main-content">
        <section className="page-hero">
          <div className="container" style={{ maxWidth: 820 }}>
            <p className="kicker">The fine print</p>
            <h1 className="page-hero-title">
              Privacy <span className="serif-italic">Policy</span>
            </h1>
            <p className="page-hero-lede">Plain-english version: we don&rsquo;t sell your data. Ever.</p>
          </div>
        </section>

        <section className="container" style={{ maxWidth: 780, paddingBottom: 96 }}>
          <div className="legal-prose sticker-card tilt-none" style={{ padding: '40px 36px' }}>
            <FadeIn direction="up">
              <p className="legal-updated-hand">Last updated: April 2026</p>
            </FadeIn>
            {sections.map((section, index) => (
              <FadeIn key={index} direction="up" delay={0.04 * index}>
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
