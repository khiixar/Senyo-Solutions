'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, AnimatedGradientBg, MorphingBlob } from '@/components/MotionWrapper';

const sections = [
  { title: '1. Acceptance of Terms', content: 'By accessing or using services provided by Senyo Solutions (“we,” “us,” or “our”), you agree to these Terms of Service.' },
  { title: '2. Services', content: 'Senyo Solutions provides managed IT support, help desk services, device/security oversight, and complementary web services. Service scope and deliverables are defined in your plan, quote, or invoice.' },
  { title: '3. Billing and Payment', content: 'Monthly plans are billed in advance unless otherwise stated. Add-ons, emergency support, and project work are billed separately as quoted.' },
  { title: '4. Month-to-Month Service Model', content: 'Unless otherwise agreed in writing, services are month-to-month. Either party may stop recurring service with reasonable written notice.' },
  { title: '5. On-Site and Emergency Support', content: 'On-site work is billed separately unless explicitly included in your plan. Emergency or after-hours support may carry premium rates.' },
  { title: '6. Client Responsibilities', content: 'You agree to provide timely access, accurate account information, and necessary approvals so services can be delivered securely and effectively.' },
  { title: '7. Security and Third-Party Platforms', content: 'We follow practical security best practices, but uninterrupted service cannot be guaranteed due to reliance on third-party platforms, internet providers, and cloud services.' },
  { title: '8. Limitation of Liability', content: 'To the fullest extent allowed by law, Senyo Solutions is not liable for indirect or consequential damages. Total liability is limited to fees paid for the affected service period.' },
  { title: '9. Governing Law', content: 'These terms are governed by the laws of the State of New York. Disputes are resolved in the appropriate courts of Nassau County, New York.' },
  { title: '10. Contact', content: 'Questions about these terms: contact@senyosolutions.com | (516) 707-7351' },
];

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <div className="legal-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(37,99,235,0.05)" size={350} position={{ top: '-10%', right: '-5%' }} />
        <FadeIn direction="up"><h1>Terms of <span className="gradient-text">Service</span></h1></FadeIn>
        <FadeIn direction="up" delay={0.15}><p>Please read these terms before using our services.</p></FadeIn>
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
