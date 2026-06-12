import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <h4>🏪 Garg Common Service Center</h4>
      <p>Faridabad, Haryana &nbsp;|&nbsp; Operating under the Digital India Mission</p>

      <div className="footer-links">
        <Link to="/services">Services</Link>
        <Link to="/about">About Us</Link>
        <Link to="/certificate">Certificate</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://csc.gov.in" target="_blank" rel="noreferrer">CSC India Portal</a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Garg Common Service Center | Faridabad, Haryana &nbsp;|&nbsp; Powered by Digital India 🇮🇳
        <div className="developer-credit">
  <p>Designed & Developed by</p>
  <h4>Anish Garg</h4>
  <span>Software Developer</span>
</div>
      </div>
    </footer>
  )
}
<div className="developer-credit">
  <p>Designed & Developed by</p>
  <h4>Anish Garg</h4>
  <span>Software Developer</span>
</div>