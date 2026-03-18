import React from "react";
import Navbar from "../../components/navbar";
import DashboardThree from "../../components/Client/dashboardthree";

const DashboardPageThree: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <DashboardThree />
    </div>
  );
};

export default DashboardPageThree;
