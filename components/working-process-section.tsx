export default function WorkingProcessSection() {
  return (
    <section className="working-process-section">
      <div className="container">
        <div className="process-container">
          <div className="process-header">
            <div className="section-subtitle-working-process-section">WORKING PROCESS</div>
            <h2 className="section-title-working-process-section">Innovation In Construction At Your Service</h2>
            <p className="process-description">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <a href="#" className="read-more">
              READ MORE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3 className="step-title">Site Preparation</h3>
                <p className="step-description">
                  We begin with thorough site preparation to ensure a solid foundation for your project.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3 className="step-title">Roofing Installation</h3>
                <p className="step-description">
                  Our team installs high-quality roofing with precision and attention to detail.
                </p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3 className="step-title">Flooring Installation</h3>
                <p className="step-description">
                  We complete the project with expert flooring installation for a perfect finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}