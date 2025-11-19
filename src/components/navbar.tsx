import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          width="32"
          height="29"
          viewBox="0 0 48 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.8731 0C28.0664 0.344689 25.7932 0.59946 23.9716 0.59946C22.1501 0.59946 19.8918 0.363423 18.0888 0L23.9716 18.6582L29.8731 0ZM44.0948 14.5257C43.0496 13.027 41.9522 11.0113 41.1982 9.32909L29.7536 24.3605C27.9694 24.694 25.7521 24.9375 23.9679 24.9375C22.1837 24.9375 19.9888 24.7127 18.2046 24.3605L6.75999 9.32909C6.00597 11.0113 4.90855 13.027 3.86338 14.5257C2.81822 16.0243 1.33259 17.744 0 19.0216L18.2195 24.7652L23.9716 43L29.7387 24.7652L47.9582 19.0216C46.6256 17.744 45.14 16.0281 44.0948 14.5294V14.5257Z"
            fill="#0F9662"
          />
        </svg>
        <span className="text-xl font-semibold text-gray-900">
          Inception Force
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-gray-700">
        <button className="hover:text-black">Products</button>
        <button className="hover:text-black">Solutions</button>
        <button className="hover:text-black">Custom & On-Premise</button>
        <button className="hover:text-black">Pricing</button>
        <button className="hover:text-black">About Us</button>
      </div>

      {/* Auth */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-1 border border-gray-300 rounded-lg hover:bg-gray-100">
          Sign In
        </button>
        <button className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
