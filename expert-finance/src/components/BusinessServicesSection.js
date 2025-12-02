import React from "react";
import { Link } from "react-router-dom";

// 🔹 Add these images into src/assets with these names
import businessLoansImg from "../assets/business-loans.png";
import businessFinanceImg from "../assets/business-finance.png";
import equipmentFinanceImg from "../assets/equipment-finance.png";

const businessServices = [
  {
    id: "business-loans",
    title: "Business Loans",
    tagline: "Business acquisition & working capital",
    description:
      "Funding for purchasing a business, buying into a partnership, or smoothing cashflow so you can focus on growth instead of short-term pressure.",
    image: businessLoansImg,
  },
  {
    id: "business-finance",
    title: "Business Finance",
    tagline: "Smart funding for growth and success",
    description:
      "Structured lending solutions for expansion, marketing, additional staff, or new locations – aligned with your cashflow and long-term plans.",
    image: businessFinanceImg,
  },
  {
    id: "equipment-finance",
    title: "Equipment Finance",
    tagline: "Vehicle & machinery funding",
    description:
      "Specialised finance for vehicles, plant, and equipment so you can upgrade or expand your fleet without tying up working capital.",
    image: equipmentFinanceImg,
  },
];

// Duplicate the list to create a smooth infinite loop
const loopedBusiness = [...businessServices, ...businessServices];

function BusinessServicesSection() {
  return (
    <section className="section business-services-section">
      <div className="section-header">
        <span className="section-kicker">Business</span>
        <h2 className="section-title">
          Finance to help your business move forward.
        </h2>
        <p className="section-subtitle">
          From day-to-day cashflow to growth, acquisitions and equipment, we
          help you match the right structure and lender to your business
          strategy.
        </p>
      </div>

      {/* Continuous loop – LEFT to RIGHT */}
      <div className="business-loop-wrapper">
        <div className="business-loop-track">
          {loopedBusiness.map((service, idx) => (
            <div className="business-loop-card" key={`${service.id}-${idx}`}>
              <div className="business-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="business-card-content">
                <div className="business-card-tag">{service.tagline}</div>
                <h3 className="business-card-title">{service.title}</h3>
                <p className="business-card-description">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.id}`}
                  className="business-card-link"
                >
                  Learn more about {service.title.toLowerCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessServicesSection;
