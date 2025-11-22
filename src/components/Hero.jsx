import React from "react";
import AnimatedTitle from "./AnimatedTitle";

export default function Hero({ isIntroActive }) {
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
            className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
          >
            <video
              src="/The-Garden/videos/smoke_red.mp4"
              autoPlay
              muted
              loop
              className="absolute z-20 left-0 top-0 size-full object-cover object-center"
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
