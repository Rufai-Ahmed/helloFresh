"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import kid from "../../asset/InstagramPeople.jpeg";

const Testimony = () => {
  const swiperParams: SwiperOptions = {
    pagination: { type: "bullets" },
    modules: [Pagination],
    spaceBetween: 5,
    slidesPerView: 1,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="w-full py-10 overflow-hidden flex justify-center">
      <div className="w-[90%] xl:w-[65%]">
        <center className="mb-20">
          <h1 className="text-[35px]">
            Cook it. Love it. Tag it #HelloFreshPics
          </h1>
          <p>Follow us on Instagram @hellofresh</p>
        </center>

        <Swiper
          {...swiperParams}
          className="h-[450px]  lg:h-[300px] w-full -z-10"
        >
          <div className="flex flex-wrap w-full justify-between">
            {Array.from({ length: 4 }).map((el: unknown, i: number) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col w-full space-y-4 lg:w-[200px] items-center text-center">
                  <Image
                    src={kid.src}
                    alt="kid"
                    className="w-[40%] lg:hidden"
                    width={100}
                    height={100}
                  />

                  <h4 className="font-bold">bdanielle1285</h4>
                  <p>
                    My little chef helping me make dinner tonight and trying out
                    some of his new kitchen utensils I got him!
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimony;
