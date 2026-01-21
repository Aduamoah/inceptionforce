import React from "react";
import retailer from "../assets/retailer.png";
import woman from "../assets/woman.png";
import manshop from "../assets/manshop.png";
import womanshop from "../assets/womanshop.png";
import shapey from "../assets/shape.png";
import ticket from "../assets/ticket.png";
import exlink from "../assets/external-link.png";
import bus from "../assets/bus.png";
import card from "../assets/card.png";
import weird from "../assets/weird.png";
import guy from "../assets/guy.png";
import line from "../assets/line.png";
const RetailCore: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="w-full max-h-[600px] bg-[#0D673B] flex">
          <div className="flex flex-col items-center justify-center  p-20">
            <div className="">
              <h3 className="font-semibold text-[49px] text-[#F2FDF5] leading-normal">
                Retailers: Manage Stock & Sales Seamlessly.
              </h3>
              <p className="font-normal txt-[20px] text-[#FFFFFF] leading-normal">
                From POS to delivery, InceptionForce streamlines every step of
                your retail workflow.
              </p>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Retail For Free
              </button>
            </div>
          </div>
          <div className="flex-col">
            <img src={retailer} className="h-[600px]" />
          </div>
        </div>

        <div className="w-full">
          <div className="w-full h-auto">
            <div className="m-10">
              <h4 className="font-semibold text-[39px] text-center align-middle text-[#2E323B]">
                Feature Spotlight: <br />
                Retail Solutions That Solve Real Problems
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[20px] md:text-[31px] leading-normal align-middle">
                  POS Integration: <br />
                  Eliminate Manual <br /> Sales Reconciliation
                </h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Retailer Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Closing the day often means hours of counting receipts and
                      checking records.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={woman} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      InceptionForce POS automatically syncs every sale with
                      your accounting system in real-time
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Save hours every week, reduce costly errors, and focus
                      more on growing your store.
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
                    Retailer Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Empty shelves or unsold stock hurt both customer trust and
                      profit margins.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={manshop} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      AI-driven inventory alerts notify you when popular
                      products run low and track slow-moving items.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Keep shelves stocked with what sells, reduce waste, and
                      maximize cash flow.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[31px] leading-normal align-middle">
                  Smart Inventory Tracking: <br />
                  Stop Stock outs & <br /> Overstocking
                </h5>
              </div>
            </div>
            <img src={line} />
            <div className="grid grid-cols-1 md:grid-cols-2 my-10">
              <div className="flex items-center justify-center">
                <h5 className="font-semibold text-[20px] md:text-[31px]leading-normal align-middle">
                  Customer Insights Dashboard: <br />
                  Know What Your Shoppers <br />
                  Want <br />
                </h5>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Retailer Challenge:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Many retailers don’t have clear visibility into what
                      drives repeat purchases.
                    </span>
                  </p>
                </div>
                <div>
                  <img src={womanshop} />
                </div>

                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Our Solution:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Our dashboard highlights best-sellers, seasonal trends,
                      and customer buying patterns.
                    </span>
                  </p>
                </div>
                <div className="bg-[#F2FDF5] p-10">
                  <p className="font-bold align-middle text-[20px] leading-normal">
                    Benefit:
                    <br />
                    <span className="font-normal text-[20px] align-middle">
                      Make data-driven decisions to stock smarter, upsell
                      effectively, and boost loyalty.
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
            <img src={shapey} />
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Proof Metrics
            </h4>
            <div className="flex justify-evenly  gap-6">
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  40%
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  Faster Checkout
                </p>
              </div>
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  30%
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  Fewer Stockouts
                </p>
              </div>
              <div className="bg-[#F2FDF5] w-fit h-fit p-5">
                <h3 className="font-semibold text-[49px] leading-normal align-middle text-[#000000]">
                  25%
                </h3>
                <p className="font-medium text-[20px] align-middle leading-normal text-[#000000]">
                  Increase in Repeat <br /> Customers
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-[39px] text-center align-middle leading-normal">
              Retail Solutions use these core modules:
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
                Ready to Transform Your Retail Business?
              </h3>
              <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                Try Retail For Free
              </button>
              <img src={weird} className="w-40 h-fit" />
            </div>
            <div className="w-fit">
              <img src={guy} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RetailCore;
