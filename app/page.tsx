import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Statistics from "./sections/statistics";
import ServicesAndProducts from "@/components/services-and-products";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center px-4 mt-10">
      <Intro />
      <Statistics></Statistics>
      <ServicesAndProducts></ServicesAndProducts>
      {/* <SectionDivider /> */}
      {/* <About /> */}

      <Projects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
