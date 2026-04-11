'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function PaymentSuccessPage() {
  return (
    <>
      <Navbar />

      <style jsx global>{`
        .success-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 120px 20px 60px; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%); }
        .success-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 56px 48px; max-width: 560px; width: 100%; text-align: center; }
        .success-icon { width: 80px; height: 80px; background: rgba(34, 197, 94, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; font-size: 2.2rem; color: #22c55e; }
        .success-card h1 { font-size: 2rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
        .success-card .subtitle { color: var(--text-secondary); font-size: 1rem; line-height: 1.6; margin-bottom: 36px; }
        .invoice-summary { background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.25); border-radius: 14px; padding: 24px 28px; margin-bottom: 32px; text-align: left; }
        .invoice-summary .row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.9rem; }
        .invoice-summary .row:last-child { border-bottom: none; }
        .invoice-summary .row .label { color: var(--text-muted); }
        .invoice-summary .row .value { color: var(--text-primary); font-weight: 500; }
        .invoice-summary .row .value.amount { color: #22c55e; font-size: 1.1rem; font-weight: 700; }
        .email-status { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 28px; display: flex; align-items: center; justify-content: center; gap: 6px; }
        .email-status i { color: #22c55e; }
        .btn-home { display: inline-block; padding: 14px 32px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; border-radius: 12px; font-weight: 600; font-size: 0.95rem; text-decoration: none; transition: all 0.3s ease; }
        .btn-home:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.4); }
        @media (max-width: 600px) { .success-card { padding: 36px 24px; } }
      `}</style>

      <div className="success-page">
        <div className="success-card">
          <div className="success-icon">
            <i className="fas fa-check"></i>
          </div>
          <h1>Payment <span className="gradient-text">Received!</span></h1>
          <p className="subtitle">Your payment was processed successfully! A receipt has been sent to your email.</p>

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
              <span className="value" style={{ color: '#22c55e' }}><i className="fas fa-check-circle" style={{ marginRight: '5px' }}></i>Paid via Stripe</span>
            </div>
          </div>

          <p className="email-status" id="emailStatus">
            <i className="fas fa-spinner fa-spin"></i> Working on it...
          </p>

          <Link href="/" className="btn-home">Back to Home</Link>
        </div>
      </div>

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
