import React, { useEffect, useState } from "react";

const services = [
  // LOANS
  {
    category: "Loans",
    title: "Mortgages",
    subtitle: "Home loan specialists",
    icon: "🏠",
  },
  {
    category: "Loans",
    title: "First Home Buyers",
    subtitle: "Complete first home guidance",
    icon: "🐖",
  },
  {
    category: "Loans",
    title: "Investment Property",
    subtitle: "Property investment finance",
    icon: "📈",
  },
  {
    category: "Loans",
    title: "Refinancing",
    subtitle: "Better rates & loan reviews",
    icon: "🔄",
  },
  {
    category: "Loans",
    title: "Construction Loans",
    subtitle: "Building & renovation finance",
    icon: "🛠️",
  },
  {
    category: "Loans",
    title: "Commercial Property",
    subtitle: "Business property mortgages",
    icon: "🏢",
  },

  // PROTECTION
  {
    category: "Protection",
    title: "Life Insurance",
    subtitle: "Family financial protection",
    icon: "💙",
  },
  {
    category: "Protection",
    title: "Income Protection",
    subtitle: "Salary continuation cover",
    icon: "💼",
  },
  {
    category: "Protection",
    title: "Health & Trauma",
    subtitle: "Medical & critical illness",
    icon: "🏥",
  },
  {
    category: "Protection",
    title: "Mortgage Protection",
    subtitle: "Home loan payment cover",
    icon: "🏡",
  },

  // BUSINESS
  {
    category: "Business",
    title: "Business Loans",
    subtitle: "Business acquisition & working capital",
    icon: "📊",
  },
  {
    category: "Business",
    title: "Business Finance",
    subtitle: "Smart funding for growth and success",
    icon: "🚀",
  },
  {
    category: "Business",
    title: "Equipment Finance",
    subtitle: "Vehicle & machinery funding",
    icon: "🚚",
  },
];

function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const interval = setInterval(() => {
      // alternate direction left / right each step
      setDirection((prev) => (prev === "right" ? "left" : "right"));
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2800); // 2.8s per service, feels smooth

    return () => clearInterval(interval);
  }, []);

  const len = services.length;
  const center = services[activeIndex];
  const left = services[(activeIndex - 1 + len) % len];
  const right = services[(activeIndex + 1) % len];

  return (
    <section className="section services-section">
      <div className="section-header">
        <span className="section-kicker">Our Services</span>
        <h2 className="section-title">
          Loans, protection &amp; business finance under one roof.
        </h2>
        <p className="section-subtitle">
          From first-home buyers to seasoned investors and business owners, we
          help you structure lending and protection so everything works together.
        </p>
      </div>

      <div className="services-carousel">
        {/* Left (previous) card */}
        <div className="services-card services-card-side services-card-left">
          <ServiceCardContent service={left} />
        </div>

        {/* Centre (active) card with directional animation */}
        <div
          className={`services-card services-card-center ${
            direction === "left"
              ? "services-slide-in-left"
              : "services-slide-in-right"
          }`}
        >
          <ServiceCardContent service={center} />
        </div>

        {/* Right (next) card */}
        <div className="services-card services-card-side services-card-right">
          <ServiceCardContent service={right} />
        </div>
      </div>
    </section>
  );
}

function ServiceCardContent({ service }) {
  return (
    <>
      <div className="services-card-icon">{service.icon}</div>
      <div className="services-card-category">{service.category}</div>
      <div className="services-card-title">{service.title}</div>
      <div className="services-card-subtitle">{service.subtitle}</div>
    </>
  );
}

export default ServicesShowcase;
