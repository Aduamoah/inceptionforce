import React from "react";
import k1 from "../assets/k1.png";
import k2 from "../assets/k2.png";
import k3 from "../assets/k3.png";
import k4 from "../assets/k4.png";
import k5 from "../assets/k5.png";
import ticket from "../assets/ticket.png";
import exlink from "../assets/external-link.png";
import bus from "../assets/bus.png";
import card from "../assets/card.png";
import weird from "../assets/weird.png";
import k6 from "../assets/k6.png";
import line from "../assets/line.png";
const AgricultureCore: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full max-h-[600px] bg-[#0D673B] flex">
          <div className="flex flex-col items-center justify-center  p-20">
            <div className="">
              <h3 className="font-semibold text-[49px] text-[#F2FDF5] leading-normal">
                Empowering Farmers with Smarter Tools
              </h3>
              <p className="font-normal txt-[20px] text-[#FFFFFF] leading-normal">
                From smallholders to large agribusinesses, InceptionForce helps
                track inputs, manage yields, and ensure sustainable growth.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Agriculture For Free
              </button>
            </div>
          </div>
          <div className="flex-col">
            <img src={k1} className="h-[600px]" />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-auto">
            <div className="m-10">
              <h4 className="font-semibold text-[39px] text-center align-middle text-[#2E323B]">
                Feature Spotlight: <br />
                Smarter Farming with InceptionForce
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[20px] md:text-[31px] leading-normal align-middle">
                  Farm Input Tracking <br />
                  Made Easy
                </h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Farmer Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Inputs like seeds, fertilizers, and tools often get lost
                      or mismanaged.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={k2} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Log and track all farm inputs in one place.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Avoid shortages and reduce wastage.
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
                    Farmer Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Farmers struggle to track field productivity and forecast
                      yields
                    </span>
                  </p>
                </div>
                <div>
                  <img src={k3} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Record planting, harvesting, and yield data digitally.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Make smarter farming decisions and improve output.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[31px] leading-normal align-middle">
                  Production Monitoring for <br />
                  Better Yields
                </h5>
              </div>
            </div>
            <img src={line} />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[20px] md:text-[31px]leading-normal align-middle">
                  Sales & Payment Integration
                </h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Farmer Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Farmers lose track of who owes what and face delays in
                      getting paid.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={k4} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Connect sales directly to payments and receivables.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Get paid faster and keep finances transparent.
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
            <img src={k5} />
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Proof Metrics
            </h4>
            <div className="flex justify-evenly  gap-6">
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  30%
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  less wastage of fertilizers and seeds
                </p>
              </div>
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  45%
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  faster sales reconciliation
                </p>
              </div>
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  2x
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  improvement in cash
                  <br /> flow for small farms
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Agriculture Solutions use these core modules:
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
                Bring Smart Farming to Your Fields Today
              </h3>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Agriculture For Free
              </button>
              <img src={weird} className="w-40 h-fit" />
            </div>
            <div className="w-fit">
              <img src={k6} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgricultureCore;
