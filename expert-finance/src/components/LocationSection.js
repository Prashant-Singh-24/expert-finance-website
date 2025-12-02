// src/components/LocationSection.js
import React from "react";

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Suite%20E3%2C%20123%20Ormiston%20Rod&z=17&t=m&output=embed&iwdloc=near";

const MAP_LINK =
  "https://www.google.com/maps/place/Expert+Finance/@-36.9646867,174.9010332,17z/data=!4m8!3m7!1s0x6d0d4d165155d12f:0x9e4121e5b2e5ff7e!8m2!3d-36.9646867!4d174.9036135!9m1!1b1!16s%2Fg%2F11jzvn2rkp?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D";

function LocationSection() {
  return (
    <section className="section location-section">
      {/* Centered heading */}
      <div className="location-header">
        <span className="section-kicker">Visit us</span>
        <h2 className="section-title location-title-center">
          Here’s where you’ll find Expert Finance.
        </h2>
        <p className="section-subtitle location-subtitle-center">
          Whether you’re nearby or coming from across Auckland, our office is
          easy to get to – and we’re just as happy to meet online if that suits
          you better.
        </p>
      </div>

      {/* Two equal cards */}
      <div className="location-cards">
        {/* Card 1 – address details */}
        <div className="location-card location-card-text">
          <h3 className="location-name">Expert Finance</h3>
          <p className="location-address">
            Suite E3, 123 Ormiston Road
            <br />
            Flat Bush, Auckland 2019
            <br />
            New Zealand
          </p>
          <p className="location-note">
            Meetings are by appointment — we’ll confirm a time that fits your
            schedule and how you prefer to meet.
          </p>

          <ul className="location-points">
            <li>Easy access from East &amp; South Auckland</li>
            <li>Parking options nearby</li>
            <li>Online video appointments also available</li>
          </ul>

          <a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn location-btn"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Card 2 – map */}
        <div className="location-card location-card-map">
          <div className="location-map-inner">
            <iframe
              src={MAP_EMBED_SRC}
              title="Expert Finance office location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="location-map-overlay"
              aria-label="Open Expert Finance in Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
