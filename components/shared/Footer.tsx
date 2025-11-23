"use client"
import { usePathname } from "next/navigation";


const Footer = () => {
    const pathname = usePathname();
  
    if (pathname.startsWith("/auth")) return null;
  return (
    <div>Footer</div>
  )
}

export default Footer