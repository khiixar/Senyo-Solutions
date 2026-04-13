import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export const metadata: Metadata = {
  title: 'FAQ | Senyo Solutions',
  description:
    'Find answers to common questions about Senyo Solutions services, timelines, support, and how to get started.',
  alternates: {
    canonical: 'https://senyosolutions.com/faq',
  },
  openGraph: {
    title: 'FAQ | Senyo Solutions',
    description:
      'Frequently asked questions about Senyo Solutions web design, SEO, hosting, and digital marketing services.',
    url: 'https://senyosolutions.com/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main style={{ padding: '120px 20px 100px' }}>
        <section className="container" style={{ maxWidth: 820, textAlign: 'center', marginBottom: 48 }}>
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

        <section className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'grid', gap: 16 }}>
            {faqItems.map((item) => (
              <article
                key={item.question}
                style={{
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card)',
                  padding: 24,
                }}
              >
                <h2 style={{ fontSize: '1.08rem', margin: '0 0 10px' }}>{item.question}</h2>
                <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
