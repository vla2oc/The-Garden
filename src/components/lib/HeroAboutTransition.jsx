import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "../Hero";
import About from "../About";
import aboutSmooth from "../animation/aboutSmooth";
gsap.registerPlugin(ScrollTrigger);

export default function HeroAboutTransition({ isIntroActive }) {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".about-layer", {
          yPercent: 130,
        });
        const master = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
          },
        });
        master.to(".about-layer", {
          yPercent: 0,
          ease: "none",
        });
        const cliptl = aboutSmooth(sectionRef);
        master.add(cliptl, ">");
      }, sectionRef);

      return () => ctx.revert();
    },
    { scope: sectionRef }
  );
  return (
    <section
      ref={sectionRef}
      className={`transition-opacity relative w-screen h-screen overflow-hidden bg-black duration-2500 ease-in-out ${
        isIntroActive ? "opacity-0 " : "opacity-100"
      }`}
    >
      <div className="hero-layer z-10 inset-0 relative h-screen flex items-center justify-center">
        <Hero />
      </div>
      <div className="about-layer z-20 inset-0 absolute h-screen flex items-center justify-center  ">
        <About withScroll={false} />
      </div>
    </section>
  );
}
