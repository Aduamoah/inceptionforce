import React from "react";
import { Play, ArrowRight } from "lucide-react";
import analytics from "../assets/analytics.png";
import Navbar from "./navbar2";

const Hero: React.FC = () => {
  return (
    <>
      <div className="relative z-[999]">
        <Navbar />
      </div>

      <div
        className="min-h-screen overflow-x-hidden bg-[#F2FDF5]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 65%, 0% 100%)" }}
      >
        <div className="grid grid-cols-1 px-6 py-16 gap-8 sm:px-10 md:px-16 lg:grid-cols-2 lg:gap-[121px] lg:px-[120px] lg:py-28 ">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">
            <div
              className="font-semibold text-3xl sm:text-4xl md:5xl lg:text-[49px] leading-[100%] tracking-normal"
              style={{ fontFamily: "Mosvita" }}
            >
              <p className="text-deepgreen">
                One Platform to Digitize Operations, Eliminate Paper, and{" "}
                <span className="text-lightgreen">Accelerate Workflows</span>
              </p>
            </div>
            <div className="text-lg rotate-0 opacity-100 font-[Mosvita] sm:text-sm md:text-xl font-normal lg:text-[20px] leading-[100%] tracking-[0%]">
              <p>Transform Paper Chaos into Digital Efficiency</p>
            </div>
            {/* BUTTONS */}
            {/* <div className="flex gap-4 mt-8"> */}
            <div className="min-h-[40px] flex flex-row mt-8 gap-6 rotate-0 opacity-100">
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Start Free
                <ArrowRight size={18} />
              </button>

              <button className="flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 rounded hover:bg-green-50">
                Watch Demo
                <Play size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex  items-center justify-center">
            <img
              src={analytics}
              alt="Dashboard Preview"
              className="w-full h-auto absolute left-[30%] object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
