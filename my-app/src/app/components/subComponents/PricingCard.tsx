"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import React, { FC, RefObject } from "react";

interface Props {
  pricing: string;
  pricing2: string;
  timing: string;
  timing2: string;
}

export const PricingCard: FC<Props> = ({
  pricing,
  timing,
  pricing2,
  timing2,
}) => {
  return (
    <div className="pricing-card-container flex flex-col h-full">
      <div className="mb-[15px]">
        <h4>Beginner</h4>
      </div>

      <div className="flex flex-col  gap-[10px] flex-1">
        <div className="flex flex-row items-center gap-[8px]">
          <span className="text-[28px]">{pricing}</span>

          <span className="divider-line"> /</span>

          <span className="text-[16px] text-[#b4b4b4]">{timing} minutes</span>
        </div>

        <div className="flex flex-row items-center gap-[8px]">
          <span className="text-[28px]">{pricing2}</span>

          <span className="divider-line"> /</span>

          <span className="text-[16px] text-[#b4b4b4]">{timing2} minutes</span>
        </div>

        <p className="text-[14px] text-[#b4b4b4] ">
          Essential features of this and that
        </p>
      </div>

      <Link
        href="https://calendly.com/blckw3b/30min?back=1&month=2024-08&date=2024-08-15"
        target="_blank"
        className="price-btn cursor-pointer flex items-center justify-center"
      >
        Book A Call
      </Link>
    </div>
  );
};
