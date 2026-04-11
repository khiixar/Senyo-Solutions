'use client';

import Link from 'next/link';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PaymentPage() {
  return (
    <>
      <Navbar />
      <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />

      <style jsx global>{`
        .payment-hero {
          min-height: 38vh; padding: 140px 20px 60px; text-align: center;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          display: flex; align-items: center; justify-content: center;
        }
        .payment-hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: var(--text-primary); margin-bottom: 16px; }
        .payment-hero p { font-size: 1.05rem; color: var(--text-secondary); max-width: 580px; margin: 0 auto; }
        .payment-section { padding: 80px 20px; }
        .payment-container { max-width: 1100px; margin: 0 auto; }
        .section-title-sm { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 700; color: var(--text-primary); margin-bottom: 10px; }
        .section-sub { color: var(--text-secondary); margin-bottom: 48px; max-width: 580px; }
        .invoice-card { background: rgba(99, 102, 241, 0.07); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 20px; padding: 40px; margin-bottom: 80px; display: flex; gap: 48px; align-items: flex-start; flex-wrap: wrap; }
        .invoice-info { flex: 1; min-width: 240px; }
        .invoice-info .pkg-icon { width: 52px; height: 52px; background: rgba(99, 102, 241, 0.15); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; color: var(--primary-light); margin-bottom: 20px; }
        .invoice-info h3 { font-size: 1.4rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
        .invoice-info p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px; }
        .sec-badge { display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 0.85rem; margin-top: 10px; }
        .sec-badge i { color: var(--success); }
        .invoice-form { flex: 1; min-width: 260px; }
        .field-label { display: block; color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 8px; }
        .amount-wrapper { display: flex; align-items: stretch; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; overflow: hidden; margin-bottom: 14px; transition: border-color 0.3s; }
        .amount-wrapper:focus-within { border-color: var(--primary); }
        .currency { padding: 0 18px; background: rgba(99,102,241,0.12); color: var(--primary-light); font-size: 1.25rem; font-weight: 600; display: flex; align-items: center; }
        .amount-input { flex: 1; padding: 16px 18px; background: transparent; border: none; outline: none; color: var(--text-primary); font-size: 1.15rem; font-weight: 500; font-family: 'Inter', sans-serif; }
        .amount-input::placeholder { color: var(--text-muted); }
        .ref-input { width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; color: var(--text-primary); font-size: 0.95rem; font-family: 'Inter', sans-serif; margin-bottom: 14px; outline: none; transition: border-color 0.3s; }
        .ref-input:focus { border-color: var(--primary); }
        .ref-input::placeholder { color: var(--text-muted); }
        .field-error { color: #f87171; font-size: 0.85rem; margin-bottom: 12px; display: none; }
        .pay-btn { width: 100%; padding: 16px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); color: #fff; border: none; border-radius: 12px; font-size: 1rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s ease; font-family: 'Inter', sans-serif; }
        .pay-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.4); }
        .pay-btn:disabled { opacity: 0.55; cursor: not-allowed; transform: none; box-shadow: none; }
        .stripe-note { color: var(--text-muted); font-size: 0.78rem; text-align: center; margin-top: 12px; }
        .security-strip { background: rgba(255,255,255,0.025); border-top: 1px solid rgba(255,255,255,0.06); padding: 28px 20px; }
        .security-inner { max-width: 900px; margin: 0 auto; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 28px; }
        .sec-item { display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 0.85rem; }
        .sec-item i { color: var(--success); font-size: 1rem; }
        @media (max-width: 768px) { .invoice-card { flex-direction: column; padding: 28px; gap: 28px; } }
      `}</style>

      <div className="payment-hero">
        <div>
          <p className="section-eyebrow"><i className="fas fa-lock" style={{ marginRight: '6px' }}></i>Secure Checkout</p>
          <h1>Make a <span className="gradient-text">Payment</span></h1>
          <p>Pay your invoice or Purchase a service package securely. All transactions are encrypted and processed by Stripe.</p>
        </div>
      </div>

      <section className="payment-section">
        <div className="payment-container">
          <p className="section-sub">Received an invoice from us? Enter the amount and your invoice reference number below to complete your payment securely.</p>
          <div className="invoice-card">
            <div className="invoice-info">
              <div className="pkg-icon"><i className="fas fa-file-invoice-dollar"></i></div>
              <h3>Invoice Payment</h3>
              <p>Enter the exact dollar amount from your invoice along with your invoice number.</p>
              <div className="sec-badge"><i className="fas fa-shield-alt"></i> 256-bit SSL encryption</div>
              <div className="sec-badge"><i className="fas fa-check-circle"></i> Instant email receipt</div>
              <div className="sec-badge"><i className="fas fa-credit-card"></i> All major cards accepted</div>
            </div>
            <div className="invoice-form">
              <label className="field-label" htmlFor="clientName">Name</label>
              <input className="ref-input" type="text" id="clientName" placeholder="Your name" />
              <label className="field-label" htmlFor="invoiceAmount">Invoice Amount (USD)</label>
              <div className="amount-wrapper">
                <span className="currency">$</span>
                <input className="amount-input" type="number" id="invoiceAmount" placeholder="0.00" min="1" step="0.01" />
              </div>
              <input className="ref-input" type="text" id="invoiceRef" placeholder="Invoice Reference #" />
              <p className="field-error" id="amountError"></p>
              <button className="pay-btn" id="payNowBtn" onClick={() => handleInvoicePayment()}>
                <i className="fas fa-lock"></i> Pay Securely Now
              </button>
              <p className="stripe-note">
                <i className="fab fa-stripe" style={{ marginRight: '4px' }}></i>Powered by Stripe &nbsp;·&nbsp; Visa, Mastercard, Amex &amp; more
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="security-strip">
        <div className="security-inner">
          <div className="sec-item"><i className="fas fa-lock"></i> SSL Encrypted</div>
          <div className="sec-item"><i className="fas fa-shield-alt"></i> PCI DSS Compliant</div>
          <div className="sec-item"><i className="fab fa-stripe"></i> Powered by Stripe</div>
          <div className="sec-item"><i className="fas fa-credit-card"></i> All Major Cards Accepted</div>
          <div className="sec-item"><i className="fas fa-receipt"></i> Instant Receipt via Email</div>
        </div>
      </div>

      <Footer />

      <script dangerouslySetInnerHTML={{ __html: `
        function handleInvoicePayment() {
          var name = document.getElementById('clientName').value.trim();
          var amount = parseFloat(document.getElementById('invoiceAmount').value);
          var ref = document.getElementById('invoiceRef').value.trim();
          var errorEl = document.getElementById('amountError');
          var btn = document.getElementById('payNowBtn');
          errorEl.style.display = 'none';
          if (!amount || isNaN(amount) || amount < 1) {
            errorEl.textContent = 'Please enter a valid amount (minimum $1.00).';
            errorEl.style.display = 'block'; return;
          }
          localStorage.setItem('invoice_amount', amount.toFixed(2));
          localStorage.setItem('invoice_ref', ref || 'N/A');
          localStorage.setItem('invoice_date', new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' }));
          localStorage.setItem('client_name', name || 'N/A');
          btn.disabled = true;
          btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Redirecting to secure checkout...';
          var stripeInvoiceLink = 'https://buy.stripe.com/3cI4gz1uXe6w7Xfa5kdnW01';
          setTimeout(function() { window.location.href = stripeInvoiceLink; }, 900);
        }
        document.getElementById('clientName').addEventListener('keydown', function(e) { if (e.key === 'Enter') handleInvoicePayment(); });
        document.getElementById('invoiceAmount').addEventListener('keydown', function(e) { if (e.key === 'Enter') handleInvoicePayment(); });
        document.getElementById('invoiceRef').addEventListener('keydown', function(e) { if (e.key === 'Enter') handleInvoicePayment(); });
      `}} />
    </>
  );
}

function handleInvoicePayment() {
  if (typeof window !== 'undefined') {
    (window as any).handleInvoicePayment?.();
  }
}
