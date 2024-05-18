import Image from "next/image";
import React from "react";
import img from "../../asset/US-homepage-image.jpg";
import Button from "../reUsables/Button";

const What = () => {
  return (
    <div className="py-5 min-h-[50vh] w-full flex justify-center items-center">
      <div className="xl:w-[65%] w-[90%] grid lg:grid-cols-2 items-center gap-10">
        <Image src={img.src} alt="image" width={1000} height={1000} />

        <div className="space-y-5">
          <h1 className="text-[40px] font-semibold">What’s inside each box?</h1>
          <div className="space-y-5 ">
            <p>✓ Easy-to-follow recipes with clear nutritional info</p>
            <p>✓ High-quality ingredients sourced straight from the farm</p>
            <p>✓ Convenient meal kits that fit perfectly in the fridge</p>
            <p>✓ A fun cooking experience that makes you feel unstoppable</p>
            <p>✓ Innovative packaging designed to reduce waste</p>

            <Button
              text="Get Offer"
              className="bg-green-700 text-white w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
