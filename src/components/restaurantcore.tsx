import React from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import ticket from "../assets/ticket.png";
import exlink from "../assets/external-link.png";
import bus from "../assets/bus.png";
import card from "../assets/card.png";
import weird from "../assets/weird.png";
import c6 from "../assets/c6.png";
import line from "../assets/line.png";
const RestaurantCore: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full max-h-[600px] bg-[#0D673B] flex">
          <div className="flex flex-col items-center justify-center  p-20">
            <div className="">
              <h3 className="font-semibold text-[49px] text-[#F2FDF5] leading-normal">
                Smarter Billing, Happier Customers
              </h3>
              <p className="font-normal txt-[20px] text-[#FFFFFF] leading-normal">
                InceptionForce helps restaurants streamline point-of-sale,
                manage menus, and track every transaction with ease.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Restaurant For Free
              </button>
            </div>
          </div>
          <div className="flex-col">
            <img src={c1} className="h-[600px]" />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-auto">
            <div className="m-10">
              <h4 className="font-semibold text-[39px] text-center align-middle text-[#2E323B]">
                Feature Spotlight: <br />
                Elevate Your Restaurant Operations
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[20px] md:text-[31px] leading-normal align-middle">
                  Digital Menu & POS <br />
                  Integration
                </h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Restaurant Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Traditional menus and manual billing cause errors and
                      delays.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={c2} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Manage menus digitally and sync directly with POS.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Faster orders, accurate billing, and real-time menu
                      updates.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <img src={line} />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] md:text-[31px]leading-normal">
                    Restaurant Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Handling cash, card, and mobile payments separately slows
                      service.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={c3} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Centralized payment system that supports all methods.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Faster checkouts and happier customers.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[31px] leading-normal align-middle">
                  Seamless Payment <br />
                  Processing
                </h5>
              </div>
            </div>
            <img src={line} />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[20px] md:text-[31px]leading-normal align-middle">
                  Financial Insights & Reporting
                </h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Restaurant Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Restaurant owners struggle with reconciling daily sales
                      and expenses.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={c4} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Automated reports showing revenue, expenses, and trends.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Smarter decisions backed by real-time data.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F2FDF5] w-full">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Case Study Spotlight
            </h4>
            <img src={c5} />
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Proof Metrics
            </h4>
            <div className="flex justify-evenly  gap-6">
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  50%
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  reduction in billing errors
                </p>
              </div>
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  2+
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  hours saved daily on reconciliations
                </p>
              </div>
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  2x
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  increase in customer <br />
                  satisfaction with faster <br /> checkouts
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Restaurant Solutions use these core modules:
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
                  Monitor deliveries in real time with smart <br /> updates and
                  route insights.
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:px-40 md:my-10">
            <div className="bg-[#0D673B] rounded-3xl p-10">
              <h3 className="font-medium text-[49px] leading-normal align-middle text-[#FFFFFF]">
                Upgrade Your Restaurant Billing Today!
              </h3>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Restaurant For Free
              </button>
              <img src={weird} className="w-40 h-fit" />
            </div>
            <div className="w-fit">
              <img src={c6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCore;
