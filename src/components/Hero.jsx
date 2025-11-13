import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero({ isIntroActive }) {
  useGSAP(() => {
    if (isIntroActive) {
      return;
    }
    const tl = gsap.timeline({
      delay: 0.1,
    });

    tl.from(".animated-word", {
      opacity: 0,
      y: -60,
      stagger: 0.05,
      ease: "power1.out",
      duration: 1,
    });
  }, [isIntroActive]);
  {
    return (
      <section
        className={`transition-opacity duration-2500 ease-in-out ${
          isIntroActive ? "opacity-0 " : "opacity-100"
        }`}
      >
        <div className="relative h-dvh w-screen overflow-x-hidden">
          <div
            id="video-frame"
            className="relative z-10 h-dvh w-screen overflow-hidden rounde"
          >
            <video
              src="/videos/smoke_red.mp4"
              autoPlay
              muted
              loop
              className="absolute-center absolute z-20 object-cover object-center"
            />
          </div>
          <div className="absolute-center z-40">
            <AnimatedTitle title={["The Garden"]} container="hero-title" />
            <p className="font-sans text-center text-xl p-2 text-smoke">
              Głęboki smak. Otwarte niebo
            </p>
          </div>
        </div>
      </section>
    );
  }
}
