"use client";
import Image from "next/image";
import reset from "@/public/icons/common/reset.svg";
import FilterCard from "@/components/reusable/FilterCard";
import RentBudget from "./RentBudget";

const suburbItems = [
  { label: "Eshelby Drive, Cranbrook", checked: false },
  { label: "2- 6 Eshelby Dr, Cannonvale", checked: true },
  { label: "59/3 Eshelby Drive Cannonvale", checked: false },
];

const propertyTypeItems = [
  { label: "House", checked: false },
  { label: "Land", checked: true },
  { label: "Appartment", checked: false },
  { label: "Town House", checked: true },
  { label: "Vila", checked: false },
];

const amenitiesItems = [
  { label: "Pet-friendly", checked: false },
  { label: "Parking", checked: true },
  { label: "Private Pool", checked: false },
  { label: "Private Pool", checked: true },
];

const Preference = ({ width }: { width?: string }) => {


  return (
    <div className={`flex flex-col gap-5 ${width}`}>
      <div className="border border-(--color-border) p-2 rounded-xl">
        <div className="w-full flex items-center justify-between">
          <p className="font-medium px-4">Property Preference</p>{" "}
          <div className="bg-(--color-input) rounded-lg py-3.5 px-2.5 flex items-center gap-2 cursor-pointer">
  
            <p className="text-sm font-medium">Reset <span className="hidden md:block">Filter</span></p>{" "}
            <Image src={reset} width={20} height={20} alt="reset" />{" "}
          </div>{" "}
        </div>{" "}
      </div>
     <RentBudget/>
      <FilterCard title="Suburb" items={suburbItems} />
      <FilterCard title="Property type" items={propertyTypeItems} />
      <FilterCard title="Amenities" items={amenitiesItems} />
    </div>
  );
};

export default Preference;
