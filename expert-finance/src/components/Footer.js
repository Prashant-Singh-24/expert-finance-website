// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid footer-grid-4">
          {/* Brand / intro */}
          <div className="footer-col footer-col-brand">
            <h4>Expert Finance</h4>
            <p>
              Independent mortgage, insurance, and business finance advisers
              helping Kiwis make smarter money decisions with confidence.
            </p>
            <p className="footer-muted">
              <strong>Service Area:</strong>  New&nbsp;Zealand
              wide.
            </p>
          </div>

          {/* Loans */}
          <div className="footer-col">
            <h4>Loans</h4>
            <ul className="footer-list">
              <li>
                <Link to="/services/mortgages">Mortgages</Link>
              </li>
              <li>
                <Link to="/services/first-home-buyers">First Home Buyers</Link>
              </li>
              <li>
                <Link to="/services/investment-property">
                  Investment Property
                </Link>
              </li>
              <li>
                <Link to="/services/refinancing">Refinancing</Link>
              </li>
              <li>
                <Link to="/services/construction-loans">
                  Construction Loans
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-property">
                  Commercial Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Protection / Insurance */}
          <div className="footer-col">
            <h4>Protection &amp; Insurance</h4>
            <ul className="footer-list">
              <li>
                <Link to="/services/life-insurance">Life Insurance</Link>
              </li>
              <li>
                <Link to="/services/income-protection">
                  Income Protection
                </Link>
              </li>
              <li>
                <Link to="/services/health-trauma">Health &amp; Trauma</Link>
              </li>
              <li>
                <Link to="/services/mortgage-protection">
                  Mortgage Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Business + site links */}
          <div className="footer-col">
            <h4>Business &amp; Tools</h4>
            <ul className="footer-list">
              <li>
                <Link to="/services/business-loans">Business Loans</Link>
              </li>
              <li>
                <Link to="/services/business-finance">Business Finance</Link>
              </li>
              <li>
                <Link to="/services/equipment-finance">
                  Equipment Finance
                </Link>
              </li>
              <li>
                <Link to="/calculator">Loan Calculator</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Expert Finance Ltd. All rights
            reserved. | expertfinance.co.nz
          </span>
          <span>
            Licensed Financial Advice Provider (FAP) — Information on this site
            is of a general nature only and does not constitute specific advice.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
