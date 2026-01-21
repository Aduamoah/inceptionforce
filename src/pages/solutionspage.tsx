import React from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer2";
import SolutionCore from "../components/solutionscore";

const SolutionPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <SolutionCore />
      <Footer />
    </div>
  );
};

export default SolutionPage;
