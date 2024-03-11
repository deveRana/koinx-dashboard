import React from "react";
import Fundamentals from "./Fundamentals";
import Performance from "./Performance";

const Overview = () => {
  return (
    <div className=" w-full  py-5 mt-4 flex flex-col items-start ">
      <ul className="w-full flex flex-row flex-wrap">
        <li className="text-sm md:text-base font-medium py-4 px-4 border-b-2 text-[#0052FE] border-[#0052FE]">
          Overview
        </li>
        <li className="text-sm md:text-base font-medium px-4 text-[#3E424A] py-4 border-b-2">
          Fundamentals
        </li>
        <li className="text-sm md:text-base font-medium px-4 text-[#3E424A] py-4 border-b-2">
          New Insights
        </li>
        <li className="text-sm md:text-base font-medium px-4 text-[#3E424A] py-4 border-b-2">
          Sentiments
        </li>
        <li className="text-sm md:text-base font-medium px-4 text-[#3E424A] py-4 border-b-2">
          Team
        </li>
        <li className="text-sm md:text-base font-medium px-4 text-[#3E424A] py-4 border-b-2">
          Technicals
        </li>
        <li className="text-sm md:text-base font-medium px-4 text-[#3E424A] py-4 border-b-2">
          Tokenomics
        </li>
      </ul>

      <Performance/>
      <Fundamentals/>

    </div>
  );
};

export default Overview;
