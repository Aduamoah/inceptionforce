import React from "react";
import Navbar from "../components/navbar2";
import InventoryCore from "../components/inventorysection";
// import Footer from "../components/footer2";

const InventoryPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <InventoryCore />
      {/* <Footer /> */}
    </div>
  );
};

export default InventoryPage;
