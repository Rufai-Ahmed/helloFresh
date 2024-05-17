"use client";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { iWhy } from "@/services/interface";
import { whyData } from "@/data/data";
import Button from "../reUsables/Button";

const Why = () => {
  const swiperParams: SwiperOptions = {
    pagination: { type: "bullets" },
    modules: [Pagination],
    spaceBetween: 50,
    slidesPerView: 1,
    autoplay: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 100,
      },
    },
  };

  return (
    <div className="min-h-[50vh] overflow-hidden py-4 bg-gray-50 space-y-10 w-full flex flex-col items-center">
      <center>
        <h2 className="text-[34px] font-sans">Why HelloFresh?</h2>
      </center>

      <div className="flex w-full justify-center overflow-hidden">
        <Swiper
          {...swiperParams}
          className=" lg:max-w-[800px] md:max-w-[700px] max-w-[320px] "
        >
          {whyData.map((el: iWhy, i: number) => (
            <SwiperSlide key={i} className="">
              <div className="flex flex-col w-[300px] min-h-[200px] space-y-3 items-center text-center">
                <Image
                  alt={"ewqw"}
                  src={el?.img?.src}
                  height={100}
                  width={100}
                />
                <h5 className="font-bold text-[16px]">{el.boldTxt}</h5>
                <p className="text-[15px] w-[70%] lg:w-[80%]">{el.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Button
        text="Get Offer"
        className="text-white bg-green-700 hover:bg-green-700"
      />
    </div>
  );
};

export default Why;
