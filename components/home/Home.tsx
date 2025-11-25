"use client";

import PropertySection from "./PropertySection/PropertySection";
import ProfitCalculator from "./ProfitCalculator/ProfitCalculator";
import Courses from "../courses/Courses";
import Testimonial from "../testimonial/Testimonial";
import Tools from "../tools/Tools";

const Home = () => {
  return (
    <>
      <PropertySection />
      <ProfitCalculator />
      <Courses />
      <Testimonial />
      <Tools />
    </>
  );
};

export default Home;
