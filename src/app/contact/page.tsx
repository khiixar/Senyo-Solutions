import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Contact Senyo Solutions | IT Support & MSP Services in Long Island, NY' },
  description: 'Contact Senyo Solutions to book a free tech review for managed IT support, MSP services, or web services. Serving Long Island, New York, and New Jersey.',
  alternates: {
    canonical: 'https://senyosolutions.com/contact',
  },
  openGraph: {
    title: 'Contact',
    description: 'Book a free tech review with Senyo Solutions for IT support, web services, or general inquiries.',
    url: 'https://senyosolutions.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="page-hero">
        <div className="container">
          <h1 className="display-serif page-hero-title">
            Let's grab fifteen minutes. <span className="serif-italic">On us.</span>
          </h1>
          <p className="section-lede page-hero-lede">
            Tell us what's happening — a slow computer, a mystery invoice from your last MSP, a website that looks like 2012. We'll listen, ask a few questions, and tell you honestly what we'd do about it.
          </p>
        </div>
      </main>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-form-card">
            <span className="tape tape--blue" aria-hidden="true"></span>
            <h2 className="section-title-serif" style={{ marginTop: 0, marginBottom: 20 }}>
              Tell us <span className="serif-italic">a little about your setup.</span>
            </h2>

            <form
              className="contact-form"
              action="https://formsubmit.co/khixarn@gmail.com"
              method="POST"
              aria-label="Contact form"
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission from Senyo Solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://senyosolutions.com/thank-you" />

              <div className="form-group">
                <label htmlFor="practice-name">Practice or company name</label>
                <input id="practice-name" type="text" name="Practice Name" placeholder="Smith Family Dentistry, Kramer &amp; Co, etc." autoComplete="organization" required />
              </div>
              <div className="form-group">
                <label htmlFor="contact-person">Your name</label>
                <input id="contact-person" type="text" name="Contact Person" placeholder="What should we call you?" autoComplete="name" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email-address">Email</label>
                  <input id="email-address" type="email" name="email" placeholder="you@yourpractice.com" autoComplete="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone</label>
                  <input id="phone-number" type="tel" name="Phone Number" placeholder="(555) 123-4567" autoComplete="tel" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service-inquiry">What's on your mind?</label>
                <select id="service-inquiry" name="Service Inquiry" required>
                  <option value="">Pick one</option>
                  <option value="IT Support">IT support / managed IT</option>
                  <option value="Web Services">A website or hosting thing</option>
                  <option value="General">Something else</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">The short version</label>
                <textarea id="message" name="Message" placeholder="What's slow, broken, weird, or overdue? Doesn't have to be perfect — just enough for us to know what to ask about." rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-hand contact-submit">
                Send it over
              </button>
              <p className="form-fine">
                We reply within one business day. Usually much sooner. No auto-responders, no "your ticket has been received."
              </p>
            </form>
          </div>

          <aside className="contact-aside">
            <div className="sticker-card sticker-card--navy tilt-right">
              <p className="kicker" style={{ marginBottom: 8 }}>Or, the old-fashioned way</p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 14px', color: 'var(--paper)' }}>
                Prefer to call?
              </h3>
              <p style={{ color: 'rgba(246,239,225,0.86)', fontFamily: 'var(--font-sans)', lineHeight: 1.6, marginBottom: 18 }}>
                A person picks up. Not a phone tree, not a &ldquo;press 4 for billing.&rdquo; Just us.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontFamily: 'var(--font-sans)' }}>
                <a href="tel:+15167077351" style={{ color: 'var(--highlight)', textDecoration: 'none', fontSize: '1.15rem', fontWeight: 600 }}>
                  <i className="fas fa-phone" style={{ marginRight: 10 }}></i>(516) 707-7351
                </a>
                <a href="mailto:contact@senyosolutions.com" style={{ color: 'rgba(246,239,225,0.9)', textDecoration: 'none' }}>
                  <i className="fas fa-envelope" style={{ marginRight: 10 }}></i>contact@senyosolutions.com
                </a>
                <p style={{ color: 'rgba(246,239,225,0.7)', fontSize: '0.9rem', margin: '4px 0 0' }}>
                  <i className="fas fa-location-dot" style={{ marginRight: 10 }}></i>Long Island, NY &mdash; serving LI, NYC, NJ, CT &amp; Westchester
                </p>
              </div>
            </div>

            <div className="hand-note tilt-left">
              <p className="hand" style={{ fontSize: '1.35rem', color: 'var(--accent-warm)', margin: '0 0 8px' }}>
                p.s.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--ink-soft)', fontSize: '0.98rem', lineHeight: 1.55, margin: 0 }}>
                Already have an MSP but something feels off? We&rsquo;ll give you a second opinion &mdash; free, no pitch. Just an honest look.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}
