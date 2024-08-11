import Navigation from "./Navigation";
import { RefObject } from "react";

interface Props {
  refSection1: RefObject<HTMLDivElement>;
  refSection2: RefObject<HTMLDivElement>;
  refSection3: RefObject<HTMLDivElement>;
  refSection4: RefObject<HTMLDivElement>;
}

export default function HeaderComponent({
  refSection1,
  refSection2,
  refSection3,
  refSection4,
}: Props) {
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    console.log("Scroll to section is being clikec tho", ref);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="site-inner-container h-[100vh]  ">
      <Navigation scrollToSection={scrollToSection} 
      refSection1={refSection1}
      refSection2={refSection2}
      refSection3={refSection3}
      refSection4={refSection4}
      
      />

      <div className="flex flex-col h-[80%] items-center justify-end">
        <div className="flex flex-col gap-[5px] items-center text-center w-[80%]">
          <h1 className="font-medium header-h1">Becoming Sovereign</h1>

          <p className="font-light">Come to learn new frontier of finance.</p>

          <div className="flex flex-row gap-[20px] mt-[20px]">
            <button className="join-btn">Learn More</button>

            <button className="join-btn clear-bg">Book A Call</button>
          </div>
        </div>
      </div>
    </section>
  );
}
