import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Re-use the same images you already have
import mortgagesImg from "../assets/loan-mortgages.jpg";
import firstHomeImg from "../assets/loan-first-home.png";
import investmentImg from "../assets/loan-investment.png";
import refinancingImg from "../assets/loan-refinancing.jpg";
import constructionImg from "../assets/loan-construction.jpg";
import commercialImg from "../assets/loan-commercial.jpg";

import lifeImg from "../assets/icon-life-insurance.jpg";
import incomeImg from "../assets/icon-income-protection.png";
import healthImg from "../assets/icon-health-trauma.png";
import mortgageImg from "../assets/icon-mortgage-protection.png";

import businessLoansImg from "../assets/business-loans.png";
import businessFinanceImg from "../assets/business-finance.png";
import equipmentFinanceImg from "../assets/equipment-finance.png";

const serviceDetails = {
  // LOANS
  "mortgages": {
    id: "mortgages",
    category: "Loans",
    title: "Mortgages",
    tagline: "Home loan specialists",
    description:
      "Tailored home loan structures across major New Zealand banks and specialist lenders, designed to match your deposit, income, and long-term goals.",
    image: mortgagesImg,
  },
  "first-home-buyers": {
    id: "first-home-buyers",
    category: "Loans",
    title: "First Home Buyers",
    tagline: "Complete first home guidance",
    description:
      "Support with budgeting, pre-approvals, KiwiSaver and First Home Grant, right through to settlement so your first purchase feels clear and achievable.",
    image: firstHomeImg,
  },
  "investment-property": {
    id: "investment-property",
    category: "Loans",
    title: "Investment Property",
    tagline: "Property investment finance",
    description:
      "Smart lending structures for rental properties and portfolios, including interest-only options, split banking strategies, and long-term planning.",
    image: investmentImg,
  },
  "refinancing": {
    id: "refinancing",
    category: "Loans",
    title: "Refinancing",
    tagline: "Better rates & loan reviews",
    description:
      "We review your existing lending to improve rates, cash-backs, and structure — helping you pay less interest and get debt-free sooner where possible.",
    image: refinancingImg,
  },
  "construction-loans": {
    id: "construction-loans",
    category: "Loans",
    title: "Construction Loans",
    tagline: "Building & renovation finance",
    description:
      "Finance for new builds, renovations, and extensions, including progress payments, turn-key builds, and working with your builder or developer.",
    image: constructionImg,
  },
  "commercial-property": {
    id: "commercial-property",
    category: "Loans",
    title: "Commercial Property",
    tagline: "Business property mortgages",
    description:
      "Lending solutions for owner-occupied or investment commercial premises, aligned with your cashflow, lease profile, and wider business plans.",
    image: commercialImg,
  },

  // PROTECTION
  "life-insurance": {
    id: "life-insurance",
    category: "Protection",
    title: "Life Insurance",
    tagline: "Family financial protection",
    description:
      "Lump-sum cover to help your family clear debt, replace income, and stay financially secure if you were to pass away.",
    image: lifeImg,
  },
  "income-protection": {
    id: "income-protection",
    category: "Protection",
    title: "Income Protection",
    tagline: "Salary continuation cover",
    description:
      "Monthly payments that replace a portion of your income if illness or injury stops you from working for an extended period.",
    image: incomeImg,
  },
  "health-trauma": {
    id: "health-trauma",
    category: "Protection",
    title: "Health & Trauma",
    tagline: "Medical & critical illness",
    description:
      "Cover for serious illnesses or medical events, providing a lump sum so you can focus on recovery rather than bills.",
    image: healthImg,
  },
  "mortgage-protection": {
    id: "mortgage-protection",
    category: "Protection",
    title: "Mortgage Protection",
    tagline: "Home loan payment cover",
    description:
      "Helps cover your home loan repayments if you become unable to work due to illness, injury, or redundancy.",
    image: mortgageImg,
  },

  // BUSINESS
  "business-loans": {
    id: "business-loans",
    category: "Business",
    title: "Business Loans",
    tagline: "Business acquisition & working capital",
    description:
      "Funding for purchasing a business, buying into a partnership, or smoothing cashflow so you can focus on growth.",
    image: businessLoansImg,
  },
  "business-finance": {
    id: "business-finance",
    category: "Business",
    title: "Business Finance",
    tagline: "Smart funding for growth and success",
    description:
      "Structured lending for expansion, marketing, additional staff, or new locations – aligned with your cashflow and long-term plans.",
    image: businessFinanceImg,
  },
  "equipment-finance": {
    id: "equipment-finance",
    category: "Business",
    title: "Equipment Finance",
    tagline: "Vehicle & machinery funding",
    description:
      "Specialised finance for vehicles, plant, and equipment so you can upgrade or expand your fleet without tying up working capital.",
    image: equipmentFinanceImg,
  },
};

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceDetails[serviceId];

  if (!service) {
    return (
      <section className="section service-detail-section">
        <h1>Service not found</h1>
        <p>The service you’re looking for doesn’t exist or has moved.</p>
      </section>
    );
  }

  return (
    <section className="section service-detail-section">
      <div className="service-detail-hero">
        <div className="service-detail-hero-text">
          <span className="service-detail-category">
            {service.category}
          </span>
          <h1 className="service-detail-title">{service.title}</h1>
          <p className="service-detail-tagline">{service.tagline}</p>
        </div>

        <div className="service-detail-hero-image">
          <img src={service.image} alt={service.title} />
        </div>
      </div>

      <div className="service-detail-body">
        <p className="service-detail-description">{service.description}</p>

        <ul className="service-detail-points">
          <li>Personalised structure based on your goals and timeframe.</li>
          <li>Access to multiple banks and specialist lenders.</li>
          <li>Guidance through paperwork, approvals, and next steps.</li>
          <li>Ongoing reviews as interest rates and life circumstances change.</li>
        </ul>

        {/* CTA BUTTON ON EVERY SERVICE PAGE */}
        <button
          className="primary-btn"
          onClick={() => navigate("/contact")}
        >
          Book a free consultation
        </button>
      </div>
    </section>
  );
}

export default ServiceDetailPage;
