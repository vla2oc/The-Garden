import React from "react";
import AnimatedTitle from "./AnimatedTitle";
export default function Maps() {
  return (
    <section className="min-h-screen w-full overflow-hidden ">
      <div className="relative p-10 mt-20 ">
        <div className="absolute-top min-w-full ">
          <AnimatedTitle
            title={["Gdzie nas znaleźć?"]}
            container="hero-title tracking-tighter"
          />
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-10 pt-40 pb-10">
        <div className="grid h-[50vh] grid-cols-1 md:grid-cols-2 grid-rows-2 gap-15 ">
          <div className="border border-white/20 relative overflow-hidden rounded-xl row-span-1 md:col-span-1 md:row-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20400.171842571748!2d18.983860015869148!3d50.27285753041317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cf1591c8aa1f%3A0xfc5dab3e27a5a12e!2sGarden%20shisha%20bar%20%26%20terrace!5e0!3m2!1sru!2spl!4v1763138223771!5m2!1sru!2spl"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="relative overflow-hidden rounded-xl row-span-1 md:col-span-1 md:row-span-2">
            <h1 className="hero-title !text-7xl font-black tracking-wider text-center ">
              Kontakt
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
