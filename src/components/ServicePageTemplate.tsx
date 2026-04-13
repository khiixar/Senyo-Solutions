'use client';

import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AnimatedGradientBg, MorphingBlob, ParticleField } from '@/components/MotionWrapper';

type ServicePageProps = {
  serviceName: string;
  headline: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
  slug: string;
};

const cardEntrance = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay },
  }),
};

export default function ServicePageTemplate({
  serviceName,
  headline,
  intro,
  benefits,
  deliverables,
  slug,
}: ServicePageProps) {
  const serviceUrl = `https://senyosolutions.com/services/${slug}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}#service`,
    name: serviceName,
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      '@id': 'https://senyosolutions.com/#organization',
      name: 'Senyo Solutions',
      url: 'https://senyosolutions.com',
    },
    areaServed: 'US',
    url: serviceUrl,
    description: intro,
  };

  return (
    <>
      <Navbar />

      <style jsx>{`
        .service-page-main {
          padding-top: 120px;
          padding-bottom: 80px;
          position: relative;
          overflow: hidden;
        }
        .service-page-main :global(.container) {
          position: relative;
          z-index: 1;
        }
        .service-hero {
          max-width: 980px;
          position: relative;
        }
        .service-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
        .service-list-item {
          transition: transform 0.22s ease, color 0.22s ease;
        }
        .service-list-item:hover {
          transform: translateX(4px);
          color: #d4d4d8;
        }
        .service-hero-accent {
          width: 72px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          margin-bottom: 20px;
        }
        .service-cta-shell {
          text-align: left;
          overflow: hidden;
        }
      `}</style>

      <main className="service-page-main">
        <ParticleField count={18} />
        <AnimatedGradientBg />
        <MorphingBlob className="section-blob section-blob-left" color="rgba(37,99,235,0.05)" size={320} />
        <MorphingBlob className="section-blob section-blob-right" color="rgba(6,182,212,0.05)" size={290} />

        <section className="container service-hero">
          <motion.div
            className="service-hero-accent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          />
          <motion.p
            className="section-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.08 }}
          >
            Service
          </motion.p>
          <motion.h1
            className="section-title"
            style={{ marginBottom: 16, textAlign: 'left' }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            {headline}
          </motion.h1>
          <motion.p
            className="section-subtitle"
            style={{ maxWidth: 760, marginBottom: 24, textAlign: 'left', marginLeft: 0 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
          >
            {intro}
          </motion.p>
          <motion.div
            className="service-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link className="btn btn-primary" href="/#contact">
                Request a Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link className="btn btn-outline" href="/services">
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="container" style={{ maxWidth: 980, marginTop: 56 }}>
          <div className="service-grid">
            <motion.article
              className="service-detailed-card"
              variants={cardEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.08}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
            >
              <div className="service-detailed-content">
                <h2>What You Get</h2>
                <ul>
                  {deliverables.map((item, idx) => (
                    <motion.li
                      className="service-list-item"
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.08 + idx * 0.05, duration: 0.25 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>

            <motion.article
              className="service-detailed-card"
              variants={cardEntrance}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={0.15}
              whileHover={{ y: -4, transition: { duration: 0.22 } }}
            >
              <div className="service-detailed-content">
                <h2>Business Impact</h2>
                <ul>
                  {benefits.map((item, idx) => (
                    <motion.li
                      className="service-list-item"
                      key={item}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + idx * 0.05, duration: 0.25 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </div>
        </section>

        <section className="container" style={{ maxWidth: 980, marginTop: 56 }}>
          <motion.div
            className="work-cta service-cta-shell"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
            whileHover={{ borderColor: 'rgba(37,99,235,0.3)' }}
          >
            <h3>Looking for a complete growth stack?</h3>
            <p>
              Combine {serviceName.toLowerCase()} with our SEO, hosting, digital marketing, and analytics services for faster and more predictable growth.
            </p>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
              <Link className="btn btn-primary" href="/services">
                Explore Related Services
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Script
        id={`service-jsonld-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Footer />
    </>
  );
}
