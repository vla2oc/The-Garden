// animation/aboutSmooth.js
import gsap from "gsap";

export default function aboutSmooth(scope) {
  const tl = gsap.timeline();

  // Если scope есть — ищем внутри него
  const target = scope
    ? scope.current.querySelector(".mask-clip-path")
    : document.querySelector(".mask-clip-path");

  if (!target) return tl; // чтобы не упасть, если элемента нет

  tl.to(target, {
    width: "100vw",
    height: "100vh",
    border: 0,
    ease: "none",
  });

  return tl;
}
