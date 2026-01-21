import React from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer2";
import ConstructionCore from "../components/constructioncore";

const ConstructionPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <ConstructionCore />
      <Footer />
    </div>
  );
};

export default ConstructionPage;
