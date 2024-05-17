import Image from "next/image";
import React from "react";
import lady from "../../asset/lady.png";
import Button from "../reUsables/Button";

const Banner = () => {
  return (
    <div className="w-full bg-[#d2f996] overflow-hidden flex justify-center min-h-[45vh] py-10 items-center">
      <div className="xl:w-[65%] w-[90%] flex-wrap flex h-full items-center">
        <div className="space-y-10 lg:w-1/2">
          <h2 className="text-[40px] leading-snug">
            Start cooking Keke Palmer&apos;s favorite guilt-free meals today.
          </h2>

          <Button text="Get Offer" className="text-white bg-green-800" />
        </div>

        <div className="lg:w-1/2 flex justify-center h-full">
          <Image
            src={lady.src}
            height={1000}
            className="h-[45vh] w-full object-contain scale-110"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
