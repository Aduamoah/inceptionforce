import React from "react";

import star from "../assets/star.png";

import bw1 from "../assets/bw1.png";
import bw2 from "../assets/bw2.png";
import bw3 from "../assets/bw3.png";
import bw4 from "../assets/bw4.png";
import bw5 from "../assets/bw5.png";
import symbol from "../assets/symbol.png";
import newstar from "../assets/newstar.png";
import linee from "../assets/linee.png";
import compass from "../assets/compass.png";
import locked from "../assets/locked.png";
import people from "../assets/people.png";
import target from "../assets/target.png";
import bulb from "../assets/bulb.png";
import microscope from "../assets/microscope.png";
import configure from "../assets/configure.png";
import checkmark from "../assets/checkmark.png";
import { ArrowRight, Play } from "lucide-react";
import corner from "../assets/corner.png";
import side from "../assets/side.png";
import long from "../assets/long.png";
import bar from "../assets/bar.png";
import worker from "../assets/worker.png";
import tableau from "../assets/tableau.png";
import hipaa from "../assets/hipaa.png";
import soc from "../assets/soc.png";
import gdpr from "../assets/gdpr.png";
import another from "../assets/another.png";
// import GetStarted from "./getstarted";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const PremiseCore: React.FC = () => {
  return (
    <>
      <div className="w-full ">
        <div className="w-full flex flex-row  py-20 bg-[#051910]">
          <div className="flex flex-col flex-[2] gap-[24px] items-center justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex flex-col gap-[16px] items-center justify-center  ">
                <h2
                  className="font-semibold text-[49px] leading-[100%] tracking-normal text-center text-[#FFFFFF]"
                  style={{ fontFamily: "Test Söhne" }}
                >
                  Custom & On-Premise Solutions <br /> Built for Your Business
                </h2>
                <p
                  className="font-normal text-[20px] leading-[100%] tracking-normal text-center text-[#FFFFFF]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  Deploy InceptionForce your way, on the cloud, in your private
                  data center, or tailored to <br /> your workflows for better
                  productivity.
                </p>
                <div className="flex flex-row  gap-6 rotate-0 opacity-100">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#1CE783] text-black rounded hover:bg-[#1CE783]">
                    Request a Custom Demo
                    {/* <ArrowRight size={18} /> */}
                  </button>

                  <button className="flex items-center gap-2 px-6 py-3 border-[1.5px] border-green-500 text-green-500 rounded hover:bg-green-50">
                    Talk to Sales
                    {/* <Play size={18} /> */}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative flex-1 min-h-[600px]">
            <img
              src={corner}
              alt="Corner"
              className="absolute top-0 right-0 w-[70%] object-contain"
            />
          </div>
        </div>

        <div className="w-full bg-[#051910] flex flex-col items-center justify-center gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#FFFFFF]">
              {" "}
              Deployment Options
            </h4>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={side} />
          </motion.div>
        </div>

        <div className="w-full bg-[#FFFFFF] flex  flex-col items-center justify-center p-20 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#0D673B]">
              {" "}
              Why Choose Custom & On-Premise
            </h4>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={long} />
          </motion.div>
        </div>

        <div className="w-full bg-[#FFFFFF] flex  flex-col items-center justify-center p-20 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#0D673B]">
              {" "}
              Industry-Specific Examples
            </h4>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={bar} />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className=" w-full grid grid-cols-1 md:grid-cols-2">
              <div className="w-full flex flex-col gap-7">
                <h5 className="font-semibold text-[31px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Construction (On-Premise)
                </h5>
                <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Challenge
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Disconnected blueprints & cost tracking delay projects
                </p>

                <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Solution
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Digitize blueprints, integrate with ERP, track resources{" "}
                </p>

                <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Result
                </p>
                <p className="font-normal text-[16px] leading-[100%] tracking-normal text-center text-[#000000]">
                  Projects run 30% faster, costs reduced, data stays in-house
                </p>
              </div>
              <div>
                <img src={worker} className="rounded-3xl" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full bg-[#051910] grid grid-cols-1  p-32  gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#FFFFFF]">
              {" "}
              Comparison Table
            </h4>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={tableau} />
          </motion.div>
        </div>

        <div className="w-full bg-[#FFFFFF] grid grid-cols-1  p-32  gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#0D673B]">
              {" "}
              Trust & Proof
            </h4>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h6 className="font-medium text-[25px] leading-[100%] tracking-normal text-center text-[#000000]">
              Your business data remains private, secure, and fully under your
              control. InceptionForce is compliant with industry-leading
              standards, including SOC 2 Type II, HIPAA, and GDPR.
            </h6>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-4">
              <img src={gdpr} />
              <img src={hipaa} />
              <img src={soc} />
            </div>
          </motion.div>
        </div>

        <div className="w-full bg-[#F2FDF5] grid grid-cols-1  p-32  gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#2E323B]">
              {" "}
              Testimonial
            </h4>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={another} />
          </motion.div>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full h-auto py-[100px] px-[120px]  lg:px-[30px] max-md:px-4">
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
                    className="font-bold text-[39px] max-md:text-[32px] leading-[100%] tracking-normal text-[#000000]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Ready to Deploy <br />
                    <span className="text-[#0F9662]">Inception Force</span>Your
                    Way?
                  </h3>
                </div>

                <div className="flex flex-row  gap-6 rotate-0 opacity-100">
                  <button className="h-[40px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      Book a Consultation
                    </p>
                    <ArrowRight size={16} />
                  </button>

                  <button className="flex items-center gap-2 px-6 py-2 border-[1.5px] border-green-500 text-green-500 rounded hover:bg-green-50">
                    Request Enterprise Pricing
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
        {/* <div className="w-full bg-[#FFFFFF] flex p-17  gap-8">
          <GetStarted />
        </div> */}
      </div>
    </>
  );
};
export default PremiseCore;
