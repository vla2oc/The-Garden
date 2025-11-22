import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import Maps from "../Maps";
import Taras from "../Taras";
import TarasSwiper from "../animation/tarasSwiper";

gsap.registerPlugin(ScrollTrigger);

export default function TarasMapsTransition() {
  const sectionRef = useRef(null);
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        gsap.set(".taras-layer", {
          yPercent: 0,
          transformOrigin: "top top",
        });
        gsap.set(".maps-layer", {
          opacity: 0,
        });
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom",
            end: "+=100%",
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
          },
        });
        tl.add(TarasSwiper(sectionRef, 2));

        tl.to(".taras-layer", {
          yPercent: -100,
          ease: "none",
        });
        tl.to(
          ".maps-layer",
          {
            opacity: 1,
            ease: "power2.inOut",
          },
          "<0.01"
        );
      }, sectionRef);
      return () => ctx.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden bg-black"
    >
      <div className="maps-layer absolute inset-0">
        <Maps />
      </div>

      <div className="taras-layer absolute inset-0 origin-top">
        <Taras withScroll={false} />
      </div>
    </section>
  );
}
