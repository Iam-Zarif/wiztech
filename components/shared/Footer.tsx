"use client";
import Container from "@/layout/Container";
import { usePathname } from "next/navigation";
import Image from "next/image";

const icons = [
  "/icons/footer/icon (1).svg",
  "/icons/footer/icon (2).svg",
  "/icons/footer/icon (3).svg",
  "/icons/footer/icon (4).svg",
  "/icons/footer/icon (5).svg",
  "/icons/footer/icon (6).svg",
];

const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) return null;

  return (
    <div className="footer-bg h-ful rounded-t-[4rem] pt-12 w-full px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="grid text-white w-full max-w-7xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex justify-center items-center lg:items-start lg:justify-start w-full flex-col gap-2">
            <p className="text-xl font-medium">About Us</p>
            <p>Resources</p>
            <p>Company</p>
            <p>Property</p>
            <p>Contact Us</p>
          </div>

            <div className="flex justify-center items-center lg:items-start lg:justify-start w-full flex-col gap-2">
            <p className="text-xl font-medium">Contact Us</p>
            <p>hello abc@gmail.com</p>
            <p>+012233455667</p>
          </div>

          <div className="flex justify-center items-center lg:items-start lg:justify-start w-full flex-col gap-4">
            <p className="text-xl font-medium">Follow Us</p>
            <div className="flex flex-wrap gap-4 mt-2">
              {icons.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Icon ${index + 1}`}
                  className="w-8 h-8 sm:w-9 sm:h-9"
                  width={36}
                  height={36}
                />
              ))}
            </div>
            <p className="mt-4 text-sm sm:text-base">© 2025 Havenix. All rights reserved.</p>
          </div>
        </div>
      </Container>

      <p className="alexandria mt-8 font-semibold footer-logo-text text-center">
        WiztecBD
      </p>
    </div>
  );
};

export default Footer;
