import React, { PureComponent } from "react";

export default function CardMenu({ title, image, subtitle }) {
  return (
    <div className="relative size h-full">
      <img
        src={image}
        alt=""
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-6 text-smoke">
        <div>
          <h1 className="uppercase md:text-6xl text-4xl font-black font-display">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
