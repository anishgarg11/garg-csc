import { useEffect } from 'react'
import './Certificate.css'

// ===== REPLACE THIS WITH YOUR REAL CERTIFICATE IMAGE PATH =====
// Put your certificate image inside /public/ folder and update the path below
// Example: '/certificate.jpg'  or  '/my-csc-cert.png'
const CERT_IMAGE_PATH = '/csc.png'

// ===== WATERMARK TEXT ===== (shown on top of certificate)
const WATERMARK = 'GARG CSC CENTER · FARIDABAD'

export default function Certificate() {

  useEffect(() => {
    // Block right-click on certificate
    const handler = (e) => {
      const cert = document.getElementById('cert-container')
      if (cert && cert.contains(e.target)) e.preventDefault()
    }
    document.addEventListener('contextmenu', handler)

    // Block keyboard shortcuts
    const keyHandler = (e) => {
      const blocked =
        e.key === 'F12' ||
        e.key === 'PrintScreen' ||
        ((e.ctrlKey || e.metaKey) && ['s','S','p','P','u','U','a','A','c','C'].includes(e.key))
      if (blocked) e.preventDefault()
    }
    document.addEventListener('keydown', keyHandler)

    return () => {
      document.removeEventListener('contextmenu', handler)
      document.removeEventListener('keydown', keyHandler)
    }
  }, [])

  return (
    <section className="section section-bg">
      <div className="section-title">
        <h2>🏅 Our Authorization Certificate</h2>
        <p>Government of India Certified — Garg Common Service Center</p>
        <div className="title-line" />
      </div>

      <div className="cert-wrapper">
        <div className="cert-box">
          <div className="cert-badge">
            🔒 Protected Document — Screenshot & Download Disabled
          </div>

          {/* Certificate display area */}
          <div
            id="cert-container"
            className="cert-container"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          >
            {/* Transparent blocker overlay */}
            <div className="cert-blocker" />

            {/* Watermark overlay */}
            <div className="cert-watermark-wrap">
              <div className="cert-watermark wm-blue">{WATERMARK}</div>
              <div className="cert-watermark wm-orange">{WATERMARK}</div>
            </div>

            {/* Certificate image — displayed as CSS background so direct download is harder */}
            <div
              className="cert-image"
              style={{ backgroundImage: `url(${CERT_IMAGE_PATH})` }}
            />
          </div>

          <p className="cert-note">
            ⚠️ This certificate is protected. Copying, downloading, or screenshotting is not permitted.
          </p>
        </div>
      </div>
    </section>
  )
}
