import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Mortgages from "./pages/Mortgages";
import Insurance from "./pages/Insurance";
import CalculatorPage from "./pages/CalculatorPage";
import Contact from "./pages/Contact";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import PrivacyPage from "./pages/PrivacyPage";
import DisclosurePage from "./pages/DisclosurePage";
import CareersPage from "./pages/CareersPage";


function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/mortgages" element={<Mortgages />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/privacy" element={<PrivacyPage />} />
          <Route path="/about/disclosure" element={<DisclosurePage />} />
          <Route path="/about/careers" element={<CareersPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
