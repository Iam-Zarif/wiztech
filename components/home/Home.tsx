"use client";

import { useState, useEffect } from "react";
import Container from "@/layout/Container";
import Preference from "./propertyList/Preference/Preference";
import Result from "./propertyList/Result/Result";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <Container>
      <div className="flex justify-between items-center md:w-[75%] w-full mx-auto mb-4 lg:hidden">
        <button
          className="text-white bg-(--color-primary) px-4 py-2 rounded-lg"
          onClick={() => setIsDrawerOpen(true)}
        >
          Filters
        </button>
        <p className="text-lg font-semibold">Properties</p>
      </div>

      <div className="w-full flex gap-6 items-start justify-center mx-auto">
        <div className="hidden lg:block md:w-88 w-full">
          <Preference />
        </div>

        <Result width="md:w-[75%] w-full" />
      </div>

      <div
        className={`fixed lg:hidden inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen ? "opacity-100 visible bg-black/30" : "opacity-0 invisible"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <div
        className={`
          fixed top-0 left-0 lg:hidden bottom-0 w-full bg-white p-6 z-50 shadow-xl overflow-y-auto
          transition-transform duration-300
          ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            className="text-gray-500"
            onClick={() => setIsDrawerOpen(false)}
          >
            Close
          </button>
        </div>

        <Preference />
      </div>
    </Container>
  );
};

export default Home;
