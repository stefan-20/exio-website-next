"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { servicesImg1 } from "@/lib/data";
import { services } from "@/constants";
import { useSectionInView } from "@/lib/hooks";

export default function ServicesAndProducts() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      className="max-w-[100rem] mb-28 scroll-mt-28"
      ref={ref}
      id="services"
    >
      <div className="flex flex-col flex-start px-40">
        <div className="flex flex-start flex-col">
          <span className="text-left">Services & Products</span>
          <span className="text-3xl md:text-5xl mt-4">What we deliver...</span>
          <p className="mt-4 text-neutral-300">
            We help you <span className="font-semibold">identify</span> the
            business opportunities and{" "}
            <span className="font-semibold">develop</span> the corresponding
            solutions. <br />
            Whether its developing and setting up infrastructure from scratch or
            deploying one of our tried and tested tools.
            <br />
          </p>
        </div>

        <div className="flex flex-row justify-between w-full mt-8">
          <div className="flex justify-start relative sm:w-2/5 h-650">
            <Image
              src={servicesImg1}
              alt="services image"
              className="border border-black/5 rounded-lg"
            ></Image>
          </div>
          <div className="flex flex-col justify-evenly sm:w-2/5">
            {services.map((service, index) => (
              <div
                className="flex flex-col pl-3 bg-gray-100 border border-black/5 dark:bg-white/10 dark:hover:bg-white/20 rounded-md"
                key={service.title + index}
              >
                <span className="text-xl text-semibold text-white p-1">
                  {service.title}
                </span>
                <br />
                <p className="p-1 text-neutral-300 text-wrap">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <motion.h1
          // className="flex flex-col flex-start mb-2 pt-5 px-4 text-4xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-3xl md:text-5xl font-light">
            What we deliver...
          </span>
        </motion.h1> */}
        {/* <br />
        <p className="mt-6 mx-2 text-neutral-500 font-extralight text-lg">
          Data solutions for your business problems.
        </p>
        <br />
        <p className="mx-2 text-neutral-300 font-extralight">
          From infrastructure to data driven applications - we provide
          consulting and development services to create the feasible and
          sustainable solutions you need.
        </p> */}
        {/*  */}
      </div>
    </section>
  );
}
