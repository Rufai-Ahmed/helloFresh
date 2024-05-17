"use client";

import { footData } from "@/data/data";
import { iFoot } from "@/services/interface";
import Image from "next/image";
import React, { useState } from "react";
import { BsInstagram, BsTwitterX, BsX } from "react-icons/bs";
import { FaAngleDown, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [questionState, setQuestionState] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center w-full min-h-[45vh] pt-10">
      <div className="2xl:w-[65%] w-[90%]  lg:flex gap-6 flex-wrap pb-10 justify-center">
        {footData.map((el: iFoot, i: number) => (
          <div className="space-y-4" key={i}>
            <h5
              className={`font-bold text-[20px] lg:text-[14px] w-full py-5 lg:border-none  items-center justify-between lg:p-0 px-5 lg:py-0 lg:px-0 ${
                i === 4
                  ? "block"
                  : i === questionState
                  ? "block"
                  : i === 5
                  ? ""
                  : "flex border-y"
              }`}
            >
              {i === 5 ? "" : el.h5}

              {el.h5 !== "Payment Methods" &&
                el.h5 !== "Download our app" &&
                i !== questionState && (
                  <div
                    onClick={() =>
                      i !== questionState
                        ? setQuestionState(i)
                        : setQuestionState(null)
                    }
                    className="rounded-full lg:hidden w-10 h-10 flex items-center text-[17px] justify-center text-green-700 border-[3px] hover:bg-green-100 transition-all duration-300 border-green-700"
                  >
                    <FaAngleDown />
                  </div>
                )}

              {el.h5 === "Payment Methods" && (
                <div className="lg:hidden">{el.divs}</div>
              )}
              {i === questionState && (
                <div className="text-sm font-normal text-green-800 underline lg:hidden">
                  {el.divs}
                </div>
              )}
            </h5>
            <div className="text-green-700 font-semibold underline text-sm space-y-2 hidden lg:block">
              {el.divs}
            </div>
          </div>
        ))}
      </div>

      <div className="min-h-[70px] py-5 lg:py-0 border-t w-full flex justify-center items-center flex-wrap">
        <div className="md:w-[65%] lg:flex block items-center lg:justify-between">
          <div className="lg:flex block text-center lg:text-start items-center md:gap-16">
            <div>© HelloFresh 2024</div>
            <div className="flex gap-4 flex-wrap underline my-3 justify-center text-green-800">
              <div>Terms and Conditions</div>
              <div>Privacy</div>
              <div>Accessibility</div>
            </div>
          </div>

          <div className="flex gap-3 items-center justify-center lg:justify-normal text-[20px]">
            <div className="w-10 h-10 cursor-pointer rounded-full bg-blue-500 text-white flex items-center justify-center">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 cursor-pointer rounded-full bg-black text-white flex items-center justify-center">
              <BsTwitterX />
            </div>
            <div className="w-10 h-10 cursor-pointer rounded-full bg-pink-500 text-white flex items-center justify-center">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
