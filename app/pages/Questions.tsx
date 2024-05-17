"use client";

import { questionData } from "@/data/data";
import { iQuestion } from "@/services/interface";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Questions = () => {
  const [questionState, setQuestionState] = useState<number | null>(null);

  return (
    <div className="min-h-[100vh] border-b w-full flex flex-col items-center py-10 bg-gray-50">
      <center>
        <h1 className="text-[30px] font-semibold">More Questions</h1>
      </center>

      <div className="w-[90%] xl:w-[65%] mt-10 space-y-4">
        {questionData.map((el: iQuestion, i: number) => (
          <div key={i}>
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() =>
                i !== questionState
                  ? setQuestionState(i)
                  : setQuestionState(null)
              }
            >
              <div className="rounded-full w-14 h-14 flex items-center text-[17px] justify-center text-green-700 border-[3px] hover:bg-green-100 transition-all duration-300 border-green-700">
                {i === questionState ? <FaAngleUp /> : <FaAngleDown />}
              </div>

              <div className="">
                <p className="font-semibold">{el.question}</p>
              </div>
            </div>
            {i === questionState! && (
              <p className="pl-5 mt-2 w-[100%] space-y-3 text-sm font-semibold">
                {el?.ans}
              </p>
            )}
          </div>
        ))}

        <p className="text-sm mt-20">
          *Offer only valid for new customers with qualifying auto-renewing
          subscription purchase and expires 63 days after offer purchase at
          11:59 PM ET. ‘10 Free Meals’ offer is based on a total discount
          applied over a 7-week period for a 2-person, 3-recipe subscription.
          Discount varies for other meal plans and sizes. ‘Free Dessert for
          Life’ offer is based on a limit of one free dessert item added to any
          plan for as long as a customer remains active; if subscription is
          canceled, this offer becomes invalid and will not be reinstated upon
          reactivation. Shipping fee applies on all deliveries after the first
          box. Not valid on premiums, meal upgrades, add-ons, taxes or shipping
          fees. May not be combined with gift cards or any other promotion. No
          cash value. Void outside the U.S. and where prohibited. Offer cannot
          be sold or otherwise bartered. HelloFresh has the right to end or
          modify any offer at any time. Additional restrictions may apply. See
          https://www.hellofresh.com/termsandconditions for more details.
        </p>
      </div>
    </div>
  );
};

export default Questions;
