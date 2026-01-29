import React from "react";
import pic1 from "../assets/pic1.png";
import pic11 from "../assets/pic11.png";
import pic111 from "../assets/pic111.png";
import pic1111 from "../assets/pic1111.png";
import pic11111 from "../assets/pic11111.png";
import ticket from "../assets/ticket.png";
import exlink from "../assets/external-link.png";
import bus from "../assets/bus.png";
import card from "../assets/card.png";
import weird from "../assets/weird.png";
import pic111111 from "../assets/pic111111.png";
import line from "../assets/line.png";
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
const ConstructionCore: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full max-h-[600px] bg-[#0D673B] flex">
          <div className="flex flex-col items-center justify-center  p-20">
            <div className="">
              <h3 className="font-semibold text-[49px] text-[#F2FDF5] leading-normal">
                Contractors: From Sketch to Invoice, Made Simple.
              </h3>
              <p className="font-normal txt-[20px] text-[#FFFFFF] leading-normal">
                InceptionForce helps construction businesses streamline project
                quoting, material tracking, and billing in one platform.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Construction For Free
              </button>
            </div>
          </div>
          <div className="flex-col">
            <img src={pic1} className="h-[600px]" />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-auto">
            <div className="m-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h4 className="font-semibold text-[39px] text-center align-middle text-[#2E323B]">
                  Feature Spotlight: <br />
                  Construction Solutions That Solve Real Problems
                </h4>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="flex items-center justify-center">
                  <h5 className="font-semibold text-[20px] md:text-[31px] leading-normal align-middle">
                    AI-Powered Estimation <br />
                    for Accurate Quotes
                  </h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Contractor Challenge:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Manual quoting takes hours and often leads to
                        underpricing.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img src={pic11} />
                  </div>

                  <div className="bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Our Solution:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Our AI analyzes sketches and project specs to create
                        accurate estimates instantly.
                      </span>
                    </p>
                  </div>
                  <div className="bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Benefit:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Win more bids with fast, professional quotes.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <img src={line} />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] md:text-[31px]leading-normal">
                      Contractor Challenge:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Materials are often misplaced or over-ordered.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img src={pic111} />
                  </div>

                  <div className="bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Our Solution:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Real-time material issuance logs keep inventory aligned
                        with project needs.
                      </span>
                    </p>
                  </div>
                  <div className="bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Benefit:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Cut costs and keep projects on schedule.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <h5 className="font-semibold text-[31px] leading-normal align-middle">
                    Real-Time Material <br />
                    Tracking to Reduce <br /> Wastage
                  </h5>
                </div>
              </div>
            </motion.div>
            <img src={line} />
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 my-10">
                <div className="flex items-center justify-center">
                  <h5 className="font-semibold text-[20px] md:text-[31px]leading-normal align-middle">
                    Sketch-to-Invoice Conversion <br />
                    for Faster Payments <br />
                  </h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Contractor Challenge:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Paperwork delays payment cycles.
                      </span>
                    </p>
                  </div>
                  <div>
                    <img src={pic1111} />
                  </div>

                  <div className="bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Our Solution:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Convert sketches and quotes directly into client-ready
                        invoices.
                      </span>
                    </p>
                  </div>
                  <div className="bg-[#F2FDF5] p-10">
                    <p className="font-bold align-middle text-[20px] leading-normal">
                      Benefit:
                      <br />
                      <span className="font-normal text-[20px] align-middle">
                        Reduce payment delays and keep cash flow steady.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-[#F2FDF5] w-full">
              <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
                Case Study Spotlight
              </h4>
              <img src={pic11111} />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col">
              <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
                Proof Metrics
              </h4>
              <div className="flex justify-evenly  gap-6">
                <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                  <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                    70%
                  </h3>
                  <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                    faster quoting with AI estimation
                  </p>
                </div>
                <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                  <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                    30%
                  </h3>
                  <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                    reduction in material wastage
                  </p>
                </div>
                <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                  <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                    2x
                  </h3>
                  <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                    faster invoice-to-
                    <br /> payment cycle
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex flex-col">
              <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
                Construction Solutions use these core modules:
              </h4>
              <div className="flex justify-evenly  gap-6">
                <div className="bg-[#EFEFEF] w-fit h-fit p-5">
                  <img src={ticket} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    Inventory Management
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    Track, restock, and manage inventory across <br /> locations
                    with ease.
                  </p>
                  <div className="flex items-end justify-end gap-1">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-[#EFEFEF] w-fit h-fit p-5">
                  <img src={bus} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    Delivery Tracking
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    Monitor deliveries in real time with smart <br /> updates
                    and route insights.
                  </p>
                  <div className="flex items-end justify-end gap-1">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </div>
                </div>
                <div className="bg-[#EFEFEF] w-fit h-fit p-5">
                  <img src={card} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    POS
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    Fast, intuitive checkout system built for <br /> service
                    environments.
                  </p>
                  <div className="flex items-end justify-end gap-1">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:px-40 md:my-10">
              <div className="bg-[#0D673B] rounded-3xl p-10">
                <h3 className="font-medium text-[49px] leading-normal align-middle text-[#FFFFFF]">
                  Build Smarter, Not Harder
                </h3>
                <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                  Try Construction For Free
                </button>
                <img src={weird} className="w-40 h-fit" />
              </div>
              <div className="w-fit">
                <img src={pic111111} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ConstructionCore;
