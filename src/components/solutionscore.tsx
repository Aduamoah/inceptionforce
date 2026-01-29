import React from "react";
import laptop from "../assets/laptopman.jpg";
import garden from "../assets/gardenguy.jpg";
import atm from "../assets/atm.jpg";
import cement from "../assets/cement.jpg";
import wrench from "../assets/wrench.png";
import { ArrowRight } from "lucide-react";
import worker from "../assets/worker.png";
import bag from "../assets/shopping-bag-02.png";
import retail from "../assets/Retail.png";
import greens from "../assets/greens.png";
import natural from "../assets/natural-food.png";
import dish from "../assets/dish-02.png";
import meeting from "../assets/meeting.png";
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

const SolutionCore: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full h-auto bg-[#F2FDF5] pt-36">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
            <div className="flex flex-col  md:col-span-1">
              <img src={atm} alt="Atm" className="mx-auto" />
              <img src={garden} alt="Garden" className="mx-auto" />
            </div>

            <div className="flex flex-col items-center justify-center text-center md:col-span-2 p-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#0D673B]">
                Solutions Built for Every Industry.
              </h2>
              <p className="mt-4 text-base md:text-lg lg:text-xl text-black max-w-2xl">
                From contractors to retailers, InceptionForce adapts to your
                workflows and scales with your business.
              </p>
            </div>

            <div className="flex flex-col md:col-span-1">
              <img src={cement} alt="Cement" className="mx-auto" />
              <img src={laptop} alt="Laptop" className="mx-auto" />
            </div>
          </div>
        </div>

        <div className="w-full h-auto p-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-semibold text-center text-2xl md:text-4xl mb-6">
              Choose Your Industry
            </h4>
          </motion.div>
          <div className="flex flex-col gap-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white pl-6 rounded-3xl shadow-xl">
                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={wrench}
                      width={30}
                      height={30}
                      alt="wrench icon"
                    />
                    <h6 className="font-semibold text-xl md:text-2xl text-[#2E323B]">
                      Construction
                    </h6>
                  </div>

                  <p className="font-normal text-base md:text-lg text-[#2E323B]">
                    From Sketch to Invoice, manage projects effortlessly.
                  </p>

                  <button className="inline-flex w-fit items-center justify-center md:justify-start gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600  md:w-fit">
                    Explore Construction Solutions
                    <ArrowRight size={18} />
                  </button>
                </div>

                <img
                  src={worker}
                  className="w-full h-auto object-cover rounded-tr-2xl rounded-br-2xl"
                  alt="worker"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white pr-6 rounded-3xl shadow-xl">
                <img
                  src={retail}
                  className="w-full h-auto object-cover rounded-tl-2xl rounded-bl-2xl"
                  alt="retail"
                />

                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <img src={bag} width={30} height={30} alt="bag icon" />
                    <h6 className="font-semibold text-xl md:text-2xl text-[#2E323B]">
                      Retail
                    </h6>
                  </div>

                  <p className="font-normal text-base md:text-lg text-[#2E323B]">
                    Smart POS & stock tracking for modern stores.
                  </p>

                  <button className="inline-flex w-fit items-center justify-center md:justify-start gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600  md:w-fit">
                    Explore Retail Solutions
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white pl-6 rounded-3xl shadow-xl">
                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={natural}
                      width={30}
                      height={30}
                      alt="natural icon"
                    />
                    <h6 className="font-semibold text-xl md:text-2xl text-[#2E323B]">
                      Agriculture
                    </h6>
                  </div>

                  <p className="font-normal text-base md:text-lg text-[#2E323B]">
                    Track inputs, harvests, and sales with ease.
                  </p>

                  <button className="inline-flex w-fit items-center justify-center md:justify-start gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600  md:w-fit">
                    Explore Agriculture Solutions
                    <ArrowRight size={18} />
                  </button>
                </div>

                <img
                  src={greens}
                  className="w-full h-auto object-cover rounded-tr-2xl rounded-br-2xl"
                  alt="greens"
                />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white pr-6 rounded-3xl shadow-xl">
                <img
                  src={meeting}
                  className="w-full  h-auto object-cover rounded-tl-2xl rounded-bl-2xl"
                  alt="meeting"
                />

                <div className="space-y-4 flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <img src={dish} width={30} height={30} alt="bag icon" />
                    <h6 className="font-semibold text-xl md:text-2xl text-[#2E323B]">
                      Restaurant
                    </h6>
                  </div>

                  <p className="font-normal text-base md:text-lg text-[#2E323B]">
                    AI-driven menus & inventory at your fingertips.
                  </p>

                  <button className="inline-flex w-fit items-center justify-center md:justify-start gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600  md:w-fit">
                    Explore Restaurant Solutions
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionCore;
