import React, { useMemo, useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "Home Loan / Mortgage",
    contactMethod: "Phone",
    message: "",
    consent: false,
  });

  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "", msg: "" });

  const mapOpenLink =
    "https://www.google.com/maps/place/Expert+Finance/@-36.9646867,174.9010332,1590m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6d0d4d165155d12f:0x9e4121e5b2e5ff7e!8m2!3d-36.9646867!4d174.9036135!16s%2Fg%2F11jzvn2rkp?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D";

  // Simple embed (works reliably without needing the long pb= embed string)
  const mapEmbedSrc = useMemo(() => {
    const q = encodeURIComponent("Suite E3, 123 Ormiston Road, Flat Bush, Auckland 2019");
    return `https://maps.google.com/maps?q=${q}&z=17&t=m&output=embed&iwloc=near`;
  }, []);

  const errors = useMemo(() => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Please enter your full name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.phone.trim()) e.phone = "Please enter your phone number.";
    if (!form.message.trim()) e.message = "Please tell us what you need help with.";
    if (!form.consent) e.consent = "Please confirm you consent to being contacted.";
    return e;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setStatus({ type: "", msg: "" });
  };

  const onBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      message: true,
      consent: true,
    });

    if (!isValid) {
      setStatus({ type: "error", msg: "Please fix the highlighted fields and try again." });
      return;
    }

    // ✅ No backend yet: just show success.
    // Later we can connect EmailJS / API / CRM.
    setStatus({
      type: "success",
      msg: "Thanks! We’ve received your message. We’ll be in touch shortly.",
    });

    setForm({
      fullName: "",
      email: "",
      phone: "",
      enquiryType: "Home Loan / Mortgage",
      contactMethod: "Phone",
      message: "",
      consent: false,
    });
    setTouched({});
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="contact-kicker">Contact</span>
          <h1 className="contact-title">Let’s talk about your next step.</h1>
          <p className="contact-subtitle">
            Tell us what you’re trying to achieve — we’ll guide you with clarity and confidence.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="contact-wrap">
        <div className="contact-grid">
          {/* LEFT: Form */}
          <div className="contact-card contact-card-form contact-animate-left">
            <div className="contact-card-header">
              <h2>Send us a message</h2>
              <p>We typically respond within 1 business day.</p>
            </div>

            {status.msg && (
              <div className={`contact-alert ${status.type}`}>
                {status.msg}
              </div>
            )}

            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="fullName">Full name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Your full name"
                    className={touched.fullName && errors.fullName ? "invalid" : ""}
                    autoComplete="name"
                  />
                  {touched.fullName && errors.fullName && (
                    <div className="contact-error">{errors.fullName}</div>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="you@example.com"
                    className={touched.email && errors.email ? "invalid" : ""}
                    autoComplete="email"
                  />
                  {touched.email && errors.email && (
                    <div className="contact-error">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="+64..."
                    className={touched.phone && errors.phone ? "invalid" : ""}
                    autoComplete="tel"
                  />
                  {touched.phone && errors.phone && (
                    <div className="contact-error">{errors.phone}</div>
                  )}
                </div>

                <div className="contact-field">
                  <label htmlFor="enquiryType">What do you need help with?</label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={onChange}
                    onBlur={onBlur}
                  >
                    <option>Home Loan / Mortgage</option>
                    <option>First Home Buyer</option>
                    <option>Refinance / Loan Review</option>
                    <option>Investment Property</option>
                    <option>Business Lending</option>
                    <option>Insurance / Protection</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="contactMethod">Preferred contact method</label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={form.contactMethod}
                    onChange={onChange}
                    onBlur={onBlur}
                  >
                    <option>Phone</option>
                    <option>Email</option>
                  </select>
                </div>

                <div className="contact-field contact-field-note">
                  <div className="contact-mini">
                    <div className="contact-mini-dot" />
                    No obligation. Just a clear chat about options.
                  </div>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Example: We’re buying our first home and want to know what we can borrow..."
                  className={touched.message && errors.message ? "invalid" : ""}
                />
                {touched.message && errors.message && (
                  <div className="contact-error">{errors.message}</div>
                )}
              </div>

              <div className="contact-consent">
                <label className={`contact-check ${touched.consent && errors.consent ? "invalid" : ""}`}>
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  <span>
                    I consent to Expert Finance contacting me about my enquiry.
                  </span>
                </label>
                {touched.consent && errors.consent && (
                  <div className="contact-error">{errors.consent}</div>
                )}
              </div>

              <button className="contact-submit" type="submit">
                Send message
              </button>
            </form>
          </div>

          {/* RIGHT: Address + Map */}
          <div className="contact-side contact-animate-right">
            <div className="contact-card contact-card-info">
              <h2>Expert Finance, Auckland</h2>
              <div className="contact-info-block">
                <div className="contact-info-line">
                  <span className="contact-ico">📍</span>
                  <span>
                    Suite E3, 123 Ormiston Road<br />
                    Flat Bush, Auckland 2019
                  </span>
                </div>
                <a className="contact-info-line" href="mailto:info@expertfinance.co.nz">
                  <span className="contact-ico">✉️</span>
                  <span>info@expertfinance.co.nz</span>
                </a>
                <a className="contact-info-line" href="tel:+6492176765">
                  <span className="contact-ico">📞</span>
                  <span>09-2176765</span>
                </a>
              </div>

              <a
                className="contact-map-btn"
                href={mapOpenLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="contact-card contact-card-map">
              <div className="contact-map-frame">
                <iframe
                  title="Expert Finance Map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  className="contact-map-overlay"
                  href={mapOpenLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
