import React from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer2";
import AgricultureCore from "../components/agriculturecore";

const AgriculturePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <AgricultureCore />
      <Footer />
    </div>
  );
};

export default AgriculturePage;
