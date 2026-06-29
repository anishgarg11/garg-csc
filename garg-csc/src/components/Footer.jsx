import { Link, NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <h4>🏪 Garg Common Service Center</h4>

      <p>
        Faridabad, Haryana | Operating under the Digital India Mission
      </p>

      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/certificate">Certificate</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="https://csc.gov.in"
          target="_blank"
          rel="noreferrer"
        >
          CSC India Portal
        </a>
        <Link to="/tools">
  Service Charges
</Link>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        <NavLink to="/terms-conditions">Terms & Conditions</NavLink>
        <NavLink to="/refund-policy">Refund Policy</NavLink>
        <NavLink to="/cancellation-policy">Cancellation Policy</NavLink>
      </div>

      <div className="developer-credit">
        <p>Designed & Developed by</p>
        <h4>Anish Garg</h4>
        <span>Software Developer</span>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Garg Common Service Center |
        Faridabad, Haryana | Powered by Digital India 🇮🇳
      </div>
    </footer>
  )
}