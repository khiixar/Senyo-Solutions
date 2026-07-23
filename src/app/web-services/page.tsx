import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Web Services' },
  description: 'Website design, hosting, maintenance, and domain management for small practices as a complementary Senyo Solutions service.',
  alternates: {
    canonical: 'https://senyosolutions.com/web-services',
  },
  openGraph: {
    title: 'Web Services',
    description: 'Website design, hosting, maintenance, and domain management for small practices as a complementary Senyo Solutions service.',
    url: 'https://senyosolutions.com/web-services',
    type: 'website',
  },
};

export default function WebServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="page-hero">
        <div className="container">
          <p className="kicker">The web thing</p>
          <h1 className="display-serif page-hero-title">
            A website that <span className="serif-italic">actually feels like yours.</span>
          </h1>
          <p className="section-lede page-hero-lede">
            We build honest little websites — the kind that load fast, read clearly, and don't make you cringe when someone Googles you. Then we host them and keep them tidy.
          </p>
        </div>
      </main>

      <section className="plans-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="plans-grid-studio" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <article className="plan-studio-card tilt-left">
              <h3 className="plan-studio-name">Design &amp; build</h3>
              <p className="plan-studio-who">Fresh sites, small refreshes, or full re-dos.</p>
              <ul className="plan-studio-list">
                <li>A site that reads like a person wrote it</li>
                <li>Works on phones without you asking</li>
                <li>Contact forms that don't lose messages</li>
                <li>Pages built to actually convert, not decorate</li>
              </ul>
            </article>

            <article className="plan-studio-card tilt-right">
              <h3 className="plan-studio-name">Host &amp; maintain</h3>
              <p className="plan-studio-who">The quiet, ongoing part.</p>
              <ul className="plan-studio-list">
                <li>Managed hosting — we deal with the server nonsense</li>
                <li>Little tweaks, copy changes, new pages</li>
                <li>Domains &amp; DNS handled properly</li>
                <li>Backups &amp; SSL you don't have to think about</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="web-cta-section">
        <div className="container">
          <div className="web-cta-card tilt-left">
            <span className="tape" aria-hidden="true"></span>
            <p className="kicker">Pricing</p>
            <h3 className="web-cta-title">We quote once we actually see it.</h3>
            <p className="web-cta-body">
              Web projects are all different sizes. Show us what you have (or what you wish you had) and we'll come back with a real number — not a sales pitch.
            </p>
            <div className="hero-editorial-ctas">
              <Link href="/contact" className="btn-hand">Ask for a quote</Link>
              <Link href="/services" className="btn-hand btn-hand--paper">See IT services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
