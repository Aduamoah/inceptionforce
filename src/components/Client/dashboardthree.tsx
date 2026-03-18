import React from "react";
import tools from "../../assets/tools.png";
import clientmenu from "../../assets/clientmenu.png";
import clientlisttt from "../../assets/clientlisttt.png";
// import GetStarted from "./getstarted";

const DashboardThree: React.FC = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="flex gap-4 mt-16 h-auto">
          <div>
            <img
              src={tools}
              className="w-full h-[100vh] object-contain"
              alt="tools"
            />
          </div>
          <div>
            {" "}
            <img
              src={clientmenu}
              className="w-full h-[100vh] object-contain"
              alt="clientmenu"
            />
          </div>

          <div className="w-full flex flex-col gap-2">
            <img
              src={clientlisttt}
              className="w-full h-auto object-contain"
              alt="clientlist"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardThree;
