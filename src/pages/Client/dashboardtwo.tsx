import React from "react";
import Navbar from "../../components/navbar";
import DashboardTwo from "../../components/Client/dashboardtwo";

const DashboardPageTwo: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <DashboardTwo />
    </div>
  );
};

export default DashboardPageTwo;
