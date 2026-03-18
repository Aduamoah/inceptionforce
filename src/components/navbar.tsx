import React from "react";
import logo from "../assets/Logo.png";
import nameshow from "../assets/nameshow.png";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* Logo */}

      <img src={logo} className="w-25 h-10" />

      {/* Links */}
      {/* <div className="hidden md:flex items-center gap-8 text-gray-700">
        <button className="hover:text-black">Products</button>
        <button className="hover:text-black">Solutions</button>
        <button className="hover:text-black">Custom & On-Premise</button>
        <button className="hover:text-black">Pricing</button>
        <button className="hover:text-black">About Us</button>
      </div> */}

      {/* Auth */}
      {/* <div className="flex items-center gap-4">
        <button className="px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">
          Sign In
        </button>
        <button className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Sign Up
        </button>
      </div> */}
      <div className="flex items-center gap-4">
        <img src={nameshow} className="w-15 h-10" />
      </div>
    </nav>
  );
};

export default Navbar;
