import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
const GetStarted: React.FC = () => {
  return (
    <>
      {/* py-[100px] px-[120px]  */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full h-auto py-[100px] lg:px-[120px]  md:px-[30px] max-md:px-4">
          <div
            className="
      h-auto bg-[#EDFFF6] rounded-3xl py-[80px] px-[60px] 
      flex flex-col lg:flex-row items-center justify-between 
      gap-12 lg:gap-6
    "
          >
            <div className="flex flex-col gap-6 w-full">
              <div className="w-full h-auto flex flex-col gap-2">
                <h3
                  className="font-bold text-[49px] max-md:text-[32px] leading-[100%] tracking-normal text-[#000000]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  Get started with{" "}
                  <span className="text-[#0F9662]">Inception Force</span>
                </h3>

                <p
                  className="font-normal text-[20px] max-md:text-[16px] leading-[150%] tracking-normal text-[#000000]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  Streamline operations, boost productivity, and scale with
                  powerful tools — all in one platform.
                </p>
              </div>

              <div>
                <button className="h-[40px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                  <p className="font-normal text-[16px] leading-none text-[#000000]">
                    Get Started
                  </p>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="w-full h-auto flex items-center justify-center">
              <svg
                className="w-[350px] md:w-[450px] lg:w-[567px]"
                viewBox="0 0 567 426"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M431.719 -85C405.61 -80.0186 372.757 -76.3368 346.432 -76.3368C320.107 -76.3368 287.471 -79.7479 261.416 -85L346.432 184.644L431.719 -85ZM637.248 124.921C622.143 103.263 606.284 74.1331 595.387 49.8218L429.993 267.053C404.207 271.872 372.164 275.391 346.378 275.391C320.593 275.391 288.873 272.142 263.088 267.053L97.6937 49.8218C86.7969 74.1331 70.9372 103.263 55.8327 124.921C40.7282 146.579 19.2582 171.432 0 189.896L263.304 272.901L346.432 536.426L429.777 272.901L693.08 189.896C673.822 171.432 652.352 146.634 637.248 124.976V124.921Z"
                  fill="#0F9662"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default GetStarted;
