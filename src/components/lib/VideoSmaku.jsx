import React, { PureComponent } from "react";

export default function VideoSmaku() {
  return (
    <div className="relative  w-screen left-1/2 -translate-x-1/2 z-10 h-[280px]  md:h-[400px]  overflow-x-hidden  rounded-xl ">
      <video
        src="/The-Garden/videos/menu-videos.mp4"
        className="absolute  z-10 size-full left-0 top-0 object-cover object-center "
        autoPlay
        muted
        loop
      />

      <div className="absolute-top z-30 min-w-xl md:min-w-6xl text-center ">
        <p className="font-sans uppercase md:tracking-widest z-10 leading-relaxed  font-black  text-smoke text-xl md:text-5xl p-2">
          Wszystkie wymiary smaku na jednym stole: <br /> od gastronomii po
          dymne koktajle
        </p>
      </div>
      <div className="absolute z-20 inset-0 bg-black/70" />
    </div>
  );
}
