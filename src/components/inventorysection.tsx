import React from "react";
import { ArrowRight, Play } from "lucide-react";

const InventoryCore: React.FC = () => {
  return (
    <>
      <section>
        <div className="w-[1440px] h-[500px] flex flex-row absolute top-[73px] pr-[120px] pl-[120px] gap-[121px]">
          <div className="w-[885px] h-[278px] flex flex-col gap-[24px]">
            <div className="w-[885px] h-[214px] flex flex-col gap-[16px]">
              <h2
                className="w-[885px] h-[170px] font-semibold text-[61px] leading-[100%] tracking-normal text-center text-[#0D673B]"
                style={{ fontFamily: "Mosvita" }}
              >
                Inventory Management: Simplify Stock Control with AI
              </h2>
              <p
                className="w-[619px] h-[28px] font-normal text-[20px] leading-[100%] tracking-normal text-center text-[#000000]"
                style={{ fontFamily: "Mosvita" }}
              >
                Inventory Management: Simplify Stock Control with AI
              </p>
              <div className="w-[344px] h-[40px] flex flex-row mt-8 gap-6 rotate-0 opacity-100">
                <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
                  Start Free
                  <ArrowRight size={18} />
                </button>

                <button className="flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 rounded hover:bg-green-50">
                  Watch Demo
                  <Play size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[1440px] h-[3316px]  flex flex-col absolute top-[639px] gap-[80px]">
        <div className="w-[1200px] h-[658px] flex flex-col gap-[40px]">
          <div className="w-[875px] h-[55px] flex flex-col gap-[16px]">
            <h4
              className="w-[531px] h-[55px] font-semibold text-[39px] leading-[100%] tracking-normal text-center align-middle text-[#2E323B]"
              style={{ fontFamily: "Mosvita" }}
            >
              Features Breakdown
            </h4>
          </div>
          <div className="w-[1200px] h-[563px] flex flex-row gap-[80px]">
            <div className="w-[563px] h-[563px] flex flex-col gap-[24px]">
              <div className="w-[563px] h-[135px] flex flex-row  border-[16px] gap-[8px] p-[24px] bg-[#F2FDF5]">
                <div className="w-[32px] h-[32px] rotate-0 opacity-100">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.4233 9.52178L27.7652 8.37964C27.2675 7.51587 27.0186 7.08398 26.5952 6.91176C26.1717 6.73954 25.6928 6.87544 24.7351 7.14723L23.1081 7.60549C22.4966 7.7465 21.8551 7.66651 21.2967 7.37964L20.8476 7.12048C20.3688 6.81383 20.0005 6.3617 19.7967 5.83024L19.3514 4.50039C19.0586 3.62037 18.9122 3.18036 18.5637 2.92868C18.2152 2.677 17.7523 2.677 16.8265 2.677H15.3402C14.4144 2.677 13.9514 2.677 13.6029 2.92868C13.2544 3.18036 13.1081 3.62037 12.8153 4.50039L12.37 5.83024C12.1662 6.3617 11.7979 6.81383 11.3191 7.12048L10.87 7.37964C10.3116 7.66651 9.6701 7.7465 9.05863 7.60549L7.43164 7.14723C6.47386 6.87544 5.99497 6.73954 5.57154 6.91176C5.14811 7.08398 4.89924 7.51587 4.40152 8.37964L3.7434 9.52178C3.27685 10.3314 3.04358 10.7363 3.08886 11.1672C3.13413 11.5982 3.44642 11.9455 4.07099 12.6401L5.44572 14.177C5.78171 14.6024 6.02026 15.3437 6.02026 16.0101C6.02026 16.677 5.78179 17.4181 5.44575 17.8435L4.071 19.3805C3.44642 20.0751 3.13413 20.4224 3.08886 20.8533C3.04358 21.2843 3.27686 21.6891 3.7434 22.4988L4.4015 23.6409C4.89921 24.5046 5.1481 24.9366 5.57154 25.1088C5.99498 25.281 6.47388 25.1451 7.43167 24.8733L9.05857 24.415C9.67015 24.274 10.3118 24.354 10.8702 24.641L11.3193 24.9002C11.798 25.2068 12.1662 25.6589 12.37 26.1903L12.8153 27.5203C13.1081 28.4003 13.2544 28.8403 13.6029 29.092C13.9514 29.3437 14.4144 29.3437 15.3402 29.3437H16.8265C17.7523 29.3437 18.2152 29.3437 18.5637 29.092C18.9122 28.8403 19.0586 28.4003 19.3514 27.5203L19.7967 26.1903C20.0005 25.6589 20.3687 25.2068 20.8474 24.9002L21.2965 24.641C21.8549 24.354 22.4965 24.274 23.1081 24.415L24.735 24.8733C25.6928 25.1451 26.1717 25.281 26.5952 25.1088C27.0186 24.9366 27.2675 24.5046 27.7652 23.6409L27.7652 23.6409L28.4233 22.4988C28.8898 21.6891 29.1231 21.2843 29.0778 20.8533C29.0326 20.4224 28.7203 20.0751 28.0957 19.3805L26.7209 17.8435C26.3849 17.4181 26.1464 16.677 26.1464 16.0101C26.1464 15.3437 26.385 14.6024 26.721 14.177L28.0957 12.6401C28.7203 11.9455 29.0326 11.5982 29.0778 11.1672C29.1231 10.7363 28.8898 10.3314 28.4233 9.52178Z"
                      stroke="#16B365"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20.6927 15.9999C20.6927 18.5772 18.6034 20.6666 16.026 20.6666C13.4487 20.6666 11.3594 18.5772 11.3594 15.9999C11.3594 13.4226 13.4487 11.3333 16.026 11.3333C18.6034 11.3333 20.6927 13.4226 20.6927 15.9999Z"
                      stroke="#16B365"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className="w-[475px] h-[87px] flex flex-col gap-[8px]">
                  <h6
                    className="w-[475px] h-[35px] font-semibold text-[25px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Real-Time Stock Tracking
                  </h6>
                  <p
                    className="w-[475px] h-[44px] font-normal text-[16px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Monitor inventory levels across multiple locations with live
                    updates.Prevent stockouts and overstocking, saving time and
                    costs.
                  </p>
                </div>
              </div>

              <div className="w-[563px] h-[83px] flex flex-row border-[16px] p-[24px] gap-2">
                <div className="w-[32px] h-[32px] rotate-0 opacity-100">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.4233 9.52178L27.7652 8.37964C27.2675 7.51587 27.0186 7.08398 26.5952 6.91176C26.1717 6.73954 25.6928 6.87544 24.7351 7.14723L23.1081 7.60549C22.4966 7.7465 21.8551 7.66651 21.2967 7.37964L20.8476 7.12048C20.3688 6.81383 20.0005 6.3617 19.7967 5.83024L19.3514 4.50039C19.0586 3.62037 18.9122 3.18036 18.5637 2.92868C18.2152 2.677 17.7523 2.677 16.8265 2.677H15.3402C14.4144 2.677 13.9514 2.677 13.6029 2.92868C13.2544 3.18036 13.1081 3.62037 12.8153 4.50039L12.37 5.83024C12.1662 6.3617 11.7979 6.81383 11.3191 7.12048L10.87 7.37964C10.3116 7.66651 9.6701 7.7465 9.05863 7.60549L7.43164 7.14723C6.47386 6.87544 5.99497 6.73954 5.57154 6.91176C5.14811 7.08398 4.89924 7.51587 4.40152 8.37964L3.7434 9.52178C3.27685 10.3314 3.04358 10.7363 3.08886 11.1672C3.13413 11.5982 3.44642 11.9455 4.07099 12.6401L5.44572 14.177C5.78171 14.6024 6.02026 15.3437 6.02026 16.0101C6.02026 16.677 5.78179 17.4181 5.44575 17.8435L4.071 19.3805C3.44642 20.0751 3.13413 20.4224 3.08886 20.8533C3.04358 21.2843 3.27686 21.6891 3.7434 22.4988L4.4015 23.6409C4.89921 24.5046 5.1481 24.9366 5.57154 25.1088C5.99498 25.281 6.47388 25.1451 7.43167 24.8733L9.05857 24.415C9.67015 24.274 10.3118 24.354 10.8702 24.641L11.3193 24.9002C11.798 25.2068 12.1662 25.6589 12.37 26.1903L12.8153 27.5203C13.1081 28.4003 13.2544 28.8403 13.6029 29.092C13.9514 29.3437 14.4144 29.3437 15.3402 29.3437H16.8265C17.7523 29.3437 18.2152 29.3437 18.5637 29.092C18.9122 28.8403 19.0586 28.4003 19.3514 27.5203L19.7967 26.1903C20.0005 25.6589 20.3687 25.2068 20.8474 24.9002L21.2965 24.641C21.8549 24.354 22.4965 24.274 23.1081 24.415L24.735 24.8733C25.6928 25.1451 26.1717 25.281 26.5952 25.1088C27.0186 24.9366 27.2675 24.5046 27.7652 23.6409L27.7652 23.6409L28.4233 22.4988C28.8898 21.6891 29.1231 21.2843 29.0778 20.8533C29.0326 20.4224 28.7203 20.0751 28.0957 19.3805L26.7209 17.8435C26.3849 17.4181 26.1464 16.677 26.1464 16.0101C26.1464 15.3437 26.385 14.6024 26.721 14.177L28.0957 12.6401C28.7203 11.9455 29.0326 11.5982 29.0778 11.1672C29.1231 10.7363 28.8898 10.3314 28.4233 9.52178Z"
                      stroke="#16B365"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20.6927 15.9999C20.6927 18.5772 18.6034 20.6666 16.026 20.6666C13.4487 20.6666 11.3594 18.5772 11.3594 15.9999C11.3594 13.4226 13.4487 11.3333 16.026 11.3333C18.6034 11.3333 20.6927 13.4226 20.6927 15.9999Z"
                      stroke="#16B365"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className="w-[475px] h-[35px]  flex flex-col gap-2">
                  <h6
                    className="w-[475px] h-[35px] font-semibold text-[25px] leading-[100%] tracking-normal align-middle text-[#2E323B]"
                    style={{ fontFamily: "Mosvita" }}
                  >
                    Automated Reordering
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InventoryCore;
