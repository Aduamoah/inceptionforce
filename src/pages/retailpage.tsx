import React from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer2";
import RetailCore from "../components/retailcore";

const RetailPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <RetailCore />
      <Footer />
    </div>
  );
};

export default RetailPage;
