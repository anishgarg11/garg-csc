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
    Garg Common Service Center is a trusted digital service provider based in
    Faridabad, Haryana. Since 2021, we have been helping citizens access
    essential government, financial, documentation and online services through
    a simple, transparent and customer-friendly process. Our goal is to make
    digital services more accessible, convenient and reliable for everyone.
  </p>
</div>

<div className="about-content">
  <h3>Who We Are</h3>

  <p>
    Garg Common Service Center serves citizens by providing a wide range of
    government and private digital services under one roof. Our services
    include Aadhaar assistance, PAN Card support, Passport services, Banking
    Services, Certificates, Insurance, Bill Payments, Education-related
    services and various documentation solutions.
  </p>

  <p>
    In addition to citizen services, we also provide modern online digital
    tools such as Resume Builder, JPG to PDF Converter, PDF Merge, Passport
    Photo Maker and QR Code Generator. These tools are designed to help users
    complete common document-related tasks quickly and efficiently through a
    secure online platform.
  </p>

  <p>
    We are committed to providing reliable support, transparent service
    delivery, data privacy and a seamless user experience for both our
    physical center visitors and online users.
  </p>

  <ul className="feature-list">
    {FEATURES.map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>
</div>

<div className="business-info-box">
  <h3>Business Information</h3>

  <p>
    <strong>Business Name:</strong> Garg Common Service Center
  </p>

  <p>
    <strong>Location:</strong> Faridabad, Haryana, India
  </p>

  <p>
    <strong>Phone:</strong> +91 7217687044
  </p>

  <p>
    <strong>Email:</strong> gargcsc11@gmail.com
  </p>

  <p>
    <strong>Services:</strong> Aadhaar Services, PAN Card Services,
    Passport Assistance, Banking Services, Government Certificates,
    Insurance Services, Documentation Services and Digital Tools.
  </p>

  <p>
    <strong>Digital Tools:</strong> Resume Builder, JPG to PDF,
    PDF Merge, Passport Photo Maker and QR Code Generator.
  </p>

  <p>
    <strong>Online Payments:</strong> Online payments are accepted only
    for digital tools and downloadable utility services available on
    this website.
  </p>
</div>
      </div>
    </section>
  );
}