'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedGradientBg, MorphingBlob, ParticleField } from '@/components/MotionWrapper';

const faqItems = [
  {
    question: 'Who is Senyo Solutions best for?',
    answer:
      'We are built for small businesses, startups, and professional service firms that need dependable IT support without enterprise complexity. Whether you run a law office, creative agency, consulting firm, or local business, we have you covered.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'No. Our plans are month-to-month so you can get professional support without being locked into a long agreement.',
  },
  {
    question: 'Do you provide on-site support?',
    answer:
      'Yes. On-site work is available as an add-on (hourly) and limited on-site time is included in the Premium plan.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Long Island, broader New York State, and New Jersey with a mix of remote-first support and local on-site assistance when needed.',
  },
  {
    question: 'Do you offer website services too?',
    answer:
      'Yes. We offer website design, hosting, and maintenance as a service so your practice can keep both IT and online presence under one trusted partner.',
  },
];

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      <main id="main-content" style={{ padding: '120px 20px 100px', position: 'relative', overflow: 'hidden' }}>
        <ParticleField count={20} />
        <AnimatedGradientBg />
        <MorphingBlob className="section-blob section-blob-left" color="rgba(37,99,235,0.05)" size={320} />
        <MorphingBlob className="section-blob section-blob-right" color="rgba(6,182,212,0.05)" size={300} />

        <section className="container" style={{ maxWidth: 820, textAlign: 'center', marginBottom: 48, position: 'relative', zIndex: 1 }}>
          <p className="section-eyebrow">FAQ</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Frequently Asked Questions</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 auto', maxWidth: 620 }}>
            Common questions about our MSP plans, support model, and service area.
          </p>
        </section>

        <section className="container" style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gap: 14 }}>
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={item.question}
                  style={{
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-card)',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 0,
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      textAlign: 'left',
                      padding: '20px 22px',
                      cursor: 'pointer',
                    }}
                  >
                    <h2 style={{ fontSize: '1.08rem', margin: 0 }}>{item.question}</h2>
                    <span
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        border: '1px solid var(--border-light)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary-light)',
                        fontSize: '1.2rem',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 180ms ease',
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <p style={{ margin: '0 22px 20px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
