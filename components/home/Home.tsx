"use client";

import { useEffect, useState } from "react";
import PropertySection from "./PropertySection/PropertySection";
import ProfitCalculator from "./ProfitCalculator/ProfitCalculator";
import Courses from "../courses/Courses";
import Testimonial from "../testimonial/Testimonial";
import Tools from "../tools/Tools";
import Footer from "../shared/Footer";

const Home = () => {
  const sections = [
    <PropertySection key="property" />,
    <ProfitCalculator key="profit" />,
    <Courses key="courses" />,
    <Testimonial key="testimonial" />,
    <Tools key="tools" />,
    <Footer key="footer" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const triggerOffset = 600;

    const scrollBottom =
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - triggerOffset;

    if (scrollBottom && !loading && currentIndex < sections.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

return (

  <div className="flex flex-col min-h-screen">
    <div className="flex-1 flex flex-col">
      {sections.slice(0, currentIndex).map((section) => section)}


  {loading && (
    <div className="flex justify-center py-10">
      <div className="loader" />
    </div>
  )}
</div>

<div className="mt-auto">
  {sections[currentIndex]} 
</div>


  </div>
);

};

export default Home;
