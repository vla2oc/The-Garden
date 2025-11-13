import React from "react";
import AnimatedTitle from "./AnimatedTitle";
import CardMenu from "./lib/CardMenu";
import cocktail from "/img/cockatil.jpg";
import { useRef, useState } from "react";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default function Menu() {
  return (
    <section className="relative bg-black pb-52 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/The-Garden/img/bg-menu.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto px-3 md:px-10 pt-24">
        <div className="mb-10">
          <AnimatedTitle
            title={["Menu"]}
            container="hero-title font-bold  tracking-wide"
          />
        </div>

        <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-xl md:h-[65vh] transition-transform duration-300 ease-out">
          <CardMenu title="Hookah" image={"/The-Garden/img/Hookah.jpg"} />
        </BentoTilt>

        <div className="grid h-[135vh] grid-cols-1 md:grid-cols-2 grid-rows-3 gap-15">
          <BentoTilt className="border border-white/20 relative overflow-hidden rounded-xl transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
            <CardMenu title="Lunch" image={"/The-Garden/img/food.jpg"} />
          </BentoTilt>
          <BentoTilt className="border border-white/20 relative overflow-hidden rounded-xl transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
            <CardMenu title="Napoje" image={cocktail} />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}
