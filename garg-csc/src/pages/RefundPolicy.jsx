import "./Policy.css";

export default function RefundPolicy() {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <span className="policy-badge">Payment Policy</span>
        <h1>Refund Policy</h1>
        <p className="policy-subtitle">
          Our refund policy is designed for fair and transparent digital services.
        </p>

        <div className="policy-section">
          <h2>1. Digital Service Payments</h2>
          <p>
            Payments made for digital services such as Resume Builder, Passport
            Photo Maker, online form filling, document processing and other
            digital downloads are generally non-refundable once delivered.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. Duplicate Payment</h2>
          <p>
            If duplicate payment is made due to technical error, the customer can
            contact us with payment proof for review.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. Failed Transactions</h2>
          <p>
            If payment is deducted but service is not unlocked or delivered, we
            will verify the payment and provide service access or refund where
            applicable.
          </p>
        </div>

        <div className="policy-highlight">
          Refund review may take 3–7 working days depending on payment gateway
          and bank processing time.
        </div>

        <div className="policy-contact">
          <p><strong>Email:</strong> gargcsc11@gmail.com</p>
          <p><strong>Phone:</strong> +91 7217687044</p>
        </div>

        <div className="policy-updated">Last Updated: June 2026</div>
      </div>
    </section>
  );
}