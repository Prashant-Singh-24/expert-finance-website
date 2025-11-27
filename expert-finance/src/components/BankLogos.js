import React from "react";

const banks = [
  { name: "ANZ", logo: "" },
  { name: "ASB", logo: "" },
  { name: "Westpac", logo: "" },
  { name: "BNZ", logo: "" },
  { name: "Kiwibank", logo: "" },
  { name: "SBS Bank", logo: "" },
  { name: "TSB", logo: "" }
];

function BankLogos() {
  return (
    <section className="section bank-logos-section">
      <div className="section-header">
        <span className="section-kicker">Lenders we work with</span>
        <h2 className="section-title">
          Access to popular New Zealand banks & lenders
        </h2>
        <p className="section-subtitle">
          We’ll compare options across a wide panel of lenders so you’re not
          limited to a single bank when making big financial decisions.
        </p>
      </div>

      <div className="bank-logos-row">
        {banks.map((bank) => (
          <div key={bank.name} className="bank-logo-card">
            {bank.logo ? (
              <img src={bank.logo} alt={`${bank.name} logo`} />
            ) : (
              <span className="bank-logo-text">{bank.name}</span>
            )}
          </div>
        ))}
      </div>

      <p className="bank-logos-note">
        Note: Update this list and add actual logos for the lenders you are
        accredited with, once you have permission to display them.
      </p>
    </section>
  );
}

export default BankLogos;