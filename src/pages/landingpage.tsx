import React from "react";
import Navbar from "../components/navbar2";
import Hero from "../components/hero";
import Features from "../components/features";
import TrustSection from "../components/trustsection";
import OperationalCore from "../components/operationalcore";
import Footer from "../components/footer2";
import GetStarted from "../components/getstarted";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Features />
      <OperationalCore />
      <TrustSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default LandingPage;
