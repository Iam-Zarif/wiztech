"use client";

import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import TestimonialCard from "../reusable/TestimonialCard";

const testimonials = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Testimonial = () => {
  const [sliderRef, slider] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1.1, 
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.5, spacing: 20 }, 
      },
      "(min-width: 768px)": {
        slides: { perView: 1.5, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: "auto", spacing: 40, origin: "center" },
      },
    },
   
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="py-14 trusted-by-bg mt-12">
      {" "}
      <button className="bg-linear-pink mx-auto uppercase text-sm md:text-[16px] font-medium flex items-center justify-center rounded-full px-5 py-2.5 lg:px-6 lg:py-3">
        Testimonials
      </button>
      <p className="text-white  font-bold clashDisplay mt-4 text-center text-4xl lg:text-5xl">
        Trusted by Creators <br />& Proven by Results.
      </p>
      <p className="text-white mx-auto silka mt-5 max-w-2xl text-sm text-center lg:text-lg">
        See how others grow with Growhubs — real stories, real success.
      </p>{" "}
      <div className="h-full w-full flex items-center justify-center ">
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{ maxWidth: "100%" }}
        >
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="keen-slider__slide"
              style={{ maxWidth: 1250, minWidth: 1050 }}
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
