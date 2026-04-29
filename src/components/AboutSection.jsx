// import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// /* ---------------- STATS ---------------- */

// const stats = [
//     { number: 10, label: "Years Experience", suffix: "+" },
//     { number: 500, label: "Projects Done", suffix: "+" },
//     { number: 140, label: "Happy Clients", suffix: "+" },
//     { number: 98, label: "Satisfied Clients", suffix: "%" },
// ];

// /* ---------------- COUNTER ---------------- */

// function Counter({ value, suffix }) {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     const motionValue = useMotionValue(0);
//     const spring = useSpring(motionValue, { duration: 2000 });

//     const [display, setDisplay] = useState(0);

//     useEffect(() => {
//         if (isInView) motionValue.set(value);
//     }, [isInView, value]);

//     useEffect(() => {
//         spring.on("change", (latest) => {
//             setDisplay(Math.floor(latest));
//         });
//     }, [spring]);

//     return (
//         <h2 className="text-5xl font-bold text-gray-800">
//             <span ref={ref}>{display}</span>
//             <span className="text-red-500 ml-1">{suffix}</span>
//         </h2>
//     );
// }

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function AboutSection() {
//     return (
//         <section className="bg-white py-20 overflow-hidden relative lg:pl-20">

//             {/* ================= ABOUT SECTION ================= */}
//             <div id="about" className="container mx-auto px-4 mb-20">

//                 {/* Heading */}
//                 <div className="text-center max-w-2xl mx-auto mb-10">
//                     <h1 className="text-2xl lg:text-3xl font-semibold text-[#07446f]">
//                         About Us
//                     </h1>
//                     <p className="mt-3 text-gray-600">
//                         We are a dynamic team of technology enthusiasts, creative problem solvers,
//                         and dedicated professionals driven to help our clients succeed.
//                     </p>
//                 </div>

//                 {/* Vision */}
//                 <div className="grid lg:grid-cols-3 gap-6 items-center mb-10">
//                     <div className="lg:col-span-2 bg-[#EEF7F8] border border-[#3A8B97] p-5 rounded-md">
//                         <h2 className="text-[#3A8B97] font-semibold mb-2">Vision & Mission</h2>
//                         <p>
//                             At WebzSpot, we help businesses grow digitally with smart solutions
//                             that improve efficiency and long-term success.
//                         </p>
//                     </div>

//                     <img
//                         src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/dartboard-with-arrow-increasing-bar-graph-enhance-setup-business-objective-target-goal-concept-by-3d-render.jpg"
//                         className="rounded-md h-64 w-full object-cover"
//                         alt=""
//                     />
//                 </div>

//                 {/* Motto */}
//                 <div className="grid lg:grid-cols-3 gap-6 items-center">
//                     <img
//                         src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/Image%20(2).png"
//                         className="rounded-md h-64 w-full object-cover"
//                         alt=""
//                     />

//                     <div className="lg:col-span-2 bg-[#FCFAF5] border border-[#EAC99D] p-5 rounded-md">
//                         <h2 className="text-[#EAC99D] font-semibold mb-2">Motto</h2>
//                         <p>
//                             We transform technology into a powerful asset that drives success
//                             and long-term value.
//                         </p>
//                     </div>
//                 </div>

//             </div>

//             {/* ================= STATS ================= */}
//             {/* <div className="max-w-7xl mx-auto px-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center">
//                     {stats.map((item, i) => (
//                         <motion.div key={i}>
//                             <Counter value={item.number} suffix={item.suffix} />
//                             <p className="text-gray-500 mt-2">{item.label}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div> */}
//         </section>
//     );
// }

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------- STATS ---------------- */

const stats = [
    { number: 10, label: "Years Experience", suffix: "+" },
    { number: 500, label: "Projects Done", suffix: "+" },
    { number: 140, label: "Happy Clients", suffix: "+" },
    { number: 98, label: "Satisfied Clients", suffix: "%" },
];

/* ---------------- COUNTER ---------------- */

function Counter({ value, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { duration: 2000 });

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value]);

    useEffect(() => {
        spring.on("change", (latest) => {
            setDisplay(Math.floor(latest));
        });
    }, [spring]);

    return (
        <h2 className="text-5xl font-bold text-gray-800">
            <span ref={ref}>{display}</span>
            <span className="text-[#07446F] ml-1">{suffix}</span>
        </h2>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function AboutSection() {
    return (
        <section
            id="about"
            className="bg-white px-6 md:px-14 py-14 max-w-7xl mx-auto"
        >
            {/* Top Label */}
            <p className="text-[#07446F] font-semibold text-sm tracking-wide mb-1">
                &#123; who we are &#125;
            </p>

            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-black text-gray-950 uppercase leading-none mb-12">
                We Build Digital Solutions That Drive Growth
            </h2>

            {/* Two Column Grid */}
            <div className="flex flex-col lg:flex-row gap-5 items-stretch">
                {/* ── LEFT IMAGE ── */}

                <div
                    className="relative flex-[1.8] overflow-hidden"
                    style={{
                        borderRadius: "24px",
                        minHeight: "520px",
                    }}
                >
                    <img
                        src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/dartboard-with-arrow-increasing-bar-graph-enhance-setup-business-objective-target-goal-concept-by-3d-render.jpg"
                        alt="WebzSpot Vision"
                        className="w-full h-full object-cover"
                        style={{ minHeight: "520px" }}
                    />

                    {/* Floating Badge */}
                    <div className="absolute bottom-0 left-0">
                        {/* top curve */}
                        <div>
                            <svg
                                className="w-10 h-10 -mb-1"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
                            </svg>
                        </div>

                        <div className="flex items-end">
                            <div
                                className="bg-white flex items-center justify-center"
                                style={{
                                    width: "148px",
                                    height: "148px",
                                    borderRadius: "0 24px 0 24px",
                                }}
                            >
                                <div className="w-24 h-24 relative flex items-center justify-center">
                                    {/* Rotating Text */}
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]"
                                    >
                                        <defs>
                                            <path
                                                id="circle-path"
                                                d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                                            />
                                        </defs>

                                        <text
                                            fontSize="9"
                                            fill="#222"
                                            fontFamily="sans-serif"
                                            fontWeight="500"
                                            letterSpacing="3"
                                        >
                                            <textPath href="#circle-path">
                                                WEBZSPOT • DIGITAL • CREATIVE • GROWTH •
                                            </textPath>
                                        </text>
                                    </svg>

                                    {/* Center Circle */}
                                    <div className="w-9 h-9 bg-[#07446F] rounded-full flex items-center justify-center z-10">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* bottom curve */}
                            <div>
                                <svg
                                    className="w-10 h-10 -ml-1"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                >
                                    <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT COLUMN ── */}

                <div className="flex flex-col gap-4 flex-1">
                    {/* Story Card */}
                    <div className="relative">
                        <div className="bg-gray-100 relative p-6 rounded-[32px] text-gray-600 text-[15px] leading-relaxed">
                            <div
                                className="relative -left-6 -top-6 z-10 bg-white inline-block px-5 py-3"
                                style={{
                                    borderRadius: "0 0 16px 0",
                                }}
                            >
                                <h3 className="text-4xl font-bold text-gray-900">
                                    Our Story
                                </h3>
                            </div>

                            <div className="text-lg space-y-4">
                                <p>
                                    We are a dynamic team of technology enthusiasts, creative
                                    problem solvers, and dedicated professionals driven to help
                                    businesses succeed in the digital world.
                                </p>

                                <p>
                                    At WebzSpot, we specialize in crafting smart digital
                                    solutions including branding, web development, marketing, and
                                    business growth strategies tailored to client success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Image */}
                    <div
                        className="overflow-hidden rounded-[32px] flex-1"
                        style={{
                            minHeight: "220px",
                        }}
                    >
                        <img
                            src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/Image%20(2).png"
                            alt="WebzSpot Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            style={{ minHeight: "220px" }}
                        />
                    </div>
                </div>
            </div>

            {/* ================= STATS ================= */}

            {/* <div className="max-w-7xl mx-auto pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center">
          {stats.map((item, i) => (
            <motion.div key={i}>
              <Counter value={item.number} suffix={item.suffix} />
              <p className="text-gray-500 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
        </section>
    );
}