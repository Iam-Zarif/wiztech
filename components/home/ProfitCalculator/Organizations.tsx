import org1 from "@/public/icons/org/org (1).svg";
import org2 from "@/public/icons/org/org (2).svg";
import org3 from "@/public/icons/org/org (3).svg";
import org4 from "@/public/icons/org/org (4).svg";
import org5 from "@/public/icons/org/org (5).svg";
import org6 from "@/public/icons/org/org (6).svg";
import org7 from "@/public/icons/org/org (7).svg";
import Image from "next/image";

const logos = [org1, org2, org3, org4, org5, org6, org7];

const Organizations = () => {
  return (
    <div className="relative mt-16">
      {" "}
      <p className="text-center px-6 text-lg lg:text-xl text-[#5D5D5D] uppercase">
        TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS{" "}
      </p>{" "}
      <div className="relative w-full max-w-7xl mx-auto mt-8 py-2 overflow-hidden org">
        {" "}
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="inline-block w-24 h-24 shrink-0">
              {" "}
              <Image
                src={logo}
                width={100}
                height={100}
                alt="org"
                className="w-full h-full "  
              />{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <div className="absolute top-0 left-0 w-16 h-full bg-linear-to-r from-white to-transparent pointer-events-none"></div>{" "}
        <div className="absolute top-0 right-0 w-16 h-full bg-linear-to-l from-white to-transparent pointer-events-none"></div>{" "}
      </div>{" "}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>{" "}
    </div>
  );
};

export default Organizations;
