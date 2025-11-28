import React from "react";
import homeImage from "../assets/home-about.png"; // 👈 change to your actual file name if different

function AboutHomeSection() {
  return (
    <section className="section about-home-section">
      <div className="about-home-grid">
        {/* LEFT – TEXT */}
        <div className="about-home-text">
          <h2 className="section-title">About Us</h2>
          <h2 className="section-title">More than numbers. We’re on your side.</h2>
          <p className="section-subtitle">
            Expert Finance is an independent mortgage and insurance advisory firm
            based in Auckland, supporting clients across New&nbsp;Zealand.
            We combine big-bank experience with genuine, long-term relationships.
          </p>

          <div className="about-home-points">
            <div className="about-home-point">
              <h3>Personalised strategy</h3>
              <p>
                Every client story is different. We tailor lending structures and
                repayment strategies around your goals, not a one-size-fits-all template.
              </p>
            </div>
            <div className="about-home-point">
              <h3>End-to-end support</h3>
              <p>
                From your first chat to settlement and beyond, we help with bank
                conversations, paperwork, and ongoing reviews as life and rates change.
              </p>
            </div>
            <div className="about-home-point">
              <h3>Aligned with your success</h3>
              <p>
                Our role is to help you build long-term wealth – whether that’s
                buying your first home, expanding an investment portfolio, or
                restructuring debt more efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – IMAGE + STATS */}
        <div className="about-home-card">
          <div className="about-home-photo">
            <img src={homeImage} alt="Modern home supported by Expert Finance" />
          </div>

          <div className="about-home-stats">
            <div className="about-home-stat">
              <span className="about-home-stat-number">Assisted more than thousands clients</span>
            </div>
            <div className="about-home-stat">
              <span className="about-home-stat-number">10+ yrs</span>
              <span className="about-home-stat-label">
                combined experience in lending &amp; insurance
              </span>
            </div>
            <div className="about-home-stat">
              <span className="about-home-stat-number">NZ-wide</span>
              <span className="about-home-stat-label">
                clients supported via online, phone &amp; in-person meetings
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHomeSection;
