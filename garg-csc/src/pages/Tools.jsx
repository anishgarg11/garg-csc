import { Link } from "react-router-dom";
import "./Tools.css";

export default function Tools() {

  const tools = [
    {
      title: "QR Generator",
      icon: "🔳",
      path: "/tools/qr-generator"
    },
    {
      title: "JPG to PDF",
      icon: "📄",
      path: "/tools/jpg-to-pdf"
    },
    {
      title: "PDF Merge",
      icon: "📑",
      path: "/tools/pdf-merge"
    },
    {
    title: "Resume Builder",
    icon: "📄",
    path: "/tools/resume-builder"
  },
  {
    title: "Passport Photo Maker",
    icon: "📷",
    path: "/tools/passport-photo"
  }
  ];

  return (
      <section className="tools-page">
  <div className="tools-header">
    <span className="tools-badge">Digital Utility Tools</span>

    <h1>CSC Digital Tools</h1>

    <p>
      Professional tools for document creation, PDF management,
      QR generation and photo processing.
    </p>
  </div>

  <div className="tools-grid">
    {tools.map((tool) => (
      <Link
        key={tool.title}
        to={tool.path}
        className="tool-card"
      >
        <div className="tool-icon">{tool.icon}</div>

        <h3>{tool.title}</h3>

        <span className="tool-open">
          Open Tool →
        </span>
      </Link>
    ))}
  </div>
</section>  
  )
}
