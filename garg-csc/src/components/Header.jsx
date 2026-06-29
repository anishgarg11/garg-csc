import { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from "../../assets/logo.png";
// ===== EDIT CENTER INFO HERE =====
const CENTER = {
  name: 'Garg Common Service Center',
  location: 'Faridabad, Haryana',
  phone: '+91 7217687044',          // ← Change this
  whatsapp: 'https://wa.me/917217687044', // ← Change this
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
<button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? "✕" : "☰"}
</button>
       <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={() => setMenuOpen(false)}
  >
    Home
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={() => setMenuOpen(false)}
  >
    Services
  </NavLink>

  <NavLink
    to="/tools"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={() => setMenuOpen(false)}
  >
    Digital Tools
  </NavLink>



  <NavLink
    to="/about"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={() => setMenuOpen(false)}
  >
    About Us
  </NavLink>

  <NavLink
    to="/certificate"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={() => setMenuOpen(false)}
  >
    Certificate
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      isActive ? "nav-link active" : "nav-link"
    }
    onClick={() => setMenuOpen(false)}
  >
    Contact
  </NavLink>

  <a
    href={CENTER.whatsapp}
    className="nav-cta"
    onClick={() => setMenuOpen(false)}
  >
    💬 WhatsApp
  </a>

</nav>
      </div>
    </header>
  )
}




