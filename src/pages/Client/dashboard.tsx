import React from "react";
import Navbar from "../../components/navbar";
import Dashboard from "../../components/Client/dashboard";

const DashboardPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
