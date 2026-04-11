import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = { title: 'Request Submitted - Senyo Solutions' };

export default function ClientThankYouPage() {
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
              Your request has been submitted successfully. A member of our team will be in touch as soon as possible.
            </p>
            <div className="thank-you-actions">
              <Link href="/client-portal" className="btn btn-primary">Back to Client Portal</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
