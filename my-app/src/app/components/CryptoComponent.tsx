"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";
import React, { RefObject } from "react";
import Image from "next/image";

import ImageOne from "../../../public/HomeAssets/image2.png";
import ImageTwo from "../../../public/HomeAssets/image3.png";
import ImageThree from "../../../public/HomeAssets/image4.png";

interface CryptoComponentProps {
  refSection1: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
  scrollToSection: (ref: RefObject<HTMLElement>) => void;
  priceRef: RefObject<HTMLDivElement>;
}

export default function CryptoComponent({
  refSection1,
  refSection4,
  scrollToSection,
  priceRef,
}: CryptoComponentProps) {
  return (
    <>
      <section className="h-full site-wrapper bg-black ">
        <div className="site-container h-full">
          <div className="my-[88px] md:px-[2rem] px-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[5px] mb-[20px] text-white">
                <span className = "text-white">what and why</span>
                <h2 className = "text-white">Crypto</h2>
                <button
                  onClick={() => scrollToSection(priceRef)}
                  className="join-btn clear-bg"
                >
                  Book A Call
                </button>
              </div>

              <div className="text-[18px] font-thin flex flex-col gap-[5px]">
                <p>
                  Cryptocurrency is a digital or virtual form of money that uses
                  cryptography for security. Unlike traditional currencies like
                  dollars or euros, cryptocurrencies operate on decentralized
                  networks based on blockchain technology. The most well-known
                  cryptocurrency is Bitcoin, but there are thousands of others,
                  each with unique features and uses.
                </p>
                <p>
                  Accessibility: Cryptocurrencies can be accessed and used by
                  anyone with an internet connection, providing financial
                  services to unbanked populations around the world.
                </p>
              </div>

              <div className="flex lg:flex-row flex-col justify-between gap-[20px] mt-[100px]">
                <div className="flex flex-col gap-[10px] image-wrapper">
                  <Link
                    href="https://decrypt.co/243622/trump-sons-tease-huge-crypto-announcement"
                    className="image-container"
                    target="_blank"
                  >
                    <Image
                      alt="Image Banner"
                      src={ImageOne}
                      height={300} // Adjust the height based on container size
                      width={300} // Adjust the width based on container size
                      layout="responsive"
                      objectFit="cover" // Ensures the image covers the container without distortion
                      quality={100}
                    />
                  </Link>

                  <div className="h-[80px]">
                    <h3 className = "text-white" >Trump Sons Tease "Crypto"</h3>
                  </div>

                  <p>
                    Eric and Donald Trump Jr. say they've fallen in love with
                    crypto and DeFi and have something "huge" in the works. What
                    is it? Adrian Zmudzinski
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] justify-between   image-wrapper">
                  <Link
                    href="https://decrypt.co/243964/solana-etfs-inevitable-us-brazil-approval-vaneck-exec"
                    className="image-container"
                    target="_blank"
                  >
                    {" "}
                    <Image
                      alt="Image Banner"
                      src={ImageTwo}
                      height={300} // Adjust the height based on container size
                      width={300} // Adjust the width based on container size
                      layout="responsive"
                      objectFit="cover" // Ensures the image covers the container without distortion
                      quality={100}
                    />
                  </Link>

                  <div className="h-[80px]">
                    <h3 className = "text-white">Solona ETF Teased</h3>
                  </div>
                  <p>
                    Solana is the next big target for spot ETF issuers in the
                    United States, but does approval in Brazil mean it'll happen
                    soon in America?
                  </p>
                </div>
                <div className="flex flex-col gap-[10px] justify-between  image-wrapper">
                  <Link
                    href="https://www.coindesk.com/markets/2024/08/12/bitcoin-nears-58k-in-selloff-ahead-of-busy-data-week/"
                    className="image-container"
                    target="_blank"
                  >
                    {" "}
                    <Image
                      alt="Image Banner"
                      src={ImageThree}
                      height={300} // Adjust the height based on container size
                      width={300} // Adjust the width based on container size
                      layout="responsive"
                      objectFit="cover" // Ensures the image covers the container without distortion
                      quality={100}
                    />
                  </Link>

                  <div className="h-[80px]">
                    <h3 className = "text-white" >Bitcoin 100K EOY?</h3>
                  </div>

                  <p>
                    Crypto markets lack a clear anchor and are susceptible to
                    continued position adjustments based on traditional finance
                    markets, one analyst said.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-full site-wrapper bg-black">
        <div className="site-container h-full">
          <div className="my-[88px] md:px-[2rem] px-[10px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col items-center gap-[5px] mb-[20px]">
                <span>what and why</span>
                <h2 ref={refSection4}>Blockchain</h2>
                <p className="text-[14px] text-[#b4b4b4] text-center ">
                  watch video
              </p>

              </div>
              <div className="video-container relative">
                {/* <div className="overlayDark absolute"></div> */}
                <Video
                  src="https://www.blackw3b.io/Bitcoin_Vid.mp4"
                  type="video/mp4"
                  width="100%"
                  height="100vh"
                  controls={true}
                  autoPlay={false}
                  loop={true}
                  muted={false}
                  className="relative"
                />
              </div>

              <div
                ref={refSection1}
                className="max-w-[500px] m-auto text-center mt-[20px] items-center text-[14px] flex flex-col gap-[20px]"
              >
                <p className="text-[14px] text-[#b4b4b4]">
                  Blockchain is a digital ledger technology that securely
                  records transactions across a network of computers. Each
                  transaction is added to a chain of blocks, creating an
                  unchangeable and transparent record.
                </p>

                <button
                  onClick={() => scrollToSection(priceRef)}
                  className="join-btn clear-bg"
                >
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-full site-wrapper bg-black">
        <div className="site-container h-full">
          <div className="my-[88px] px-[2rem] flex flex-col gap-[25px]">
            <div className="flex md:flex-row lg:gap-[75px] flex-col-reverse gap-[10px]">
              <div className="text-container relative overflow-hidden">
                <div className="absolute">
                  <pre className="opacity-[20%]">
                    <code>
                      {`
              ___
              |_|_|
              |_|_|              _____
              |_|_|     ____    |*_*_*|
         _______   _\\__\\___/ __ \\____|_|_   _______
        / ____  |=|      \\  <_+>  /      |=|  ____ \\
        ~|    |\\|=|======\\\\______//======|=|/|    |~
         |_   |    \\      |      |      /    |    |
          \\==-|     \\     |  2D  |     /     |----|~~/
          |   |      |    |      |    |      |____/~/
          |   |       \\____\\____/____/      /    / /
          |   |         {----------}       /____/ /
          |___|        /~~~~~~~~~~~~\\     |_/~|_|/
           \\_/        |/~~~~~||~~~~~\\|     /__|\\
           | |         |    ||||    |     (/|| \\)
           | |        /     |  |     \\       \\\\
           |_|        |     |  |     |
                      |_____|  |_____|
                      (_____)  (_____)
                      |     |  |     |
                      |     |  |     |
                      |/~~~\\|  |/~~~\\|
                      /|___|\\  /|___|\\
                     <_______><_______>
          `}
                    </code>
                  </pre>
                </div>

                <h4 className="text-[28px]">Understanding Crypto</h4>

                <div className="flex-col flex gap-[25px]">
                  <div className="flex flex-col gap-[5px] mt-[20px]">
                    <span className="text-[20px] text-[#6042F3]">
                      What you learn
                    </span>
                    <p className="text-[14px] text-[#b4b4b4] ">
                      {" "}
                      You will gain a comprehensive overview of blockchain,
                      cryptocurrency, and decentralized finance (DeFi). You'll
                      understand how blockchain technology creates secure,
                      transparent records, how cryptocurrencies function as
                      digital money, and how DeFi is revolutionizing financial
                      services by providing open access to everyone.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[5px]">
                    <span className="text-[20px] text-[#6042F3]">
                      Why you must
                    </span>
                    <p className="text-[14px] text-[#b4b4b4] ">
                      {" "}
                      Understanding these technologies is crucial for staying
                      ahead in the digital age. For minority communities, this
                      knowledge empowers you to access new financial
                      opportunities, ensure your data privacy, and participate
                      in a global economy that's increasingly decentralized and
                      inclusive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[5px] text-div text-center md:text-left">
                <h2>
                  Future is here, it is your rsight to take control of it.
                </h2>
                <p className="text-[14px] text-[#b4b4b4] ">
                  Staying ahead of financial trends is key to protecting your
                  future. By understanding and leveraging blockchain and
                  cryptocurrency, you’ll position yourself to take advantage of
                  emerging opportunities, safeguard your wealth, and be part of
                  a financial system that’s designed to be more equitable and
                  inclusive for all.
                </p>

                <Link className="mt-[20px] text-[#6042F3]" href="/">
                  Book A Call
                </Link>
              </div>
            </div>

            <div className="text-container relative overflow-hidden  !pb-[4rem] !w-full  !max-w-full">
              <div className="absolute right-0">
                <pre className="opacity-[20%] ">
                  <code>
                    {`
              ___
              |_|_|
              |_|_|              _____
              |_|_|     ____    |*_*_*|
         _______   _\\__\\___/ __ \\____|_|_   _______
        / ____  |=|      \\  <_+>  /      |=|  ____ \\
        ~|    |\\|=|======\\\\______//======|=|/|    |~
         |_   |    \\      |      |      /    |    |
          \\==-|     \\     |  2D  |     /     |----|~~/
          |   |      |    |      |    |      |____/~/
          |   |       \\____\\____/____/      /    / /
          |   |         {----------}       /____/ /
          |___|        /~~~~~~~~~~~~\\     |_/~|_|/
           \\_/        |/~~~~~||~~~~~\\|     /__|\\
           | |         |    ||||    |     (/|| \\)
           | |        /     |  |     \\       \\\\
           |_|        |     |  |     |
                      |_____|  |_____|
                      (_____)  (_____)
                      |     |  |     |
                      |     |  |     |
                      |/~~~\\|  |/~~~\\|
                      /|___|\\  /|___|\\
                     <_______><_______>
          `}
                  </code>
                </pre>
              </div>

              <h4 className="text-[28px]">Blockchain to build yourself.</h4>

              <div className="flex-col flex gap-[25px]">
                <div className="flex flex-col gap-[5px] mt-[20px]">
                  <span className="text-[20px] text-[#6042F3]">
                    Protecting your future
                  </span>
                  <p className="text-[14px] text-[#b4b4b4] ">
                    {" "}
                    Empower yourself with a technology that safeguards your
                    tomorrow. Blockchain is a secure digital ledger that records
                    every transaction transparently and immutably, ensuring your
                    data and assets are protected for the long haul."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
