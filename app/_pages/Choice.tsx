"use client";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import Button from "../reUsables/Button";

const Choice = () => {
  const swiperParams: SwiperOptions = {
    navigation: true,
    pagination: { type: "bullets" },
    modules: [Navigation, Pagination],
    spaceBetween: 5,
    slidesPerView: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div className="py-8 w-full min-h-[80vh] flex justify-center border-b">
      <div className="w-[90%] xl:w-[65%]">
        <center>
          <h2 className="text-[30px]">
            Choose from 100+ weekly menu and market items
          </h2>
          <p className="text-sm">
            Plus, discover the latest seasonal and convenience items at
            HelloFresh Market for an added touch of culinary inspiration.
          </p>
        </center>

        <div className="flex gap-3 mt-10">
          <Swiper
            // style={{
            //   "--swiper-navigation-color": "green",
            //   "--swiper-navigation-sides-offset": "10px",
            // }}
            {...swiperParams}
            className="h-[300px] -z-10"
          >
            {Array.from({ length: 4 }).map((el: unknown, i: number) => (
              <SwiperSlide
                key={i}
                className="bg-burger bg-cover bg-center w-[250px] h-[300px] rounded-md -z-10"
              >
                <div className="w-full rounded-md h-full flex flex-col justify-end px-4 from-transparent via-transparent via-50% bg-gradient-to-b to-black">
                  <div className="text-white flex flex-col items-start pb-5 space-y-3         ">
                    <h3 className="uppercase w-1/2 leading-tight text-[30px] font-semibold">
                      family friendly
                    </h3>

                    <div className="px-[5px] font-bold bg-green-800 rounded-md uppercase text-sm">
                      kid-tested recipes
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="xl:bg-market rounded-md mt-5 bg-[#d2fa96] flex items-center w-full h-[140px] bg-marketMob bg-contain bg-no-repeat bg-right">
          <div className="ml-2 sm:ml-5 w-[70%] space-y-2 lg:space-y-0 lg:w-[50%]">
            <h3 className="text-[18px] sm:text-[26px] leading-tight font-bold">
              Everything You Need, All In One Box
            </h3>
            <p className="font-semibold leading-tight text-sm sm:text-base">
              The best of meal kits and online grocery shopping, streamlined
              into one weekly box.
            </p>
          </div>
        </div>

        <center className="mt-5">
          <Button
            text="View our menus"
            className="text-white bg-green-700 hover:bg-green-700 px-20 w-full lg:w-auto"
          />
        </center>
      </div>
    </div>
  );
};

export default Choice;
