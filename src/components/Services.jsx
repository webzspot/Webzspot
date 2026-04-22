import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { FaCircleDot, FaRegCircleDot } from "react-icons/fa6";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const servicesList = [
    {
      title: "Discovery and Planning",
      text: "We start with an in-depth consultation to understand your business goals and requirements. This helps us create a tailored strategy and detailed project plan, including wireframes and design prototypes. This helps us create a tailored strategy and detailed project plan, including wireframes and design prototypes.",
    },
    {
      title: "Design and Development",
      text: "Our talented design team crafts visually appealing, intuitive, and user-friendly interfaces tailored to your brand's identity. Meanwhile, our skilled developers bring these designs to life, creating a fully functional, responsive website that performs seamlessly across all devices. We prioritize optimal performance, ensuring quick load times.",
    },
    {
      title: "Review and Testing",
      text: "We present the initial design and development for your feedback, making any necessary revisions to meet your expectations. Our rigorous testing process ensures the website functions flawlessly across various devices and browsers. We thoroughly test for functionality, security, performance, identifying & fixing any issues to deliver a reliable website.",
    },
    {
      title: "Project Handoff and Support",
      text: "Once the website is finalized, we conduct a thorough handoff, providing you with all necessary documentation and training to manage your new site effectively. Our commitment doesn't end there; we offer ongoing support to keep your website updated, secure, and running smoothly. we're here to ensure your continued success.",
    },
  ];
  return (
    <div
      ref={ref}
      className="container max-w-7xl mx-auto p-4 grid lg:grid-cols-2 mt-10 relative"
    >
      {/* left content */}
      <div className="h-fit lg:sticky top-32 bottom-0 self-start">
        <div>
          <p className="text-orange-400">{"{ How We Work }"}</p>
          <h2 className="text-2xl lg:text-5xl font-semibold">
            STRATEGIC STEPS TO IMPACTFUL RESULTS
          </h2>
        </div>
        <div className=" mt-10 overflow-hidden">
          {/* Left Image*/}
          <div className="relative">
            <img
              src="https://framerusercontent.com/images/VSxqLrfRMs8XEbT1SuK60xq3aKI.jpeg?width=1200&height=1200"
              alt="How We Work Image"
              className="rounded-4xl object-cover object-center rounded-br-3xl h-80 w-full"
            />
            <div className="absolute bottom-0 right-0 flex items-end">
              {/* curved corner bottom*/}
              <div className="">
                <svg
                className="w-10 h-10 scale-x-[-1] scale-y-[1] -mr-2 "
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
              </svg>
              </div>
              <div className="flex flex-col items-end">
                {/* curved corner right  */}
                <svg
                  className="w-10 h-10 scale-x-[-1] scale-y-[1] -mr-2"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
                </svg>
                <div className="bg-white h-28 w-40 rounded-tl-3xl"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* right content */}
      <div className="relative mt-8 lg:mt-40 overflow-hidden lg:ml-5">
        {/* Timeline line */}
        <div className="absolute left-2.5 top-2 w-0.5 h-full bg-gray-200">
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full h-full origin-top bg-orange-500"
          />
        </div>
        <div className="flex flex-col gap-16">
          {servicesList.map((data, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute top-2 left-0">
                <div className="bg-white text-2xl text-gray-700">
                  <FaRegCircleDot className="font-thin" />
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-1 ml-10">
                {/* Step label */}
                <p className="text-5xl lg:text-7xl font-extrabold text-orange-500 mr-2">
                  {i + 1}
                </p>
                <div>
                  {/* Title */}
                  <h3 className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-2">
                    {data.title}
                  </h3>
                  {/* Text */}
                  <p className="text-gray-500 leading-relaxed text-base lg:text-lg">
                    {data.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
