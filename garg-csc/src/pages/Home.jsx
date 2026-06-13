import { Link } from 'react-router-dom'
import './Home.css'

// ===== EDIT STATS HERE =====
const STATS = [
  { num: '3,000+', label: 'Citizens Served' },
  { num: '50+',    label: 'Services Available' },
  { num: '5+',     label: 'Years of Experience' },
  { num: '100%',   label: 'Government Certified' },
]

// ===== EDIT MARQUEE ITEMS HERE =====
const MARQUEE = [
  '🔔 Aadhaar Address Update Now Available',
  '📋 Apply for PAN Card Today',
  '🛂 Passport Services with Fast Processing',
  '📜 Income & Caste Certificates',
  '🏦 Open Your Bank Account with Us',
  '🏥 Ayushman Bharat Card Available',
  
]

// ===== EDIT SERVICE CARDS HERE =====
const SERVICES = [
  { icon: '🖨️', title: 'Printing & Documentation',    desc: 'Photocopy, Printout, Scanning & Lamination Services' },
  { icon: '🏦', title: 'Banking Services',    desc: 'Money Transfer, AEPS Withdrawal, Balance Enquiry, Account Opening' },
  { icon: '🪪', title: 'Aadhaar Card',    desc: 'Update, Correction & Print' },
  { icon: '🗂️', title: 'PAN Card',        desc: 'New Application, Correction & Reprint' },
  { icon: '🪪', title: 'Voter Card',    desc: 'Update, Correction & Print' },
  { icon: '🛂', title: 'Passport',         desc: 'Apply, Renewal, Correction & Status Tracking' },
  { icon: '📜', title: 'Certificates',     desc: 'Income, Caste, Domicile, Birth & Death' },
  { icon: '🛡️', title: 'Insurance',        desc: 'Health, Life & Motor Insurance' },
  { icon: '💡', title: 'Bill Payments',    desc: 'Electricity, Water, Gas, Mobile & DTH' },
  { icon: '🎓', title: 'Education',        desc: 'School Admission & Scholarship Forms' },
  { icon: '🏥', title: 'Ayushman Bharat', desc: 'Card Registration & Hospital Information' },
  { icon: '🚗', title: 'Driving License',  desc: 'Apply, Renewal & RC Related Services' },
  { icon: '📦', title: 'Many More',        desc: '50+ Government & Private Digital Services' },
]

// ===== EDIT NOTICE BOARD HERE =====
const NOTICES = [
  { date: '16', month: 'MAY', title: 'Free Aadhaar Mobile Number Update Camp', desc: 'Mobile number update in Aadhaar is free this week. Visit us at the earliest.' },
  { date: '14', month: 'MAY', title: 'PM Kisan 19th Instalment Status Available', desc: 'Check your PM Kisan payment status now at our center.' },
  { date: '10', month: 'MAY', title: 'Ayushman Bharat Card Registration Open', desc: 'Get your Ayushman card and avail free medical treatment up to ₹5 Lakh.' },
  { date: '5',  month: 'MAY', title: 'New Service: Driving License Application', desc: 'You can now apply for a Driving License directly from our center.' },
]

export default function Home() {
  return (
    <>
      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge">⭐ Trusted Since 2021 &nbsp;|&nbsp; 3,000+ Citizens Served</div>
        <h1>All Government Services<br /><span>Under One Roof</span></h1>
        <p>
          Aadhaar, PAN Card, Passport, Certificates, Banking, Insurance and hundreds
          of digital government services — Faridabad's most trusted CSC Center.
        </p>
        <div className="hero-btns">
          <Link to="/services" className="btn-primary">🛎️ View Our Services</Link>
          <Link to="/contact"  className="btn-secondary">📞 Contact Us Now</Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-bar">
        {STATS.map((s) => (
          <div key={s.label} className="stat-item">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES ── */}
      <section className="section section-bg" id="services">
        <div className="section-title">
          <h2>🛎️ Our Services</h2>
          <p>Government and private — all essential digital services available here</p>
          <div className="title-line" />
        </div>
        <div className="services-grid">
  {SERVICES.map((s) =>
    s.title === "Many More" ? (
      <Link
        key={s.title}
        to="/services"
        className="service-card-link"
      >
        <div className="service-card">
          <span className="service-icon">{s.icon}</span>
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
        </div>
      </Link>
    ) : (
      <div key={s.title} className="service-card">
        <span className="service-icon">{s.icon}</span>
        <h4>{s.title}</h4>
        <p>{s.desc}</p>
      </div>
    )
  )}
</div>
      </section>

      {/* ── NOTICE BOARD ──
      <section className="section" id="notice">
        <div className="section-title">
          <h2>📋 Notice Board</h2>
          <p>Latest updates and important announcements</p>
          <div className="title-line" />
        </div>
        <div className="notice-board">
          <div className="notice-header">
            <h4>Latest Updates</h4>
            <span className="live-badge">🔴 LIVE</span>
          </div>
          {NOTICES.map((n, i) => (
            <div key={i} className="notice-item">
              <div className="notice-date">{n.date}<br />{n.month}</div>
              <div className="notice-text">
                <strong>{n.title}</strong>
                <span>{n.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </>
  )
}
