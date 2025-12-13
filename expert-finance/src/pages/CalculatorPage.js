import React, { useState } from "react";

const MAX_CALCS = 3;

const makeId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

// Keep inputs as TEXT so user can type freely
const defaultCalc = (id = makeId()) => ({
  id,
  name: "Scenario",
  loanAmount: "650000",
  deposit: "130000",
  interestRate: "6.99",
  termYears: "30",
  frequency: "weekly", // weekly | fortnightly | monthly
  repaymentType: "principal_interest", // principal_interest | interest_only
  interestOnlyYears: "5",
  extraPayment: "0",
});

function parseNum(val) {
  if (val === null || val === undefined) return NaN;
  if (typeof val === "number") return val;
  const cleaned = String(val).replace(/[^0-9.-]/g, ""); // removes commas, $ etc.
  if (cleaned === "" || cleaned === "-" || cleaned === "." || cleaned === "-.") return NaN;
  return Number(cleaned);
}

function clamp(n, min, max) {
  if (!Number.isFinite(n)) return NaN;
  return Math.min(max, Math.max(min, n));
}

function normalizeMoney(val, min = 0, max = 100000000) {
  const n = clamp(parseNum(val), min, max);
  if (!Number.isFinite(n)) return String(min);
  return String(Math.round(n));
}

function normalizeDecimal(val, min, max, decimals = 2) {
  const n = clamp(parseNum(val), min, max);
  if (!Number.isFinite(n)) return (min || 0).toFixed(decimals);
  return n.toFixed(decimals);
}

function normalizeInt(val, min, max) {
  const n = clamp(parseNum(val), min, max);
  if (!Number.isFinite(n)) return String(min);
  return String(Math.round(n));
}

function fmtMoney(n) {
  if (!Number.isFinite(n)) return "$0";
  return n.toLocaleString("en-NZ", { style: "currency", currency: "NZD" });
}

function fmtPct(n) {
  if (!Number.isFinite(n)) return "0%";
  return `${n.toFixed(2)}%`;
}

function getPeriodsPerYear(freq) {
  if (freq === "weekly") return 52;
  if (freq === "fortnightly") return 26;
  return 12;
}

function calcMortgage(calc) {
  const price = Math.max(0, parseNum(calc.loanAmount) || 0);
  const deposit = Math.max(0, parseNum(calc.deposit) || 0);
  const principal = Math.max(0, price - deposit);

  const interestRate = Math.max(0, parseNum(calc.interestRate) || 0);
  const termYears = Math.max(1, parseNum(calc.termYears) || 1);
  const extraPayment = Math.max(0, parseNum(calc.extraPayment) || 0);

  const ppy = getPeriodsPerYear(calc.frequency);
  const r = (interestRate / 100) / ppy;
  const nTotal = Math.max(1, Math.round(termYears * ppy));

  if (principal <= 0) {
    return {
      principal: 0,
      payment: 0,
      totalInterest: 0,
      totalPaid: 0,
      payoffPeriods: 0,
      schedulePreview: [],
    };
  }

  const piBase =
    r === 0
      ? principal / nTotal
      : (principal * r) / (1 - Math.pow(1 + r, -nTotal));

  const ioPayment = principal * r;

  const repaymentType = calc.repaymentType;
  const interestOnlyYears = Math.max(0, parseNum(calc.interestOnlyYears) || 0);

  const ioPeriods =
    repaymentType === "interest_only"
      ? Math.min(nTotal, Math.round(interestOnlyYears * ppy))
      : 0;

  let balance = principal;
  let totalInterest = 0;
  let totalPaid = 0;
  let payoffPeriods = 0;

  let basePayment = repaymentType === "interest_only" ? ioPayment : piBase;

  const schedulePreview = [];
  const maxSim = 200 * ppy;

  for (let i = 1; i <= Math.min(nTotal, maxSim); i++) {
    const isIOPhase = repaymentType === "interest_only" && i <= ioPeriods;

    if (repaymentType === "interest_only" && i === ioPeriods + 1) {
      const remainingPeriods = Math.max(1, nTotal - ioPeriods);
      basePayment =
        r === 0
          ? balance / remainingPeriods
          : (balance * r) / (1 - Math.pow(1 + r, -remainingPeriods));
    }

    const interest = balance * r;
    let paymentThisPeriod = (isIOPhase ? balance * r : basePayment) + extraPayment;

    if (paymentThisPeriod < interest) paymentThisPeriod = interest;

    let principalPaid = paymentThisPeriod - interest;

    if (principalPaid > balance) {
      principalPaid = balance;
      paymentThisPeriod = interest + principalPaid;
    }

    balance -= principalPaid;
    totalInterest += interest;
    totalPaid += paymentThisPeriod;

    if (i <= 6) {
      schedulePreview.push({
        period: i,
        payment: paymentThisPeriod,
        interest,
        principal: principalPaid,
        balance: Math.max(0, balance),
      });
    }

    if (balance <= 0.0001) {
      payoffPeriods = i;
      break;
    }
  }

  if (payoffPeriods === 0) payoffPeriods = nTotal;

  schedulePreview.push({
    period: payoffPeriods,
    finalRow: true,
    balance: 0,
  });

  const shownPayment =
    (repaymentType === "interest_only" ? ioPayment : piBase) + extraPayment;

  return {
    principal,
    payment: shownPayment,
    totalInterest,
    totalPaid,
    payoffPeriods,
    schedulePreview,
  };
}

function SummaryStat({ label, value, hint }) {
  return (
    <div className="calc-stat">
      <div className="calc-stat-label">
        {label}
        {hint ? (
          <span className="calc-hint" title={hint}>
            ⓘ
          </span>
        ) : null}
      </div>
      <div className="calc-stat-value">{value}</div>
    </div>
  );
}

function Field({ label, children, sub }) {
  return (
    <div className="calc-field">
      <div className="calc-field-label">
        <span>{label}</span>
        {sub ? <span className="calc-field-sub">{sub}</span> : null}
      </div>
      {children}
    </div>
  );
}

export default function CalculatorPage() {
  const [calcs, setCalcs] = useState([{ ...defaultCalc(), name: "Scenario A" }]);

  // ✅ Only updates when user clicks Calculate
  const [computed, setComputed] = useState({}); // { [id]: result }

  const updateCalc = (id, patch) => {
    setCalcs((prev) => prev.map((c) => (c.id === id ? { ...c, ...patch } : c)));
    // IMPORTANT: do NOT compute here (no real-time results)
  };

  const doCalculate = (id) => {
    setCalcs((prev) => {
      const next = prev.map((c) => {
        if (c.id !== id) return c;

        const normalized = {
          loanAmount: normalizeMoney(c.loanAmount),
          deposit: normalizeMoney(c.deposit),
          interestRate: normalizeDecimal(c.interestRate, 0, 30, 2),
          termYears: normalizeInt(c.termYears, 1, 40),
          extraPayment: normalizeMoney(c.extraPayment, 0, 1000000),
          interestOnlyYears: normalizeInt(
            c.interestOnlyYears,
            0,
            Number(parseNum(c.termYears) || 40)
          ),
        };

        return { ...c, ...normalized };
      });

      const calculated = next.find((x) => x.id === id);
      setComputed((prevRes) => ({
        ...prevRes,
        [id]: calcMortgage(calculated),
      }));

      return next;
    });
  };

  const addCalc = () => {
    setCalcs((prev) => {
      if (prev.length >= MAX_CALCS) return prev;
      const nextIndex = prev.length + 1;
      return [
        ...prev,
        { ...defaultCalc(), name: `Scenario ${String.fromCharCode(64 + nextIndex)}` },
      ];
    });
  };

  const removeCalc = (id) => {
    setCalcs((prev) => prev.filter((c) => c.id !== id));
    setComputed((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const copyCalc = (id) => {
    setCalcs((prev) => {
      if (prev.length >= MAX_CALCS) return prev;
      const src = prev.find((c) => c.id === id);
      if (!src) return prev;
      const nextIndex = prev.length + 1;
      return [
        ...prev,
        { ...src, id: makeId(), name: `Scenario ${String.fromCharCode(64 + nextIndex)}` },
      ];
    });
  };

  return (
    <section className="section calc-page">
      <div className="section-header">
        <span className="section-kicker">Calculator</span>
        <h2 className="section-title">Mortgage Calculator</h2>
        <p className="section-subtitle">
          Calculate repayments and compare up to <b>3</b> scenarios (results update only when you click
          <b> Calculate</b>).
        </p>

        <div className="calc-actions">
          <button
            className="calc-btn calc-btn-primary"
            onClick={addCalc}
            disabled={calcs.length >= MAX_CALCS}
            type="button"
          >
            ➕ Add comparison
          </button>
          <div className="calc-actions-note">
            {calcs.length}/{MAX_CALCS} scenarios
          </div>
        </div>
      </div>

      <div className={`calc-grid calc-grid-${Math.min(calcs.length, 3)}`}>
        {calcs.map((c) => {
          const r = computed[c.id]; // ✅ only exists after Calculate
          const ppy = getPeriodsPerYear(c.frequency);
          const yearsToPayoff = r?.payoffPeriods ? r.payoffPeriods / ppy : 0;

          return (
            <div key={c.id} className="calc-card">
              <div className="calc-card-top">
                <input
                  className="calc-scenario-name"
                  value={c.name}
                  onChange={(e) => updateCalc(c.id, { name: e.target.value })}
                  aria-label="Scenario name"
                />

                <div className="calc-card-tools">
                  <button
                    className="calc-chip"
                    type="button"
                    onClick={() => copyCalc(c.id)}
                    disabled={calcs.length >= MAX_CALCS}
                    title="Duplicate this scenario"
                  >
                    ⧉ Copy
                  </button>
                  {calcs.length > 1 && (
                    <button
                      className="calc-chip danger"
                      type="button"
                      onClick={() => removeCalc(c.id)}
                      title="Remove this scenario"
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
              </div>

              {/* Enter key triggers Calculate */}
              <form
                className="calc-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  doCalculate(c.id);
                }}
              >
                <div className="calc-form-grid">
                  <Field label="Property price" sub="NZD">
                    <input
                      type="text"
                      inputMode="numeric"
                      className="calc-input"
                      value={c.loanAmount}
                      placeholder="e.g. 650,000"
                      onChange={(e) => updateCalc(c.id, { loanAmount: e.target.value })}
                    />
                  </Field>

                  <Field label="Deposit" sub="NZD">
                    <input
                      type="text"
                      inputMode="numeric"
                      className="calc-input"
                      value={c.deposit}
                      placeholder="e.g. 130,000"
                      onChange={(e) => updateCalc(c.id, { deposit: e.target.value })}
                    />
                  </Field>

                  <Field label="Interest rate" sub="p.a. (%)">
                    <input
                      type="text"
                      inputMode="decimal"
                      className="calc-input"
                      value={c.interestRate}
                      placeholder="e.g. 6.99"
                      onChange={(e) => updateCalc(c.id, { interestRate: e.target.value })}
                    />
                  </Field>

                  <Field label="Term" sub="years">
                    <input
                      type="text"
                      inputMode="numeric"
                      className="calc-input"
                      value={c.termYears}
                      placeholder="e.g. 30"
                      onChange={(e) => updateCalc(c.id, { termYears: e.target.value })}
                    />
                  </Field>

                  <Field label="Repayment frequency">
                    <select
                      className="calc-input"
                      value={c.frequency}
                      onChange={(e) => updateCalc(c.id, { frequency: e.target.value })}
                    >
                      <option value="weekly">Weekly</option>
                      <option value="fortnightly">Fortnightly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </Field>

                  <Field label="Repayment type">
                    <select
                      className="calc-input"
                      value={c.repaymentType}
                      onChange={(e) => updateCalc(c.id, { repaymentType: e.target.value })}
                    >
                      <option value="principal_interest">Principal & Interest</option>
                      <option value="interest_only">Interest-only</option>
                    </select>
                  </Field>

                  {c.repaymentType === "interest_only" && (
                    <Field label="Interest-only period" sub="years">
                      <input
                        type="text"
                        inputMode="numeric"
                        className="calc-input"
                        value={c.interestOnlyYears}
                        placeholder="e.g. 5"
                        onChange={(e) => updateCalc(c.id, { interestOnlyYears: e.target.value })}
                      />
                    </Field>
                  )}

                  <Field label="Extra repayments" sub={`per ${c.frequency}`}>
                    <input
                      type="text"
                      inputMode="numeric"
                      className="calc-input"
                      value={c.extraPayment}
                      placeholder="e.g. 50"
                      onChange={(e) => updateCalc(c.id, { extraPayment: e.target.value })}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  className="calc-btn calc-btn-primary calc-btn-full"
                  onClick={() => doCalculate(c.id)}
                >
                  Calculate
                </button>

                {/* RESULTS SHOW ONLY AFTER CALCULATE */}
                <div className="calc-results">
                  {!r ? (
                    <div className="calc-empty">
                      Click <b>Calculate</b> to see results.
                    </div>
                  ) : (
                    <>
                      <div className="calc-results-grid">
                        <SummaryStat
                          label="Loan amount"
                          value={fmtMoney(r.principal)}
                          hint="Property price minus deposit"
                        />
                        <SummaryStat label="Rate" value={fmtPct(parseNum(c.interestRate) || 0)} />
                        <SummaryStat
                          label={`Est. repayment (${c.frequency})`}
                          value={fmtMoney(r.payment)}
                          hint="Includes extra repayments"
                        />
                        <SummaryStat label="Total interest" value={fmtMoney(r.totalInterest)} />
                        <SummaryStat label="Total paid" value={fmtMoney(r.totalPaid)} />
                        <SummaryStat
                          label="Estimated payoff"
                          value={yearsToPayoff ? `${yearsToPayoff.toFixed(1)} years` : "—"}
                        />
                      </div>

                      <div className="calc-preview">
                        <div className="calc-preview-title">Repayment preview</div>

                        <div className="calc-table">
                          <div className="calc-row head">
                            <div>Period</div>
                            <div>Payment</div>
                            <div>Interest</div>
                            <div>Principal</div>
                            <div>Balance</div>
                          </div>

                          {(r.schedulePreview ?? []).map((row, idx) => {
                            if (row.finalRow) {
                              return (
                                <div className="calc-row final" key={`final-${idx}`}>
                                  <div>Final</div>
                                  <div>—</div>
                                  <div>—</div>
                                  <div>—</div>
                                  <div>{fmtMoney(0)}</div>
                                </div>
                              );
                            }

                            return (
                              <div className="calc-row" key={idx}>
                                <div>{row.period}</div>
                                <div>{fmtMoney(row.payment)}</div>
                                <div>{fmtMoney(row.interest)}</div>
                                <div>{fmtMoney(row.principal)}</div>
                                <div>{fmtMoney(row.balance)}</div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="calc-disclaimer">
                          Estimates only. Interest rates, fees, and actual bank calculations may differ.
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          );
        })}
      </div>
    </section>
  );
}
