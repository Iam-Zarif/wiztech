"use client";
import minus from "@/public/icons/common/minus.svg";
import range from "@/public/icons/common/range.svg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const RentBudget = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState(500);
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    if (sliderRef.current) setSliderWidth(sliderRef.current.offsetWidth);
    const handleResize = () => {
      if (sliderRef.current) setSliderWidth(sliderRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minLimit = 0;
  const maxLimit = 1000;

  const valueToPos = (value: number) =>
    sliderWidth * ((value - minLimit) / (maxLimit - minLimit));

  const handleMouseUp = () => setDragging(null);

  useEffect(() => {
    const posToValue = (pos: number) =>
      Math.round((pos / sliderWidth) * (maxLimit - minLimit) + minLimit);
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const rect = sliderRef.current?.getBoundingClientRect();
      if (!rect) return;
      let pos = e.clientX - rect.left;
      pos = Math.max(0, Math.min(pos, sliderWidth));
      const value = posToValue(pos);

      if (dragging === "min") {
        setMinValue(() => Math.min(value, maxValue));
      } else if (dragging === "max") {
        setMaxValue(() => Math.max(value, minValue));
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, sliderWidth, minValue, maxValue]);
  return (
    <div className="border border-(--color-border) p-6 rounded-xl">
      <div className="flex justify-between w-full">
        <p className="text-lg font-semibold">Rent Budget</p>
        <Image
          src={minus}
          width={25}
          height={25}
          alt="collapse"
          className="cursor-pointer"
        />
      </div>
      <div className="h-px w-full bg-(--color-border) mt-3"></div>

      <div
        ref={sliderRef}
        className="w-full h-2 mt-4 rounded-full bg-(--color-primary)/30 relative"
      >
        <div
          className="absolute h-2 rounded-full bg-(--color-primary) top-0"
          style={{
            left: valueToPos(minValue),
            width: valueToPos(maxValue) - valueToPos(minValue),
          }}
        ></div>

        <div
          onMouseDown={(e) => {
            e.preventDefault();
            setDragging("min");
          }}
          className="absolute -translate-y-1/2 top-1/2 cursor-grab"
          style={{
            left: Math.min(valueToPos(minValue), sliderWidth - 12) - 12,
          }}
        >
          <Image
            src={range}
            alt="range"
            height={24}
            width={24}
            draggable={false}
          />
        </div>

        <div
          onMouseDown={(e) => {
            e.preventDefault();
            setDragging("max");
          }}
          className="absolute -translate-y-1/2 top-1/2 cursor-grab"
          style={{
            left: Math.min(valueToPos(maxValue), sliderWidth - 12) - 12,
          }}
        >
          <Image
            src={range}
            alt="range"
            height={24}
            width={24}
            draggable={false}
          />
        </div>
      </div>

      <div className="flex items-center gap-3 w-full">
        <div className="bg-(--color-input) w-full mt-6 py-2 px-4 rounded-lg">
          <p className="text-xs text-[#697483]">Minimum</p>
          <p className="font-medium">${minValue}</p>
        </div>
        <div className="bg-(--color-input) w-full mt-6 py-2 px-4 rounded-lg">
          <p className="text-xs text-[#697483]">Maximum</p>
          <p className="font-medium">${maxValue}</p>
        </div>
      </div>
    </div>
  );
};

export default RentBudget;
