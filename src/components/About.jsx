import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export default function About({ withScroll = false }) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (!withScroll) return;
      console.log("Animation starting");
      const clipAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: "#clip",
          start: "center center",
          end: "+=200 center",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
        },
      });

      console.log("Timeline created:", clipAnimation);
    },
    { scope: sectionRef, dependencies: [withScroll] },
  );

  return (
    <div id="about" ref={sectionRef} className="min-h-screen bg-black w-screen">
      <div className="relative mb-42 flex flex-col items-center gap-5">
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
      <div id="clip" className="h-dvh w-screen ">
        <div className="mask-clip-path about-image z-0">
          <img
            src="/The-Garden/img/loungebar.png"
            alt=""
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <div className="about-overlay-text text-center p-10">
            <h1 className="font-display text-white text-7xl uppercase max-w-md">
              Atmosphere
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
