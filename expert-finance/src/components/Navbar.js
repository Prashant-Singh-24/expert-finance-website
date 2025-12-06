// src/components/Navbar.js
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo_exp.jpeg"; // your existing logo

const serviceNavGroups = [
  {
    label: "Loans",
    items: [
      { id: "mortgages", label: "Mortgages", emoji: "🏠" },
      { id: "first-home-buyers", label: "First Home Buyers", emoji: "🔑" },
      { id: "investment-property", label: "Investment Property", emoji: "🏘️" },
      { id: "refinancing", label: "Refinancing", emoji: "🔄" },
      { id: "construction-loans", label: "Construction Loans", emoji: "🏗️" },
      { id: "commercial-property", label: "Commercial Property", emoji: "🏢" },
    ],
  },
  {
    label: "Protection",
    items: [
      { id: "life-insurance", label: "Life Insurance", emoji: "❤️" },
      { id: "income-protection", label: "Income Protection", emoji: "💼" },
      { id: "health-trauma", label: "Health & Trauma", emoji: "🏥" },
      { id: "mortgage-protection", label: "Mortgage Protection", emoji: "🛡️" },
    ],
  },
  {
    label: "Business",
    items: [
      { id: "business-loans", label: "Business Loans", emoji: "📈" },
      { id: "business-finance", label: "Business Finance", emoji: "💡" },
      { id: "equipment-finance", label: "Equipment Finance", emoji: "🚚" },
    ],
  },
];

function Navbar() {
  const [showServices, setShowServices] = useState(false);   // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);       // mobile menu

  const toggleServices = () => setShowServices((prev) => !prev);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setShowServices(false);
  };

  const closeAll = () => {
    setShowServices(false);
    setMobileOpen(false);
  };

  return (
    <header className="site-header">
      <div className="navbar">
        {/* Left: logo */}
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src={logo} alt="Expert Finance" />
        </Link>

        {/* Center: desktop nav */}
        <nav className="nav-center">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeAll}>
                Home
              </NavLink>
            </li>

            <li className="nav-item services-nav">
              <button
                type="button"
                className="nav-link nav-link-dropdown"
                onClick={toggleServices}
              >
                Services
                <span className={`nav-caret ${showServices ? "open" : ""}`}>
                  ▾
                </span>
              </button>

              {showServices && (
                <div className="services-dropdown">
                  {serviceNavGroups.map((group) => (
                    <div
                      className="services-dropdown-column"
                      key={group.label}
                    >
                      <div className="services-dropdown-heading">
                        {group.label}
                      </div>
                      {group.items.map((item) => (
                        <Link
                          key={item.id}
                          to={`/services/${item.id}`}
                          className="services-dropdown-link"
                          onClick={closeAll}
                        >
                          <span className="services-dropdown-emoji">
                            {item.emoji}
                          </span>
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </li>

            <li>
              <NavLink to="/about" onClick={closeAll}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/insurance" onClick={closeAll}>
                Insurance
              </NavLink>
            </li>
            <li>
              <NavLink to="/calculator" onClick={closeAll}>
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeAll}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right: desktop CTA + mobile burger */}
        <div className="nav-right">
          <Link to="/contact" className="nav-cta" onClick={closeAll}>
            Book Free Chat
          </Link>

          <button
            className="nav-toggle"
            type="button"
            onClick={toggleMobile}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <ul className="mobile-menu-list">
            {/* 1. HOME */}
            <li>
              <NavLink to="/" end onClick={closeAll}>
                Home
              </NavLink>
            </li>

            {/* 2. SERVICES (all service items grouped) */}
            <li className="mobile-services-group">
              <div className="mobile-services-heading">Services</div>
              {serviceNavGroups.map((group) => (
                <div key={group.label}>
                  <div className="mobile-service-group-title">
                    {group.label}
                  </div>
                  {group.items.map((item) => (
                    <NavLink
                      key={item.id}
                      to={`/services/${item.id}`}
                      className="mobile-service-link"
                      onClick={closeAll}
                    >
                      {item.emoji} {item.label}
                    </NavLink>
                  ))}
                </div>
              ))}
            </li>

            {/* 3. ABOUT US (AFTER SERVICES) */}
            <li>
              <NavLink to="/about" onClick={closeAll}>
                About Us
              </NavLink>
            </li>

            {/* 4. REST */}
            <li>
              <NavLink to="/insurance" onClick={closeAll}>
                Insurance
              </NavLink>
            </li>
            <li>
              <NavLink to="/calculator" onClick={closeAll}>
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeAll}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;