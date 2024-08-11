import Image from "next/image";
import CornerImage from "../../../public/HomeAssets/borderPics.png";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function TestimonialContainer() {
  const textRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    textRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 50, // Start position (50px below the original position)
          opacity: 0, // Start opacity
        },
        {
          y: 0, // End position (original position)
          opacity: 1, // End opacity
          duration: 4, // Increase duration for slower animation (2 seconds in this case)
          ease: "power3.out", // Easing function
          scrollTrigger: {
            trigger: el, // Trigger the animation when this element enters the viewport
            start: "top 80%", // Animation starts when the top of the element reaches 80% of the viewport
            end: "top 60%", // Animation ends when the top of the element reaches 60% of the viewport
            scrub: true, // Smoothly animate the scroll progress
          },
        }
      );
    });
  }, []);

  return (
    <section className="md:h-[100vh] h-[120vh] site-wrapper bg-white overflow-hidden">
      <div className="cornerImageContainer">
        <Image
          src={CornerImage}
          width={100}
          height={100}
          alt="Testimoinal Pics"
        />
      </div>

      <div className="testimonal-header flex flex-col w-full ">
        <div className="borderDiv px-[25px] ">
          <h1 className="lg:text-[60px] text-[40px] text-black lineHeight">
            Learn About The New World Order
          </h1>

          <p className="text-[#4c4c4c] text-[16px] font-light">
            Here not From me, but to those I have served
          </p>
        </div>
        <div className="testimonal-container px-[5px] md:px-[25px] py-[100px] flex flex-col">
          <div
            className="md:w-[70%] w-full flex flex-row items-start justify-start gap-[20px]"
            ref={(el) => { textRefs.current[0] = el; }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="159"
              viewBox="0 0 179 159"
              fill="none"
              className = "h-[40px]"
            >
              <path
                d="M0 159V78.0954C0 27.9046 22.6322 2.06007 67.8965 0.561829L77.4357 0V38.7668H68.4577C52.372 40.265 44.3292 52.2509 44.3292 74.7244V83.7138H77.4357V159H0ZM179 38.7668H170.022C153.936 40.265 145.893 52.2509 145.893 74.7244V83.7138H179V159H102.125V78.0954C102.125 28.2791 124.571 2.43462 169.461 0.561829L179 0V38.7668Z"
                fill="url(#paint0_linear_61_43)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_61_43"
                  x1="89.2933"
                  y1="118.499"
                  x2="208.5"
                  y2="0.150533"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EDE7DC" />
                  <stop offset="1" stop-color="#EDE7DC" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-black md:text-[36px] text-[20px] self-start">
              “Rio broke down the innerstanding and overstanding of Blockchain
              flawlessly, onboarded me very quickly.”
            </h1>
          </div>
          <div
            className="md:w-[70%] w-full ml-auto flex flex-row-reverse items-start justify-start gap-[20px]"
            ref={(el) => {textRefs.current[1] = el}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="159"
              viewBox="0 0 179 159"
              fill="none"
              className = "h-[40px]"
            >
              <path
                d="M0 159V78.0954C0 27.9046 22.6322 2.06007 67.8965 0.561829L77.4357 0V38.7668H68.4577C52.372 40.265 44.3292 52.2509 44.3292 74.7244V83.7138H77.4357V159H0ZM179 38.7668H170.022C153.936 40.265 145.893 52.2509 145.893 74.7244V83.7138H179V159H102.125V78.0954C102.125 28.2791 124.571 2.43462 169.461 0.561829L179 0V38.7668Z"
                fill="url(#paint0_linear_61_43)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_61_43"
                  x1="89.2933"
                  y1="118.499"
                  x2="208.5"
                  y2="0.150533"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EDE7DC" />
                  <stop offset="1" stop-color="#EDE7DC" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-black md:text-[36px] text-[20px] self-end text-right ">
              “Rio broke down the innerstanding and overstanding of Blockchain
              flawlessly, onboarded me very quickly.”
            </h1>
          </div>
          <div
            className="md:w-[70%] w-full flex flex-row items-start justify-start gap-[20px]"
            ref={(el) => {textRefs.current[2] = el}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="159"
              viewBox="0 0 179 159"
              fill="none"
              className = "h-[40px]"
            >
              <path
                d="M0 159V78.0954C0 27.9046 22.6322 2.06007 67.8965 0.561829L77.4357 0V38.7668H68.4577C52.372 40.265 44.3292 52.2509 44.3292 74.7244V83.7138H77.4357V159H0ZM179 38.7668H170.022C153.936 40.265 145.893 52.2509 145.893 74.7244V83.7138H179V159H102.125V78.0954C102.125 28.2791 124.571 2.43462 169.461 0.561829L179 0V38.7668Z"
                fill="url(#paint0_linear_61_43)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_61_43"
                  x1="89.2933"
                  y1="118.499"
                  x2="208.5"
                  y2="0.150533"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#EDE7DC" />
                  <stop offset="1" stop-color="#EDE7DC" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <h1 className="text-black text-[20px] md:text-[36px] self-start">
              “Rio broke down the innerstanding and overstanding of Blockchain
              flawlessly, onboarded me very quickly.”
            </h1>
          </div>

      
        </div>
      </div>

      <div className="cornerImageContainer">
        <Image
          src={CornerImage}
          width={100}
          height={100}
          alt="Testimoinal Pics"
        />
      </div>
    </section>
  );
}
