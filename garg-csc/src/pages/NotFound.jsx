import { Link } from "react-router-dom";
import "./NotFound.css";
import logo from "../../assets/logo.png";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-card">
<img src={logo} alt="Garg CSC" className="notfound-logo" />
        <div className="error-code">404</div>

        <h1>Page Not Found</h1>

        <p>
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="notfound-buttons">
          <Link to="/" className="home-btn">
            🏠 Back to Home
          </Link>

          <Link to="/services" className="service-btn">
            📋 View Services
          </Link>
        </div>

      </div>
    </div>
  );
}