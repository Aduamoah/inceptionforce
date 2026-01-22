import React from "react";
import Navbar from "../components/navbar2";
import AboutCore from "../components/aboutus";
import Footer from "../components/footer2";
import GetStarted from "../components/getstarted";

const AboutPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <AboutCore />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default AboutPage;
