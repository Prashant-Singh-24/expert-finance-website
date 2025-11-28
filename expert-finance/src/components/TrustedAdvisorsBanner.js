import React from "react";
import trustedVideo from "../assets/trusted-advisors.mp4"; // 👈 make sure this path & name match your file

function TrustedAdvisorsBanner() {
  return (
    <section className="about-video-section">
      {/* Background video */}
      <video
        className="about-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={trustedVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent overlay for readability */}
      <div className="about-video-overlay" />

      {/* Text on top of video */}
      <div className="about-video-content">
        <div className="about-video-inner">
          <h2 className="about-video-title">
            Your Trusted Advisors in Homeownership &amp; Financial Success.
          </h2>

          <p className="about-video-text">
            At Expert Finance, we are committed to guiding individuals and
            families through the complexities of mortgages, home loans,
            refinancing, and strategic financial planning. With over a decade of
            industry expertise, we understand that every financial journey is
            unique.
          </p>
          <p className="about-video-text">
            Our goal is to provide personalized solutions that help you achieve
            your dreams — whether it&apos;s securing your first home, optimizing
            your mortgage, or saving on interest.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TrustedAdvisorsBanner;
