import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact | Senyo Solutions',
  description: 'Book a free tech review with Senyo Solutions for IT support, web services, or general inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '130px 0 80px' }}>
        <section className="container" style={{ maxWidth: 760 }}>
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Contact</p>
          <h1 className="section-title">Book a Free Tech Review</h1>
          <p className="section-subtitle">
            Tell us what you need and we’ll recommend the right next step for your practice.
          </p>

          <form className="contact-form" action="https://formsubmit.co/khixarn@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Contact Form Submission from Senyo Solutions" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://senyosolutions.com/thank-you" />

            <div className="form-group"><input type="text" name="Practice Name" placeholder="Practice / Company Name" required /></div>
            <div className="form-group"><input type="text" name="Contact Person" placeholder="Your Name" required /></div>
            <div className="form-group"><input type="email" name="email" placeholder="Email Address" required /></div>
            <div className="form-group"><input type="tel" name="Phone Number" placeholder="Phone Number" required /></div>
            <div className="form-group">
              <select name="Service Inquiry" required aria-label="Service Inquiry">
                <option value="">Select an Inquiry Type</option>
                <option value="IT Support">IT Support</option>
                <option value="Web Services">Web Services</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="form-group">
              <textarea name="Message" placeholder="Tell us about your current setup and what help you need..." rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
