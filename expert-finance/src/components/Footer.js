import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <h4>Expert Finance</h4>
            <p>
              Independent mortgage & insurance advisers helping Kiwis make
              smarter money decisions with confidence.
            </p>
            <p>
              <strong>Service Area:</strong> Auckland & New Zealand wide (online).
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul className="footer-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="/about#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/about#disclosure">Disclosure Statement</a>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul className="footer-list">
              <li>
                <Link to="/mortgages">Mortgages</Link>
              </li>
              <li>
                <Link to="/mortgages">Property Investment</Link>
              </li>
              <li>
                <Link to="/mortgages">Business Loans</Link>
              </li>
              <li>
                <Link to="/insurance">Personal Insurance</Link>
              </li>
              <li>
                <Link to="/calculator">Loan Calculator</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} Expert Finance Ltd. All rights reserved. |
            &nbsp;expertfinance.co.nz
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
