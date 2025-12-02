import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/Logo_exp.jpeg"; // whatever your logo import is

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
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices((prev) => !prev);
  };

  const closeServices = () => setShowServices(false);

  return (
    <header className="site-header">
      <div className="navbar">
        {/* Left: Logo */}
        <Link to="/" className="nav-logo" onClick={closeServices}>
          <img src={logo} alt="Expert Finance" />
        </Link>

        {/* Center: Main nav links */}
        <nav className="nav-center">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeServices}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeServices}>
                About Us
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN – opens on click */}
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
                          onClick={closeServices}
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
              <NavLink to="/insurance" onClick={closeServices}>
                Insurance
              </NavLink>
            </li>
            <li>
              <NavLink to="/calculator" onClick={closeServices}>
                Calculator
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeServices}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right: Book Free Chat button */}
        <Link to="/contact" className="nav-cta" onClick={closeServices}>
          Book Free Chat
        </Link>
      </div>
    </header>
  );
}

export default Navbar;