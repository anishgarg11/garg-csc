import "./ServiceCharges.css"
export default function ServiceCharges() {
  const charges = [
    { service: "Resume Builder PDF Download", price: "₹30" },
    { service: "Passport Photo Maker", price: "₹40" },
    { service: "JPG to PDF", price: "₹20" },
    { service: "PDF Merge", price: "₹20" },
    { service: "QR Code Generator", price: "₹20" },
  ];

  return (
    <section className="charges-page">
  <div className="charges-container">

    <div className="charges-header">
      <h1>Service Charges</h1>
      <p>
        Transparent pricing for our digital tools and services.
      </p>
    </div>

    <div className="charges-grid">

      <div className="charge-card">
        <div className="charge-icon">📄</div>
        <h3>Resume Builder</h3>
        <div className="charge-price">₹30</div>
      </div>

      <div className="charge-card">
        <div className="charge-icon">📷</div>
        <h3>Passport Photo Maker</h3>
        <div className="charge-price">₹40</div>
      </div>

      <div className="charge-card">
        <div className="charge-icon">📑</div>
        <h3>PDF Merge</h3>
        <div className="charge-price">₹20</div>
      </div>

      <div className="charge-card">
        <div className="charge-icon">🔳</div>
        <h3>QR Generator</h3>
        <div className="charge-price">₹20</div>
      </div>

    </div>

    <div className="charges-table-wrap">
      <table className="charges-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Charges</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Resume Builder PDF Download</td>
            <td className="price-cell">₹30</td>
          </tr>
          <tr>
            <td>Passport Photo Maker</td>
            <td className="price-cell">₹40</td>
          </tr>
          <tr>
            <td>JPG to PDF</td>
            <td className="price-cell">₹20</td>
          </tr>
          <tr>
            <td>PDF Merge</td>
            <td className="price-cell">₹20</td>
          </tr>
          <tr>
            <td>QR Code Generator</td>
            <td className="price-cell">₹20</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="charges-note">
      <h3>Important Information</h3>
      <p>
       CSC services are provided offline at our center.
Online payments are accepted only for digital tools available on this website.
      </p>
    </div>

  </div>
</section>
  )
}