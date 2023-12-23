"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      // className="flex flex-col h-dvh max-w-[70rem] "
      className="mb-0 max-w-[70rem] text-left sm:mb-0 scroll-mt-[100rem] min-h-m"
    >
      <motion.h1
        className="flex flex-col flex-start mb-2 pt-5 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-5xl md:text-8xl font-light">EXIO Systems</span>
        <br />
        <p className="mt-6 mx-2 text-neutral-500 font-extralight text-lg">
          Data solutions for your business problems.
        </p>
        <br />
        <p className="mx-2 text-neutral-300 font-extralight">
          From infrastructure to data driven applications - we provide
          consulting and development services to create the sustainable
          solutions you need to digitalize your process.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-evenly gap-2 px-4 text-lg font-medium mt-20"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="#projects"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        >
          View projects{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          {/* <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /> */}
        </a>
      </motion.div>
    </section>
  );
}
