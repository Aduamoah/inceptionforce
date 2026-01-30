import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownItem =
    "text-sm text-black px-3 py-2 rounded hover:bg-gray-100 text-center";

  return (
    <div className="w-full py-2 px-4 md:px-12 lg:px-[120px] flex items-center justify-between bg-white border-b border-[#EDEDED]">
      <div className="flex items-center gap-3">
        <svg
          width="48"
          height="43"
          viewBox="0 0 48 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.8731 0C28.0664 0.344689 25.7932 0.59946 23.9716 0.59946C22.1501 0.59946 19.8918 0.363423 18.0888 0L23.9716 18.6582L29.8731 0ZM44.0948 14.5257C43.0496 13.027 41.9522 11.0113 41.1982 9.32909L29.7536 24.3605C27.9694 24.694 25.7521 24.9375 23.9679 24.9375C22.1837 24.9375 19.9888 24.7127 18.2046 24.3605L6.75999 9.32909C6.00597 11.0113 4.90855 13.027 3.86338 14.5257C2.81822 16.0243 1.33259 17.744 0 19.0216L18.2195 24.7652L23.9716 43L29.7387 24.7652L47.9582 19.0216C46.6256 17.744 45.14 16.0281 44.0948 14.5294V14.5257Z"
            fill="#0F9662"
          />
        </svg>
        <Link to="/">
          <span className="text-[#051911] text-lg font-medium leading-none">
            Inception Force
          </span>
        </Link>
      </div>

      <div className="hidden lg:flex min-h-[38px] items-center gap-6">
        {/* PRODUCTS */}
        <div className="relative group">
          <div className="flex items-center gap-2 cursor-pointer">
            <p className="text-[16px] text-black">Products</p>
            <svg width="10" height="6" viewBox="0 0 10 6">
              <path
                d="M0.75 0.75L4.75 4.75L8.75 0.75"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div
            className="absolute top-full left-0 mt-3 w-[420px]
            bg-white border border-[#EDEDED] rounded shadow-lg
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all"
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              <Link to="/inventory" className={dropdownItem}>
                Inventory
              </Link>
              <Link to="/retail" className={dropdownItem}>
                Retail
              </Link>
              <Link to="/construction" className={dropdownItem}>
                Construction
              </Link>
              <Link to="/agriculture" className={dropdownItem}>
                Agriculture
              </Link>
              <Link to="/restaurant" className={dropdownItem}>
                Restaurant
              </Link>
              <Link to="/flexible" className={dropdownItem}>
                Flexible
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <Link to="/solutions">
            <p className="text-[16px] text-[#000000] whitespace-nowrap">
              Solutions
            </p>
          </Link>
        </div>
        <Link to="/premise">
          <p className="text-[16px] text-[#000000] whitespace-nowrap">
            Customs & On-Premise
          </p>
        </Link>
        <Link to="/force">
          <p className="text-[16px] text-[#000000] whitespace-nowrap">
            Pricing
          </p>
        </Link>
        <Link to="/about">
          <p className="text-[16px] text-[#000000] whitespace-nowrap">
            About Us
          </p>
        </Link>
      </div>

      <div className="hidden lg:flex min-h-[38px] gap-2.5 items-center">
        <button className="min-h-[38px] px-4 flex items-center justify-center gap-2 rounded border-[#16B365] border-[1.5px]">
          <p className="text-[16px] text-[#16B365] whitespace-nowrap">
            Sign In
          </p>
        </button>

        <button className="min-h-[38px] px-4 flex items-center justify-center gap-2 rounded bg-[#1CE783]">
          <p className="text-[16px] text-black whitespace-nowrap">Sign Up</p>
        </button>
      </div>

      <button className="lg:hidden flex" onClick={() => setOpen(!open)}>
        <svg width="28" height="28" fill="none" stroke="#000" strokeWidth="2">
          <path d="M4 7h20M4 14h20M4 21h20" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-[64px] left-0 w-full bg-white border-t border-[#EDEDED] px-4 py-4 flex flex-col gap-4 lg:hidden">
          {/* PRODUCTS ACCORDION */}
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className="flex justify-between items-center text-[16px]"
          >
            Products
            <span
              className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </button>

          {productsOpen && (
            <div className="grid grid-cols-3 gap-2 pl-2">
              <Link to="/inventory" className={dropdownItem}>
                Inventory
              </Link>
              <Link to="/retail" className={dropdownItem}>
                Retail
              </Link>
              <Link to="/construction" className={dropdownItem}>
                Construction
              </Link>
              <Link to="/agriculture" className={dropdownItem}>
                Agriculture
              </Link>
              <Link to="/restaurant" className={dropdownItem}>
                Restaurant
              </Link>
              <Link to="/flexible" className={dropdownItem}>
                Flexible
              </Link>
            </div>
          )}
          <Link to="/solutions">
            {" "}
            <p className="text-[16px]">Solutions</p>
          </Link>
          <Link to="/premise">
            <p className="text-[16px]">Customs & On-Premise</p>
          </Link>
          <Link to="/force">
            <p className="text-[16px]">Pricing</p>
          </Link>
          <Link to="/about">
            <p className="text-[16px]">About Us</p>
          </Link>

          <button className="mt-2 min-h-[38px] px-4 py-2 rounded border border-[#16B365] text-[#16B365]">
            Sign In
          </button>

          <button className="min-h-[38px] px-4 py-2 rounded bg-[#1CE783] text-black">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
