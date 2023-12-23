"use-client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { stats } from "@/constants";
export default function Statistics() {
  return (
    <section className="flex flex-row flex-wrap mt-10 mb-[10rem]">
      {/* <SectionHeading>Statistics</SectionHeading> */}
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex flex-row md:flex-row justify-start items-center m-3`}
        >
          <h4 className="font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
