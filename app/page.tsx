import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Statistics from "./sections/statistics";
import ServicesAndProducts from "@/components/services-and-products";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center px-4 mt-10">
      <Intro />
      <Statistics></Statistics>
      <ServicesAndProducts></ServicesAndProducts>
      <Projects />
      <Contact />
    </main>
  );
}
