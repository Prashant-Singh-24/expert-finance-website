import React, { useState } from "react";
import faqLogo from "../assets/FAQ-Logo.png";

const faqs = [
  {
    question: "Do you charge a fee for your mortgage advice?",
    answer:
      "In most cases, our mortgage advice is paid for by the lender when your loan settles, not by you. If a fee is ever required for a specialist situation, we’ll explain it clearly upfront so there are no surprises.",
  },
  {
    question: "Can you work with my current bank as well as others?",
    answer:
      "Yes. We work with a wide range of New Zealand banks and specialist lenders. That means we can review your current bank’s options alongside others to see what structure and pricing are best for you.",
  },
  {
    question: "I’m a first-home buyer. When should I talk to you?",
    answer:
      "As early as possible. We can help you understand how much you can borrow, how your deposit and KiwiSaver fit in, and what you need in place for pre-approval — before you start making offers.",
  },
  {
    question: "Do you only help people in Auckland?",
    answer:
      "No. While we’re based in Auckland, we work with clients all across New Zealand using video calls, phone and email. If you’re local, we can meet in person as well.",
  },
  {
    question: "Can you help with refinancing or restructuring an existing loan?",
    answer:
      "Absolutely. We review your current lending, interest rates and structure, then recommend options that may reduce interest, improve flexibility, or better support your long-term plans.",
  },
  {
    question: "Do you also look after insurance?",
    answer:
      "Yes. We can advise on life, income, health and mortgage protection cover, making sure your lending and insurance work together so your family and home are properly protected.",
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={onToggle}>
        <span>{faq.question}</span>
        <span className={`faq-toggle ${isOpen ? "open" : ""}`}>▾</span>
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="section faq-section">
      {/* NEW: FAQ logo banner */}
      <div className="faq-header">
        <img src={faqLogo} alt="Frequently Asked Questions" className="faq-logo" />
      </div>

      <div className="faq-grid">
        {/* Left column – intro text */}
        <div className="faq-intro">
          <h2 className="section-title">Questions we’re often asked.</h2>
          <p className="section-subtitle">
            Buying a home or restructuring lending is a big decision. Here are a
            few answers to common questions clients ask when they first get in touch.
          </p>
          <p className="faq-highlight">
            Still wondering about something specific?{" "}
            <span>Book a free chat</span> and we’ll talk through your situation.
          </p>
        </div>

        {/* Right column – interactive list */}
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              faq={faq}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;