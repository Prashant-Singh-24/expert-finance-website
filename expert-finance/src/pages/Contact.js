import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="section">
      <div className="section-header">
        <span className="section-kicker">Contact</span>
        <h2 className="section-title">Let’s talk about your next move</h2>
        <p className="section-subtitle">
          Send us a quick message and we’ll get in touch to book a free,
          no-obligation chat. We can meet online or in person in Auckland.
        </p>
      </div>

      <div className="calculator-wrapper">
        <ContactForm />
        <div>
          <div className="card">
            <div className="card-title">Contact details</div>
            <div className="card-text">
              <p>
                <strong>Phone:</strong> 09 000 0000 (example — replace with your
                real number)
              </p>
              <p>
                <strong>Email:</strong> info@expertfinance.co.nz
              </p>
              <p>
                <strong>Office:</strong> Example address, Auckland (update with
                your real office if applicable)
              </p>
              <p>
                <strong>Hours:</strong> Monday–Friday, 9:00am – 5:30pm. After-hours
                by appointment.
              </p>
            </div>
            <div className="card-text">
              <p>
                We work with clients throughout New Zealand via secure online
                meetings and digital document signing.
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: "16px" }}>
            <div className="card-title">Next steps</div>
            <ol style={{ fontSize: "13px", color: "#4b5563", paddingLeft: "18px" }}>
              <li>We’ll acknowledge your enquiry within one business day.</li>
              <li>We may request extra information so we can prepare for the call.</li>
              <li>You choose a time that suits you for a chat.</li>
              <li>
                After our meeting, we’ll summarise the options and next steps in
                writing.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
