'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqItems = [
  {
    question: 'Who is Senyo Solutions best for?',
    answer:
      'Small businesses, professional practices, and creative shops that need dependable IT without the enterprise runaround. Think 5 to 50 people, one or two locations, and better things to do than reboot a router.',
  },
  {
    question: 'Do you require long-term contracts?',
    answer:
      'Nope. Everything is month-to-month. If we&rsquo;re not earning it, you can walk. That&rsquo;s the whole deal.',
  },
  {
    question: 'Do you provide on-site support?',
    answer:
      'Yes. On-site is an add-on billed hourly, and a few hours are baked into the Premium plan each month. Most days we solve things remotely before the coffee gets cold.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'Long Island, NYC, New Jersey, Connecticut, and Westchester NY. Remote-first, on-site when it matters.',
  },
  {
    question: 'Do you offer website services too?',
    answer:
      'We do. Website design, hosting, and maintenance under the same roof as your IT. One number to call, one invoice to open.',
  },
];

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />

      <main id="main-content">
        <section className="page-hero">
          <div className="container" style={{ maxWidth: 820 }}>
            <p className="kicker">Fair questions</p>
            <h1 className="page-hero-title">
              The stuff people <span className="serif-italic">actually</span> ask us.
            </h1>
            <p className="page-hero-lede">
              Short answers, no marketing fog. If yours isn&rsquo;t here, just ask.
            </p>
          </div>
        </section>

        <section className="container" style={{ maxWidth: 820, paddingBottom: 96 }}>
          <div className="faq-studio-list">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <article key={item.question} className={`faq-studio-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="faq-studio-q"
                  >
                    <span className="faq-studio-q-text">{item.question}</span>
                    <span className={`faq-studio-toggle ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                      {isOpen ? '\u2013' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="faq-studio-a" dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>

          <div className="sticker-card tilt-none" style={{ marginTop: 48, textAlign: 'center', padding: '32px 28px' }}>
            <p className="hand" style={{ fontSize: '1.3rem', color: 'var(--primary-ink)', marginBottom: 6 }}>P.S.</p>
            <p style={{ margin: '0 0 20px', color: 'var(--ink)', opacity: 0.82 }}>
              Still got a question? Send it over &mdash; we&rsquo;ll write back like a person.
            </p>
            <Link className="btn-hand btn-hand--primary" href="/contact">Ask us</Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
