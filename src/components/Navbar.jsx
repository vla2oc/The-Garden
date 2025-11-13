import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["O nas", "Menu", "Lokalizacja", "Taras"];

export default function Navbar() {
  const navContainerRef = useRef(null);
  const [lastScrolly, setLastScrolly] = useState(0);
  const [isNavVisible, setNavVisible] = useState(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrolly) {
      setNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrolly) {
      setNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrolly(currentScrollY);
  }, [currentScrollY, lastScrolly]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-5 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-center p-10 ">
          <div className="hidden md:block text-white ">
            {navItems.map((item) => (
              <a
                key={item}
                href=""
                className="font-display tracking-wider font-bold relative text-l uppercase ms-10 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
}
