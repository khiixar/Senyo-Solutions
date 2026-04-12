import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type ServicePageProps = {
  serviceName: string;
  headline: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
  slug: string;
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
      <main style={{ paddingTop: 120, paddingBottom: 80 }}>
        <section className="container" style={{ maxWidth: 980 }}>
          <p className="section-eyebrow">Service</p>
          <h1 className="section-title" style={{ marginBottom: 16 }}>
            {headline}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: 760, marginBottom: 24 }}>
            {intro}
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/#contact">
              Request a Consultation
            </Link>
            <Link className="btn btn-outline" href="/services">
              View All Services
            </Link>
          </div>
        </section>

        <section className="container" style={{ maxWidth: 980, marginTop: 56 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <article className="service-detailed-card">
              <div className="service-detailed-content">
                <h2>What You Get</h2>
                <ul>
                  {deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
            <article className="service-detailed-card">
              <div className="service-detailed-content">
                <h2>Business Impact</h2>
                <ul>
                  {benefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="container" style={{ maxWidth: 980, marginTop: 56 }}>
          <div className="work-cta" style={{ textAlign: 'left' }}>
            <h3>Looking for a complete growth stack?</h3>
            <p>
              Combine {serviceName.toLowerCase()} with our SEO, hosting, digital marketing, and analytics services for faster and more predictable growth.
            </p>
            <Link className="btn btn-primary" href="/services">
              Explore Related Services
            </Link>
          </div>
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
