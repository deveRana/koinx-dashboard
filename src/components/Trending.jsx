import React from "react";
import img1 from "../assets/trending-img-1.svg";
import img2 from "../assets/trending-img-2.svg";
import img3 from "../assets/trending-img-3.svg";
import { IoTriangle } from "react-icons/io5";

const Trending = () => {
  return (
    <div className="mt-8 flex flex-col items-start bg-slate-50 p-5 text-black  rounded-md">
      <h2 className="text-2xl font-medium">Trending Coins (24h)</h2>

      <ul className="flex flex-col items-start w-full">
        <li className="my-4 w-full flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src={img1} alt="" />
            <span className="ml-2 text-base font-medium">Ethereum(ETH)</span>
          </div>
          <div className="flex flex-row items-center w-20 bg-[#E7FCEE] text-[#16A34A]">
            <IoTriangle className="text-xs mx-2" /> <span>8.21 %</span>
          </div>
        </li>
        <li className="my-4 w-full flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src={img2} alt="" />
            <span className="ml-2 text-base font-medium"> Bitcoin (BTC)</span>
          </div>
          <div className="flex flex-row items-center w-20 bg-[#E7FCEE] text-[#16A34A]">
            <IoTriangle className="text-xs mx-2" /> <span>5.25 %</span>
          </div>
        </li>
        <li className="my-4 w-full flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src={img3} alt="" />
            <span className="ml-2 text-base font-medium">Polygon (MATIC)</span>
          </div>
          <div className="flex flex-row items-center w-20 bg-[#E7FCEE] text-[#16A34A]">
            <IoTriangle className="text-xs mx-2" /> <span>9.11 %</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Trending;
