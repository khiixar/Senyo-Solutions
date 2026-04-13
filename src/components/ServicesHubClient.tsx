'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FadeIn,
  ScaleIn,
  AnimatedGradientBg,
  ScrollProgressBar,
  ParticleField,
  MorphingBlob,
  AnimatedLine,
  MagneticHover,
  PulseEffect,
} from '@/components/MotionWrapper';

export default function ServicesPage() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />

      <style jsx>{`
        .packages-hero {
          min-height: 58vh;
          padding: 140px 20px 100px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .packages-hero::before {
          content: '';
          position: absolute;
          top: -30%;
          left: 50%;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle at center, rgba(37, 99, 235, 0.08), transparent 65%);
          transform: translateX(-50%);
          pointer-events: none;
        }

        .services-cta-section {
          padding: 0 20px 100px;
        }

        .services-cta {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 60px 40px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.08), rgba(6, 182, 212, 0.04));
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: var(--radius-xl);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .packages-hero {
            min-height: auto;
            padding: 118px 16px 80px;
          }

          .services-cta-section {
            padding: 0 16px 84px;
          }

          .services-cta {
            padding: 48px 24px;
          }
        }
      `}</style>

      <section className="packages-hero">
        <ParticleField count={20} />
        <AnimatedGradientBg />
        <MorphingBlob className="hero-blob-1" color="rgba(37,99,235,0.06)" size={300} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Services
          </motion.p>

          <motion.h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Coming Soon
          </motion.h1>

          <motion.p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              maxWidth: 560,
              margin: '0 auto',
            }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            We&apos;re refreshing this page. Our full service offerings will be available here soon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ marginTop: 24 }}
          >
            <AnimatedLine />
          </motion.div>
        </div>
      </section>

      <section className="services-cta-section">
        <ScaleIn>
          <div className="services-cta">
            <ParticleField count={10} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: 12,
                }}
              >
                Need Help Right Now?
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 28,
                  fontSize: '1rem',
                  maxWidth: 500,
                  margin: '0 auto 28px',
                }}
              >
                While we finalize our service pages, you can still reach out for a free consultation.
              </p>
              <FadeIn direction="up" delay={0.1}>
                <MagneticHover strength={0.15}>
                  <PulseEffect>
                    <Link href="/#contact" className="btn btn-primary btn-large btn-shimmer">
                      Start Your Project
                      <span className="btn-shine" />
                    </Link>
                  </PulseEffect>
                </MagneticHover>
              </FadeIn>
            </div>
          </div>
        </ScaleIn>
      </section>

      <Footer />
    </>
  );
}
