import React, { PureComponent } from "react";

export default function Footer() {
  return (
    <div className="w-full overflow-y-hidden p-5 relative bg-gray-900">
      <div className="container flex justify-between items-center mx-auto">
        <ul className="text-purple-200 font-display uppercase flex text-left gap-5 items-center ">
          <a href="https://www.facebook.com/">
            <li className="text-lg hover:underline">Facebook</li>
          </a>
          <a href="https://www.instagram.com/">
            <li className="text-lg hover:underline">Instagram</li>
          </a>
          <a href="https://www.tiktok.com/">
            <li className="text-lg hover:underline">TikTok</li>
          </a>
        </ul>

        <h1 className="text-white text-center font-display mx-auto uppercase text-lg">
          © The Garden, 2026
        </h1>
        <a
          href="https://www.offers.com/"
          className="text-red-100 tracking-wider  font-display text-right uppercase text-lg hover:underline"
        >
          Offers
        </a>
      </div>
    </div>
  );
}
