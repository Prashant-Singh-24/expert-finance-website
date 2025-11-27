import React from "react";
import { insuranceTypes } from "../data";

function Insurance() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-kicker">Insurance & Protection</span>
        <h2 className="section-title">
          Protect your income, lifestyle, and loved ones
        </h2>
        <p className="section-subtitle">
          Lending and investing are only part of the puzzle. We also help you
          put insurance in place so that illness, injury, or unexpected events
          don’t undo years of hard work.
        </p>
      </div>

      <div className="card-grid" style={{ marginBottom: "24px" }}>
        {insuranceTypes.map((ins) => (
          <div className="card" key={ins.title}>
            <div className="card-title">{ins.title}</div>
            <div className="card-text">{ins.description}</div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-title">How we work with insurers</div>
        <p className="card-text">
          We compare policy options across a range of New Zealand insurers and
          recommend cover types and levels that align with your cash-flow and
          goals.
        </p>
        <ul style={{ fontSize: "13px", color: "#4b5563" }}>
          <li>Needs analysis: what would you want to happen if something went wrong?</li>
          <li>Compare policy wordings, benefits, and exclusions</li>
          <li>Set up cover and assist if you need to claim</li>
          <li>Regular reviews as your life circumstances change</li>
        </ul>
        <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "8px" }}>
          Premiums are paid directly to the insurer. In most cases we are paid
          via commission from the insurer; if we charge a fee, we will agree
          this with you in advance.
        </p>
      </div>
    </section>
  );
}

export default Insurance;
