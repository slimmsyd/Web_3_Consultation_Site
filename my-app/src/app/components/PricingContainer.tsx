"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";
import { PricingCard } from "./subComponents/PricingCard";

import React, { RefObject } from "react";

interface Props {
  priceRef: RefObject<HTMLDivElement>;
}

export default function PriceContainer({ priceRef } : Props) {
  return (
    <section 
    ref = {priceRef}
    className="h-full site-wrapper bg-black">
      <div className="site-container h-full flex flex-col gap-[35px]  pb-[100px]">
        <div className="flex flex-col items-center gap-[5px] mb-[20px] text-center">
          <h2 className="text-[40px]">Get Started On Your Crypto Evolution</h2>
          <p className="text-[14px] text-[#3E3E3E]">
            Start your crypto journey as soon as possible.
          </p>
        </div>

        <div className="flex flex-row  flex-wrap justify-center gap-[30px] w-full px-[2rem]">
          <PricingCard
            pricing={"$45"}
            timing={"30"}
            pricing2={"$75"}
            timing2={"60"}
            category = {"Beginner"}
          />
          <PricingCard
            pricing={"$75"}
            timing={"45"}
            pricing2={"$120"}
            timing2={"90"}
            category = {"Intermediate"}

          />
          <PricingCard
            pricing={"$125"}
            timing={"45"}
            pricing2={"$175"}
            timing2={"90"}
            category = {"Expert"}

          />
        </div>
      </div>
    </section>
  );
}
