import React from "react";
import { ArrowRight } from "lucide-react";
// import Features from "./features";
import frame from "../assets/Frame 1000002927.png";
import frame2 from "../assets/Frame 1000002840.png";
import frame3 from "../assets/Frame direction.png";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textLineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const OperationalCore: React.FC = () => {
  return (
    <>
      <div className="sm:w-full lg:w-full lg:h-auto lg:px-[120px]">
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-auto flex flex-col items-center justify-center gap-4 mb-6">
            <div className="h-auto py-2 px-3 flex flex-row gap-2   rounded-[99px] border border-gray-200 bg-white shadow-[0_2px_6px_0_#1018280F] items-center justify-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.70525 3.03226C7.70525 2.75159 7.55822 2.4979 7.38819 2.27459C7.21362 2.04533 7.11254 1.77339 7.11254 1.48178C7.11254 0.663415 7.90864 0 8.89067 0C9.87271 0 10.6688 0.663415 10.6688 1.48178C10.6688 1.77339 10.5677 2.04533 10.3932 2.27459C10.2231 2.4979 10.0761 2.75159 10.0761 3.03226C10.0761 3.29491 10.2956 3.50458 10.5577 3.48894C12.0677 3.39884 13.5532 3.21904 15.0092 2.95485C15.1694 2.92578 15.3345 2.96391 15.4658 3.0603C15.5971 3.15668 15.6829 3.30283 15.7031 3.46442C15.8802 4.8786 15.9805 6.31643 16 7.77357C16.0038 8.0631 15.7688 8.29788 15.4792 8.29796C15.1985 8.29796 14.9448 8.15093 14.7215 7.9809C14.4923 7.80634 14.2203 7.70525 13.9287 7.70525C13.1104 7.70525 12.4469 8.50135 12.4469 9.48339C12.4469 10.4654 13.1104 11.2615 13.9287 11.2615C14.2203 11.2615 14.4923 11.1604 14.7215 10.9859C14.9448 10.8158 15.1985 10.6688 15.4792 10.6688C15.7245 10.6688 15.9193 10.8756 15.9016 11.1203C15.8078 12.4152 15.65 13.6925 15.4313 14.9491C15.3884 15.1955 15.1955 15.3885 14.949 15.4314C13.5114 15.6816 12.0466 15.852 10.5593 15.9381C10.2962 15.9534 10.0761 15.7428 10.0761 15.4792C10.0761 15.1985 10.2231 14.9448 10.3932 14.7215C10.5677 14.4923 10.6688 14.2203 10.6688 13.9287C10.6688 13.1104 9.87271 12.4469 8.89067 12.4469C7.90864 12.4469 7.11254 13.1104 7.11254 13.9287C7.11254 14.2203 7.21362 14.4923 7.38819 14.7215C7.55822 14.9448 7.70525 15.1985 7.70525 15.4792C7.70525 15.765 7.4713 15.9957 7.18566 15.9876C5.92951 15.952 4.68826 15.8562 3.4647 15.703C3.30311 15.6828 3.15697 15.597 3.06058 15.4657C2.9642 15.3344 2.92607 15.1693 2.95514 15.0091C3.1866 13.7336 3.35328 12.4354 3.45163 11.118C3.4698 10.8747 3.27621 10.6688 3.03226 10.6688C2.75159 10.6688 2.4979 10.8158 2.27459 10.9859C2.04533 11.1604 1.77339 11.2615 1.48178 11.2615C0.663415 11.2615 0 10.4654 0 9.48339C0 8.50135 0.663415 7.70525 1.48178 7.70525C1.77339 7.70525 2.04533 7.80634 2.27459 7.9809C2.4979 8.15093 2.75159 8.29796 3.03226 8.29796C3.32179 8.29796 3.55688 8.06323 3.5529 7.77373C3.5352 6.48699 3.45244 5.21607 3.3078 3.96428C3.28702 3.78451 3.34952 3.6051 3.47748 3.47713C3.60544 3.34917 3.78485 3.28668 3.96463 3.30745C5.02542 3.43003 6.09987 3.50816 7.18609 3.53992C7.47144 3.54827 7.70525 3.31774 7.70525 3.03226Z"
                  fill="#16B365"
                />
              </svg>

              <p
                className="font-medium text-[16px] leading-5 tracking-[-0.02em] align-middle text-[#16B365]"
                style={{ fontFamily: "General Sans" }}
              >
                Features
              </p>
            </div>

            <h4
              className="sm:text-[39px]  sm:w-full sm:text-[#2E323B] sm:font-semibold sm:text-center lg:w-full lg:font-semibold lg:text-[39px] lg:leading-[100%] lg:tracking-normal lg:text-center lg:align-middle lg:text-[#2E323B]"
              style={{ fontFamily: "Mosvita" }}
            >
              Powerful Features to Drive
              <br />
              Your Business Forward
            </h4>
          </div>
        </motion.div>

        <div className="w-full h-auto flex flex-col gap-10">
          {/* <Features /> */}

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT — TEXT */}
              <motion.div
                className="w-full h-auto gap-10 flex flex-col order-2 md:order-1"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Title + Icon */}
                <motion.div
                  className="h-auto flex flex-row gap-2.5"
                  variants={textLineVariants}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.4233 9.52178L27.7652 8.37964..."
                      stroke="#16B365"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20.6927 15.9999C20.6927 18.5772..."
                      stroke="#16B365"
                      strokeWidth="2"
                    />
                  </svg>

                  <h5
                    className="text-[31px] leading-[100%] font-semibold tracking-normal"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Operational Core
                  </h5>
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={textLineVariants}
                  className="font-normal text-[16px] leading-[100%] text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  InceptionForce gives you everything you need to manage
                  operations smoothly — from stock control to sales and
                  delivery. Whether you're running one outlet or a chain of
                  businesses, you stay in control with real-time visibility and
                  streamlined workflows.
                </motion.p>

                {/* Bullet Points */}
                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] text-[#2E323B]"
                >
                  <span className="font-bold">Smart Inventory Management:</span>{" "}
                  Track and manage stock levels, alerts, and movements across
                  all locations.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] text-[#2E323B]"
                >
                  <span className="font-bold">Production & Sales Systems:</span>{" "}
                  Streamline your entire order lifecycle — from creation to
                  checkout.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] text-[#2E323B]"
                >
                  <span className="font-bold">Delivery Tracking:</span> Know
                  exactly where every order stands with real-time updates.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] text-[#2E323B]"
                >
                  <span className="font-bold">
                    Multi-Business Profile Management:
                  </span>{" "}
                  Manage multiple stores or branches from one dashboard.
                </motion.p>

                {/* Button */}
                <motion.div
                  variants={textLineVariants}
                  className="flex flex-row gap-6"
                >
                  <button className="py-2 px-6 flex items-center justify-center gap-2 rounded bg-[#1CE783]">
                    <span>Start Free</span>
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT — IMAGE */}
              <div className="w-full h-auto order-1 md:order-2">
                <img src={frame3} alt="Frame3" className="object-fill" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className=" w-full  min-h-screen md:min-h-[373px] lg:min-h-[373px] grid grid-cols-1 md:grid-cols-2 gap-20 ">
              {/* LEFT */}
              <div className="sm:w-full sm:h-full lg:w-full lg:min-h-[373px] flex flex-row items-center justify-center rounded-3xl bg-[#F9F9F9] rotate-0 opacity-100">
                <p className="font-normal text-[16px] leading-[100%] tracking-normal align-middle text-[#000000]">
                  IMG
                </p>
              </div>

              {/* RIGHT — Diagram */}

              {/* Icons */}
              <motion.div
                className="w-full h-auto gap-10 flex flex-col order-2 md:order-1"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="h-auto flex flex-row gap-2.5"
                  variants={textLineVariants}
                >
                  {/* <div className="w-[42px] h-[43px]"> */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.33333 22C5.33333 24.2091 7.12419 26 9.33333 26C9.33333 27.8409 10.8257 29.3333 12.6667 29.3333C14.5076 29.3333 16 27.8409 16 26C16 27.8409 17.4924 29.3332 19.3333 29.3332C21.1743 29.3332 22.6667 27.8408 22.6667 25.9998C24.8758 25.9998 26.6667 24.209 26.6667 21.9998C26.6667 21.2416 26.4557 20.5327 26.0893 19.9285C27.937 19.5751 29.3333 17.9505 29.3333 15.9998C29.3333 14.0491 27.937 12.4246 26.0893 12.0712C26.4557 11.467 26.6667 10.7581 26.6667 9.99984C26.6667 7.7907 24.8758 5.99984 22.6667 5.99984C22.6667 4.15889 21.1743 2.6665 19.3333 2.6665C17.4924 2.6665 16 4.15901 16 5.99996C16 4.15901 14.5076 2.66663 12.6667 2.66663C10.8257 2.66663 9.33333 4.15901 9.33333 5.99996C7.12419 5.99996 5.33333 7.79082 5.33333 9.99996C5.33333 10.7582 5.54429 11.4671 5.91072 12.0713C4.06302 12.4247 2.66666 14.0493 2.66666 16C2.66666 17.9507 4.06302 19.5752 5.91072 19.9286C5.54429 20.5328 5.33333 21.2417 5.33333 22Z"
                      stroke="#16B365"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 19.3333L12.4558 11.9657C12.5817 11.588 12.9352 11.3333 13.3333 11.3333C13.7315 11.3333 14.0849 11.588 14.2108 11.9657L16.6667 19.3333M20.6667 11.3333V19.3333M11.3333 16.6666H15.3333"
                      stroke="#16B365"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {/* </div> */}
                  {/* <div className="w-[494px] h-[43px]"> */}
                  <h5
                    className=" font-semibold text-[31px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    AI Innovations
                  </h5>
                  {/* </div> */}
                </motion.div>

                <motion.p
                  variants={textLineVariants}
                  className="font-normal text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  Designed for modern businesses, InceptionForce integrates
                  AI-driven tools to reduce repetitive tasks and surface key
                  insights. The result? More time to focus on growth.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  <span className="font-bold ">
                    {" "}
                    Sketchpad-to-Invoice Tool:
                  </span>
                  Turn hand-drawn sketches into digital invoices automatically —
                  ideal for made-to-order workflows.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  <span className="font-bold ">Predictive Analytics:</span>
                  Understand patterns, forecast demand, and optimize inventory
                  before it runs out.
                </motion.p>

                <motion.div
                  variants={textLineVariants}
                  className="flex flex-row gap-6"
                >
                  <button className="py-2 px-6 flex items-center justify-center gap-2 rounded bg-[#1CE783]">
                    <span>Start Free</span>
                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              </motion.div>
            </div>

            <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT */}
              <motion.div
                className="w-full h-auto gap-10 flex flex-col order-2 md:order-1"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Icons */}
                <motion.div
                  className="h-auto flex flex-row gap-2.5"
                  variants={textLineVariants}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33331 7.33341C3.33331 5.13353 3.33331 4.03358 4.01673 3.35017C4.70015 2.66675 5.80009 2.66675 7.99998 2.66675C10.1999 2.66675 11.2998 2.66675 11.9832 3.35017C12.6666 4.03358 12.6666 5.13353 12.6666 7.33341C12.6666 9.5333 12.6666 10.6332 11.9832 11.3167C11.2998 12.0001 10.1999 12.0001 7.99998 12.0001C5.80009 12.0001 4.70015 12.0001 4.01673 11.3167C3.33331 10.6332 3.33331 9.5333 3.33331 7.33341Z"
                      stroke="#16B365"
                      stroke-width="2"
                    />
                    <path
                      d="M4.87583 20.8759C6.34859 19.4031 7.08496 18.6667 8.00002 18.6667C8.91508 18.6667 9.65146 19.4031 11.1242 20.8759C12.597 22.3486 13.3334 23.085 13.3334 24.0001C13.3334 24.9151 12.597 25.6515 11.1242 27.1243C9.65146 28.597 8.91508 29.3334 8.00002 29.3334C7.08496 29.3334 6.34859 28.597 4.87583 27.1243C3.40307 25.6515 2.66669 24.9151 2.66669 24.0001C2.66669 23.085 3.40307 22.3486 4.87583 20.8759Z"
                      stroke="#16B365"
                      stroke-width="2"
                    />
                    <path
                      d="M8 12L8 18.6667M13.3333 24H20"
                      stroke="#16B365"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 23.9999C20 21.8 20 20.7001 20.6834 20.0167C21.3668 19.3333 22.4668 19.3333 24.6667 19.3333C26.8666 19.3333 27.9665 19.3333 28.6499 20.0167C29.3333 20.7001 29.3333 21.8 29.3333 23.9999C29.3333 26.1998 29.3333 27.2997 28.6499 27.9832C27.9665 28.6666 26.8666 28.6666 24.6667 28.6666C22.4668 28.6666 21.3668 28.6666 20.6834 27.9832C20 27.2997 20 26.1998 20 23.9999Z"
                      stroke="#16B365"
                      stroke-width="1.5"
                    />
                  </svg>

                  <h5
                    className="font-semibold text-[31px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Integrated Ecosystems
                  </h5>
                </motion.div>

                <motion.p
                  variants={textLineVariants}
                  className="font-normal text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  InceptionForce plays well with others. Easily integrate with
                  third-party platforms — from payment systems to accounting
                  software — and bring your team together in one collaborative
                  space.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  <span className="font-bold ">
                    Third-Party App Connectivity:
                  </span>
                  Plug into existing tools like payment gateways, e-commerce
                  platforms, and CRMs.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  <span className="font-bold ">Collaboration Hub:</span>
                  Keep your team in sync with shared tasks, real-time updates,
                  and centralized communication.
                </motion.p>

                <motion.div
                  variants={textLineVariants}
                  className="flex flex-row gap-6"
                >
                  {" "}
                  <button className=" py-2 px-6 flex items-center justify-center gap-2 rounded bg-[#1CE783] rotate-0 opacity-100">
                    <span>Start Free</span>

                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT — Diagram */}
              <div className="w-full h-auto">
                <img src={frame} alt="Frame" className="object-fill" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT */}
              <div className="w-full h-auto rounded-3xl flex flex-row gap-2.5 bg-[#F9F9F9] ">
                {/* <div className="w-[497.13px] h-[572.18px] flex flex-col gap-[15.43px]"> */}
                <img src={frame2} />
                {/* </div> */}
              </div>

              {/* RIGHT — Diagram */}
              <motion.div
                className="w-full h-auto gap-10 flex flex-col order-2 md:order-1"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="h-auto flex flex-row gap-2.5"
                  variants={textLineVariants}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.25846 2.83447C7.21441 2.84508 7.1703 2.85512 7.12663 2.8667C7.17028 2.85509 7.21442 2.84512 7.25846 2.83447Z"
                      fill="#16B365"
                      stroke="#16B365"
                      stroke-width="2"
                    />
                    <path
                      d="M24.7412 2.83447C24.782 2.84433 24.8228 2.85405 24.8633 2.86475C24.8228 2.85409 24.782 2.8443 24.7412 2.83447Z"
                      fill="#16B365"
                      stroke="#16B365"
                      stroke-width="2"
                    />
                    <path
                      d="M23.3333 30.3335H21.3333C20.7867 30.3335 20.3333 29.8802 20.3333 29.3335C20.3333 28.7868 20.7867 28.3335 21.3333 28.3335H23.3333C26.0933 28.3335 28.3333 26.0935 28.3333 23.3335V21.3335C28.3333 20.7868 28.7867 20.3335 29.3333 20.3335C29.88 20.3335 30.3333 20.7868 30.3333 21.3335V23.3335C30.3333 27.2002 27.1867 30.3335 23.3333 30.3335Z"
                      fill="#16B365"
                    />
                    <path
                      d="M12 30.3333H8.66666C4.81333 30.3333 1.66666 27.2 1.66666 23.3333L1.66666 20C1.66666 19.4533 2.12 19 2.66666 19C3.21333 19 3.66666 19.4533 3.66666 20L3.66666 23.3333C3.66666 26.0933 5.90666 28.3333 8.66666 28.3333H12C12.5467 28.3333 13 28.7867 13 29.3333C13 29.88 12.5467 30.3333 12 30.3333Z"
                      fill="#16B365"
                    />
                    <path
                      d="M12 15.0002L9.33334 15.0002C7.45334 15.0002 6.33334 13.8802 6.33334 12.0002L6.33334 9.3335C6.33334 7.4535 7.45334 6.3335 9.33334 6.3335L12 6.3335C13.88 6.3335 15 7.4535 15 9.3335L15 12.0002C15 13.8802 13.88 15.0002 12 15.0002ZM9.33334 8.3335C8.54667 8.3335 8.33334 8.54683 8.33334 9.3335L8.33334 12.0002C8.33334 12.7868 8.54667 13.0002 9.33334 13.0002L12 13.0002C12.7867 13.0002 13 12.7868 13 12.0002L13 9.3335C13 8.54683 12.7867 8.3335 12 8.3335L9.33334 8.3335Z"
                      fill="#16B365"
                    />
                    <path
                      d="M22.6667 15.0002L20 15.0002C18.12 15.0002 17 13.8802 17 12.0002V9.3335C17 7.4535 18.12 6.3335 20 6.3335L22.6667 6.3335C24.5467 6.3335 25.6667 7.4535 25.6667 9.3335V12.0002C25.6667 13.8802 24.5467 15.0002 22.6667 15.0002ZM20 8.3335C19.2133 8.3335 19 8.54683 19 9.3335V12.0002C19 12.7868 19.2133 13.0002 20 13.0002L22.6667 13.0002C23.4533 13.0002 23.6667 12.7868 23.6667 12.0002V9.3335C23.6667 8.54683 23.4533 8.3335 22.6667 8.3335L20 8.3335Z"
                      fill="#16B365"
                    />
                    <path
                      d="M12 25.6667H9.33334C7.45334 25.6667 6.33334 24.5467 6.33334 22.6667L6.33334 20C6.33334 18.12 7.45334 17 9.33334 17H12C13.88 17 15 18.12 15 20L15 22.6667C15 24.5467 13.88 25.6667 12 25.6667ZM9.33334 19C8.54667 19 8.33334 19.2133 8.33334 20L8.33334 22.6667C8.33334 23.4533 8.54667 23.6667 9.33334 23.6667H12C12.7867 23.6667 13 23.4533 13 22.6667L13 20C13 19.2133 12.7867 19 12 19H9.33334Z"
                      fill="#16B365"
                    />
                    <path
                      d="M22.6667 25.6667H20C18.12 25.6667 17 24.5467 17 22.6667V20C17 18.12 18.12 17 20 17H22.6667C24.5467 17 25.6667 18.12 25.6667 20V22.6667C25.6667 24.5467 24.5467 25.6667 22.6667 25.6667ZM20 19C19.2133 19 19 19.2133 19 20V22.6667C19 23.4533 19.2133 23.6667 20 23.6667H22.6667C23.4533 23.6667 23.6667 23.4533 23.6667 22.6667V20C23.6667 19.2133 23.4533 19 22.6667 19H20Z"
                      fill="#16B365"
                    />
                  </svg>

                  <h5
                    className="font-semibold text-[31px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Industry-Specific Tools
                  </h5>
                </motion.div>

                <motion.p
                  variants={textLineVariants}
                  className="font-normal text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  Whether you're running a busy restaurant or a high-traffic
                  supermarket, InceptionForce adapts to your business model with
                  tools built for your environment.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  <span className="font-bold ">Restaurant POS:</span>
                  Accept orders, manage tables, and serve faster with a POS
                  system designed for the food service industry.
                </motion.p>

                <motion.p
                  variants={textLineVariants}
                  className="text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                  style={{ fontFamily: "Mosvita" }}
                >
                  <span className="font-bold ">Supermarket Checkout:</span>
                  Speed up checkout, apply discounts, and track daily sales with
                  ease
                </motion.p>

                <motion.div
                  variants={textLineVariants}
                  className="flex flex-row gap-6"
                >
                  {" "}
                  <button className=" py-2 px-6 flex items-center justify-center gap-2 rounded bg-[#1CE783] rotate-0 opacity-100">
                    <span>Start Free</span>

                    <ArrowRight size={18} />
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-auto flex flex-col lg:px-[120px] mt-8 gap-[40px] rotate-0 opacity-100">
          <div className="flex flex-col gap-2">
            <h4
              className="font-semibold text-[39px] leading-[100%] tracking-normal align-middle text-center text-[#2E323B]"
              style={{ fontFamily: "Mosvita" }}
            >
              AI Sketchpad Demo
            </h4>
            <p
              className="font-normal text-[20px] leading-[100%] tracking-normal align-middle text-center text-[#2E323B]"
              style={{ fontFamily: "Mosvita" }}
            >
              Draw. Click. Invoice: Transform Sketches into Quotes in 30 Seconds
            </p>
          </div>
          <div className="w-full min-h-screen md:min-h-[625px] lg:min-h-[625px]  flex flex-row items-center justify-center rounded-3xl gap-2.5 bg-[#F9F9F9]">
            <p
              className="font-normal text-[16px] leading-[100%] tracking-normal align-middle text-[#000000]"
              style={{ fontFamily: "Mosvita" }}
            >
              DEMO
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OperationalCore;
