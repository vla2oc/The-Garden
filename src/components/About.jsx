import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      border: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
        <AnimatedTitle
          title={["Nasz główny miks:"]}
          container="mt-5 text-center  font-display text-7xl leading-relaxed uppercase text-smoke "
        />
        <div className="about-subtext">
          <p className="text-smoke text-3xl uppercase leading-relaxed tracking-widest">
            wielowymiarowe smaki, świeże powietrze i Wasze spotkania.
          </p>
        </div>
      </div>
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="/The-Garden/img/about.jpg"
            alt=""
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
