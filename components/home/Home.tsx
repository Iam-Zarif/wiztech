"use client";

import Courses from "../courses/Courses";
import Testimonial from "../testimonial/Testimonial";
import ProfitCalculator from "./ProfitCalculator/ProfitCalculator";
import PropertySection from "./PropertySection/PropertySection";

const Home = () => {
 

  return (
   <>
   <PropertySection/>
    <ProfitCalculator/>
    <Courses/>
    <Testimonial/>
    </>
  );
};

export default Home;
