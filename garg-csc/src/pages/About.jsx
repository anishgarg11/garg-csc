import './About.css'

const FEATURES = [
  'Officially registered and authorized by CSC India',
  'Experienced and trained staff',
  'Fast and transparent service delivery',
  'Most competitive service charges in Faridabad',
  'Complete data privacy and security',
  '5+ years of trusted service in Faridabad',
]

export default function About() {
  return (
    <section className="section">
      <div className="section-title">
        <h2>🏪 About Our Center</h2>
        <p>Serving Faridabad citizens since 2021</p>
        <div className="title-line" />
      </div>

      <div className="about-grid">
        <div className="about-visual">
          <div className="big-icon">🏪</div>
          <h3>Garg Common Service Center</h3>
          <p>
            Faridabad's most trusted and efficient CSC Center — delivering
            digital government services to citizens since 1 under the
            Digital India Mission.
          </p>
        </div>

        <div className="about-content">
          <h3>Who We Are</h3>
          <p>
            Garg Common Service Center is a Government-registered Common Service
            Centre serving the citizens of Faridabad, Haryana. We provide a wide
            range of digital government and private services under one roof,
            ensuring fast, transparent, and reliable assistance to every visitor.
          </p>
          <ul className="feature-list">
            {FEATURES.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
