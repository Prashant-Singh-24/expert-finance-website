import React from "react";
import { mortgageServices } from "../data";

function Mortgages() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-kicker">Mortgage Advice</span>
        <h2 className="section-title">
          First home, investment, business lending & restructuring
        </h2>
        <p className="section-subtitle">
          We’ll help you understand how much you can borrow, the right way to
          structure your loans, and which lenders are a strong fit for your
          situation — so you’re not guessing with your largest financial
          decisions.
        </p>
      </div>

      <div className="subnav">
        <a href="#first-home">First Home</a>
        <a href="#investment">Property Investment</a>
        <a href="#business">Business Loan</a>
        <a href="#restructure">Loan Restructuring</a>
        <a href="#debt">Debt Consolidation</a>
        <a href="#mortgage-insurance">Mortgage Insurance</a>
      </div>

      {mortgageServices.map((service) => (
        <section
          key={service.id}
          id={service.id}
          style={{ marginBottom: "30px" }}
        >
          <div className="card">
            <div className="card-icon">{service.icon}</div>
            <div className="card-title">{service.title}</div>
            <p className="card-text">{service.short}</p>
            <ul style={{ fontSize: "13px", color: "#4b5563" }}>
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <div className="card" style={{ marginTop: "20px" }}>
        <div className="card-title">Our process</div>
        <ol style={{ fontSize: "13px", color: "#4b5563", paddingLeft: "18px" }}>
          <li>Quick call or online meeting to understand your goals</li>
          <li>
            We request supporting information (income, assets, liabilities, etc.)
          </li>
          <li>
            We compare lender options and propose structures that match your
            situation
          </li>
          <li>We handle application paperwork and negotiation with lenders</li>
          <li>
            After settlement, we keep in touch and review your lending regularly
          </li>
        </ol>
        <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>
          There is usually no cost to you for our mortgage advice — we are paid
          by the lender when your loan is settled (we will always let you know
          if a fee applies in your case).
        </p>
      </div>
    </section>
  );
}

export default Mortgages;
