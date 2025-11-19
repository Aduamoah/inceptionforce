import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-[1440px] h-[75px] absolute top-[3px] py-[16px] px-[120px] flex flex-row items-center justify-between bg-[#FFFFFF] border border-[#EDEDED] ">
      {/* Logo */}
      <div className="w-[200px] h-[43px] flex items-center gap-3 relative">
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

        <span className="text-[#051911] text-[18px] font-medium leading-none">
          Inception Force
        </span>
      </div>

      <div className="w-[648px] h-[38px] flex flex-row items-center gap-6">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <p className="font-normal text-[16px] leading-none text-[#000000] whitespace-nowrap">
            Products
          </p>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75L4.04289 4.04289C4.37623 4.37623 4.54289 4.54289 4.75 4.54289C4.95711 4.54289 5.12377 4.37623 5.45711 4.04289L8.75 0.75"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <p className="font-normal text-[16px] leading-none text-[#000000] whitespace-nowrap">
            Solutions
          </p>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.75 0.75L4.04289 4.04289C4.37623 4.37623 4.54289 4.54289 4.75 4.54289C4.95711 4.54289 5.12377 4.37623 5.45711 4.04289L8.75 0.75"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="font-normal text-[16px] leading-none text-[#000000] whitespace-nowrap">
          Customs & On-Premise
        </p>
        <p className="font-normal text-[16px] leading-none text-[#000000] whitespace-nowrap">
          Pricing
        </p>
        <p className="font-normal text-[16px] leading-none text-[#000000] whitespace-nowrap">
          About Us
        </p>
      </div>

      <div className="w-[204px] h-[38px] flex flex-row gap-2.5 items-center">
        <button className="w-[93px] h-[38px] px-4 flex items-center justify-center gap-2 rounded border-[#16B365] border-[1.5px]">
          <p className="font-normal text-[16px] leading-none text-[#16B365] whitespace-nowrap">
            Sign In
          </p>
        </button>

        <button className="w-[101px] h-[38px] px-4 flex items-center justify-center gap-2 rounded bg-[#1CE783]">
          <p className="font-normal text-[16px] leading-none text-[#000000] whitespace-nowrap">
            Sign Up
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
