import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'Contact' },
  description: 'Book a free tech review with Senyo Solutions for IT support, web services, or general inquiries. Serving Long Island, New York, and New Jersey.',
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
      <main id="main-content" style={{ padding: '130px 0 80px' }}>
        <section className="container" style={{ maxWidth: 760 }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Contact us Now</p>
          <h1 className="section-title">Book a Free Tech Review</h1>
          <p className="section-subtitle">
            Tell us what you need and we’ll recommend the right next step for your practice.
          </p>

          <form className="contact-form" action="https://formsubmit.co/khixarn@gmail.com" method="POST" aria-label="Contact form">
            <input type="hidden" name="_subject" value="New Contact Form Submission from Senyo Solutions" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://senyosolutions.com/thank-you" />

            <div className="form-group">
              <label htmlFor="practice-name" className="sr-only">Practice or company name</label>
              <input id="practice-name" type="text" name="Practice Name" placeholder="Practice / Company Name" autoComplete="organization" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-person" className="sr-only">Your name</label>
              <input id="contact-person" type="text" name="Contact Person" placeholder="Your Name" autoComplete="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" type="email" name="email" placeholder="Email Address" autoComplete="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone-number" className="sr-only">Phone number</label>
              <input id="phone-number" type="tel" name="Phone Number" placeholder="Phone Number" autoComplete="tel" required />
            </div>
            <div className="form-group">
              <label htmlFor="service-inquiry" className="sr-only">Service inquiry type</label>
              <select id="service-inquiry" name="Service Inquiry" required>
                <option value="">Select an Inquiry Type</option>
                <option value="IT Support">IT Support</option>
                <option value="Web Services">Web Services</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="Message" placeholder="Tell us about your current setup and what help you need..." rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <i className="fas fa-paper-plane" aria-hidden="true"></i> Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
