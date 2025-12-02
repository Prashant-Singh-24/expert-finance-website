import React from "react";
import { Link } from "react-router-dom";

// 🔹 Import separate images for each service
// Make sure these filenames match what you actually have in src/assets
import mortgagesImg from "../assets/loan-mortgages.jpg";
import firstHomeImg from "../assets/loan-first-home.png";
import investmentImg from "../assets/loan-investment.png";
import refinancingImg from "../assets/loan-refinancing.jpg";
import constructionImg from "../assets/loan-construction.jpg";
import commercialImg from "../assets/loan-commercial.jpg";

const loanServices = [
  {
    id: "mortgages",
    title: "Mortgages",
    tagline: "Home loan specialists",
    description:
      "Tailored home loan structures across major New Zealand banks and specialist lenders, designed to match your deposit, income, and long-term goals.",
    image: mortgagesImg,
  },
  {
    id: "first-home-buyers",
    title: "First Home Buyers",
    tagline: "Complete first home guidance",
    description:
      "Support with budgeting, pre-approvals, KiwiSaver and First Home Grant, right through to settlement so your first purchase feels clear and achievable.",
    image: firstHomeImg,
  },
  {
    id: "investment-property",
    title: "Investment Property",
    tagline: "Property investment finance",
    description:
      "Smart lending structures for rental properties and portfolios, including interest-only options, split banking strategies, and long-term planning.",
    image: investmentImg,
  },
  {
    id: "refinancing",
    title: "Refinancing",
    tagline: "Better rates & loan reviews",
    description:
      "We review your existing lending to improve rates, cash-backs, and structure — helping you pay less interest and get debt-free sooner where possible.",
    image: refinancingImg,
  },
  {
    id: "construction-loans",
    title: "Construction Loans",
    tagline: "Building & renovation finance",
    description:
      "Finance for new builds, renovations, and extensions, including progress payments, turn-key builds, and working with your builder or developer.",
    image: constructionImg,
  },
  {
    id: "commercial-property",
    title: "Commercial Property",
    tagline: "Business property mortgages",
    description:
      "Lending solutions for owner-occupied or investment commercial premises, aligned with your cashflow, lease profile, and wider business plans.",
    image: commercialImg,
  },
];

// Duplicate the list to create a smooth infinite loop
const loopedLoans = [...loanServices, ...loanServices];

function LoanServicesSection() {
  return (
    <section className="section loan-services-section">
      <div className="section-header">
        <span className="section-kicker">Loans</span>
        <h2 className="section-title">
          Lending advice for every stage of your journey.
        </h2>
        <p className="section-subtitle">
          From buying your first home to expanding an investment portfolio or
          restructuring existing lending, we help you find the right bank,
          structure, and strategy.
        </p>
      </div>

      {/* Continuous loop */}
      <div className="loan-loop-wrapper">
        <div className="loan-loop-track">
          {loopedLoans.map((service, idx) => (
            <div className="loan-loop-card" key={`${service.id}-${idx}`}>
              <div className="loan-card-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="loan-card-content">
                <div className="loan-card-tag">{service.tagline}</div>
                <h3 className="loan-card-title">{service.title}</h3>
                <p className="loan-card-description">{service.description}</p>

                <Link to={`/services/${service.id}`} className="loan-card-link">
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

export default LoanServicesSection;
