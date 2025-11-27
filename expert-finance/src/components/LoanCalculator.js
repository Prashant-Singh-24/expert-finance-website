import React, { useState } from "react";

function LoanCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("6.5");
  const [termYears, setTermYears] = useState("30");
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(termYears) * 12;

    if (!P || !r || !n) {
      setResult(null);
      return;
    }

    const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    const interest = total - P;

    setResult({
      monthly: monthly.toFixed(2),
      total: total.toFixed(2),
      interest: interest.toFixed(2)
    });
  };

  return (
    <div className="calculator-card">
      <h3 style={{ marginTop: 0 }}>Loan Repayment Calculator</h3>
      <p style={{ fontSize: "13px", color: "#5f6473" }}>
        Estimate your repayments before you speak with an adviser. For tailored
        advice, please contact us — this tool is a guide only.
      </p>

      <form onSubmit={calculate}>
        <div className="form-row">
          <label htmlFor="amount">Loan amount (NZD)</label>
          <input
            id="amount"
            type="number"
            min="0"
            step="1000"
            placeholder="e.g. 750000"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="rate">Interest rate (% p.a.)</label>
          <input
            id="rate"
            type="number"
            min="0"
            step="0.05"
            placeholder="e.g. 6.5"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="term">Loan term (years)</label>
          <input
            id="term"
            type="number"
            min="1"
            max="40"
            step="1"
            placeholder="e.g. 30"
            value={termYears}
            onChange={(e) => setTermYears(e.target.value)}
          />
        </div>
        <button className="btn-primary" type="submit">
          Calculate repayments
        </button>
      </form>

      {result && (
        <div className="result-box">
          <div>
            <strong>Estimated monthly repayment:</strong> ${result.monthly}
          </div>
          <div>Total repaid over term: ${result.total}</div>
          <div>Approximate interest paid: ${result.interest}</div>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
