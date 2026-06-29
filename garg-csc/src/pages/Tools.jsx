import { Link } from "react-router-dom";
import "./Tools.css";

export default function Tools() {
  const tools = [
    {
      title: "Resume Builder",
      icon: "📄",
      path: "/tools/resume-builder",
      price: "₹30",
      desc: "Create professional resumes and download them as PDF.",
    },
    {
      title: "Passport Photo Maker",
      icon: "📷",
      path: "/tools/passport-photo",
      price: "₹40",
      desc: "Create passport-size photos for print and digital use.",
    },
    {
      title: "JPG to PDF",
      icon: "🖼️",
      path: "/tools/jpg-to-pdf",
      price: "₹20",
      desc: "Convert JPG or image files into a PDF document.",
    },
    {
      title: "PDF Merge",
      icon: "📑",
      path: "/tools/pdf-merge",
      price: "₹20",
      desc: "Merge multiple PDF files into a single PDF document.",
    },
    {
      title: "QR Generator",
      icon: "🔳",
      path: "/tools/qr-generator",
      price: "₹20",
      desc: "Generate QR codes for links, text and digital information.",
    },
  ];

  return (
    <section className="tools-page">
      <div className="tools-header">
        <span className="tools-badge">Digital Utility Tools</span>

        <h1>Digital Tools & Pricing</h1>

        <p>
          Professional online tools for resume creation, PDF management, QR
          generation and photo processing. Online payments are accepted only for
          the digital tools listed below.
        </p>
      </div>

      <div className="tools-payment-note">
        <strong>Payment Clarification:</strong> CSC and government-related
        services are provided through center assistance. Online payments on this
        website are accepted only for digital tools and downloadable utility
        services.
      </div>

      <div className="tools-grid">
        {tools.map((tool) => (
          <Link key={tool.title} to={tool.path} className="tool-card">
            <div className="tool-icon">{tool.icon}</div>

            <div className="tool-price">{tool.price}</div>

            <h3>{tool.title}</h3>

            <p>{tool.desc}</p>

            <span className="tool-open">Open Tool →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}