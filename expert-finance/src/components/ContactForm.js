import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a message.
    // Later, you can hook this up to EmailJS, a backend API, or a database.
    setSubmitted(true);
  };

  return (
    <div className="calculator-card">
      <h3 style={{ marginTop: 0 }}>Tell us a little about your goals</h3>
      <p style={{ fontSize: "13px", color: "#5f6473" }}>
        Enter a few details and we’ll get in touch to schedule a free
        consultation.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="e.g. Arjun Singh"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </div>
        <div className="form-row">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+64..."
          />
        </div>
        <div className="form-row">
          <label htmlFor="topic">What do you want to talk about?</label>
          <input
            id="topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            placeholder="First home, refinancing, insurance, business loan..."
          />
        </div>
        <div className="form-row">
          <label htmlFor="message">Anything else we should know?</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <button className="btn-primary" type="submit">
          Submit enquiry
        </button>
      </form>

      {submitted && (
        <div className="result-box" style={{ marginTop: "14px" }}>
          Thanks! This is a demo only — in production we’d send this to your
          email or CRM.
        </div>
      )}
    </div>
  );
}

export default ContactForm;
