"use client";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/auth")) return null;

  return (<div>
    

navbar

  </div>);
};

export default Navbar;
