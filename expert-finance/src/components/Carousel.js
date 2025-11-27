import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Buying your first home",
    text: "From KiwiSaver to deposit options and lender criteria, we’ll guide you from ‘where do I start?’ to holding the keys.",
    image: "https://via.placeholder.com/500x280?text=First+Home" // replace later with a real image
  },
  {
    id: 2,
    title: "Refinancing for a better structure",
    text: "We review your existing lending, compare banks, and help you restructure so your money works harder for you.",
    image: "https://via.placeholder.com/500x280?text=Refinance"
  },
  {
    id: 3,
    title: "Investing in a second property",
    text: "We’ll look at equity, rental yield, and lending options so you can confidently take the next step in your portfolio.",
    image: "https://via.placeholder.com/500x280?text=Investment"
  }
];

function Carousel() {
  const [index, setIndex] = useState(0);

  // auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx) => {
    const total = slides.length;
    if (idx < 0) idx = total - 1;
    if (idx >= total) idx = 0;
    setIndex(idx);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`carousel-slide ${i === index ? "active" : "inactive"}`}
          >
            <div className="carousel-img-wrapper">
              <img
                src={slide.image}
                alt={slide.title}
                className="carousel-img"
              />
            </div>
            <div className="carousel-content">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel-arrow left"
        onClick={prev}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        type="button"
        className="carousel-arrow right"
        onClick={next}
        aria-label="Next"
      >
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            className={`carousel-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
