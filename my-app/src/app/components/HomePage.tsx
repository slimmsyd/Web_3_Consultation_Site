"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Navigation from "./Navigation";
import Video from "./VideoComponent";
import HeaderComponent from "./HeaderComponent";
import TestimonialContainer from "./TestimonialContainer";
import CryptoComponent from "./CryptoComponent";
import DecentralizedComponent from "./DecentralizedComponent";
import AIComponent from "./AIComponent";
import PriceContainer from "./PricingContainer";
import Footer from "./Footer";
import Head from "next/head";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


import { RefObject } from "react";
import * as React from "react";

// //Web 3 Work 
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// import { formatEther } from "viem/utils";
// import { useAccount, useBalance, useContractRead } from "wagmi";
// import { readContract, waitForTransaction, writeContract } from "wagmi/actions";



export default function HomePage() {


//Wallet Connects 

//Check if the user wallet is connect, and its address using WAGMI hooks 
// const {address, isConnected} = useAccount(); 
//State variable to know if the component has been moutned yet or not 
const [isMounted, setIsMounted] = useState<boolean>(false); 
//State vraible to show loading state when waitng tor wallet to connect? 

const [loading, setLoading] = useState<boolean>(false);






  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    } as any);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const mm = gsap.matchMedia();

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  //Scroll to the correspoding container

  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const refSection1 = useRef<HTMLDivElement>(null);
  const refSection2 = useRef<HTMLDivElement>(null);
  const refSection3 = useRef<HTMLDivElement>(null);
  const refSection4 = useRef<HTMLDivElement>(null);
  const refSection5 = useRef<HTMLDivElement>(null);
  const refSectionHome = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="site-wrapper relative"
      ref = {refSectionHome}
      >
        <div className="overlayDark absolute"></div>
        <div className="absolute video-bg">
          <Video
            src="https://web-3-consultation-site-xl7a.vercel.app/ether.mp4"
            type="video/mp4"
            width="100%"
            height="100vh"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={false}
            className="relative h-[100vh]"
          />
        </div>

        <div className="social-container">
          <div className="flex flex-col gap-[20px] fixed">
            <Link
              href="https://www.instagram.com/rio.brazy/"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.82023 0.039C4.51336 0.0070909 4.73436 0 6.5 0C8.26564 0 8.48664 0.00768181 9.17918 0.039C9.87173 0.0703182 10.3445 0.180818 10.7581 0.340955C11.1912 0.504636 11.5842 0.7605 11.9092 1.09141C12.2401 1.41582 12.4954 1.80818 12.6585 2.24191C12.8192 2.65555 12.9291 3.12827 12.961 3.81964C12.9929 4.51395 13 4.73495 13 6.5C13 8.26564 12.9923 8.48664 12.961 9.17977C12.9297 9.87114 12.8192 10.3439 12.6585 10.7575C12.4954 11.1913 12.2397 11.5843 11.9092 11.9092C11.5842 12.2401 11.1912 12.4954 10.7581 12.6585C10.3445 12.8192 9.87173 12.9291 9.18036 12.961C8.48664 12.9929 8.26564 13 6.5 13C4.73436 13 4.51336 12.9923 3.82023 12.961C3.12886 12.9297 2.65614 12.8192 2.2425 12.6585C1.80873 12.4953 1.41571 12.2396 1.09082 11.9092C0.760134 11.5846 0.504231 11.1917 0.340955 10.7581C0.180818 10.3445 0.0709091 9.87173 0.039 9.18036C0.0070909 8.48604 0 8.26505 0 6.5C0 4.73436 0.00768181 4.51336 0.039 3.82082C0.0703182 3.12827 0.180818 2.65555 0.340955 2.24191C0.504473 1.80823 0.76057 1.41541 1.09141 1.09082C1.41584 0.760205 1.80846 0.504307 2.24191 0.340955C2.65555 0.180818 3.12827 0.0709091 3.81964 0.039H3.82023ZM9.12659 1.209C8.44114 1.17768 8.2355 1.17118 6.5 1.17118C4.7645 1.17118 4.55886 1.17768 3.87341 1.209C3.23936 1.23795 2.89545 1.34373 2.66618 1.43295C2.36305 1.55114 2.14618 1.69118 1.91868 1.91868C1.70303 2.12848 1.53706 2.38389 1.43295 2.66618C1.34373 2.89545 1.23795 3.23936 1.209 3.87341C1.17768 4.55886 1.17118 4.7645 1.17118 6.5C1.17118 8.2355 1.17768 8.44114 1.209 9.12659C1.23795 9.76064 1.34373 10.1045 1.43295 10.3338C1.53695 10.6157 1.703 10.8715 1.91868 11.0813C2.12845 11.297 2.38432 11.463 2.66618 11.567C2.89545 11.6563 3.23936 11.762 3.87341 11.791C4.55886 11.8223 4.76391 11.8288 6.5 11.8288C8.23609 11.8288 8.44114 11.8223 9.12659 11.791C9.76064 11.762 10.1045 11.6563 10.3338 11.567C10.637 11.4489 10.8538 11.3088 11.0813 11.0813C11.297 10.8715 11.463 10.6157 11.567 10.3338C11.6563 10.1045 11.762 9.76064 11.791 9.12659C11.8223 8.44114 11.8288 8.2355 11.8288 6.5C11.8288 4.7645 11.8223 4.55886 11.791 3.87341C11.762 3.23936 11.6563 2.89545 11.567 2.66618C11.4489 2.36305 11.3088 2.14618 11.0813 1.91868C10.8715 1.70304 10.6161 1.53708 10.3338 1.43295C10.1045 1.34373 9.76064 1.23795 9.12659 1.209ZM5.66977 8.50377C6.13343 8.69678 6.64972 8.72283 7.13046 8.57747C7.61119 8.43211 8.02655 8.12436 8.30559 7.70678C8.58463 7.2892 8.71003 6.7877 8.66039 6.28793C8.61075 5.78815 8.38914 5.32112 8.03341 4.96659C7.80664 4.73996 7.53244 4.56643 7.23056 4.4585C6.92868 4.35056 6.60662 4.31089 6.28757 4.34236C5.96851 4.37383 5.66041 4.47565 5.38543 4.64049C5.11045 4.80532 4.87544 5.02908 4.69732 5.29564C4.51919 5.5622 4.40238 5.86494 4.3553 6.18207C4.30823 6.49919 4.33204 6.82281 4.42505 7.12962C4.51805 7.43644 4.67792 7.71881 4.89315 7.95643C5.10839 8.19404 5.37362 8.38097 5.66977 8.50377ZM4.13755 4.13755C4.44779 3.8273 4.8161 3.58121 5.22145 3.4133C5.6268 3.2454 6.06125 3.15898 6.5 3.15898C6.93875 3.15898 7.3732 3.2454 7.77855 3.4133C8.1839 3.58121 8.55221 3.8273 8.86245 4.13755C9.1727 4.44779 9.41879 4.8161 9.58669 5.22145C9.7546 5.6268 9.84101 6.06125 9.84101 6.5C9.84101 6.93875 9.7546 7.3732 9.58669 7.77855C9.41879 8.1839 9.1727 8.55221 8.86245 8.86245C8.23589 9.48902 7.38609 9.84101 6.5 9.84101C5.61391 9.84101 4.76411 9.48902 4.13755 8.86245C3.51098 8.23589 3.15898 7.38609 3.15898 6.5C3.15898 5.61391 3.51098 4.76411 4.13755 4.13755ZM10.582 3.65655C10.6589 3.58402 10.7204 3.49681 10.763 3.40008C10.8056 3.30334 10.8283 3.19904 10.8298 3.09337C10.8314 2.98769 10.8117 2.88278 10.772 2.78484C10.7322 2.68691 10.6733 2.59794 10.5985 2.5232C10.5238 2.44847 10.4348 2.38949 10.3369 2.34976C10.2389 2.31003 10.134 2.29035 10.0284 2.29189C9.92268 2.29343 9.81839 2.31616 9.72165 2.35873C9.62492 2.4013 9.5377 2.46285 9.46518 2.53973C9.32414 2.68924 9.24692 2.88784 9.24991 3.09337C9.25291 3.29889 9.33589 3.49516 9.48123 3.6405C9.62657 3.78584 9.82283 3.86882 10.0284 3.87181C10.2339 3.87481 10.4325 3.79759 10.582 3.65655Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>

            <Link
              href="https://exchange.art/lord-brazy"
              target="_blank"
              className="cursor-pointer"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.51333 8.75507L5.74155 7.51118C5.69205 7.46334 5.59306 7.51118 5.54357 7.60686L2.67279 14.7353C2.62329 14.831 2.72229 14.9267 2.82128 14.9267H8.46383C8.56283 14.9267 8.61232 14.8788 8.61232 14.7831V8.85075C8.61232 8.80291 8.56283 8.75507 8.51333 8.75507ZM24.8965 15.9792C24.7976 15.8835 24.6491 15.8835 24.5006 15.9314L24.1541 16.0749C22.4712 16.8882 20.5904 17.2709 18.7095 17.2709C18.6105 17.2709 18.561 17.3188 18.561 17.3666C18.3631 18.2278 17.6206 18.8497 16.6802 18.8497H12.8195V15.74H12.869C13.1165 15.7878 13.3145 15.7878 13.5619 15.8357C15.1953 16.0749 15.9872 16.7925 16.3337 17.1274L16.3832 17.1752C16.4327 17.2231 16.5317 17.2231 16.5812 17.1752C16.6307 17.1274 16.6802 17.0796 16.7792 17.0317C17.3731 16.649 18.759 15.8357 18.759 11.5299C18.759 7.12844 15.2943 4.16225 14.8983 3.97088L12.869 3.82735H12.8195V2.58346C13.2155 2.34425 13.5124 1.91368 13.5124 1.38742C13.5124 0.621945 12.9185 0 12.1265 0C11.3346 0 10.7407 0.621945 10.7407 1.38742C10.7407 1.86584 10.9881 2.29641 11.4336 2.53562V3.58814L8.51333 3.30109C8.36484 3.30109 8.26585 3.44462 8.36484 3.5403C8.8598 4.30577 10.1962 6.69787 10.2952 10.286C10.3942 13.6349 9.84973 15.2137 9.60225 15.7878C9.55275 15.8357 9.55275 15.8835 9.60225 15.9314C9.65174 15.9792 9.70124 15.9792 9.75073 15.9792C10.0972 15.9314 10.6912 15.8357 11.4336 15.7878V18.8976H8.21635C7.17693 18.8976 6.28601 18.0364 6.28601 17.0317V16.2662C6.28601 16.1706 6.23651 16.1227 6.13752 16.1227H0.148488C0.0989918 16.1227 0 16.1706 0 16.2662C0 16.4098 0 16.5533 0 16.6968C0 18.8497 0.643449 20.8112 1.73236 22.5335C1.93035 22.8206 2.27682 22.9641 2.5738 22.8206L3.21725 22.5335C3.71221 22.2943 4.30616 22.2943 4.85062 22.5335L5.54357 22.8206C6.03853 23.0598 6.63248 23.0598 7.17694 22.8206L7.86988 22.5335C8.41434 22.2943 8.9588 22.2943 9.50325 22.5335L10.1962 22.8206C10.7407 23.0598 11.2851 23.0598 11.8296 22.8206L12.5225 22.5335C13.067 22.2943 13.6114 22.2943 14.1559 22.5335L14.8488 22.8206C15.3933 23.0598 15.9377 23.0598 16.4822 22.8206L17.1751 22.5335C17.7196 22.2943 18.2641 22.2943 18.8085 22.5335L19.5015 22.8206C19.9469 23.012 20.4419 22.7727 20.6894 22.3422C21.0853 21.7202 21.4318 21.0026 21.6793 20.3328C22.2238 18.754 23.2137 17.2709 24.7481 16.5533C24.8965 16.5055 24.946 16.3619 24.946 16.2184C25.045 16.1706 24.9955 16.027 24.8965 15.9792Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <HeaderComponent
          refSection1={refSection1}
          refSection2={refSection2}
          refSection3={refSection3}
          refSection4={refSection4}
        />
      </div>

      <TestimonialContainer />
      <CryptoComponent refSection1={refSection1} refSection4={refSection4} />

      <DecentralizedComponent refSection2={refSection2} />
      <AIComponent refSection3={refSection3} />
      <PriceContainer />

      <Footer
         refSection1={refSection1}
         refSection2={refSection2}
         refSection3={refSection3}
         refSection4={refSection4}
         refSectionHome ={refSectionHome}
      />
    </>
  );
}
