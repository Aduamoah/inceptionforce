import React from "react";

import dollarinsingle from "../assets/dollar-circle.png";

import ticket from "../assets/ticket.png";

import indicators from "../assets/Indicators.png";
const FlexibleCore: React.FC = () => {
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
          <div className="flex">
            <label className="font-normal text-sm leading-4 tracking-normal align-middle text-[#374151]">
              Pricing
            </label>
            <img src={indicators} className="w-4 h-4" />
            <p className="font-normal text-sm leading-4 tracking-normal align-middle text-[#16B365]">
              Inventory Management
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <h4 className="font-semibold text-[39px] tracking-normal leading-[100%] text-center text-[#0D673B]">
              Inventory Management
            </h4>
            <p className="font-normal text-[20px] align-middle leading-normal text-[#2E323B]">
              Smarter stock control to keep your business running seamlessly.
            </p>
          </div>

          <div className="flex flex-col gap-12 items-center justify-center">
            <h5 className="font-semibold text-[31px] tracking-normal leading-[100%] text-center text-[#0D673B]">
              Feature Breakdown
            </h5>
            <div className="flex">
              <div className=" w-full grid grid-cols-1 md:grid-cols-2   gap-12">
                <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                  <img src={ticket} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    Real-Time Tracking
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    Stay on top of stock levels across <br /> warehouses,
                    stores, and online <br /> channels.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                  <img src={ticket} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    Smart Reordering
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    AI predicts demand and suggests <br /> when to reorder.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex">
              <div className=" w-full grid grid-cols-1 md:grid-cols-2   gap-12">
                <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                  <img src={ticket} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    Multi-Location Sync
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    Keep all your inventories connected <br /> and updated from
                    one central hub.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                  <img src={ticket} className="w-8 h-8" />
                  <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                    Barcode & QR Scanning
                  </p>
                  <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                    Fast and reliable check-in/check-out <br /> with any mobile
                    device.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center">
            <h5 className="font-semibold text-[31px] tracking-normal leading-[100%] text-center text-[#0D673B]">
              Use Case Spotlight
            </h5>
            <p className="font-normal text-[20px] text-center leading-normal text-[#000000]">
              How Different Industries Benefit
            </p>
            <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12">
              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={ticket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Retailers
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Track multiple store inventories & auto- <br />
                  restock bestsellers.
                </p>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={ticket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Supermarkets
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Automate expiry tracking & optimize <br /> shelf space.
                </p>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={ticket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Restaurants
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Monitor ingredient usage to cut food <br /> waste.
                </p>
              </div>

              <div className="bg-[#FFFFFF] w-fit h-fit p-6 rounded-2xl border">
                <img src={ticket} className="w-8 h-8" />
                <p className="font-medium text-[20px] leading-normal align-middle text-[#2E323B]">
                  Contractors
                </p>
                <p className="font-normal text-[13px] align-middle leading-normal text-[#2E323B]">
                  Keep tools & material inventory <br /> aligned with job
                  progress.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[40px] items-center justify-center">
            <div className="flex flex-col gap-2 items-center justify-center">
              <h5 className="font-semibold text-[31px] tracking-normal leading-[100%] text-center text-[#0D673B]">
                Integration Panel
              </h5>
              <p className="font-normal text-[20px] text-center leading-normal text-[#000000]">
                This service works with the following technologies
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5049_8748)">
                  <rect
                    x="6"
                    y="4"
                    width="148"
                    height="148"
                    rx="8"
                    fill="white"
                  />
                  <g clip-path="url(#clip0_5049_8748)">
                    <path
                      d="M80.0011 128C107.615 128 130 105.613 130 78C130 50.3828 107.617 28 80.0011 28C52.3855 28 30 50.3828 30 78C30 105.613 52.3855 128 80.0011 128Z"
                      fill="#1FC0E7"
                    />
                    <path
                      d="M54.3622 77.9872L62.8777 69.4317C63.16 69.1472 63.3177 68.765 63.3177 68.3605C63.3177 67.5161 62.6333 66.8317 61.7911 66.8317C61.38 66.8317 60.9955 66.9917 60.7066 67.2872L52.1955 75.805L43.6511 67.2717C43.3622 66.9872 42.98 66.8317 42.5733 66.8317C41.7289 66.8317 41.0466 67.5161 41.0466 68.3583C41.0466 68.7694 41.2111 69.1583 41.5044 69.4472L50.02 77.9739L41.5089 86.5072C41.2111 86.805 41.0466 87.1917 41.0466 87.6028C41.0466 88.4472 41.7311 89.1317 42.5733 89.1317C42.98 89.1317 43.3622 88.9761 43.6511 88.6872L52.1844 80.1494L60.6844 88.6539C60.9866 88.965 61.3733 89.1317 61.7911 89.1317C62.6311 89.1317 63.3155 88.4472 63.3155 87.6028C63.3155 87.1961 63.16 86.8139 62.8711 86.525L54.36 77.9783L54.3622 77.9872ZM104.987 77.985C104.987 79.5183 106.231 80.7628 107.764 80.7628C109.289 80.7628 110.533 79.5183 110.533 77.985C110.533 76.4517 109.289 75.2072 107.762 75.2072C106.236 75.2072 104.993 76.4517 104.993 77.985H104.987ZM99.7311 77.985C99.7311 73.5517 103.331 69.9405 107.762 69.9405C112.184 69.9405 115.791 73.5517 115.791 77.985C115.791 82.4183 112.187 86.0294 107.762 86.0294C103.333 86.0294 99.7311 82.4228 99.7311 77.985ZM96.5711 77.985C96.5711 84.1628 101.593 89.1939 107.762 89.1939C113.931 89.1939 118.953 84.1672 118.953 77.9872C118.953 71.8094 113.931 66.7783 107.762 66.7783C101.591 66.7783 96.5711 71.8072 96.5711 77.9872V77.985ZM95.7777 66.9694H95.3111C93.9 66.9694 92.54 67.4139 91.4044 68.2917C91.2488 67.6117 90.6355 67.0917 89.9066 67.0917C89.0689 67.0917 88.3955 67.7694 88.3955 68.6117L88.4 87.4894C88.4 88.3272 89.0889 89.0094 89.9222 89.0094C90.7622 89.0094 91.4466 88.3272 91.4489 87.485V75.8761C91.4489 72.0094 91.8044 70.445 95.1111 70.0317C95.4222 69.9939 95.7511 70.0005 95.7555 70.0005C96.6577 69.9672 97.3022 69.3428 97.3022 68.5005C97.3022 67.6561 96.6133 66.9717 95.7689 66.9717L95.7777 66.9694ZM66.4755 76.1428C66.4755 76.0983 66.48 76.0539 66.4822 76.0139C67.3666 72.5028 70.54 69.9094 74.3155 69.9094C78.1377 69.9094 81.3377 72.5628 82.1822 76.1361H66.4733L66.4755 76.1428ZM85.3044 75.8539C84.6466 72.7361 82.9422 70.1739 80.3489 68.5294C76.5533 66.1161 71.5444 66.2494 67.8822 68.8628C64.8911 70.9894 63.1644 74.4739 63.1644 78.0628C63.1644 78.9628 63.2755 79.8717 63.4977 80.7672C64.6266 85.2117 68.4444 88.5805 72.9955 89.1383C74.3466 89.3028 75.6622 89.2272 77.0177 88.8717C78.1911 88.5828 79.3222 88.1116 80.3644 87.4405C81.4466 86.745 82.3511 85.825 83.2311 84.725C83.2444 84.7028 83.2622 84.6872 83.28 84.665C83.8889 83.9094 83.7755 82.8294 83.1089 82.3183C82.5444 81.885 81.5977 81.7094 80.8555 82.665C80.6955 82.8961 80.5155 83.1317 80.3222 83.365C79.7289 84.0205 78.9933 84.6539 78.1133 85.1472C76.9889 85.7472 75.7133 86.0872 74.3577 86.0961C69.9177 86.045 67.5444 82.9405 66.6977 80.7272C66.5511 80.3117 66.4377 79.8828 66.3577 79.4383L66.3355 79.205H82.2688C84.4511 79.1561 85.6244 77.6117 85.3 75.8494L85.3044 75.8539Z"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_5049_8748"
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5049_8748"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5049_8748"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_5049_8748">
                    <rect
                      width="100"
                      height="100"
                      fill="white"
                      transform="translate(30 28)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5049_8749)">
                  <rect
                    x="6"
                    y="4"
                    width="148"
                    height="148"
                    rx="8"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M120.679 48.1172H39.281C34.1298 48.1172 29.9597 52.3281 30.0003 57.4385V88.5095C30.0003 93.6606 34.1706 97.8307 39.3219 97.8307H77.8743L95.495 107.643L91.4885 97.8307H120.679C125.83 97.8307 130 93.6606 130 88.5095V57.4385C130 52.2872 125.83 48.1172 120.679 48.1172ZM37.5641 55.3126C36.4194 55.3943 35.5608 55.8032 34.9885 56.5799C34.4161 57.3158 34.2117 58.2561 34.3343 59.3191C36.7464 74.6503 38.995 84.9935 41.08 90.3492C41.8977 92.3115 42.838 93.252 43.9418 93.1702C45.6589 93.0474 47.703 90.6763 50.1151 86.0566C51.3825 83.4399 53.3449 79.5153 56.0023 74.2822C58.2098 82.009 61.2351 87.8145 65.0374 91.6983C66.1005 92.8021 67.2043 93.2927 68.267 93.211C69.2075 93.1292 69.9432 92.6386 70.4339 91.7391C70.8427 90.9624 71.0063 90.0629 70.9245 89.0409C70.6792 85.3206 71.0473 80.1285 72.0693 73.4646C73.1321 66.5962 74.4404 61.6494 76.0349 58.7058C76.3619 58.0926 76.4845 57.4793 76.4437 56.7435C76.3619 55.8031 75.9531 55.0264 75.1764 54.4131C74.3997 53.7999 73.5409 53.5137 72.6007 53.5955C71.4151 53.6772 70.5156 54.2496 69.9025 55.3943C67.3678 60.0141 65.5688 67.4957 64.506 77.8799C62.9524 73.9552 61.644 69.3354 60.622 63.8979C60.1724 61.4859 59.0686 60.3412 57.2696 60.4638C56.0431 60.5456 55.0211 61.3632 54.2034 62.9168L45.2501 79.9649C43.7783 74.0369 42.3883 66.8006 41.1209 58.2561C40.8347 56.1302 39.6491 55.149 37.5641 55.3126ZM116.345 58.2562C119.248 58.8695 121.415 60.4231 122.887 62.9987C124.195 65.2064 124.849 67.8637 124.849 71.0526C124.849 75.2634 123.786 79.1065 121.66 82.6224C119.207 86.7107 116.018 88.7548 112.053 88.7548C111.358 88.7548 110.622 88.673 109.845 88.5095C106.942 87.8963 104.776 86.3429 103.304 83.7672C101.996 81.5186 101.341 78.8204 101.341 75.6723C101.341 71.4614 102.404 67.6184 104.53 64.1434C107.024 60.0551 110.213 58.011 114.138 58.011C114.833 58.011 115.569 58.0927 116.345 58.2562ZM114.628 80.3738C116.141 79.0247 117.163 77.0214 117.735 74.3232C117.899 73.3829 118.022 72.3608 118.022 71.2979C118.022 70.1123 117.776 68.8449 117.286 67.5775C116.672 65.9831 115.855 65.1246 114.873 64.9202C113.402 64.634 111.971 65.4516 110.622 67.4549C109.518 69.0084 108.823 70.6438 108.455 72.32C108.25 73.2603 108.169 74.2824 108.169 75.3045C108.169 76.49 108.414 77.7574 108.905 79.0247C109.518 80.6191 110.336 81.4776 111.317 81.6822C112.339 81.8865 113.443 81.4368 114.628 80.3738ZM97.253 62.9987C95.7811 60.4231 93.5735 58.8695 90.7118 58.2562C89.9348 58.0927 89.1991 58.011 88.5039 58.011C84.5794 58.011 81.3905 60.0551 78.8966 64.1434C76.7705 67.6184 75.7078 71.4614 75.7078 75.6723C75.7078 78.8204 76.3619 81.5186 77.67 83.7672C79.1419 86.3429 81.3088 87.8963 84.2113 88.5095C84.988 88.673 85.7239 88.7548 86.4191 88.7548C90.3847 88.7548 93.5735 86.7107 96.0264 82.6224C98.1525 79.1065 99.2153 75.2634 99.2153 71.0526C99.2153 67.8637 98.5611 65.2064 97.253 62.9987ZM92.1016 74.3232C91.5295 77.0214 90.5072 79.0247 88.9946 80.3738C87.809 81.4368 86.7052 81.8865 85.6832 81.6822C84.7019 81.4776 83.8842 80.6191 83.271 79.0247C82.7804 77.7574 82.5351 76.49 82.5351 75.3045C82.5351 74.2824 82.6169 73.2603 82.8214 72.32C83.1893 70.6438 83.8842 69.0084 84.988 67.4549C86.3373 65.4516 87.7682 64.634 89.2399 64.9202C90.2211 65.1246 91.0389 65.9831 91.652 67.5775C92.1427 68.8449 92.388 70.1123 92.388 71.2979C92.388 72.3608 92.3062 73.3829 92.1016 74.3232Z"
                    fill="#7F54B3"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5049_8749"
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5049_8749"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5049_8749"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5049_8750)">
                  <rect
                    x="6"
                    y="4"
                    width="148"
                    height="148"
                    rx="8"
                    fill="white"
                  />
                  <path
                    d="M112.799 47.6372C112.73 47.1369 112.292 46.8604 111.93 46.83C111.569 46.7997 103.923 46.233 103.923 46.233C103.923 46.233 98.6118 40.9607 98.0292 40.3773C97.4458 39.7939 96.307 39.9713 95.865 40.1016C95.7995 40.1208 94.7046 40.4588 92.8928 41.0191C91.1186 35.9146 87.9881 31.2233 82.4801 31.2233C82.3282 31.2233 82.1716 31.2297 82.0149 31.2385C80.4485 29.167 78.508 28.2671 76.8321 28.2671C64.0018 28.2671 57.872 44.3062 55.9499 52.4572C50.9645 54.002 47.4225 55.1001 46.9702 55.2424C44.1873 56.1151 44.0994 56.203 43.7342 58.8252C43.4585 60.8104 36.177 117.122 36.177 117.122L92.916 127.753L123.659 121.102C123.659 121.102 112.867 48.1375 112.799 47.6372ZM89.7567 41.9893C88.3318 42.4305 86.7118 42.9315 84.956 43.475C84.9576 43.1369 84.9592 42.8037 84.9592 42.44C84.9592 39.2672 84.5188 36.713 83.8123 34.6878C86.6503 35.0443 88.5404 38.273 89.7567 41.9893ZM80.2919 35.3168C81.0807 37.294 81.5937 40.1312 81.5937 43.9601C81.5937 44.1559 81.5921 44.3349 81.5905 44.5164C78.4681 45.4834 75.0755 46.5335 71.6749 47.5869C73.5842 40.2183 77.163 36.6595 80.2919 35.3168ZM76.4797 31.7084C77.0335 31.7084 77.5914 31.8962 78.1252 32.2639C74.0134 34.1987 69.6058 39.0722 67.7445 48.804C65.024 49.6464 62.3651 50.4696 59.9067 51.2312C62.087 43.8083 67.2641 31.7084 76.4797 31.7084Z"
                    fill="#95BF46"
                  />
                  <path
                    d="M111.93 46.8301C111.569 46.7997 103.923 46.2331 103.923 46.2331C103.923 46.2331 98.6119 40.9608 98.0293 40.3774C97.8111 40.16 97.517 40.0489 97.2093 40.001L92.9192 127.752L123.659 121.102C123.659 121.102 112.867 48.1376 112.799 47.6373C112.73 47.137 112.293 46.8605 111.93 46.8301Z"
                    fill="#5E8E3E"
                  />
                  <path
                    d="M82.4801 63.8168L78.6895 75.0926C78.6895 75.0926 75.368 73.32 71.2969 73.32C65.3285 73.32 65.028 77.0658 65.028 78.0097C65.028 83.1597 78.4529 85.1329 78.4529 97.196C78.4529 106.686 72.4334 112.798 64.3167 112.798C54.5769 112.798 49.5963 106.736 49.5963 106.736L52.2041 98.1199C52.2041 98.1199 57.3237 102.515 61.6442 102.515C64.467 102.515 65.6154 100.293 65.6154 98.6689C65.6154 91.9509 54.6017 91.6512 54.6017 80.6127C54.6017 71.322 61.2702 62.3311 74.731 62.3311C79.9178 62.3311 82.4801 63.8168 82.4801 63.8168Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5049_8750"
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5049_8750"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5049_8750"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5049_8751)">
                  <rect
                    x="6"
                    y="4"
                    width="148"
                    height="148"
                    rx="8"
                    fill="white"
                  />
                  <path
                    d="M75.4103 120.716C55.6163 118.572 39.9467 103.115 37.389 83.2117C37.0928 80.9067 37.0928 75.146 37.389 72.8403C39.2593 58.2853 47.9437 46.0553 61.0169 39.5646C71.3879 34.416 83.9227 33.7239 94.7383 37.7032C108.535 42.7796 118.759 54.526 121.959 68.9746C123.124 74.2367 123.124 81.8153 121.959 87.0775C119.103 99.9732 110.658 110.786 98.9864 116.489C94.8355 118.517 91.4681 119.602 86.9128 120.377C84.2683 120.827 78.1117 121.009 75.4103 120.716ZM78.0503 82.0803V60.8667L72.299 60.7953C65.7083 60.7239 63.7466 60.8953 61.2174 61.736C55.6745 63.5739 51.5861 67.9739 50.1249 73.6739C49.5315 75.9882 49.4466 79.4517 49.9296 81.6396C51.2351 87.5525 55.47 92.2939 61.2309 94.2917C62.9677 94.8917 63.3952 94.9632 65.6521 95.0389L68.1506 95.1175V92.1032V89.0896L66.2178 88.9967C63.1441 88.8467 60.9829 87.891 58.8143 85.7167C56.1932 83.0889 55.1559 79.3125 55.983 75.4089C56.6468 72.2767 58.8146 69.5439 61.7394 68.1517C63.8901 67.1282 64.7728 66.9782 68.6313 66.9782H71.9219V85.0489C71.9219 94.9875 71.9805 103.178 72.0522 103.25C72.1239 103.321 73.5028 103.357 75.1164 103.328L78.0503 103.257V82.0432L78.0503 82.0803ZM95.8697 94.8896C101.751 93.9367 106.887 89.961 109.003 84.7239C109.981 82.3032 110.252 80.8439 110.268 77.9317C110.28 75.6503 110.211 74.9346 109.854 73.6075C108.498 68.5696 105.195 64.5796 100.56 62.3782C98.309 61.3096 96.8124 60.9489 94.1207 60.8267L91.7117 60.7196L91.7638 63.811L91.8159 66.9025L93.9844 67.0167C96.3184 67.1382 97.2192 67.3882 98.7755 68.3432C101.077 69.7539 102.799 71.7932 103.65 74.1139C104.198 75.611 104.329 79.076 103.901 80.7775C103.133 83.8303 101.123 86.3253 98.3095 87.7196C96.2592 88.7353 94.5293 89.0439 90.826 89.0517L87.9504 89.0589V70.8617V52.6653H84.839H81.7277V73.8789V95.0925L88.1861 95.091C91.7993 95.091 95.184 95.0039 95.8697 94.8896Z"
                    fill="#08A809"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5049_8751"
                    x="0"
                    y="0"
                    width="160"
                    height="160"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="3" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_5049_8751"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5049_8751"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[120px] p-10 bg-[#C6F6D6]">
          <div className="flex">
            <h4
              className="font-semibold text-[39px] leading-[100%] tracking-normal text-[#0D673B]"
              style={{ fontFamily: "Mosvita" }}
            >
              Smarter stock control to keep your business running seamlessly.
            </h4>
          </div>

          <div className="flex flex-col gap-[10px]">
            <p
              className="font-normal text-[20px] leading-[100%] tracking-normal text-center text-[#000000]"
              style={{ fontFamily: "Mosvita" }}
            >
              Starting at
            </p>
            <h4
              className="font-semibold text-[39px] leading-[100%] tracking-normal text-center text-[#0D673B]"
              style={{ fontFamily: "Mosvita" }}
            >
              $49/month
            </h4>

            <button className="flex items-center justify-center px-6 py-3 bg-green-500 text-black rounded hover:bg-green-600">
              <p className="text-[13px] leading-[100%] text-center">
                See Full Pricing
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FlexibleCore;
