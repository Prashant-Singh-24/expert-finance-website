import React from "react";
import LoanCalculator from "../components/LoanCalculator";

function CalculatorPage() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-kicker">Tools</span>
        <h2 className="section-title">Loan repayment calculator</h2>
        <p className="section-subtitle">
          Use this calculator as a starting point. Actual rates, fees, and
          criteria vary between lenders, so please contact us for personalised
          advice before making decisions.
        </p>
      </div>

      <div className="calculator-wrapper">
        <LoanCalculator />
        <div>
          <div className="card">
            <div className="card-title">What the numbers don’t show</div>
            <div className="card-text">
              <ul style={{ paddingLeft: "18px" }}>
                <li>Differences between fixed, floating, and revolving credit</li>
                <li>How extra payments or lump sums affect your loan term</li>
                <li>Whether splitting loans across banks could be beneficial</li>
                <li>How to structure lending around your wider goals</li>
              </ul>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#6b7280",
                marginTop: "8px"
              }}
            >
              That’s where personal advice comes in — book a free chat and
              we’ll walk through your options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CalculatorPage;
