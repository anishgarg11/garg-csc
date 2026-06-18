import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Tools from "./pages/Tools";
import QRGenerator from "./tools/QRGenerator";
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ResumeBuilder from "./tools/ResumeBuilder";
import JpgToPdf from "./tools/JpgToPdf";
import PdfMerge from "./tools/PdfMerge";
import PassportPhoto from "./tools/PassportPhoto";
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import CancellationPolicy from "./pages/CancellationPolicy";
import NotFound from './pages/NotFound';

import Loader from './components/Loader';

import ReactGA from 'react-ga4';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ReactGA.initialize('G-E0W2327EGG');

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Analytics />

      <div className="tricolor-bar" />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/qr-generator" element={<QRGenerator />} />
        <Route path="/tools/resume-builder" element={<ResumeBuilder />} />
         <Route
    path="/tools/jpg-to-pdf"
    element={<JpgToPdf />}
  />

  <Route
    path="/tools/pdf-merge"
    element={<PdfMerge />}
  />

  <Route
    path="/tools/passport-photo"
    element={<PassportPhoto />}
  />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-conditions" element={<TermsConditions />} />
<Route path="/refund-policy" element={<RefundPolicy />} />
<Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
      <ChatWidget />

      <a
        href="https://wa.me/917217687044"
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp"
      >
        💬
      </a>
    </>
  );
}