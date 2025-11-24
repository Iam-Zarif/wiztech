"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  const pathname = usePathname();
  const size = pathname.startsWith("/auth") ? "max-w-380" : "max-w-480";

  return (
    <div className={`flex flex-col px-4 sm:px-6 lg:px-8 ${size} mx-auto ${className || ""}`}>
      {children}
    </div>
  );
}
