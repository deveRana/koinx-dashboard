import React from "react";
import { RxTriangleUp } from "react-icons/rx";

const Performance = () => {
  return (
    <div className="bg-slate-50 rounded-t-md p-5 w-full mt-4">
      <h2 className="text-black text-xl flex flex-row items-center">
        Performance
      </h2>

      <ul className="w-full flex flex-col items-start mt-6">
        <li className="w-full flex flex-row justify-between items-center text-base">
          <div className="flex flex-col items-start ">
            <p className="text-sm md:text-base w-full">Today’s Low</p>
            <p className="mt-3 font-medium text-sm md:text-base w-full">
              46,930.22
            </p>
          </div>
          <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 w-1/2 md:w-2/3 h-[6px] rounded-lg">
            <div className="translate-x-1/4 flex flex-col items-center justify-center">
              <RxTriangleUp className="text-2xl" />
              <p className="text-base font-medium mt-1">$48,637.83</p>
            </div>
          </div>
          <div className="flex flex-col items-start text-end ">
            <p className="text-sm md:text-base w-full ">Today’s High</p>
            <p className="mt-3 font-medium text-sm md:text-base w-full">
              49,343.83
            </p>
          </div>
        </li>

        <li className="mt-5 w-full flex flex-row justify-between items-center text-base">
          <div className="flex flex-col items-start ">
            <p className="text-sm md:text-base w-full">52W Low</p>
            <p className="mt-3 font-medium text-sm md:text-base w-full">
              16,930.22
            </p>
          </div>
          <div className="relative bg-gradient-to-r from-red-500 via-orange-500 to-green-500 w-1/2 md:w-2/3 h-[6px] rounded-lg"></div>
          <div className="flex flex-col items-start text-end">
            <p className="text-sm md:text-base w-full ">52W High</p>
            <p className="mt-3 font-medium text-sm md:text-base w-full">
              49,743.83
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Performance;
