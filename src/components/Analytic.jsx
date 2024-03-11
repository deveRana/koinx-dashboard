import React from "react";
import { IoMdInformationCircle } from "react-icons/io";

const Analytic = () => {
  return (
    <div className="w-full mt-4">
      <h2 className="text-black text-xl flex flex-row items-center">
        Analyst Estimates
        <IoMdInformationCircle className="text-[#Abb9bf] text-2xl ml-2" />
      </h2>

      <div className="w-full flex flex-col md:flex-row items-center mt-3">
        <div className="text-4xl font-medium bg-[#EBF9F4] text-[#0FBA83] w-36 h-32 flex items-center justify-center rounded-full  ">
          76%
        </div>
        <ul className="mt-4 md:mt-0 w-full ml-8 flex flex-col items-start">
          <li className="w-full flex flex-row items-center">
            <span className="text-base w-8">Buy</span>
            <div className="w-2/3 h-2 mx-4 rounded-md bg-[#0FBA83]"></div>
            <span className="text-base w-8">76%</span>
          </li>

          <li className="w-full mt-3 flex flex-row items-center">
            <span className="text-base w-8">Hold</span>
            <div className="w-1/12 h-2 mx-4 rounded-md bg-[#C7C8CE]"></div>
            <span className="text-base w-8">8%</span>
          </li>

          <li className="w-full mt-3 flex flex-row items-center">
            <span className="text-base w-8">Sell</span>
            <div className="w-1/4 h-2 mx-4 rounded-md bg-[#F7324C]"></div>
            <span className="text-base w-8">16%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analytic;
