"use client";

import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import Organizations from "./Organizations";

const ProfitCalculator = () => {
  const [placeholder, setPlaceholder] = useState("Enter Your Email Here");

  useEffect(() => {
    const handleResize = () => {
      setPlaceholder(
        window.innerWidth < 1024 ? "Email" : "Enter Your Email Here"
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const stats = [
    {
      title: "CO-SELLERS IN NETWORK",
      value: "21,500+",
      description: "People who can co-promote",
    },
    {
      title: "EXPECTED BUYERS / MONTH",
      value: "86",
      description: "With zero personal audience",
    },
    {
      title: "EST. MRR AT US$9/MO",
      value: "US$774",
      description: "From membership sales",
    },
    {
      title: "EARN W/O A PRODUCT",
      value: "US$300",
      description: "Just by co-selling",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const ellipseRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const [stars, setStars] = useState<
    { top: number; left: number; width: number; height: number }[]
  >([]);

  useLayoutEffect(() => {
    const newStars = Array.from({ length: 50 }).map(() => ({
      width: Math.random() * 3 + 1,
      height: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(newStars);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current!;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const zones = [
      { minX: 0, maxX: containerWidth / 3 },
      { minX: containerWidth / 3, maxX: (2 * containerWidth) / 3 },
      { minX: (2 * containerWidth) / 3, maxX: containerWidth },
    ];

    ellipseRefs.forEach((ref, index) => {
      if (!ref.current) return;

      const moveEllipse = () => {
        const el = ref.current!;
        const zone = zones[index];

        const maxX = zone.maxX - el.offsetWidth;
        const minX = zone.minX;
        const x = minX + Math.random() * (maxX - minX);
        const y = Math.random() * (containerHeight - el.offsetHeight);
        const duration = 20 + Math.random() * 20;

        gsap.to(el, {
          x,
          y,
          duration,
          ease: "power1.inOut",
          onComplete: moveEllipse,
        });
      };

      moveEllipse();
    });
  }, []);

  return (
    <div className="pt-12">
      <div
        ref={containerRef}
        className="relative w-full min-h-screen bg-[#3c142b] overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            ref={ellipseRefs[0]}
            className="absolute w-40 h-40 lg:w-52 lg:h-52 bg-neutral-400 blur-[120px] rounded-full"
          />
          <div
            ref={ellipseRefs[1]}
            className="absolute w-56 h-56 lg:w-72 lg:h-72 bg-neutral-300 blur-[150px] rounded-[50%_35%_50%_35%]"
          />
          <div
            ref={ellipseRefs[2]}
            className="absolute w-32 h-48 lg:w-44 lg:h-64 bg-[#FFAA44]/30 blur-[100px] rounded-[40%_60%_40%_60%]"
          />
        </div>

        <div className="absolute inset-0 pointer-events-none z-0">
          {stars.map((s, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                width: s.width,
                height: s.height,
                top: `${s.top}%`,
                left: `${s.left}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center py-14 px-4 lg:px-8">
          <button className="uppercase  text-sm md:text-[16px] font-medium text-white flex items-center justify-center bg-[#2c1a2d] rounded-full px-5 py-2.5 lg:px-6 lg:py-3">
            Build for you
          </button>

          <p className="gradient-text mt-4 text-center text-4xl lg:text-8xl">
            Built for Creators. <br /> Powered for Profit
          </p>

          <p    className="text-white silka mt-5 max-w-2xl text-sm text-center  lg:text-lg">
            Create and sell courses, consulting services, and communities - with
            Zero marketing cost and a built-in sales network.
          </p>

          <div className="relative mt-8 w-full max-w-lg">
            <input
              type="text"
              className="bg-[#3B3B4B] placeholder:text-[#A6A6A6] rounded-full px-6 py-4 w-full lg:py-7"
              placeholder={placeholder}
            />

            <div className="absolute top-1 right-1 gradient-button-purple h-[87%] px-4 lg:px-6 flex flex-col justify-center items-center rounded-full cursor-pointer lg:h-[90%]">
              <p className="text-white text-sm font-semibold text-center leading-tight lg:text-base">
                Start for Free
              </p>
              <p className="text-white text-xs text-center lg:text-sm">
                No credit card Required
              </p>
            </div>
          </div>

          <p className="text-[#DEDEDE] text-center text-xs mt-2 lg:text-sm">
            By proceeding you agree to our Platform terms & Privacy Notice
          </p>

          {/* Stats Card */}
          <div className="lg:mt-16 mt-8 border bg-[#00000033] w-full max-w-7xl mx-auto border-[#505152] py-8 rounded-[2.5rem]">
            <div className="flex flex-col lg:flex-row px-6 items-start lg:items-center justify-between w-full gap-4 lg:gap-0">
              <p className="text-white text-2xl lg:text-4xl font-medium">
                Sell from day one - even with zero audience
              </p>
              <button className="border border-neutral-50 lg:teext-[16px] text-sm text-neutral-50 rounded-full px-5 py-2 cursor-pointer lg:px-6 lg:py-3">
                Open Calculator
              </button>
            </div>

            <div className="flex flex-col lg:flex-row px-6 gap-5 mt-8 lg:mt-14 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="border w-full flex flex-col gap-3 text-white border-[#3C3C3C] rounded-xl px-5 py-8"
                >
                  <p className="uppercase text-neutral-100 text-sm lg:text-[16px] leading-4 silka">
                    {stat.title}
                  </p>
                  <p className="text-3xl lg:text-5xl font-semibold blauerNew">
                    {stat.value}
                  </p>
                  <p className="text-neutral-100 text-sm lg:text-[16px] leading-4 silka">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full py-3 bg-[#FFF3D8] mt-8 px-4 overflow-hidden whitespace-nowrap">
              <p className="marquee-text lg:text-xl">
                Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and
                convert clients inside the platform so you can sell from day one
                without paying for ads.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Organizations />
    </div>
  );
};

export default ProfitCalculator;
