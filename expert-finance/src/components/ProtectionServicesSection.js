import React from "react";
import { Link } from "react-router-dom";

// 🔹 Use the same image names you already have in src/assets
import lifeImg from "../assets/icon-life-insurance.jpg";
import incomeImg from "../assets/icon-income-protection.png";
import healthImg from "../assets/icon-health-trauma.png";
import mortgageImg from "../assets/icon-mortgage-protection.png";

const protectionServices = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    tagline: "Family financial protection",
    description:
      "Lump-sum cover to help your family clear debt, replace income, and stay financially secure if you were to pass away.",
    image: lifeImg,
  },
  {
    id: "income-protection",
    title: "Income Protection",
    tagline: "Salary continuation cover",
    description:
      "Ongoing payments to replace a portion of your income if illness or injury stops you from working for an extended period.",
    image: incomeImg,
  },
  {
    id: "health-trauma",
    title: "Health & Trauma",
    tagline: "Medical & critical illness",
    description:
      "Cover for serious illnesses or medical events, providing a lump sum so you can focus on recovery rather than bills.",
    image: healthImg,
  },
  {
    id: "mortgage-protection",
    title: "Mortgage Protection",
    tagline: "Home loan payment cover",
    description:
      "Helps cover your home loan repayments if you become unable to work due to illness, injury, or redundancy.",
    image: mortgageImg,
  },
];

// Duplicate the list to create a smooth infinite loop
const loopedProtection = [...protectionServices, ...protectionServices];

function ProtectionServicesSection() {
  return (
    <section className="section protection-services-section">
      <div className="section-header">
        <span className="section-kicker">Protection</span>
        <h2 className="section-title">
          Insurance that works alongside your lending.
        </h2>
        <p className="section-subtitle">
          We help you align life, income, health, and mortgage cover with your
          home loan and wider financial plan, so the people you care about are
          protected if life takes a turn.
        </p>
      </div>

      {/* Continuous loop – RIGHT to LEFT */}
      <div className="protection-loop-wrapper">
        <div className="protection-loop-track">
          {loopedProtection.map((service, idx) => (
            <div
              className="protection-loop-card"
              key={`${service.id}-${idx}`}
            >
              <div className="protection-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="protection-card-content">
                <div className="protection-card-tag">
                  {service.tagline}
                </div>
                <h3 className="protection-card-title">
                  {service.title}
                </h3>
                <p className="protection-card-description">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="protection-card-link"
                >
                  Talk to us about {service.title.toLowerCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProtectionServicesSection;
