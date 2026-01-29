import React from "react";
import { ArrowRight, Play } from "lucide-react";

import dollarinsingle from "../assets/dollar-circle.png";
import exlink from "../assets/external-link.png";
import ticket from "../assets/ticket.png";
import bus from "../assets/bus.png";
import building from "../assets/building.png";
import notes from "../assets/notes.png";
import waves from "../assets/waves.png";
import socket from "../assets/socket.png";
import card from "../assets/card.png";
import shoppingcart from "../assets/shoppingcart.png";
import telephonelike from "../assets/telephonelike.png";
import kippu from "../assets/kippu.png";
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
const ForceCore: React.FC = () => {
  return (
    <>
      <div className="w-full ">
        <div className="w-full min-h-[323px] flex flex-row  px-[120px] py-[24px] bg-[#F2FDF5]">
          <div className="w-full flex flex-col gap-[24px] items-center justify-center">
            <div className="h-auto py-2 px-3 flex flex-row gap-2   rounded-[99px] border border-gray-200 bg-white shadow-[0_2px_6px_0_#1018280F] items-center justify-center">
              <img src={dollarinsingle} className="w-8 h-8" />

              <p
                className="font-medium text-[16px] leading-5 tracking-[-0.02em] align-middle text-[#16B365]"
                style={{ fontFamily: "General Sans" }}
              >
                Pricing
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-center justify-center ">
              <h2
                className="font-semibold text-[49px] leading-[100%] tracking-normal text-center text-[#0D673B]"
                style={{ fontFamily: "Test Söhne" }}
              >
                Flexible Plans for Your
                <br /> Growing Businesses
              </h2>
              <p
                className="font-normal text-[20px] leading-[100%] tracking-normal text-center text-[#000000]"
                style={{ fontFamily: "Mosvita" }}
              >
                Start for free — and experience how InceptionForce uses AI to
                <br />
                streamline your operations, from inventory to invoicing.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col px-[120px] py-8 gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-[39px] tracking-normal leading-[100%] text-center text-[#0D673B]">
              Get pricing for all Inception Force Services
            </h4>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12">
              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={ticket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Inventory Management
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Track, restock, and manage inventory across <br /> locations
                  with ease.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={ticket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Production & Sales
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Manage your entire production lifecycle <br /> and sales
                  pipeline from a single <br /> dashboard.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={bus} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Delivery Tracking
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Monitor deliveries in real time with smart <br /> updates and
                  route insights.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
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
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12">
              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={building} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Multi-Business Control
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Seamlessly manage multiple businesses <br /> or branches under
                  one platform.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={notes} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Sketchpad-to-Invoice Tool
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Turn rough sketches into ready-to-send <br /> invoices powered
                  by AI.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={waves} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Predictive Analysis
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Make smarter decisions with forecasts <br /> based on your
                  business data.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
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
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={socket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Third-Party Integrations
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Connect your favorite tools and services <br /> for a seamless
                  workflow.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={card} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Restaurant POS
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Fast, intuitive checkout system built for <br /> food service
                  environments.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={shoppingcart} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Supermarket Checkout
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Speedy, scalable checkout solutions for <br /> retail and
                  supermarkets.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
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
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={telephonelike} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Cost Estimation
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Quickly generate accurate cost <br /> estimates with built-in
                  templates and AI- <br />
                  powered suggestions.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={kippu} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Sales Management
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Track leads, close deals, and analyze sales <br /> performance
                  — all in one place.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={kippu} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Sales Management
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Track leads, close deals, and analyze sales <br /> performance
                  — all in one place.
                </p>

                <div className="flex flex-row items-end justify-end gap-1 py-2">
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded bg-[#1CE783]">
                    <p className="font-normal text-[16px] leading-none text-[#000000]">
                      See pricing
                    </p>
                  </button>
                  <button className="h-[34px] px-6 flex flex-row items-center gap-2 rounded">
                    <p className="font-normal text-[13px]  leading-normal text-[#1CE783]">
                      Learn More
                    </p>
                    <img src={exlink} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default ForceCore;
