"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";

import React, { RefObject } from "react";

interface Props {
  refSection2: RefObject<HTMLDivElement>;
}


export default function DecentralizedComponent({refSection2}: Props) {



  return (
    <section
      ref = {refSection2}
    className="h-full site-wrapper bg-white text-black overflow-hidden ">
      <div className="site-container h-full">
        <div className="my-[120px] px-[2rem] max-w-[750px] m-auto">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col items-center gap-[5px] mb-[20px] text-center">
              <span>what and why</span>
              <h2>Decentralized Finance </h2>
              <p className="text-[14px] text-[#b4b4b4] text-center ">
                Cryptocurrency, or crypto, is digital money designed to work as
                a medium of exchange. Unlike traditional currencies, such as
                dollars or euros, cryptocurrencies use cryptography to secure
                transactions and control the creation of new units. The most
                well-known cryptocurrency is Bitcoin, but there are thousands of
                others like Ethereum, Litecoin, and Ripple.
              </p>
            </div>

            <div className="video-container relative">
              <div className="overlayDark absolute"></div>
              <Video
                src="http://localhost:3000/ether.mp4"
                type="video/mp4"
                width="100%"
                height="100vh"
                controls={false}
                autoPlay={true}
                loop={true}
                muted={false}
                className="relative"
              />
            </div>


            <button className = "large-btn">

                Book A Call

            </button>
          </div>
        </div>
        

        <div className="my-[120px] px-[2rem] max-w-[750px] m-auto">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col items-center gap-[5px] mb-[20px] text-center">
              <span>what and why</span>
              <h2>Artificial Intelligence In Blockchain </h2>
              <p className="text-[14px] text-[#b4b4b4] text-center ">
              Start your crypto journey as soon as possible.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
