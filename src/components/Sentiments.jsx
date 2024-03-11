import React from "react";
import { IoMdInformationCircle, IoMdTrendingUp } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import Analytic from "./Analytic";

const Sentiments = () => {
  return (
    <>
      <div className="w-full rounded-md bg-slate-50 p-5  mt-4">
        <h2 className="text-black text-xl ">Sentiments</h2>

        <h4 className="text-gray-800 text-base flex flex-row items-center">
          Key Events
          <IoMdInformationCircle className="text-[#Abb9bf] text-2xl ml-2" />
        </h4>

        <div className="mt-6"></div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            996: {
              slidesPerView: 1.7,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="flex flex-col md:flex-row items-center md:items-start bg-[#E8F4FD]  p-5 rounded-lg">
              <div className="bg-[#0082FF] p-2 rounded-full mb-3 md:mb-0 ">
                <FaNewspaper className="text-slate-50 text-3xl" />
              </div>
              <div className="flex flex-col items-start mx-8 md:ml-4">
                <h4 className="text-sm md:text-base text-black">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-[11px] md:text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="flex flex-col md:flex-row items-center md:items-start bg-[#EBF9F4]  p-5 rounded-lg">
              <div className="bg-[#0FBA83] p-2 rounded-full mb-3 md:mb-0 ">
                <IoMdTrendingUp className="text-slate-50 text-3xl" />
              </div>
              <div className="flex flex-col items-start mx-8 md:ml-4">
                <h4 className="text-sm md:text-base text-black">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-[11px] md:text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <div className="flex flex-col md:flex-row items-center md:items-start bg-[#E8F4FD]  p-5 rounded-lg">
              <div className="bg-[#0082FF] p-2 rounded-full mb-3 md:mb-0 ">
                <FaNewspaper className="text-slate-50 text-3xl" />
              </div>
              <div className="flex flex-col items-start mx-8 md:ml-4">
                <h4 className="text-sm md:text-base text-black">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-[11px] md:text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Analytic />
      </div>
    </>
  );
};

export default Sentiments;
