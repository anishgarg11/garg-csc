import { Link } from "react-router-dom";
import "./Home.css";

const STATS = [
  { num: "3,000+", label: "Citizens Served" },
  { num: "50+", label: "Services Available" },
  { num: "5+", label: "Years of Experience" },
  { num: "100%", label: "Customer Support" },
];

const MARQUEE = [
  "🔔 Aadhaar Address Update Assistance Available",
  "📋 Apply for PAN Card Support",
  "🛂 Passport Services with Guidance",
  "📜 Income & Caste Certificate Assistance",
  "🏦 Banking & Bill Payment Services",
  "🧰 Online Digital Tools Available",
];

const SERVICES = [
  { icon: "🖨️", title: "Printing & Documentation", desc: "Photocopy, Printout, Scanning & Lamination Services" },
  { icon: "🏦", title: "Banking Services", desc: "Money Transfer, AEPS Withdrawal, Balance Enquiry, Account Opening" },
  { icon: "🪪", title: "Aadhaar Card", desc: "Update, Correction & Print Assistance" },
  { icon: "🗂️", title: "PAN Card", desc: "New Application, Correction & Reprint Assistance" },
  { icon: "🪪", title: "Voter Card", desc: "Update, Correction & Print Assistance" },
  { icon: "🛂", title: "Passport", desc: "Apply, Renewal, Correction & Status Guidance" },
  { icon: "📜", title: "Certificates", desc: "Income, Caste, Domicile, Birth & Death Assistance" },
  { icon: "🛡️", title: "Insurance", desc: "Health, Life & Motor Insurance Support" },
  { icon: "💡", title: "Bill Payments", desc: "Electricity, Water, Gas, Mobile & DTH" },
  { icon: "🎓", title: "Education", desc: "School Admission & Scholarship Forms" },
  { icon: "🏥", title: "Ayushman Bharat", desc: "Card Registration & Hospital Information" },
  { icon: "🚗", title: "Driving License", desc: "Apply, Renewal & RC Related Assistance" },
  { icon: "📦", title: "Many More", desc: "50+ Government & Private Digital Services" },
];

const TOOLS = [
  { icon: "📄", title: "Resume Builder", desc: "Create and download resume PDFs.", price: "₹40", path: "/tools/resume-builder" },
  { icon: "📷", title: "Passport Photo Maker", desc: "Generate print-ready passport size photos.", price: "₹40", path: "/tools/passport-photo" },
  { icon: "📑", title: "PDF Merge", desc: "Merge multiple PDF files into one document.", price: "₹30", path: "/tools/pdf-merge" },
  { icon: "🖼️", title: "JPG to PDF", desc: "Convert images into PDF documents.", price: "₹30", path: "/tools/jpg-to-pdf" },
  { icon: "🔳", title: "QR Generator", desc: "Create QR codes for links and text.", price: "₹20", path: "/tools/qr-generator" },
];

export default function Home() {
  return (
    <>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <section className="hero">
        <div className="hero-badge">
          ⭐ Trusted Since 2021 &nbsp;|&nbsp; Digital Services & Online Tools
        </div>

        <h1>
          CSC Services & Online
          <br />
          <span>Digital Tools</span>
        </h1>

        <p>
          Garg Common Service Center helps citizens with Aadhaar, PAN Card,
          Passport, Certificates, Banking and other CSC-related services. We
          also provide online digital tools such as Resume Builder, PDF Tools,
          Passport Photo Maker and QR Generator.
        </p>

        <div className="hero-btns">
          <Link to="/services" className="btn-primary">
            🛎️ View CSC Services
          </Link>
          <Link to="/tools" className="btn-secondary">
            🧰 Explore Digital Tools
          </Link>
        </div>
      </section>

      <section className="business-section">
        <div className="container">
          <h2>Garg Common Service Center & Digital Tools Platform</h2>

          <p>
            Garg Common Service Center is a trusted digital service provider
            located in Faridabad, Haryana. We assist customers with Aadhaar,
            PAN Card, Passport Services, Banking Services, Bill Payments,
            Government Certificates, Insurance, Education Forms and other
            documentation-related services through a transparent and
            customer-friendly process.
          </p>

          <p>
            In addition to CSC and citizen services, this website also offers
            online digital utility tools such as Resume Builder, JPG to PDF,
            PDF Merge, Passport Photo Maker and QR Code Generator. Online
            payments on this website are accepted only for these digital tools
            and downloadable utility services.
          </p>

          <div className="business-note">
            <strong>Payment Clarification:</strong> CSC-related services are
            provided through center assistance. Online payments are enabled only
            for digital tools available on this website.
          </div>
        </div>
      </section>

      <div className="stats-bar">
        {STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="section section-bg" id="services">
        <div className="section-title">
          <h2>🛎️ CSC & Citizen Services</h2>
          <p>
            Government and private service assistance available at our center
          </p>
          <div className="title-line" />
        </div>

        <div className="services-grid">
          {SERVICES.map((s) =>
            s.title === "Many More" ? (
              <Link key={s.title} to="/services" className="service-card-link">
                <div className="service-card">
                  <span className="service-icon">{s.icon}</span>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ) : (
              <div key={s.title} className="service-card">
                <span className="service-icon">{s.icon}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            )
          )}
        </div>
      </section>

      <section className="digital-tools-section">
        <div className="section-title">
          <h2>🧰 Online Digital Tools</h2>
          <p>
            Paid online tools for document creation, PDF processing and digital
            downloads
          </p>
          <div className="title-line" />
        </div>

        <div className="tools-home-grid">
          {TOOLS.map((tool) => (
            <Link key={tool.title} to={tool.path} className="tool-home-card">
              <div className="tool-home-icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.desc}</p>
              <span className="tool-price">{tool.price}</span>
            </Link>
          ))}
        </div>

        <div className="payment-disclosure">
          <h3>Secure Digital Tool Payments</h3>
          <p>
            Online payment is used only for digital tools such as resume PDF
            download, PDF utilities, passport photo maker and QR generator. We
            do not collect online payments for CSC/government services through
            this website.
          </p>
        </div>
      </section>

      <section className="why-us">
        <h2>Why Choose Garg CSC?</h2>

        <div className="why-grid">
          <div className="why-card">
            🔒
            <h3>Secure Digital Payments</h3>
            <p>
              Online payments are enabled only for digital tools and utility
              downloads.
            </p>
          </div>

          <div className="why-card">
            ⚡
            <h3>Fast Service</h3>
            <p>
              Quick processing for center services and instant access to online
              digital tools.
            </p>
          </div>

          <div className="why-card">
            🏛️
            <h3>Citizen Service Support</h3>
            <p>
              Assistance for multiple CSC, documentation and citizen-related
              services.
            </p>
          </div>

          <div className="why-card">
            📞
            <h3>Customer Support</h3>
            <p>Available through phone, email and WhatsApp support.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Quick and professional PAN Card assistance.</p>
            <strong>Rahul Sharma</strong>
          </div>

          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Resume Builder was simple and generated a great PDF.</p>
            <strong>Priya Verma</strong>
          </div>

          <div className="testimonial-card">
            ⭐⭐⭐⭐⭐
            <p>Very helpful staff and excellent service.</p>
            <strong>Amit Kumar</strong>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>Which services are available online for payment?</h3>
          <p>
            Online payments are accepted only for digital tools such as Resume
            Builder, JPG to PDF, PDF Merge, Passport Photo Maker and QR Code
            Generator.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do you collect online payment for CSC services?</h3>
          <p>
            No. CSC-related and government service assistance is provided
            through the center. Online payments on this website are only for
            digital tools and downloadable utility services.
          </p>
        </div>

        <div className="faq-item">
          <h3>Are online payments secure?</h3>
          <p>
            Yes. Payments for digital tools are processed through a secure
            payment gateway. We do not store card, UPI or banking details.
          </p>
        </div>

        <div className="faq-item">
          <h3>Can I contact support?</h3>
          <p>
            Yes. You can contact us via phone, email or WhatsApp for help with
            services or online digital tools.
          </p>
        </div>
      </section>
    </>
  );
}