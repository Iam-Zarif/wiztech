"use client";

import Courses from "../courses/Courses";
import ProfitCalculator from "./ProfitCalculator/ProfitCalculator";
import PropertySection from "./PropertySection/PropertySection";

const Home = () => {
 

  return (
   <>
   <PropertySection/>
    <ProfitCalculator/>
    <Courses/>
    </>
  );
};

export default Home;
