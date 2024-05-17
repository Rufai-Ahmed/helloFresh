import React from "react";
import Button from "../reUsables/Button";

const Hero = () => {
  return (
    <div className="w-full min-h-[120vh] xl:min-h-[70vh] bg-heroMob lg:bg-background lg:bg-center bg-cover flex justify-center lg:items-center bg-top text-center lg:text-start">
      <div className="lg:w-[65%] mt-16 sm:mt-24 lg:mt-0 space-y-5">
        <h2 className="font-mono text-[20px] sm:text-[30px] text-center lg:text-start lg:text-[40px] text-slate-900 leading-tight">
          Treat yourself with <br /> America’s #1 Meal Kit.
        </h2>

        <p className="text-[18px[] ">
          Now offering 10{" "}
          <span className="font-bold">
            Free Meals and Free Dessert for Life.
          </span>{" "}
        </p>

        <div className="space-y-4">
          <Button
            text="Get Offer"
            className="text-white bg-green-700 hover:bg-green-700"
          />
          <p className="text-sm font-normal lg:w-[50%] text-green-800 ">
            *Applied as discount across 7 boxes, new subscriptions only, and
            varies by plan. One free dessert item per box with an active
            subscription.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
