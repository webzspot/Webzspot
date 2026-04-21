import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";

const OurInsights = () => {
  const inSightsList = [
    {
      image: "https://framerusercontent.com/images/iSOSdvRlqBEkFyQWxpbKwxe1Cw.jpg",
      date: "May 5, 2025",
      title: "The Future of AI in Digital Marketing",
    },
    {
      image: "https://framerusercontent.com/images/XpegwdaUteVjDqo880uY6bzCONU.jpg",
      date: "May 5, 2025",
      title: "The Role of Artificial Intelligence in Modern Digital Marketing",
    },
    {
      image: "https://framerusercontent.com/images/5yyiq2tkZSescxjDzYMQnk1n8E.jpg",
      date: "May 3, 2025",
      title: "Top Digital Marketing Trends for 2025",
    },
  ];
  return (
    <div className="container max-w-6xl mx-auto p-4 mt-20 lg:pl-20">
      {/* Heading */}
      <div>
        <p className="text-orange-400">[ Our Insights ]</p>
        <h2 className="text-2xl lg:text-5xl font-semibold">
          STAY AHEAD WITH THE LATEST IN DIGITAL MARKETING
        </h2>
      </div>
      {/* insight cards */}
      <div className="grid xl:grid-cols-3 gap-5 mt-5">
        {inSightsList.map((data,i)=>(
            <div key={i}>
                {/* image */}
                <div className="overflow-hidden rounded-4xl">
                    <motion.div 
                    initial={{scale:1,rotateZ:"0deg"}}
                    whileHover={{scale:1.1,rotateZ:"5deg"}}
                    transition={{duration:0.6,ease:easeInOut}}
                    className=" w-full h-80">
                    <img src={data.image} alt="insight image" className="object-center object-cover w-full h-full" />
                </motion.div>
                </div>
                {/* description */}
                <div className="py-4">
                    <div className="flex items-center gap-2 py-2">
                        <FaCalendarAlt/>
                        <span className="font-light text-base text-gray-700"> {data.date} / Insights</span>
                    </div>
                    <h4 className="font-medium text-2xl">{data.title}</h4>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default OurInsights;
