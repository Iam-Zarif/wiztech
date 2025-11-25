import Container from "@/layout/Container";
import brokerage from "@/public/icons/courses/brokerage.svg";
import coaching from "@/public/icons/courses/coaching.svg";
import communities from "@/public/icons/courses/communities.svg";
import pause from "@/public/icons/courses/pause.svg";
import cover from "@/public/icons/courses/cover.svg";
import courses from "@/public/icons/courses/events.svg";
import events from "@/public/icons/courses/events.svg";
import merchandise from "@/public/icons/courses/merchandise.svg";
import podcasts from "@/public/icons/courses/podcasts.svg";
import Image from "next/image";

const courseIcons = [
  { icon: courses, label: "Courses" }, // moved to first
  { icon: brokerage, label: "Brokerage" },
  { icon: coaching, label: "Coaching" },
  { icon: communities, label: "Communities" },
  { icon: events, label: "Events" },
  { icon: merchandise, label: "Merchandise" },
  { icon: podcasts, label: "Podcasts" },
];

const Courses = () => {
  return (
    <div className="courses-bg h-full mt-10 lg:mt-20 w-full">
      <Container>
        <div className="w-full flex-col  flex items-center justify-center ">
          <button className="bg-linear-pink uppercase text-sm md:text-[16px] font-medium flex items-center justify-center rounded-full px-4 py-2.5  lg:py-3">
            Diversify revenue stream
          </button>
          <div>
            <p className="clashDisplay mt-4 font-bold text-center text-4xl lg:text-6xl">
              Maximise earnings with <br /> limitless revenue streams.
            </p>

            <p className="text-[#5D5D5D] silka mt-5 max-w-3xl text-sm text-center lg:text-lg">
              Create and sell courses, consulting services, and communities -
              with Zero marketing cost and a built-in sales network.
            </p>
          </div>
          <div className="bg-white mt-10 rounded-full border border-[#F2F2F2] p-2 flex gap-4 lg:w-auto w-full overflow-x-auto sm:overflow-x-visible flex-nowrap scrollbar-hide">
            {courseIcons.map((course, index) => (
              <div
                key={index}
                className={`flex rounded-full gap-2 items-center px-4 py-2 shrink-0 min-w-max ${
                  index === 0
                    ? "indigo-linear-bg text-white"
                    : "filter grayscale"
                }`}
              >
                <Image
                  src={course.icon}
                  width={30}
                  height={30}
                  className="lg:w-auto w-5"
                  alt={course.label}
                />
                <span className="lg:font-semibold lg:text-[16px] text-sm">{course.label}</span>
              </div>
            ))}
          </div>

          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none; /* Firefox */
            }
          `}</style>

          <style jsx global>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </Container>
        <div className="course-card-bg items-center text-white max-w-420 mx-auto pr-3 py-5 lg:py-3 pl-3 lg:pl-12 mt-6 w-full grid lg:grid-cols-2 lg:rounded-r-2xl gap-8 lg:rounded-l-full">
          <div className="max-w-xl mx-auto">
            <p className="blauerNew text-xl lg:text-3xl">Courses</p>
            <p className="max-w-xl text-sm lg:text-lg mt-4 silka">
              Turn your knowledge into structured, sellable products. <br />
              <br /> Build online, drip, academic, or challenge-based courses
              with built-in tools for gamification, accountability, and
              engagement. <br /> <br /> Every course is optimized to deliver
              value and generate recurring income.
            </p>

            <button className="uppercase mt-5 text-sm md:text-[16px] font-medium text-white flex items-center justify-center bg-[#2c1a2d] rounded-full px-4 py-2.5  lg:py-3">
              Learn More
            </button>
          </div>
          <div className="relative">
            <Image
              src={cover}
              width={100}
              height={100}
              alt="cover"
              className="w-full"
            ></Image>
            <div
              style={{ boxShadow: "0px 2px 48px 0px #00000040" }}
              className="absolute bg-white p-3 lg:p-4 rounded-xl z-9999 bottom-32  lg:bottom-80 right-20"
            >
              <p className="bg-[#1882FB] text-white px-2 lg:px-4 rounded-3xl lg:font-medium text-[16px] text-xs  py-2">
                Subscribe for $5.00/mo
              </p>
            </div>
            <div className="absolute z-99 bottom-20 lg:bottom-60 w-auto right-1 lg:right-36">
              <div className="bg-white p-2 lg:p-4 rounded-xl">
                <div className="flex items-center justify-between gap-3 lg:gap-5">
                  <div className="bg-[#ECF3F6] rounded-lg silka h-full p-1 text-sm lg:p-3 text-[#1882FB] flex flex-col items-center ">
                    <p>PT</p>
                    <p>01</p>
                  </div>
                  <div>
                    <p className="silka lg:text-[16px] text-sm text-black">Lady Dentaa Amoateng MBE</p>
                    <div className="flex  items-center gap-4">
                      <p className="text-[#939297] text-xs lg:text-sm">54 min</p>
                      <div className="h-3 w-px bg-[#afaeb1]"></div>
                      <p className="text-[#939297] text-xs lg:text-sm">Oct 17, 2026</p>
                    </div>
                    <div className="w-full bg-[#F1F1F1] h-1 rounded-full mt-1 lg:mt-3">
                      <div
                        className="h-1 rounded-full"
                        style={{
                          width: "60%",
                          background:
                            "linear-gradient(116.54deg, #E5EFF4 16.88%, #4082A1 92.68%)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <Image
                    src={pause}
                    width={30}
                    height={30}
                    alt="pause"
                    className=""
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Courses;
