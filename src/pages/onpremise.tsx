import React from "react";
import Navbar from "../components/navbar2";
import PremiseCore from "../components/onpremise";
import Footer from "../components/footer2";
// import GetStarted from "../components/getstarted";

const PremisePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <PremiseCore />
      {/* <GetStarted /> */}
      <Footer />
    </div>
  );
};

export default PremisePage;
