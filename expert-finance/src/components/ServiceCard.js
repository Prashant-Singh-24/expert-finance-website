import React from "react";

function ServiceCard({ icon, title, text, linkText, onClick }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-title">{title}</div>
      <div className="card-text">{text}</div>
      {linkText && (
        <button
          className="card-link"
          type="button"
          onClick={onClick}
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          {linkText} →
        </button>
      )}
    </div>
  );
}

export default ServiceCard;
