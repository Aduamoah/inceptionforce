import React from "react";
import Navbar from "../components/navbar2";
import Footer from "../components/footer2";
import RestaurantCore from "../components/restaurantcore";

const RestaurantPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF]">
      <Navbar />
      <RestaurantCore />
      <Footer />
    </div>
  );
};

export default RestaurantPage;
