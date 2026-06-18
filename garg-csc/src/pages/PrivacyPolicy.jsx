import "./Policy.css";

export default function PrivacyPolicy() {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <span className="policy-badge">Garg CSC Policy</span>
        <h1>Privacy Policy</h1>
        <p className="policy-subtitle">
          We respect your privacy and protect your personal information.
        </p>

        <div className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect your name, mobile number, email address, uploaded
            documents, payment details and service-related information only for
            providing requested digital and CSC services.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. Use of Information</h2>
          <p>
            Your information is used for service processing, customer support,
            payment confirmation, document preparation and communication related
            to your requested service.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. Data Security</h2>
          <p>
            We take reasonable steps to keep your information safe and do not
            sell or rent your personal data to third parties.
          </p>
        </div>

        <div className="policy-highlight">
          <strong>Note:</strong> Documents are used only for the requested
          service and verification purpose.
        </div>

        <div className="policy-contact">
          <p><strong>Business:</strong> Garg Common Service Center</p>
          <p><strong>Email:</strong> gargcsc11@gmail.com</p>
          <p><strong>Phone:</strong> +91 7217687044</p>
          <p><strong>Address:</strong> Shop No. 06, Opposite Government School Gate No. 02, Sarai Khawaja, Faridabad, Haryana 121003</p>
        </div>

        <div className="policy-updated">Last Updated: June 2026</div>
      </div>
    </section>
  );
}