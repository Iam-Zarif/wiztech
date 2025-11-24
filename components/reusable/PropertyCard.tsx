"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import bedIcon from "@/public/images/property/bed.svg";
import bathIcon from "@/public/images/property/bath.svg";
import sizeIcon from "@/public/images/property/size.svg";
import PropertyCardModal from "../reusable/PropertyCardModal";

interface PropertyCardProps {
  image: StaticImageData;
  beds: number;
  baths: number;
  size: number;
  title: string;
  price: number;
  location: string;
}

const PropertyCard = ({
  image,
  beds,
  baths,
  size,
  title,
  price,
  location,
}: PropertyCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      <PropertyCardModal
        isOpen={open}
        onClose={() => setOpen(false)}
        image={image}
     
      />

      <div className="rounded-xl">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="w-full cursor-pointer"
          onClick={() => setOpen(true)} // OPEN MODAL
        />

        <div className="mt-2 flex items-center gap-5">
          <div className="flex items-center gap-1">
            <Image src={bedIcon} width={30} height={30} alt="bed" />
            <p className="text-sm text-[#7E8B9C]">Bed - {beds}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={bathIcon} width={30} height={30} alt="bath" />
            <p className="text-sm text-[#7E8B9C]">Bathroom - {baths}</p>
          </div>
          <div className="flex items-center gap-1">
            <Image src={sizeIcon} width={15} height={15} alt="size" />
            <p className="text-sm text-[#7E8B9C]">{size} sft</p>
          </div>
        </div>

        <p className="mt-2 text-xl font-medium">{title}</p>

        <div className="flex mt-1 items-baseline gap-3">
          <p className="text-lg font-medium">
            ${price}
            <span className="text-sm text-[#505F79] font-normal">/week</span>
          </p>
          <div className="w-1 h-1 rounded-full bg-[#505F79]"></div>
          <p className="text-[#7E8B9C]">{location}</p>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
