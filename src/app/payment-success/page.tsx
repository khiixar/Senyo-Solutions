'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn, ScaleIn, AnimatedGradientBg, MorphingBlob } from '@/components/MotionWrapper';

export default function PaymentSuccessPage() {
  return (
    <>
      <Navbar />

      <style jsx global>{`
        .success-page {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          padding: 120px 20px 60px;
          position: relative; overflow: hidden;
        }
        .success-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: 56px 48px;
          max-width: 560px; width: 100%;
          text-align: center;
          position: relative; z-index: 1;
        }
        .success-icon {
          width: 80px; height: 80px;
          background: rgba(16,185,129,0.12);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 28px;
          font-size: 2.2rem; color: var(--success);
        }
        .success-card h1 {
          font-family: 'Archivo', sans-serif;
          font-size: 2rem; font-weight: 700;
          color: var(--text-primary); margin-bottom: 12px;
        }
        .success-card .subtitle {
          color: var(--text-secondary);
          font-size: 1rem; line-height: 1.7; margin-bottom: 36px;
        }
        .invoice-summary {
          background: rgba(37,99,235,0.05);
          border: 1px solid rgba(37,99,235,0.18);
          border-radius: var(--radius-md);
          padding: 24px 28px; margin-bottom: 32px; text-align: left;
        }
        .invoice-summary .row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(63,63,70,0.15);
          font-size: 0.9rem;
        }
        .invoice-summary .row:last-child { border-bottom: none; }
        .invoice-summary .row .label { color: var(--text-muted); }
        .invoice-summary .row .value { color: var(--text-primary); font-weight: 500; }
        .invoice-summary .row .value.amount { color: var(--success); font-size: 1.1rem; font-weight: 700; }
        .email-status {
          font-size: 0.82rem; color: var(--text-muted);
          margin-bottom: 28px;
          display: flex; align-items: center; justify-content: center; gap: 6px;
        }
        .email-status i { color: var(--success); }
        .btn-home {
          display: inline-block; padding: 14px 32px;
          background: var(--primary); color: #fff;
          border-radius: var(--radius-sm);
          font-family: 'Archivo', sans-serif;
          font-weight: 600; font-size: 0.95rem;
          text-decoration: none;
          transition: all var(--transition-base);
        }
        .btn-home:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.35);
        }
        @media (max-width: 600px) { .success-card { padding: 36px 24px; } }
      `}</style>

      <div className="success-page">
        <AnimatedGradientBg />
        <MorphingBlob color="rgba(16,185,129,0.06)" size={400} position={{ top: '-10%', right: '-10%' }} />
        <MorphingBlob color="rgba(37,99,235,0.05)" size={350} position={{ bottom: '-8%', left: '-8%' }} />

        <ScaleIn>
          <div className="success-card">
            <motion.div
              className="success-icon"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            >
              <i className="fas fa-check"></i>
            </motion.div>

            <FadeIn direction="up" delay={0.3}>
              <h1>Payment <span className="gradient-text">Received!</span></h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <p className="subtitle">Your payment was processed successfully! A receipt has been sent to your email.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="invoice-summary" id="invoiceSummary">
                <div className="row">
                  <span className="label">Invoice Reference</span>
                  <span className="value" id="summaryRef">&mdash;</span>
                </div>
                <div className="row">
                  <span className="label">Amount Paid</span>
                  <span className="value amount" id="summaryAmount">&mdash;</span>
                </div>
                <div className="row">
                  <span className="label">Status</span>
                  <span className="value" style={{ color: 'var(--success)' }}><i className="fas fa-check-circle" style={{ marginRight: 5 }}></i>Paid via Stripe</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="email-status" id="emailStatus">
                <i className="fas fa-spinner fa-spin"></i> Working on it...
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.7}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                <Link href="/" className="btn-home">Back to Home</Link>
              </motion.div>
            </FadeIn>
          </div>
        </ScaleIn>
      </div>

      <Footer />

      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
      <script dangerouslySetInnerHTML={{ __html: `
        var EMAILJS_PUBLIC_KEY  = '1eGs7DHUF7ADU99Vv';
        var EMAILJS_SERVICE_ID  = 'service_2ipwzwa';
        var EMAILJS_TEMPLATE_ID = 'template_1o3zjf9';

        emailjs.init(EMAILJS_PUBLIC_KEY);

        var amount      = localStorage.getItem('invoice_amount');
        var ref         = localStorage.getItem('invoice_ref');
        var date        = localStorage.getItem('invoice_date');
        var client_name = localStorage.getItem('client_name');

        document.getElementById('summaryRef').textContent    = ref    || '\u2014';
        document.getElementById('summaryAmount').textContent = amount ? '$' + amount : '\u2014';

        if (amount) {
          emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
            invoice_ref    : ref    || 'N/A',
            invoice_amount : amount,
            client_name    : client_name || 'N/A',
            invoice_date   : date   || new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })
          })
          .then(function() {
            document.getElementById('emailStatus').innerHTML = '<i class="fas fa-check-circle"></i> Payment Successfully Processed';
            localStorage.removeItem('invoice_amount');
            localStorage.removeItem('invoice_ref');
            localStorage.removeItem('invoice_date');
            localStorage.removeItem('client_name');
          })
          .catch(function(err) {
            document.getElementById('emailStatus').innerHTML = '<i class="fas fa-exclamation-circle" style="color:#f87171;"></i> Notification failed: ' + (err.text || err.message || 'Unknown error');
          });
        } else {
          document.getElementById('emailStatus').innerHTML = '<i class="fas fa-info-circle"></i> No invoice data found';
        }
      `}} />
    </>
  );
}
