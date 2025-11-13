import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import CardMenu from "./lib/CardMenu";
import cocktail from "/img/cockatil.jpg";
export default function Menu() {
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="image-frame"
        className="relative z-10 h-dvh w-screen  overflow-hidden  rounded"
      >
        <img
          src="/img/bg-menu.jpg"
          alt=""
          className="absolute-center absolute z-20 object-cover size-full object-center"
        />
        <div className="absolute inset-0 z-30 bg-black opacity-80"></div>
      </div>
      <div className="absolute-top z-40">
        <AnimatedTitle
          title={["Menu"]}
          container="hero-title font-bold tracking-wide"
        />
        <div className="border border-white/20 relative mt-15 mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh]">
          <CardMenu title="Cocktails" image={cocktail} />
        </div>
      </div>
    </div>
  );
}
