import React from "react";
import { IoMdInformationCircle } from "react-icons/io";

const Fundamentals = () => {
  return (
    <div className="rounded-b-md  bg-slate-50 p-5 w-full pt-4">
      <h2 className="text-black text-xl flex flex-row items-center">
        Fundamentals{" "}
        <IoMdInformationCircle className="text-[#Abb9bf] text-2xl ml-2" />
      </h2>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-6 ">
        <ul className="flex flex-col items-start lg:mr-12">
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">Bitcoin Price</span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              $16,815.46
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">
              24h Low / 24h High
            </span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              $16,382.07 / $16,874.12
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">7d Low / 7d High</span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              $16,382.07 / $16,874.12
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">Trading Volume</span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              $23,249,202,782
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">Market Cap Rank</span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              #1
            </span>
          </li>
        </ul>

        <ul className="flex flex-col items-start md:ml-12">
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">Market Cap</span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              $323,507,290,047
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">
              Market Cap Dominance
            </span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              38.343%
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">
              Volume / Market Cap
            </span>
            <span className="text-[12px] md:text-sm text-black font-medium ">
              0.0718
            </span>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">All-Time High</span>
            <div className="flex flex-col text-end">
              <span className="text-[12px] md:text-sm text-black font-medium ">
                $69,044.77 <span className="text-[#EF4A4A]">-75.6%</span>{" "}
              </span>
              <span className="text-xs">Nov 10, 2021 (about 1 year)</span>
            </div>
          </li>
          <li className="w-full border-b-2 flex flex-row justify-between items-center h-16 ">
            <span className="text-[13px] md:text-base ">All-Time Low</span>
            <div className="flex flex-col text-end">
              <span className="text-[12px] md:text-sm text-black font-medium ">
                {" "}
                $67.81 <span className="text-[#16A34A]">24729.1%</span>
              </span>
              <span className="text-xs"> Jul 06, 2013 (over 9 years)</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fundamentals;
