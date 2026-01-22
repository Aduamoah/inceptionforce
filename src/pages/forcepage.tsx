import React from "react";
import Navbar from "../components/navbar2";
import ForceCore from "../components/forceservice";
import Footer from "../components/footer2";

const ForcePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <ForceCore />
      <Footer />
    </div>
  );
};

export default ForcePage;
