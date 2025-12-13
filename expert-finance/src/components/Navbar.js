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
  const [showServices, setShowServices] = useState(false); // desktop Services dropdown
  const [showAbout, setShowAbout] = useState(false); // desktop About dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); // mobile Services dropdown
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // mobile About dropdown

  const toggleServices = () => {
    setShowServices((prev) => !prev);
    setShowAbout(false);
  };

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
    setShowServices(false);
    setShowAbout(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
  };

  const closeAll = () => {
    setShowServices(false);
    setShowAbout(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileAboutOpen(false);
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

            {/* DESKTOP – SERVICES DROPDOWN */}
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
                    <div className="services-dropdown-column" key={group.label}>
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

            {/* DESKTOP – ABOUT US DROPDOWN */}
            <li className="nav-item about-nav">
              <button
                type="button"
                className="nav-link nav-link-dropdown"
                onClick={() => {
                  setShowAbout((prev) => !prev);
                  setShowServices(false);
                }}
              >
                About Us
                <span className={`nav-caret ${showAbout ? "open" : ""}`}>
                  ▾
                </span>
              </button>

              {showAbout && (
                <div className="about-dropdown">
                  {/* 1. About Us */}
                  <Link
                    to="/about"
                    className="about-dropdown-link"
                    onClick={closeAll}
                  >
                    ℹ️ About Us
                  </Link>

                  {/* 2. Our Team */}
                  <Link
                    to="/about/team"
                    className="about-dropdown-link"
                    onClick={closeAll}
                  >
                    👥 Our Team
                  </Link>

                  {/* 3. Privacy */}
                  <Link
                    to="/about/privacy"
                    className="about-dropdown-link"
                    onClick={closeAll}
                  >
                   🔒 Privacy
                  </Link>

                  {/* 4. Disclosure */}
                  <Link
                    to="/about/disclosure"
                    className="about-dropdown-link"
                    onClick={closeAll}
                  >
                    📄 Disclosure
                  </Link>

                  {/* 5. Careers */}
                  <Link
                    to="/about/careers"
                    className="about-dropdown-link"
                    onClick={closeAll}
                  >
                    💼 Careers
                  </Link>
                </div>
              )}
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

      {/* MOBILE MENU */}
      {mobileOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <ul className="mobile-menu-list">
            {/* 1. HOME */}
            <li>
              <NavLink to="/" end onClick={closeAll}>
                Home
              </NavLink>
            </li>

            {/* 2. SERVICES – MOBILE DROPDOWN */}
            <li className="mobile-services-group">
              <button
                type="button"
                className="mobile-services-toggle"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <span
                  className={`mobile-services-caret ${
                    mobileServicesOpen ? "open" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="mobile-services-panel">
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
                </div>
              )}
            </li>

            {/* 3. ABOUT US – MOBILE DROPDOWN */}
            <li className="mobile-about-group">
              <button
                type="button"
                className="mobile-about-toggle"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
              >
                <span>About Us</span>
                <span
                  className={`mobile-about-caret ${
                    mobileAboutOpen ? "open" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {mobileAboutOpen && (
                <div className="mobile-about-panel">
                  {/* 1. About Us */}
                  <NavLink
                    to="/about"
                    className="mobile-about-link"
                    onClick={closeAll}
                  >
                    ℹ️ About Us
                  </NavLink>

                  {/* 2. Our Team */}
                  <NavLink
                    to="/about/team"
                    className="mobile-about-link"
                    onClick={closeAll}
                  >
                    👥 Our Team
                  </NavLink>

                  {/* 3. Privacy */}
                  <NavLink
                    to="/about/privacy"
                    className="mobile-about-link"
                    onClick={closeAll}
                  >
                    🔒 Privacy
                  </NavLink>

                  {/* 4. Disclosure */}
                  <NavLink
                    to="/about/disclosure"
                    className="mobile-about-link"
                    onClick={closeAll}
                  >
                    📄 Disclosure
                  </NavLink>

                  {/* 5. Careers */}
                  <NavLink
                    to="/about/careers"
                    className="mobile-about-link"
                    onClick={closeAll}
                  >
                    💼 Careers
                  </NavLink>
                </div>
              )}
            </li>

            {/* 4. REST */}
            
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
