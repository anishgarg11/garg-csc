import './Contact.css'

// ===== EDIT CONTACT INFO HERE =====
const CONTACT = {
  address: 'Shop No.06, Matthi Wali Gali, Opp. Government School Gate No. 02, Faridabad, Haryana – 121003',
  phone: '+91 7217687044',         // ← Change this
  whatsapp: 'https://wa.me/7217687044', // ← Change this
  email: 'gargcsc11@gmail.com',
  csc_location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1602313739145!2d77.3078895!3d28.474720800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7d0936db455%3A0xbd5dcde2432a7b1c!2sGarg%20CSC%20(Common%20Service%20Center)%20%26%20Gauri%20Shankar%20Book%20Depot%20(Sarai%20Khawaja)!5e0!3m2!1sen!2sin!4v1780558074245!5m2!1sen!2sin",
  
       // ← Change this
}

const HOURS = [
  { day: 'Monday – Saturday', time: '8:00 AM – 10:00 PM', open: true },
  { day: 'Sunday',          time: '10:00 AM - 10:00 PM', open: true },
]


export default function Contact() {
  return (
    <section className="section section-bg">
      <div className="section-title">
        <h2>📞 Location & Working Hours</h2>
        <p>Visit us or get in touch for any service</p>
        <div className="title-line" />
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-card">
          <h4>📍 Find Us Here</h4>

          <div className="contact-item">
            <div className="contact-ico ci-blue">📍</div>
            <div className="contact-info">
              <strong>Address</strong>
              <span>{CONTACT.address}</span>
              
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-ico ci-green">📱</div>
            <div className="contact-info">
              <strong>Phone / WhatsApp</strong>
              <a href={`tel:${CONTACT.phone}`}>
  {CONTACT.phone}
</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-ico ci-orange">📧</div>
            <div className="contact-info">
              <strong>Email</strong>
              <span>
                <a href={`mailto:${CONTACT.email}`} target="_blank" rel="noopener noreferrer">
                  {CONTACT.email}
                </a>
              </span>
            </div>
          </div>


        </div>

        {/* Hours Card */}
        <div className="contact-card">
          <h4>🕐 Working Hours</h4>
          <div className="hours-grid">
            {HOURS.map((h) => (
              <div key={h.day} className="hour-row">
                <span className="day">{h.day}</span>
                <span className="time">{h.time}</span>
                <span className={`hour-badge ${h.open ? '' : 'closed'}`}>
                  {h.open ? 'Open' : 'Closed'}
                </span>
              </div>
            ))}
          </div>
          <br />
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="wa-btn">
            💬 Message Us on WhatsApp
          </a>
          
        </div>

        <div className="contact-card">
  <h4>🗺️ Our Location</h4>

  <iframe
    title="CSC Location"
    src={CONTACT.csc_location}
    width="100%"
    height="300"
    style={{ border: 0, borderRadius: '12px' }}
    loading="lazy"
    allowFullScreen
  ></iframe>
  
  <div className="map-btn-container">
  <a
    href="https://maps.google.com/?q=Garg CSC Common Service Center Faridabad"
    target="_blank"
    rel="noopener noreferrer"
    className="map-btn"
  >
    Get Directions
  </a>
</div>
</div>
      </div>
    </section>
  )
}
