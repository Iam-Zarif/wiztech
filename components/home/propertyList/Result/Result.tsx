import Image from "next/image";
import arrow from "@/public/icons/common/down-arrow.svg";
import propertyImage from "@/public/images/property/image.svg";
import propertyImage1 from "@/public/images/property/image-1.svg";
import propertyImage2 from "@/public/images/property/image-2.svg";
import propertyImage3 from "@/public/images/property/image-3.svg";
import propertyImage4 from "@/public/images/property/image-4.svg";
import propertyImage5 from "@/public/images/property/image-5.svg";
import PropertyCard from "@/components/reusable/PropertyCard";
import paginationArrow from "@/public/icons/common/left-arrow.svg";

const properties = [
  {
    image: propertyImage,
    beds: 4,
    baths: 4,
    size: 2500,
    title: "Maple Grove Garden House",
    price: 280,
    location: "New York, USA",
  },
  {
    image: propertyImage1,
    beds: 3,
    baths: 2,
    size: 1800,
    title: "Sunset Villa",
    price: 220,
    location: "Los Angeles, USA",
  },
  {
    image: propertyImage2,
    beds: 5,
    baths: 3,
    size: 3200,
    title: "Oakwood Estate",
    price: 350,
    location: "Miami, USA",
  },
  {
    image: propertyImage3,
    beds: 2,
    baths: 1,
    size: 1200,
    title: "Cozy Apartment",
    price: 150,
    location: "Chicago, USA",
  },
  {
    image: propertyImage4,
    beds: 4,
    baths: 2,
    size: 2700,
    title: "Pine Hill Residence",
    price: 300,
    location: "San Francisco, USA",
  },
  {
    image: propertyImage5,
    beds: 3,
    baths: 2,
    size: 2000,
    title: "Lakeside Villa",
    price: 240,
    location: "Seattle, USA",
  },
  {
    image: propertyImage,
    beds: 2,
    baths: 1,
    size: 1100,
    title: "City Center Loft",
    price: 180,
    location: "Boston, USA",
  },
  {
    image: propertyImage3,
    beds: 3,
    baths: 3,
    size: 2500,
    title: "Beachside Bungalow",
    price: 320,
    location: "Miami, USA",
  },
    {
    image: propertyImage4,
    beds: 4,
    baths: 2,
    size: 2700,
    title: "Pine Hill Residence",
    price: 300,
    location: "San Francisco, USA",
  },
];

const Result = ({ width }: { width?: string }) => {
  return (
    <div className={`flex flex-col gap-5 ${width}`}>
      <div className="border border-(--color-border) p-2 rounded-xl">
        <div className="flex flex-col lg:gap-0 gap-4 lg:flex-row items-center w-full justify-between">
          <div className="flex items-center gap-2">
            <p className="font-semibold px-0 lg:px-4 lg:text-lg">Property</p>
            <p className="text-[#697483] text-sm font-medium">
              --- Showing result- <span>({properties.length})</span>
            </p>
          </div>
          <div className="bg-(--color-input) lg:w-auto w-full cursor-pointer py-2 px-4 justify-between rounded-lg flex items-center gap-2 lg:gap-4">
            <div>
              <p className="text-xs text-[#697483]">Sort By</p>
              <p className="font-medium lg:text-[16px] text-sm">Low to High</p>
            </div>
            <Image src={arrow} width={25} height={25} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-4 grid-cols-1 2xl:grid-cols-3">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>

      <div className="w-full mt-5 flex justify-between">
        <div className="border cursor-pointer px-3 py-1.5 border-(--color-border) rounded-lg flex items-center gap-2">
          <Image src={paginationArrow} alt="left" width={20} height={20} className=""></Image>
          <p className=" hidden lg:block">Previous</p>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-white bg-(--color-primary) cursor-pointer w-8 h-8 flex items-center justify-center  rounded-md">1</p>
          <p className=" bg-(--color-input) cursor-pointer w-8 h-8 flex items-center justify-center  rounded-md">2</p>
          <p className=" bg-(--color-input) cursor-pointer w-8 h-8  items-center justify-center hidden lg:flex  rounded-md">3</p>
          <p className=" bg-(--color-input) cursor-pointer w-8 h-8 flex items-center justify-center  rounded-md">...</p>
          <p className=" bg-(--color-input) cursor-pointer w-8 h-8 flex items-center justify-center  rounded-md">8</p>
          <p className=" bg-(--color-input) cursor-pointer w-8 h-8 flex items-center justify-center  rounded-md">9</p>
          <p className=" bg-(--color-input) cursor-pointer w-8 h-8  items-center justify-center hidden lg:flex  rounded-md">10</p>
        </div>

         <div className="border cursor-pointer px-3 py-1.5 border-(--color-border) rounded-lg flex items-center gap-2">
          <p className="font-medium hidden lg:block">Next</p>
          <Image src={paginationArrow} alt="left" width={20} height={20} className="rotate-180"></Image>
        </div>
      </div>
    </div>
  );
};

export default Result;
