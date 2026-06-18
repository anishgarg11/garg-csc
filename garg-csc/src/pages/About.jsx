import "./About.css";

const FEATURES = [
  "Common Service Centre support for citizens",
  "Experienced and trained staff",
  "Fast and transparent service delivery",
  "Competitive service charges in Faridabad",
  "Complete data privacy and security",
  "Secure online payment support",
  "5+ years of trusted service in Faridabad",
];

export default function About() {
  return (
    <section className="section">
      <div className="section-title">
        <h2>🏪 About Our Center</h2>
        <p>Serving Faridabad citizens since 2021</p>
        <div className="title-line" />
      </div>

      <div className="about-grid">
        <div className="about-visual">
          <div className="big-icon">🏪</div>
          <h3>Garg Common Service Center</h3>
          <p>
            Faridabad&apos;s trusted and efficient CSC Center — delivering
            digital services to citizens since 2021 under the Digital India
            Mission.
          </p>
        </div>

        <div className="about-content">
          <h3>Who We Are</h3>
          <p>
            Garg Common Service Center is a Common Service Centre serving the
            citizens of Faridabad, Haryana. We provide a wide range of digital
            government and private services under one roof, ensuring fast,
            transparent and reliable assistance to every visitor.
          </p>

          <ul className="feature-list">
            {FEATURES.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="business-info-box">
          <h3>Business Information</h3>
          <p><strong>Business Name:</strong> Garg Common Service Center</p>
          <p><strong>Location:</strong> Faridabad, Haryana</p>
          <p><strong>Phone:</strong> +91 7217687044</p>
          <p><strong>Email:</strong> gargcsc11@gmail.com</p>
          <p>
            <strong>Services:</strong> Aadhaar, PAN Card, Passport, Banking,
            Certificates, Insurance & Digital Tools
          </p>
        </div>
      </div>
    </section>
  );
}