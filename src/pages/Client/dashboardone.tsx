import React from "react";
import Navbar from "../../components/navbar";
import DashboardOne from "../../components/Client/dashboardone";

const DashboardPageOne: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <DashboardOne />
    </div>
  );
};

export default DashboardPageOne;
