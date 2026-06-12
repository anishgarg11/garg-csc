import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from "../../assets/logo.png";

// ===== EDIT CENTER INFO HERE =====
const CENTER = {
  name: 'Garg Common Service Center',
  location: 'Faridabad, Haryana',
  phone: '+91 7217687044',          // ← Change this
  whatsapp: 'https://wa.me/7217687044', // ← Change this
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        🏛️ Government of India Authorized Common Service Centre &nbsp;|&nbsp; {CENTER.location}
      </div>
      <div className="header-main">
        <div className="logo-area">
          <div className="logo-icon">
            <img src={logo} alt="Garg CSC Logo" className="logo" />
          </div>
          <div className="logo-text">
            <h1>{CENTER.name}</h1>
            <p>📍 {CENTER.location} &nbsp;|&nbsp; CSC Registered & Certified</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/"            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/services"    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Services</NavLink>
          <NavLink to="/about"       className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Us</NavLink>
          <NavLink to="/certificate" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Certificate</NavLink>
          <NavLink to="/contact"     className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
          <a href={CENTER.whatsapp} className="nav-cta">📲 WhatsApp</a>
        </nav>
      </div>
    </header>
  )
}
