import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FaCircleDot, FaRegCircleDot } from "react-icons/fa6";

const StepImage = ({ data, i, activeIndex, setActiveIndex }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveIndex(i);
    }
  }, [isInView, i, setActiveIndex]);

  return (
    <div ref={ref} className="relative">
      {/* Dot */}
      <div className="absolute top-2 left-0">
        <div className="bg-white text-2xl text-gray-700">
          {activeIndex === i ? <FaCircleDot /> : <FaRegCircleDot />}
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-nowrap gap-1 ml-10">
        <p className="text-5xl lg:text-7xl font-extrabold text-[#07446F] mr-2">
          {i + 1}
        </p>

        <div>
          <h3 className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-2">
            {data.title}
          </h3>

          <p className="text-gray-500 leading-relaxed text-base lg:text-lg">
            {data.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepImage
