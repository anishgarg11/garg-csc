import { useState } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import "./ServiceDetails.css";
import { useNavigate } from "react-router-dom";
export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

const [selectedDoc, setSelectedDoc] = useState(null);

  const service = servicesData.find(
    item => item.slug === slug
  );

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
      </div>
    );
  }

  return (
    <section className="service-details-page">
      <button
  className="back-btn"
  onClick={() => navigate("/services")}
>
  ← Back
</button>

      <div className="service-header">
  <span className="service-icon">{service.icon}</span>

  <h1>{service.title}</h1>

  <p>{service.shortDescription}</p>

  <div className="service-badges">
   {service.badges?.map((badge) => (
      <span key={badge}>✓ {badge}</span>
    ))}
  </div>
</div>

      <div className="service-card">
        <h2>Overview</h2>
        <p>{service.overview}</p>
          {service.importantNote && (
    <div className="important-note">
      <strong>Important:</strong> {service.importantNote}
    </div>
  )}
      </div>

      <div className="service-card">
  <h2>Available Services</h2>

  <div className="feature-grid">
    {service.availableServices.map((item) => (
      <div key={item} className="feature-card">
        ✓ {item}
      </div>
    ))}
  </div>
</div>

   {service.requiredDocuments?.length > 0 && (
  <div className="service-card">
    <h2>Required Documents</h2>

    <div className="feature-grid">
      {service.requiredDocuments.map((doc) => (
        <div
          key={doc.title}
          className="document-card"
          onClick={() => setSelectedDoc(doc)}
        >
          <span>📄 {doc.title}</span>
          <button className="click-btn">
            Click Here For Details
          </button>
        </div>
      ))}
    </div>
  </div>
)}   

{selectedDoc && (
  <div
    className="modal-overlay"
    onClick={() => setSelectedDoc(null)}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-header">
        <h3>📄 {selectedDoc.title}</h3>
        
      </div>
<div className="modal-body">

        {selectedDoc?.documents?.length > 1 ? (
          <h4 className="doc-subtitle">
            Please carry any one of the following valid documents.
          </h4>
        ) : (
          <h4 className="doc-subtitle">
            Required document for this service.
          </h4>
        )}

        <div className="doc-list">
          {selectedDoc.documents.map((doc) => (
            <div key={doc} className="doc-item">
              ✓ {doc}
            </div>
          ))}
        </div>

      </div>

      <div className="modal-footer">
        <button
          className="modal-close-icon"
          onClick={() => setSelectedDoc(null)}
          aria-label="Close"
        >
          ✕ 
        </button>
      </div>
    </div>
  </div>
)}


      <div className="stats-card">
  <div>
    <h3>⏱ Processing Time</h3>
    <p>{service.processingTime}</p>
  </div>
</div>

      <div className="service-card">
  <h2>Frequently Asked Questions</h2>

  {service.faqs.map((faq, index) => (
    <details key={index} className="faq-item">
      <summary>{faq.question}</summary>
      <p>{faq.answer}</p>
    </details>
  ))}
</div>

      <div className="service-contact-box">
        <h3>Need Assistance?</h3>

        <div className="service-buttons">

          <a
            href="tel:+917217687044"
            className="call-btn"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/917217687044"
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn"
          >
            💬 WhatsApp Us
          </a>

        </div>
      </div>

    </section>
  );
}