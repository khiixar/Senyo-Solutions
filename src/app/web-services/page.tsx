import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Web Services | Senyo Solutions',
  description: 'Website design, hosting, maintenance, and domain management for small practices as a complementary Senyo Solutions service.',
  alternates: {
    canonical: 'https://senyosolutions.com/web-services',
  },
  openGraph: {
    title: 'Web Services | Senyo Solutions',
    description: 'Website design, hosting, maintenance, and domain management for small practices as a complementary Senyo Solutions service.',
    url: 'https://senyosolutions.com/web-services',
    type: 'website',
  },
};

export default function WebServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '130px 0 80px' }}>
        <section className="container" style={{ maxWidth: 980 }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Web Services</p>
          <h1 className="section-title">Website Design & Hosting</h1>
          <p className="section-subtitle">
            We handle your tech, including your online presence. Web services are offered as a complementary value-add to our MSP support.
          </p>

          <div className="services-detailed-grid">
            <article className="service-detailed-card">
              <div className="service-detailed-content">
                <h3>Website Design & Development</h3>
                <ul>
                  <li>Professional website design for businesses and professionals</li>
                  <li>Mobile-friendly development and performance optimization</li>
                  <li>Secure contact form and conversion-focused page structure</li>
                </ul>
              </div>
            </article>

            <article className="service-detailed-card">
              <div className="service-detailed-content">
                <h3>Hosting & Maintenance</h3>
                <ul>
                  <li>Managed hosting plans</li>
                  <li>Website updates and ongoing support</li>
                  <li>Domain setup and management</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="work-cta" style={{ marginTop: 28 }}>
            <h3>Pricing</h3>
            <p>Web service projects are quoted based on scope. Ask for a custom quote or starter package options.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">Contact for Quote</Link>
              <Link href="/services" className="btn btn-outline">View IT Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
