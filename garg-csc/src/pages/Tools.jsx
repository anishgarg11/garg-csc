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
      <h1>Free CSC Tools</h1>

      <div className="tools-grid">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            to={tool.path}
            className="tool-card"
          >
            <span>{tool.icon}</span>
            <h3>{tool.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}