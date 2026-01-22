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
// import GetStarted from "./getstarted";
const AboutCore: React.FC = () => {
  return (
    <>
      <div className="w-full ">
        <div className="w-full  flex flex-row  py-20 bg-[#051910]">
          <div className="w-full flex flex-col gap-[24px] items-center justify-center">
            <div className="h-auto py-2 px-3 flex flex-row gap-2   rounded-[99px] border bg-[#051910] border-green-900  items-center justify-center">
              <img src={star} className="w-4 h-4" />

              <p
                className="font-medium text-[16px] leading-5 tracking-[-0.02em] align-middle text-[#FFFFFF]"
                style={{ fontFamily: "General Sans" }}
              >
                About Us
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-center justify-center ">
              <h2
                className="font-semibold text-[49px] leading-[100%] tracking-normal text-center text-[#FFFFFF]"
                style={{ fontFamily: "Test Söhne" }}
              >
                Empowering Businesses Through <br /> Smarter Operations
              </h2>
              <p
                className="font-normal text-[20px] leading-[100%] tracking-normal text-center text-[#FFFFFF]"
                style={{ fontFamily: "Mosvita" }}
              >
                We simplify and transform business processes into seamless,
                paperless workflows — helping <br /> businesses across
                industries thrive in the digital era
              </p>

              <div className="flex flex-col">
                <div className="w-full flex items-baseline gap-4">
                  <div className="flex-1">
                    <img
                      src={bw1}
                      className="inline-block align-baseline h-64"
                    />
                  </div>
                  <div className="flex-[2]">
                    <img
                      src={bw2}
                      className="inline-block align-baseline h-64"
                    />
                  </div>
                  <div className="flex-1">
                    <img
                      src={bw3}
                      className="inline-block align-baseline h-64"
                    />
                  </div>
                </div>
                <div className="w-full flex items-baseline gap-4">
                  <div className="flex-1">
                    <img
                      src={bw4}
                      className="inline-block align-baseline h-64"
                    />
                  </div>

                  <div className="flex-1">
                    <img
                      src={bw5}
                      className="inline-block align-baseline h-64"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#FFFFFF]">
          <div className="grid grid-cols-2 bg-[#EDFFF6] p-10 gap-8 ">
            <div>
              {" "}
              <img src={symbol} />
            </div>

            <div className="flex flex-col gap-9">
              <h4 className="font-medium text-[39px] leading-[100%] tracking-normal text-[#000000] ">
                Our Mission
              </h4>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                To simplify and transform business processes into <br />{" "}
                seamless, paperless workflows.
              </p>
              <h4 className="font-medium text-[39px] leading-[100%] tracking-normal text-[#000000] ">
                Our Vision
              </h4>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                To address the challenges faced by businesses in agriculture,
                construction, healthcare, and retail through innovative digital
                operations technology.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F2FDF5] flex p-5 gap-8">
          <div className="w-full flex flex-col gap-3">
            <h3 className="font-medium text-[49px] leading-[100%] tracking-normal text-[#000000] ">
              Our Core Values
            </h3>
            <p className="font-normal text-[20px] leading-[100%] tracking-normal text-[#000000] ">
              Our growth and success are rooted in principles <br /> that ensure
              we build with integrity, innovate with <br /> purpose, and remain
              relentless in creating tools <br /> that truly make a difference.
            </p>
          </div>
          <div className="flex">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={newstar} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Customer First
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We place our customers at the center of everything, ensuring
                    every feature solves real challenges and delivers measurable
                    value.
                  </p>
                </div>
                <img src={linee} className="w-1/2" />

                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={compass} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Authenticity
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We stay true to our purpose and vision, building <br />{" "}
                    technology that genuinely reflects our mission <br /> to
                    simplify business operations.
                  </p>
                </div>
                <img src={linee} className="w-1/2" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={locked} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Trust & Integrity
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We operate with honesty and transparency,
                    <br /> building long-term relationships grounded in <br />{" "}
                    reliability.
                  </p>
                </div>
                <img src={linee} className="w-1/2" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={people} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Empowered People
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We invest in our team, fostering growth and <br />{" "}
                    creativity to deliver solutions that make a <br />
                    difference.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={target} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Results Driven
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We measure success by impact, not effort — <br />
                    ensuring businesses see clear, tangible <br /> outcomes.
                  </p>
                </div>
                <img src={linee} className="w-1/2" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={bulb} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Open Innovation
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We welcome ideas from everywhere,
                    <br /> believing collaboration sparks the best <br />{" "}
                    solutions.
                  </p>
                </div>
                <img src={linee} className="w-1/2" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={microscope} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Relentless R&D
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We continually improve our technology, <br /> researching
                    and testing to stay ahead of <br /> industry needs.
                  </p>
                </div>
                <img src={linee} className="w-1/2" />
                <div className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <img src={configure} className="w-4 h-4" />
                    <p className="font-semibold text-[20px] leading-[100%] tracking-normal text-[#000000] ">
                      Excellence in Tools
                    </p>
                  </div>
                  <p className="font-normal text-[16px] leading-[100%] tracking-normal text-[#000000] ">
                    We strive to build the world’s best operational <br />{" "}
                    solutions, combining performance with <br />
                    simplicity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#0D673B] flex p-20 ">
          <div className=" w-full">
            {" "}
            <h3 className="font-medium text-[49px] leading-[100%] tracking-normal text-[#FFFFFF] ">
              Our Story
            </h3>
          </div>

          <div className="w-full flex flex-col gap-3">
            <div className="flex gap-2">
              <div className="flex items-center justify-center">
                <img src={checkmark} className="w-4 h-4" />
              </div>

              <p className="font-normal text-[20px] leading-[100%] tracking-normal text-[#FFFFFF] ">
                InceptionForce was born from the need to eliminate the
                inefficiencies of paper- <br />
                heavy processes holding businesses back.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center justify-center">
                <img src={checkmark} className="w-4 h-4" />
              </div>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal text-[#FFFFFF] ">
                We design digital solutions that adapt to real-world workflows
                in industries like <br /> agriculture, construction, retail, and
                healthcare.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center justify-center">
                <img src={checkmark} className="w-4 h-4" />
              </div>
              <p className="font-normal text-[20px] leading-[100%] tracking-normal text-[#FFFFFF] ">
                Today, we empower businesses to work smarter, faster, and with
                greater clarity— <br />
                while constantly innovating for the future.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="w-full bg-[#FFFFFF] flex p-17  gap-8">
          <GetStarted />
        </div> */}
      </div>
    </>
  );
};
export default AboutCore;
