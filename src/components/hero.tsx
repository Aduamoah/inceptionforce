import React from "react";
import { Play, ArrowRight } from "lucide-react";
import analytics from "../assets/analytics.png";

const Hero: React.FC = () => {
  return (
    <div className="w-[1440px] h-[432px] relative top-[126px] flex flex-row gap-[121px] pl-[120px] pr-[120px] rotate-0 opacity-100">
      {/* LEFT SIDE */}
      <div className="w-[637px] h-[323px] flex flex-col gap-6 rotate-0 opacity-100 ">
        <div className="w-[637px] h-[207px] font-mosvita font-semibold text-[49px] leading-[100%] tracking-normal">
          <p>
            One Platform to Digitize
            <br />
            Operations, Eliminate Paper,
            <br />
            and <span className="text-green-500">Accelerate Workflows</span>
          </p>
        </div>
        <div className="w-[471px] h-[28px] rotate-0 opacity-100 font-[Mosvita] font-normal text-[20px] leading-[100%] tracking-[0%]">
          <p>Transform Paper Chaos into Digital Efficiency</p>
        </div>
        {/* BUTTONS */}
        {/* <div className="flex gap-4 mt-8"> */}
        <div className="w-[344px] h-[40px] flex flex-row mt-8 gap-6 rotate-0 opacity-100">
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
      <div className="w-[608px] h-[432px] rotate-0 opacity-100 rounded-lg border">
        <img
          src={analytics}
          alt="Dashboard Preview"
          className="w-[608px] h-[432px] object-fill"
        />
      </div>
    </div>
  );
};

export default Hero;
