"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import ProjectCarousel from "./projectCarousel";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="flex flex-start flex-col">
        {/* <div className="flex justify-center align-middle flex-col"> */}
        <span className="text-left">Projects</span>
        <span className="text-3xl md:text-5xl mt-4">
          What have we done so far...
        </span>
        <p className="mt-4 text-neutral-300">
          Ranging from an encompassing{" "}
          <span className="font-semibold">data infrastructure</span> to web
          applications to manage a workflow
          <span className="font-semibold"> digitally</span>:
          <br />
          Our projects have pathed the way for digitalization, data-driven
          decision making and intelligent automation.
          <br />
        </p>
      </div>

      <div className="mt-8">
        <ProjectCarousel
          slides={projectsData.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        ></ProjectCarousel>
      </div>
    </section>
  );
}
