import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Certificate from './pages/Certificate'
import Contact from './pages/Contact'
import ServiceDetails from "./pages/ServiceDetails";
import ReactGA from "react-ga4";
import { useEffect } from 'react'
export default function App() {
    useEffect(() => {
    ReactGA.initialize("G-E0W2327EGG");
    ReactGA.send("pageview");
  }, []);
  return (
    <>
      <div className="tricolor-bar" />
      <Header />

      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/services"    element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />

        <Route path="/about"       element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact"     element={<Contact />} />
      </Routes>

      <Footer />
      <ChatWidget />

      {/* WhatsApp Floating Button — change number below */}
      <a
        href="https://wa.me/917217687044"
        className="wa-float"
        target="_blank"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  )
}
