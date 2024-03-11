import React from "react";
import img from "../assets/banner-img.svg";
import { FaArrowRight } from "react-icons/fa6";



const Banner = () => {
  return (
    <div className="bg-[#0052FE] p-5 text-white flex flex-col items-center justify-center rounded-md" >
      <h2 className="text-2xl font-normal text-center" >Get Started with <br /> KoinX for FREE</h2>

      <p className="text-base font-normal text-center my-4" >
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>

      <img src={img} className="my-4" alt="" />

      <button className="my-4 flex flex-row items-center bg-slate-50 text-black py-2 px-4 rounded-md btn-animation" >
        Get Started for FREE <FaArrowRight className="ml-2" />
      </button>
    </div>
  );
};

export default Banner;
