import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "Jaspreet Parmar",
    text:
      "Anand has been our mortgage adviser for more than five years. He’s extremely knowledgeable, professional, and always available when we need him. We recommend him with confidence.",
    tag: "Long-term mortgage client"
  },
  {
    name: "Gurwant Singh",
    text:
      "Very reliable and professional. Anand helped us secure sharp rates and great cash-back, and made the whole lending process straightforward.",
    tag: "Home loan & cash-back"
  },
  {
    name: "Brijesh Patel",
    text:
      "Highly recommend Expert Finance for any mortgage or insurance needs. The team know their stuff and the advice is always clear and practical.",
    tag: "Mortgage & insurance"
  },
  {
    name: "Akash Padayachi",
    text:
      "Anand treated us like family, not just clients. We felt genuinely supported throughout and knew he cared about getting the right result for us.",
    tag: "Family-focused support"
  },
  {
    name: "Avneel Kumar",
    text:
      "I worked with Amit from Expert Finance for my insurance and was very happy with the outcome and the service. Definitely recommend.",
    tag: "Insurance client"
  },
  {
    name: "Gurtej Sandha",
    text:
      "Awesome people. Anand is polite, patient and guided us through each step so we always understood what was happening.",
    tag: "Guidance & service"
  },
  {
    name: "Anil Kumar",
    text:
      "Excellent service. Anand explained every stage of the home loan clearly so the process felt simple instead of stressful. Highly recommend.",
    tag: "First home loan"
  }
];

function ClientIntro() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-advance the carousel a bit faster (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length);
    }, 3000); // was 5000

    return () => clearInterval(interval);
  }, []);

  // Get 3 reviews starting from current index (with wrap-around)
  const visibleReviews = [];
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(startIndex + i) % reviews.length]);
  }

  return (
    <section className="video-banner-section">
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

      {/* THIS OVERLAY COLOR WILL COME FROM CSS – we won't touch it there */}
      <div className="video-banner-overlay" />

      <div className="video-banner-content">
        <div className="video-banner-inner">
          
          <h2 className="video-banner-title">
            See what our clients say about us.
          </h2>

          <div className="review-carousel">
            <div className="review-window">
              <div className="review-track">
                {visibleReviews.map((review, idx) => (
                  <div
                    className="review-card"
                    key={`${review.name}-${idx}`}
                  >
                    <div className="review-stars">★★★★★</div>
                    <p className="review-text">{review.text}</p>
                    <div className="review-name">{review.name}</div>
                    <div className="review-tag">{review.tag}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

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