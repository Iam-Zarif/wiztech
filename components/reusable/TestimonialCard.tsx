"use client";

import thumb from "@/public/images/testimonial/video.svg";
import dp from "@/public/images/testimonial/dp.svg";
import Image from "next/image";
import { Rating, RoundedStar } from "@smastrom/react-rating";

const TestimonialCard = () => {
  const customStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#FDBD33",
    inactiveFillColor: "#6A4F15",
  };

  return (
    <div className="mt-10 w-full max-w-300 items-center 2xl:items-start mx-auto bg-white rounded-4xl p-5 flex flex-col 2xl:flex-row gap-8">
      <Image
        src={thumb}
        alt="thumb"
        width={100}
        height={100}
        className="w-full h-full lg:max-w-100 rounded-xl"
      />
      <div className="flex flex-col justify-between w-full 2xl:max-w-[40%]">
        <div className="flex items-center gap-2">
          <Image src={dp} width={60} height={60} alt="DP" />
          <div>
            <p className="text-xl font-semibold clashDisplay">Iva Ryan</p>
            <p>
              Marketing manager at
              <span className="font-semibold">Adobe</span>
            </p>
          </div>
        </div>
        <div className="mt-5  text-sm flex lg:text-[16px] flex-wrap gap-3">
          <p className="rounded-full border border-[#695F4C] px-3 py-2">
            Content Creator
          </p>
          <p className="rounded-full border border-[#695F4C] px-3 py-2">
            Youtuber
          </p>
          <p className="rounded-full border border-[#695F4C] px-3 py-2">
            Growth Expert
          </p>
        </div>
        <p className="text-lg lg:text-2xl text-[#030711] silka mt-4 lg:mt-8">
          I recently had the opportunity to use the platform, and I must say,
          the feature that allows you to set your own commission is a game
          changer!
        </p>
        <div className="mt-6">
          <p className="font-bold text-3xl lg:text-5xl clashDisplay">$2M</p>
          <p className="silka">EARNED IN HELENUIL</p>
        </div>
      </div>
      <div className="lg:ml-auto min-w-20 w-ful">
        <Rating
          style={{ maxWidth: 120 }}
          value={3}
          readOnly
          itemStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
