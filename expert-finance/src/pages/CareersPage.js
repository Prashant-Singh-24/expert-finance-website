// src/pages/CareersPage.js
import React from "react";

function CareersPage() {
  return (
    <main className="section service-detail-section">
      <div className="section-header">
        <span className="section-kicker">Careers</span>
        <h1 className="section-title">Careers at Expert Finance</h1>
        <p className="section-subtitle">
          We’re not actively hiring at the moment, but we’re always happy to
          hear from great people who share our values.
        </p>
      </div>

      <div className="service-detail-body careers-body">
        <h2>We’re not hiring right now</h2>
        <p>
          At this time, Expert Finance is <strong>not recruiting for any open roles</strong>.
          Our current team is in place and focused on supporting our clients
          with mortgages, insurance, and long-term financial strategies.
        </p>

        <h3>Still want to work with us in the future?</h3>
        <p>
          If you’re passionate about helping people make confident financial
          decisions and you’d like to be considered for future opportunities,
          you’re welcome to send us:
        </p>
        <ul>
          <li>Your CV or professional profile</li>
          <li>A short introduction about yourself</li>
          <li>
            The type of role you’re interested in (e.g. mortgage adviser,
            insurance specialist, client support, admin, etc.)
          </li>
        </ul>
        <p>
          Please email your details to{" "}
          <a href="mailto:anand@expertfinance.co.nz">
            anand@expertfinance.co.nz
          </a>{" "}
          with the subject line <strong>“Careers – Expression of Interest”</strong>.
        </p>

        <h3>We’ll keep your details on file</h3>
        <p>
          We review expressions of interest periodically. If a suitable role
          comes up, we may get in touch to have a chat and learn more about you.
        </p>
        <p>
          In the meantime, thank you for your interest in Expert Finance and the
          work we do for our clients.
        </p>
      </div>
    </main>
  );
}

export default CareersPage;
