import React from "react";

export default function IntroSmoke({ isActive }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-all duration-500 ease-in-out ${
        isActive
          ? "opacity-100 scale-100"
          : "opacity-0 scale-200 pointer-events-none"
      }`}
    >
      <video
        src="/videos/introSmoke.mp4"
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}
