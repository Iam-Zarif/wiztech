"use client";

import Image from "next/image";
import Container from "@/layout/Container";
import { motion } from "framer-motion";

import icon1 from "@/public/icons/tools/icon (1).svg";
import icon2 from "@/public/icons/tools/icon (2).svg";
import icon3 from "@/public/icons/tools/icon (3).svg";
import icon4 from "@/public/icons/tools/icon (4).svg";
import icon5 from "@/public/icons/tools/icon (5).svg";
import icon6 from "@/public/icons/tools/icon (6).svg";
import icon7 from "@/public/icons/tools/icon (7).svg";
import icon8 from "@/public/icons/tools/icon (8).svg";
import arrow from "@/public/icons/tools/arrow.svg";

const toolsData = [
  {
    title: "Payments",
    icon: icon1,
    description:
      "Responsibly sourced woods and eco-friendly fabrics for a better tomorrow.",
    colSpan: 1,
  },
  {
    title: "Analytics",
    icon: icon2,
    description: "Understand your growth with smart, built-in analytics.",
    colSpan: 1,
  },
  {
    title: "Newsletters",
    icon: icon3,
    description: "Build your audience with engaging, branded newsletter.",
    colSpan: 1,
  },
  {
    title: "Pages",
    icon: icon4,
    description:
      "Showcase your expertise with a personal profile that sells for you.",
    colSpan: 1,
  },
  {
    title: "Contact",
    icon: icon5,
    description:
      "Organize your contacts and turn them into your most valuable asset.",
    colSpan: 1,
  },
  {
    title: "Emails",
    icon: icon6,
    description:
      "Showcase your expertise with a personal profile that sells for you.",
    colSpan: 1,
  },
  {
    title: "Co-sell network",
    icon: icon7,
    description:
      "Collaborate with others to sell more without ad spend or extra effort.",
    colSpan: 1,
  },
  {
    title: "Enterprise plan",
    icon: icon8,
    description:
      "Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, private content protection, and 24/7 service availability.",
    colSpan: 2,
    isEnterprise: true,
  },
];

const Tools = () => {
  return (
    <div className="flex pb-28 pt-20 bg-[#FDF6E8] items-center justify-center h-full">
      <Container>
        <button className="essential-tools-button font-semibold text-center mx-auto uppercase text-sm md:text-[16px] flex items-center justify-center rounded-full px-4 py-2.5 lg:py-3">
          Essential Tools
        </button>

        <div>
          <p className="clashDisplay mt-4 font-bold text-center text-4xl lg:text-6xl">
            Essential Tools <br /> Zero Distractions
          </p>

          <p className="text-[#5D5D5D] mx-auto font-medium silka mt-5 max-w-2xl text-sm text-center lg:text-lg">
            Create diverse products on the platform and leverage our powerful
            tools to drive sales.
          </p>
        </div>

        <div className="grid max-w-7xl mt-12 mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
          {toolsData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className={`rounded-xl py-8 px-10 
        ${
          item.isEnterprise
            ? "tools-linear-card text-white col-span-1 sm:col-span-2 lg:col-span-2"
            : "bg-white tools-card-shadow"
        }`}
            >
              <div className="flex items-center justify-between w-full">
                <p
                  className={`clashDisplay text-2xl font-semibold ${
                    item.isEnterprise ? "enterprise-plan-text" : "text-black"
                  }`}
                >
                  {item.title}
                </p>
                <Image src={item.icon} width={32} height={32} alt="icon" />
              </div>

              <p
                className={`mt-4 font-medium silka ${
                  item.isEnterprise ? "text-white" : "text-[#757575]"
                }`}
              >
                {item.description}
              </p>

              <div className="flex items-center mt-4 gap-2">
                <p className="text-[#CD9D41] silka">Learn more</p>
                <Image src={arrow} width={15} height={15} alt="arrow" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Tools;
