'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, AnimatedGradientBg, MorphingBlob, AnimatedDivider } from '@/components/MotionWrapper';

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="thank-you-section" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Animated background */}
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(37,99,235,0.06)" size={400} position={{ top: '-10%', right: '-10%' }} />
        <MorphingBlob color="rgba(16,185,129,0.05)" size={300} position={{ bottom: '-5%', left: '-5%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="thank-you-content">
            <ScaleIn>
              <div className="thank-you-icon">
                <i className="fas fa-check-circle"></i>
              </div>
            </ScaleIn>

            <FadeIn direction="up" delay={0.2}>
              <h1>Thank You!</h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <p className="thank-you-message">
                Your message has been sent successfully. We&apos;ve received your inquiry and will get back to you within 24 hours.
              </p>
            </FadeIn>

            <StaggerContainer>
              <div className="thank-you-details">
                <StaggerItem>
                  <motion.div className="detail-item" whileHover={{ x: 6, transition: { duration: 0.2 } }}>
                    <i className="fas fa-envelope"></i>
                    <span>We&apos;ll respond to your email address</span>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div className="detail-item" whileHover={{ x: 6, transition: { duration: 0.2 } }}>
                    <i className="fas fa-clock"></i>
                    <span>Response time: Within 24 hours</span>
                  </motion.div>
                </StaggerItem>
                <StaggerItem>
                  <motion.div className="detail-item" whileHover={{ x: 6, transition: { duration: 0.2 } }}>
                    <i className="fas fa-phone"></i>
                    <span>Urgent? Call us at (516) 707-7351</span>
                  </motion.div>
                </StaggerItem>
              </div>
            </StaggerContainer>

            <FadeIn direction="up" delay={0.6}>
              <div className="thank-you-actions">
                <motion.div style={{ display: 'inline-block' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/" className="btn btn-primary">Back to Home</Link>
                </motion.div>
                <motion.div style={{ display: 'inline-block' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/services" className="btn btn-outline">View Our Services</Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
