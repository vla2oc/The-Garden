import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Taras() {
  const sectionRef = useRef(null);

  const images = [
    { id: 1, src: "/The-Garden/img/taras.jpg" },
    { id: 2, src: "/The-Garden/img/Hookah.jpg" },
  ];
  const totalCards = images.length;

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.matchMedia({
          "(min-width: 768px)": () => {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${window.innerHeight * (totalCards - 1) * 1.5}`,
                scrub: 1.5,
                pin: ".taras-pin",
                pinSpacing: true,
              },
            });

            tl.to(".taras-track", {
              xPercent: -100 * (totalCards - 1),
              ease: "none",
              force3D: true,
            });
          },

          // MOBILE
          "(max-width: 767px)": () => {
            gsap.from(".taras-mobile-img", {
              opacity: 0,
              y: 40,
              duration: 0.8,
              stagger: 0.2,
              scrollTrigger: {
                trigger: ".taras-mobile-img",
                start: "top 80%",
              },
            });
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: sectionRef, dependencies: [totalCards] }
  );

  return (
    <section ref={sectionRef} className="relative w-screen bg-black text-smoke">
      <div className="hidden md:block">
        <div className="taras-pin  relative h-screen  overflow-hidden">
          <div
            className="taras-track flex h-full"
            style={{ width: `${(totalCards - 1) * 100}vw` }}
          >
            {images.map((image) => (
              <div
                key={image.id}
                className="h-full w-screen overflow-hidden flex-shrink-0"
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="container absolute-top mx-auto px-3 md:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <AnimatedTitle
                    title={["Taras"]}
                    container="text-6xl md:text-9xl tracking-widest text-smoke font-display font-extrabold uppercase text-center md:text-left"
                  />
                </div>
                <div className="flex items-center">
                  <p className="text-lg md:text-2xl leading-relaxed"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="container mx-auto px-3 pt-16 pb-10">
          <div className="mb-6">
            <AnimatedTitle
              title={["Taras"]}
              container="text-5xl tracking-widest text-smoke font-display font-extrabold uppercase text-center"
            />
          </div>

          <div className="space-y-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="taras-mobile-img overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt=""
                  className="h-64 w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
