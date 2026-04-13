'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedGradientBg, MorphingBlob, ParticleField } from '@/components/MotionWrapper';

const faqItems = [
  {
    question: 'What services does Senyo Solutions provide?',
    answer:
      'We provide web design, SEO optimization, managed hosting, digital marketing, and analytics/reporting services tailored to business growth goals.',
  },
  {
    question: 'How long does a typical website project take?',
    answer:
      'Most websites are completed in about 2–4 weeks, depending on project scope, required features, and how quickly content/feedback is provided.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. We offer ongoing support and maintenance options, including updates, performance checks, and technical assistance after your site goes live.',
  },
  {
    question: 'Can you improve my current website instead of rebuilding it?',
    answer:
      'Absolutely. We can audit your current website and recommend targeted improvements for design, speed, SEO, and conversion performance.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Start by contacting us through the form on our homepage. We will schedule a discovery call to understand your goals and recommend the best next steps.',
  },
];

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      <main style={{ padding: '120px 20px 100px', position: 'relative', overflow: 'hidden' }}>
        <ParticleField count={20} />
        <AnimatedGradientBg />
        <MorphingBlob className="section-blob section-blob-left" color="rgba(37,99,235,0.05)" size={320} />
        <MorphingBlob className="section-blob section-blob-right" color="rgba(6,182,212,0.05)" size={300} />

        <section className="container" style={{ maxWidth: 820, textAlign: 'center', marginBottom: 48, position: 'relative', zIndex: 1 }}>
          <p className="section-eyebrow">Support</p>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16 }}>Frequently Asked Questions</h1>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              margin: '0 auto',
              maxWidth: 620,
            }}
          >
            Quick answers to common questions about our services, timelines, and process.
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
