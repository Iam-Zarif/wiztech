"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "../reusable/TestimonialCard";

const testimonials = [1, 2, 3, 4];

const Testimonial = () => {
  const [active, setActive] = useState(1);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateCardWidth = () => {
      const width =
        window.innerWidth < 640
          ? 0.9 * window.innerWidth
          : window.innerWidth < 1024
          ? 0.7 * window.innerWidth
          : 0.6 * window.innerWidth;
      setCardWidth(width);
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center py-14 trusted-by-bg mt-12 overflow-hidden">
      <div className="w-full lg:px-0 px-4">
        <button className="bg-linear-pink mx-auto uppercase text-sm md:text-[16px] font-medium flex items-center justify-center rounded-full px-5 py-2.5 lg:px-6 lg:py-3">
          Testimonials
        </button>

        <p className="text-white  font-bold clashDisplay mt-4 text-center text-4xl lg:text-5xl">
          Trusted by Creators <br />& Proven by Results.
        </p>

        <p className="text-white mx-auto silka mt-5 max-w-2xl text-sm text-center lg:text-lg">
          See how others grow with Growhubs — real stories, real success.
        </p>

        <div
  className="flex transition-transform duration-500 ease-out"
  style={{
    transform: `translateX(calc(50% - ${(active + 0.5) * cardWidth}px))`,
  }}
>
  {testimonials.map((t, i) => (
    <div
      key={i}
      className={`shrink-0 px-2 transition-all duration-500 ${
        i === active ? "scale-100" : "scale-90 opacity-80"
      }`}
      style={{
        width: i === active ? cardWidth : cardWidth * 0.85, // slightly smaller inactive cards
      }}
    >
      <TestimonialCard />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Testimonial;
