import "./Policy.css";

export default function CancellationPolicy() {
  return (
    <section className="policy-page">
      <div className="policy-container">
        <span className="policy-badge">Service Policy</span>
        <h1>Cancellation Policy</h1>
        <p className="policy-subtitle">
          Cancellation depends on the current processing status of the service.
        </p>

        <div className="policy-section">
          <h2>1. Before Processing</h2>
          <p>
            Customers may request cancellation before the service processing has
            started.
          </p>
        </div>

        <div className="policy-section">
          <h2>2. After Processing</h2>
          <p>
            Once a digital service, document preparation, form filling or
            downloadable file has been completed, cancellation may not be
            accepted.
          </p>
        </div>

        <div className="policy-section">
          <h2>3. Government Services</h2>
          <p>
            For government-related services, cancellation depends on the rules of
            the respective government portal or department.
          </p>
        </div>

        <div className="policy-contact">
          <p><strong>Email:</strong> gargcsc11@gmail.com</p>
          <p><strong>Phone:</strong> +91 7217687044</p>
        </div>

        <div className="policy-updated">Last Updated: June 2026</div>
      </div>
    </section>
  );
}