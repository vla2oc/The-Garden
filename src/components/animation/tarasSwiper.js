import gsap from "gsap";
export default function TarasSwiper(scope, totalCards) {
  const tl = gsap.timeline();
  const target = scope
    ? scope.current.querySelector(".taras-track")
    : document.querySelector(".taras-track");
  if (!target) return tl;
  tl.to(".taras-track", {
    xPercent: -100 * (totalCards - 1),
    ease: "none",
  });
  return tl;
}
