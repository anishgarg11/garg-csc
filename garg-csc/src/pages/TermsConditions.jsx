import "./Policy.css";

export default function TermsConditions() {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <span className="policy-badge">Legal Terms</span>
        <h1>Terms & Conditions</h1>
        <p className="policy-subtitle">
          Please read these terms carefully before using our website and services.
        </p>

        <div className="policy-section">
          <h2>1. Service Usage</h2>
          <p>
            By using Garg Common Service Center website, you agree to use our
            digital tools and services only for lawful purposes.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. Service Accuracy</h2>
          <p>
            Customers are responsible for providing correct information and
            valid documents. Garg CSC is not responsible for delays or rejection
            caused by incorrect details.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. Payment Terms</h2>
          <p>
            Paid digital tools such as Resume Builder or Passport Photo Maker
            may require online payment after the free usage limit is completed.
          </p>
        </div>

        <div className="policy-section">
          <h2>4. Changes to Services</h2>
          <p>
            We may update service charges, features, processing time and website
            content without prior notice.
          </p>
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