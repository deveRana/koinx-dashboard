import React from "react";
import { FaBitcoin } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import Chart from "./Chart";

const Hero = () => {
  return (
    <div className="w-full bg-[#fff] rounded-md flex flex-col p-5 ">
      <div className="flex flex-row items-center">
        <FaBitcoin className="text-[#F7931A] text-5xl " />
        <span className="text-xl font-semibold ml-3 mr-2 text-black">
          Bitcoin
        </span>
        <span className="text-sm text-[#768396] font-bold  mr-3">BTC</span>
        <span className="bg-[#768396] text-white px-3 py-3 rounded-lg">
          Rank #1
        </span>
      </div>

      <div className="mt-8 flex flex-row items-start">
        <div className="flex flex-col justify-center items-start text-black">
          <h2 className="text-lg xs:text-2xl font-semibold">$46,953.04</h2>
          <h4 className="text-base xs:text-lg font-normal">₹ 39,42,343</h4>
        </div>

        <div className="ml-8 mr-4 flex flex-row items-center bg-[#E7FCEE] text-[#16A34A]">
          <IoTriangle className="text-xs mx-2" /> <span>2.51 %</span>
        </div>

        <span className="text-sm text-[#768396]">(24H)</span>
      </div>

      <div className="mt-8 border-t-2 border-solid pt-6 grid grid-cols-1 md:grid-cols-2">
        <p className="font-semibold text-lg text-black">
          Bitcoin Price Chart (USD)
        </p>

        <div className="md:place-self-end">
          <span className="mr-2 text-sm xs:text-base text-gray-500">1H</span>
          <span className="mx-2 text-sm xs:text-base text-gray-500">24H</span>
          <span className="mx-2 text-sm xs:text-base bg-[#E2ECFE] text-[#4941CF] rounded-lg py-[.5px] px-2">
            7D
          </span>
          <span className="mx-2 text-sm xs:text-base text-gray-500">1M</span>
          <span className="mx-2 text-sm xs:text-base text-gray-500">3M</span>
          <span className="mx-2 text-sm xs:text-base text-gray-500">6M</span>
          <span className="mx-2 text-sm xs:text-base text-gray-500">1Y</span>
          <span className="mx-2 text-sm xs:text-base text-gray-500">ALL</span>
        </div>
      </div>

      <Chart />
    </div>
  );
};

export default Hero;
