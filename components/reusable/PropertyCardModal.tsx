"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import modalImage1 from "@/public/images/property/modal/modal (1).svg";
import modalImage2 from "@/public/images/property/modal/modal (2).svg";
import modalImage3 from "@/public/images/property/modal/modal (3).svg";
import modalImage4 from "@/public/images/property/modal/modal (4).svg";
import modalImage5 from "@/public/images/property/modal/modal (5).svg";

interface PropertyCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: StaticImageData;
}

const PropertyCardModal = ({ isOpen, onClose, image }: PropertyCardModalProps) => {
  const [activeImage, setActiveImage] = useState(image);
  if (!isOpen) return null;

  const images = [image, modalImage1, modalImage2, modalImage3, modalImage4, modalImage5];

  return (
    <div className="z-999">
      <div
        className="fixed inset-0 bg-black/60 z-40 opacity-100 transition-opacity"
        onClick={onClose}
      />

      <div
        className="
          fixed 
          left-1/2 z-50 
          -translate-x-1/2 
          
          top-1/2 -translate-y-1/2           /* MOBILE CENTER */
          md:top-128 md:-translate-y-1/2     /* DESKTOP ORIGINAL POSITION */

          bg-white rounded-xl shadow-xl
          
          w-[95%] max-w-[95%]                /* MOBILE FULL WIDTH */
          md:max-w-272                       /* DESKTOP EXACT SAME */

          py-6 px-4 md:px-10 md:py-8
          animate-scaleIn 
        "
      >
        <div className="relative w-full">
          <div
            className="
              absolute
              -top-4 -right-4                 /* MOBILE ADJUST */
              md:-top-12 md:-right-12         /* DESKTOP SAME AS BEFORE */
              bg-[#F4F6F8] 
              h-9 w-9 flex rounded-full justify-center items-center cursor-pointer
            "
          >
            <button
              onClick={onClose}
              className="text-gray-700 cursor-pointer hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>

        <Image
          src={activeImage}
          alt="dynamicTitle"
          width={500}
          height={400}
          className="w-full rounded-lg"
        />

        <div
          className="
            mt-7 flex items-center gap-4 w-full 
            overflow-x-auto pb-2             /* MOBILE SCROLL */
            md:overflow-visible md:justify-center /* DESKTOP SAME AS BEFORE */
          "
        >
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="image"
              width={110}
              height={100}
              className="cursor-pointer rounded-md shrink-0"
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCardModal;
