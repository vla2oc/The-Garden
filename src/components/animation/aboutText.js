// animation/aboutText.js
import gsap from "gsap";

export default function aboutText() {
  const tl = gsap.timeline();

  tl.fromTo(
    ".about-overlay-text",
    {
      scale: 0.5,
      opacity: 0.2,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "power2.out",
    },
  );

  return tl;
}
