import React from "react";
import { teamMembers } from "../data";

function About() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-kicker">About Expert Finance</span>
        <h2 className="section-title">
          Independent mortgage & financial advice you can trust
        </h2>
        <p className="section-subtitle">
          We’re a New Zealand-owned mortgage and insurance advisory business
          focused on practical, plain-English advice that helps you make strong
          decisions at each stage of your financial journey.
        </p>
      </div>

      <div className="subnav">
        <a href="#our-team">Our team</a>
        <a href="#privacy">Privacy</a>
        <a href="#disclosure">Disclosure</a>
      </div>

      <section id="our-team" style={{ marginBottom: "30px" }}>
        <h3>Our team</h3>
        <p className="section-subtitle">
          We combine lending experience, strong lender relationships, and a
          focus on long-term client outcomes rather than quick wins.
        </p>
        <div className="card-grid">
          {teamMembers.map((member) => (
            <div className="card" key={member.name}>
              <div className="card-title">{member.name}</div>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#4b5563",
                  marginBottom: "6px"
                }}
              >
                {member.role}
              </div>
              <div className="card-text">{member.blurb}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="privacy" style={{ marginBottom: "30px" }}>
        <h3>Privacy statement</h3>
        <p className="section-subtitle">
          We take your privacy seriously and treat all information you share
          with us as confidential.
        </p>
        <p style={{ fontSize: "13px", color: "#4b5563" }}>
          When you engage our services, we collect information such as your
          contact details, financial position, and goals. We use this only to:
        </p>
        <ul style={{ fontSize: "13px", color: "#4b5563" }}>
          <li>Assess your situation and provide suitable recommendations</li>
          <li>Prepare and submit applications to lenders and insurers</li>
          <li>
            Meet our obligations under New Zealand law and regulatory guidance
          </li>
        </ul>
        <p style={{ fontSize: "13px", color: "#4b5563" }}>
          Your information is stored securely and only shared with third
          parties (such as lenders or insurers) where necessary to deliver the
          services you’ve asked for, or where we are legally required to do so.
        </p>
      </section>

      <section id="disclosure">
        <h3>Disclosure information</h3>
        <p className="section-subtitle">
          As a Licensed Financial Advice Provider, we are required to provide
          disclosure information about how we are paid and how we manage
          conflicts of interest.
        </p>
        <p style={{ fontSize: "13px", color: "#4b5563" }}>
          We are usually paid via commission from lenders and insurers when a
          product is put in place. This does not increase the cost of your loan
          or policy. In some cases, we may charge a fee where a lender does not
          pay commission, or where additional work is required. We will always
          agree this with you in writing before any fee is charged.
        </p>
        <p style={{ fontSize: "13px", color: "#4b5563" }}>
          If you have a concern or complaint, please contact us first so we can
          work with you to resolve it. If we cannot resolve it together, you
          can escalate your complaint to our external disputes resolution
          scheme. Full details, including our FAP number and disputes scheme,
          will be provided in our formal disclosure document.
        </p>
      </section>
    </section>
  );
}

export default About;
