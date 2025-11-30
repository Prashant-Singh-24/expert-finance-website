import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import LoanCalculator from "../components/LoanCalculator";
import Carousel from "../components/Carousel";
import BankLogos from "../components/BankLogos";
import BankMarquee from "../components/BankMarquee";
import ClientIntro from "../components/ClientIntro";
import TrustedAdvisorsBanner from "../components/TrustedAdvisorsBanner";
import AboutHomeSection from "../components/AboutHomeSection";
import ServicesShowcase from "../components/ServicesShowcase";
import LoanServicesSection from "../components/LoanServicesSection";
import ProtectionServicesSection from "../components/ProtectionServicesSection";
import BusinessServicesSection from "../components/BusinessServicesSection";





function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      <BankMarquee />

      <ClientIntro />

      <AboutHomeSection />

      <TrustedAdvisorsBanner />
      <LoanServicesSection />
      <ProtectionServicesSection />
      <BusinessServicesSection />
     
      <ServicesShowcase />

      {/* WHY SECTION */}
      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Why Expert Finance</span>
          <h2 className="section-title">More than just a mortgage broker</h2>
          <p className="section-subtitle">
            We act as your long-term financial partner — from buying your first
            home to expanding your portfolio, managing debt, and protecting your
            family with the right insurance mix.
          </p>
        </div>

        <div className="card-grid">
          <ServiceCard
            icon="💡"
            title="Strategic advice"
            text="We focus on structure first, rate second — helping you pay less interest and become debt-free sooner."
          />
          <ServiceCard
            icon="🤝"
            title="End-to-end support"
            text="From initial strategy session to settlement day and reviews, we manage the details for you."
          />
          <ServiceCard
            icon="📊"
            title="Multiple lenders"
            text="We compare options across major NZ banks and specialist lenders so you’re not locked into one bank."
          />
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Real-life scenarios</span>
          <h2 className="section-title">
            See how we can help in your situation
          </h2>
          <p className="section-subtitle">
            Every client story is different. Explore a few common journeys we
            see every week — from first home buyers to seasoned investors.
          </p>
        </div>

        <Carousel />
      </section>

      {/* CORE SERVICES */}
      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Our Core Services</span>
          <h2 className="section-title">Mortgages, finance & protection</h2>
          <p className="section-subtitle">
            Whether you’re a first home buyer, investor, business owner, or
            looking to restructure debt, we’ll help you design a plan that fits
            your life.
          </p>
        </div>

        <div className="card-grid">
          <ServiceCard
            icon="🏡"
            title="Home Loans"
            text="First home buyers, upgraders, and refinancers — we’ll guide you at every step."
            linkText="Explore mortgages"
            onClick={() => navigate("/mortgages")}
          />
          <ServiceCard
            icon="📈"
            title="Property Investment"
            text="Smart lending structures for building a long-term portfolio."
            linkText="See investment options"
            onClick={() => navigate("/mortgages")}
          />
          <ServiceCard
            icon="🛡️"
            title="Insurance & Protection"
            text="Life, income, trauma and mortgage protection tailored to your needs."
            linkText="Learn about insurance"
            onClick={() => navigate("/insurance")}
          />
        </div>
      </section>

      {/* IMAGE STRIP / MORE PHOTOS */}
      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Picture your next step</span>
          <h2 className="section-title">
            Home, investment, or business — your choice
          </h2>
          <p className="section-subtitle">
            Browse a few examples of what clients come to us for. Each plan is
            customised around real numbers, real timelines, and real goals.
          </p>
        </div>

        <div className="image-strip">
          <div className="image-strip-item">
            <div className="image-strip-photo image-strip-photo-1" />
            <div className="image-strip-caption">
              Buy your first home with confidence, knowing exactly what you can
              afford.
            </div>
          </div>
          <div className="image-strip-item">
            <div className="image-strip-photo image-strip-photo-2" />
            <div className="image-strip-caption">
              Restructure or refinance your current lending to free up
              cash-flow.
            </div>
          </div>
          <div className="image-strip-item">
            <div className="image-strip-photo image-strip-photo-3" />
            <div className="image-strip-caption">
              Grow a long-term investment portfolio or finance your business
              plans.
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Start with the numbers</span>
          <h2 className="section-title">Check your repayments in minutes</h2>
          <p className="section-subtitle">
            Use our quick calculator to see how different loan amounts, terms,
            and interest rates affect your repayments — then talk to us to
            fine-tune a plan.
          </p>
        </div>

        <div className="calculator-wrapper">
          <LoanCalculator />
          <div>
            <div className="card">
              <div className="card-title">How we work with you</div>
              <div className="card-text">
                <ol style={{ paddingLeft: "18px", fontSize: "13px" }}>
                  <li>Free discovery call to understand your goals</li>
                  <li>Information & document checklist</li>
                  <li>We compare banks and lenders for you</li>
                  <li>We present tailored options and next steps</li>
                  <li>Support through approval, settlement, and beyond</li>
                </ol>
              </div>
              <button
                className="btn-primary"
                style={{ alignSelf: "flex-start", marginTop: "10px" }}
                onClick={() => navigate("/contact")}
              >
                Book your free discovery call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BANK LOGOS SECTION */}
      <BankLogos />
    </>
  );
}

export default Home;
