"use client";
import logo from "@/public/icons/common/logo.svg";
import fav from "@/public/icons/nav/fvrt.svg";
import profile from "@/public/icons/nav/profile.svg";
import Container from "@/layout/Container";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Buy", href: "/" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Agents", href: "/agents" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/auth")) return null;

  return (
    <>
      <div className="hidden lg:block">
        <Container>
          <div className="w-full lg:py-7 flex items-center justify-between">
            <Image src={logo} alt="logo" width={180} height={100} />
            <div className="flex text-[18px] items-center gap-8">
              {links.map((l, i) => (
                <Link
                  key={i}
                  href={l.href}
                  className={`font-medium ${
                    pathname === l.href ? "text-(--color-primary)" : "text-[#434953]"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Image src={fav} alt="fav" width={20} height={20} />
                <p className="font-medium">Favourite</p>
              </div>
              <button className="text-white bg-(--color-primary) px-4 py-2.5 rounded-full font-semibold cursor-pointer">
                Login Now
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white rounded-b-2xl shadow-md">
        <Image src={logo} alt="logo" width={120} height={80} />
        <Image src={profile} alt="profile" className="rounded-full object-cover object-center" width={28} height={28} />
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-[0_-4px_12px_rgba(0,0,0,0.1)] flex justify-between px-6 py-3 text-sm">
        {links.map((l, i) => {
          const mobileLabel = l.label === "Contact Us" ? "Contact" : l.label;
          return (
            <Link
              key={i}
              href={l.href}
              className={`font-medium ${
                pathname === l.href ? "text-(--color-primary)" : "text-[#434953]"
              }`}
            >
              {mobileLabel}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
