import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
const ProjectCarousel = ({ slides }: { slides: any[] }) => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  };
  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(slides.length - 1);
    }
    console.log(index);
  };

  return (
    <div className="flex flex-row justify-between w-full align-middle">
      <button onClick={handlePrevious}>
        <FaChevronLeft size={40}></FaChevronLeft>
      </button>
      <div className="">{slides[index]}</div>
      <button onClick={handleNext}>
        <FaChevronRight size={40}></FaChevronRight>
      </button>
    </div>
  );
};

export default ProjectCarousel;
