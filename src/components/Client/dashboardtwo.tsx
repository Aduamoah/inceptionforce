import React from "react";
import tools from "../../assets/tools.png";
import clientmenu from "../../assets/clientmenu.png";
import clientlistt from "../../assets/clientlistt.png";
// import GetStarted from "./getstarted";

const DashboardTwo: React.FC = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="flex gap-4 mt-20 h-auto">
          <div>
            <img
              src={tools}
              className="w-auto h-auto object-contain"
              alt="tools"
            />
          </div>
          <div>
            {" "}
            <img
              src={clientmenu}
              className="w-auto h-auto object-contain"
              alt="clientmenu"
            />
          </div>

          <div className="flex flex-col gap-2">
            <img
              src={clientlistt}
              className="h-auto object-contain"
              alt="clientlist"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardTwo;
