import React from "react";
import Navbar from "../components/navbar2";
import FlexibleCore from "../components/flexible";
import Footer from "../components/footer2";

const FlexiblePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <FlexibleCore />
      <Footer />
    </div>
  );
};

export default FlexiblePage;
