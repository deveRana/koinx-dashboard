import React from "react";
import Header from "../components/Header";
import { FaChevronRight } from "react-icons/fa";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Trending from "../components/Trending";
import Overview from "../components/Overview";
import Sentiments from "../components/Sentiments";

const Layout = () => {
  return (
    <>
      {/* header */}
      <Header />

      <main className=" p-2 sm:px-4 md:px-8 lg:px-10 xl:px-16  pb-10">
        <div className="flex flex-row items-center justify-start py-6 text-base">
          <span>Cryptocurrencies</span>{" "}
          <FaChevronRight className="text-xs ml-2" />{" "}
          <FaChevronRight className="text-xs mr-2" />{" "}
          <span className="font-semibold">Bitcoin</span>{" "}
        </div>

        {/* chart and banner */}

        <div className="flex flex-row items-start justify-start gap-12">
          <div className="w-full xl:w-[70%]">
            <Hero />

            {/* overview */}
            <Overview />

            {/* sentiments */}

            <Sentiments />
          </div>

          <div className="hidden  w-[30%] xl:block">
            <Banner />
            <Trending />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
