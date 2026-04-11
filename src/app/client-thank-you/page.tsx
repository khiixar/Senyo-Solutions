'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, ScaleIn, AnimatedGradientBg, MorphingBlob } from '@/components/MotionWrapper';

export default function ClientThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="thank-you-section" style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(37,99,235,0.06)" size={400} position={{ top: '-10%', right: '-10%' }} />
        <MorphingBlob color="rgba(168,85,247,0.05)" size={300} position={{ bottom: '-5%', left: '-5%' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="thank-you-content">
            <ScaleIn>
              <motion.div
                className="thank-you-icon"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <i className="fas fa-check-circle"></i>
              </motion.div>
            </ScaleIn>

            <FadeIn direction="up" delay={0.2}>
              <h1>Thank You!</h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.35}>
              <p className="thank-you-message">
                Your request has been submitted successfully. A member of our team will be in touch as soon as possible.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="thank-you-actions">
                <motion.div style={{ display: 'inline-block' }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/client-portal" className="btn btn-primary">Back to Client Portal</Link>
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
