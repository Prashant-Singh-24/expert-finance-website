import React from "react";

function ClientIntro() {
  return (
    <section className="video-banner-section">
      {/* Background video */}
      <video
        className="video-banner"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/banner-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for readability */}
      <div className="video-banner-overlay" />

      {/* Text + button on top of the video */}
      <div className="video-banner-content">
        <div className="video-banner-inner">
          <span className="section-kicker">A MESSAGE FROM YOUR ADVISER</span>

          <h2 className="video-banner-title">
            Helping 800+ clients move into the right home – and the right loan.
          </h2>

          <p className="video-banner-text">
            Over the years, I’ve worked with first-home buyers, investors, and
            self-employed clients who all had one thing in common: they wanted
            clarity and confidence around one of the biggest financial decisions
            of their lives.
          </p>

          <p className="video-banner-text">
            My role is to break down the numbers, explain the options in plain
            language, and design a lending structure that actually supports your
            bigger goals — not just the bank’s.
          </p>

          <ul className="video-banner-list">
            <li>Guidance from first conversation to settlement</li>
            <li>Support with documents, bank conversations, and next steps</li>
            <li>Ongoing reviews as interest rates and your life change</li>
          </ul>

          <p className="video-banner-signoff">
            Let’s explore what’s possible for you.
          </p>

          <a
            href="https://www.google.com/maps/place/Expert+Finance/@-36.9646867,174.9010332,17z/data=!4m8!3m7!1s0x6d0d4d165155d12f:0x9e4121e5b2e5ff7e!8m2!3d-36.9646867!4d174.9036135!9m1!1b1!16s%2Fg%2F11jzvn2rkp?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="video-banner-link"
          >
            View client reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default ClientIntro;
