import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/Logo_exp.jpeg"; // <-- adjust extension if needed

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => setOpen((v) => !v);
  const closeNav = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* BRAND / LOGO ONLY */}
        <div
          className="brand"
          onClick={() => {
            navigate("/");
            closeNav();
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            alt="Expert Finance"
            className="brand-logo"
          />
        </div>

        <button className="nav-toggle" onClick={toggleNav} aria-label="Menu">
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={closeNav}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={closeNav}
          >
            About Us
          </NavLink>
          <NavLink
            to="/mortgages"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={closeNav}
          >
            Mortgages
          </NavLink>
          <NavLink
            to="/insurance"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={closeNav}
          >
            Insurance
          </NavLink>
          <NavLink
            to="/calculator"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={closeNav}
          >
            Calculator
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-link" + (isActive ? " active" : "")
            }
            onClick={closeNav}
          >
            Contact
          </NavLink>
        </nav>

        <button
          className="nav-cta"
          onClick={() => {
            navigate("/contact");
            closeNav();
          }}
        >
          Book Free Chat
        </button>
      </div>
    </header>
  );
}

export default Navbar;