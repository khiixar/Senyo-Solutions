import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Thank You - Senyo Solutions' };

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <section className="thank-you-section">
        <div className="container">
          <div className="thank-you-content">
            <div className="thank-you-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h1>Thank You!</h1>
            <p className="thank-you-message">
              Your message has been sent successfully. We&apos;ve received your inquiry and will get back to you within 24 hours.
            </p>
            <div className="thank-you-details">
              <div className="detail-item">
                <i className="fas fa-envelope"></i>
                <span>We&apos;ll respond to your email address</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="detail-item">
                <i className="fas fa-phone"></i>
                <span>Urgent? Call us at (516) 707-7351</span>
              </div>
            </div>
            <div className="thank-you-actions">
              <Link href="/" className="btn btn-primary">Back to Home</Link>
              <Link href="/services" className="btn btn-outline">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
