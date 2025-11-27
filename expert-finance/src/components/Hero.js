import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          <span>Expert Finance • Auckland & NZ-wide</span>
        </div>

        <h1 className="hero-title">
          Smarter <span className="hero-highlight">mortgage & finance</span>{" "}
          advice Tailored for you.
        </h1>

        {/* Single hook line – short & punchy */}
        <p className="hero-punchline">
         The right home, the right loan, the right strategy — without the stress.
        </p>

        {/* CTAs – both buttons use the same primary style now */}
        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={() => navigate("/contact")}
          >
            Book a free consultation
          </button>
          <button
            className="btn-primary"
            onClick={() => navigate("/calculator")}
          >
            Try our loan calculator
          </button>
        </div>

        {/* Optional: keep quick benefit pills under the buttons */}
        <div className="hero-usp-row">
          <div className="hero-usp-pill">
            No cost to you — we’re paid by lenders
          </div>
          <div className="hero-usp-pill">
            Access to major New Zealand banks & lenders
          </div>
          <div className="hero-usp-pill">
            Online, phone, or in-person appointments
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
