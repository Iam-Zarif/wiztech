// /layouts/Container.tsx
import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children}: ContainerProps) {
  return (
    <div className={` flex flex-col  px-4 sm:px-6 lg:px-8 max-w-380 mx-auto `}>
      {children}
    </div>
  );
}
