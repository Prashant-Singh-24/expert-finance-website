import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import LoanCalculator from "../components/LoanCalculator";
import Carousel from "../components/Carousel";
import BankMarquee from "../components/BankMarquee";
import ClientIntro from "../components/ClientIntro";
import TrustedAdvisorsBanner from "../components/TrustedAdvisorsBanner";
import AboutHomeSection from "../components/AboutHomeSection";
import LoanServicesSection from "../components/LoanServicesSection";
import ProtectionServicesSection from "../components/ProtectionServicesSection";
import BusinessServicesSection from "../components/BusinessServicesSection";
import FAQSection from "../components/FAQSection";
import LocationSection from "../components/LocationSection";



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
      <FAQSection />
      <LocationSection />
    </>
  );
}

export default Home;
