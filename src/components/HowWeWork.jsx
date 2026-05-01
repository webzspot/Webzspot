import React, { useEffect, useRef, useState } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import { FaCircleDot, FaRegCircleDot } from "react-icons/fa6";
import StepImage from "./StepImage";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  //To Change image on timeline Scroll
  const [activeIndex, setActiveIndex] = useState(0);

  const servicesList = [
    {
      id: 1,
      title: "Discovery and Planning",
      text: "We start with an in-depth consultation to understand your business goals and requirements. This helps us create a tailored strategy and detailed project plan, including wireframes and design prototypes. This helps us create a tailored strategy and detailed project plan, including wireframes and design prototypes.",
      image:
        "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/How-to-create-a-UX-research-plan_Blog-hero_800x500@x2_FA.jpg?updatedAt=1720182954988",
    },
    {
      id: 2,
      title: "Design and Development",
      text: "Our talented design team crafts visually appealing, intuitive, and user-friendly interfaces tailored to your brand's identity. Meanwhile, our skilled developers bring these designs to life, creating a fully functional, responsive website that performs seamlessly across all devices. We prioritize optimal performance, ensuring quick load times.",
      image:
        "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/Why%20Web%20Design%20Is%20A%20Good%20Career%20Choice.jpg?updatedAt=1720182956883",
    },
    {
      id: 3,
      title: "Review and Testing",
      text: "We present the initial design and development for your feedback, making any necessary revisions to meet your expectations. Our rigorous testing process ensures the website functions flawlessly across various devices and browsers. We thoroughly test for functionality, security, performance, identifying & fixing any issues to deliver a reliable website.",
      image:
        "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/360_F_196039475_6MbF6oSsJJIQdSkS5sBUl52JfvYVSeNP.jpg?updatedAt=1720182952301",
    },
    {
      id: 4,
      title: "Project Handoff and Support",
      text: "Once the website is finalized, we conduct a thorough handoff, providing you with all necessary documentation and training to manage your new site effectively. Our commitment doesn't end there; we offer ongoing support to keep your website updated, secure, and running smoothly. we're here to ensure your continued success.",
      image:
        "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/What-Is-Project-Handover-.png?updatedAt=1720182955799",
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
          <p className="text-[#07446F]">{"{ How We Work }"}</p>
          <h2 className="text-2xl lg:text-5xl font-semibold">
            STRATEGIC STEPS TO IMPACTFUL RESULTS
          </h2>
        </div>
        <div className=" mt-10 overflow-hidden">
          <div className="relative h-80 w-full overflow-hidden rounded-4xl rounded-br-3xl">
  {servicesList.map((item, i) => (
    <motion.img
  key={i}
  src={item.image}
  animate={{
    opacity: activeIndex === i ? 1 : 0,
    scale: activeIndex === i ? 1 : 1.08,
    filter: activeIndex === i ? "blur(0px)" : "blur(6px)",
  }}
  transition={{
    opacity: { duration: 0.9, ease: "easeInOut" },
    scale: { duration: 1.2, ease: "easeOut" },
    filter: { duration: 0.9, ease: "easeOut" },
  }}
  className="absolute inset-0 w-full h-full object-cover"
/>

  ))}

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
            className="absolute top-0 left-0 w-full h-full origin-top bg-[#07446F]"
          />
        </div>
        <div className="flex flex-col gap-16">
          {servicesList.map((data, i) => (
            <StepImage
              key={data.id}
              data={data}
              i={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
