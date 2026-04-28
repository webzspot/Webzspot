// import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// /* ---------------- STATS ---------------- */

// const stats = [
//     { number: 10, label: "Years Experience", suffix: "+" },
//     { number: 500, label: "Projects Done", suffix: "+" },
//     { number: 140, label: "Happy Clients", suffix: "+" },
//     { number: 98, label: "Satisfied Clients", suffix: "%" },
// ];

// /* ---------------- LOGOS (SET 1) ---------------- */

// const logos = [
//     // Set 1
//     "https://framerusercontent.com/images/UsU6TSwGi1GYzawTJkBdu5BNeqg.svg",
//     "https://framerusercontent.com/images/GPSxJ7zrNG4isyTYg1gr1HjRTA.svg",
//     "https://framerusercontent.com/images/nqpiPJ0ZgUpGPFfNDKzd0n8eOo.svg",
//     "https://framerusercontent.com/images/RsaJCL4Sj4fVM9spQ7bKyrgyngo.svg",
//     "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
//     "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
//     "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg",
//     "https://framerusercontent.com/images/DRmXHpCYBybKANjsypghwN6FGCY.svg",

//     // Set 2
//     "https://framerusercontent.com/images/duZwjP73YzY6931zuqasWWfWDZY.svg",
//     "https://framerusercontent.com/images/CwjfV6kgrUasvAU4TBPAKVEdqM.svg",
//     "https://framerusercontent.com/images/mrbkelb0EHMsZhT9eOgiSpeVIgo.svg",
//     "https://framerusercontent.com/images/pYqN0LamU3K96ZRpqwVFEuXCzqg.svg",
//     "https://framerusercontent.com/images/uTkuLOi3ZjuJHBQNS9i0C4T7A.svg",
//     "https://framerusercontent.com/images/8LtSXMmNjpVaruiiqMNkdJXfkg.svg",
//     "https://framerusercontent.com/images/kurrL4pv84sniLEt0JYjzeBZq58.svg",
//     "https://framerusercontent.com/images/CISV8ApwN2fGRlGTstlNHxJ5tw.svg",
// ];

// /* ---------------- COUNTER COMPONENT ---------------- */

// function Counter({ value, suffix }) {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     const motionValue = useMotionValue(0);
//     const spring = useSpring(motionValue, { duration: 2000 });

//     const [display, setDisplay] = useState(0);

//     useEffect(() => {
//         if (isInView) {
//             motionValue.set(value);
//         }
//     }, [isInView, value]);

//     useEffect(() => {
//         spring.on("change", (latest) => {
//             setDisplay(Math.floor(latest));
//         });
//     }, [spring]);

//     return (
//         <h2 className="relative inline-block text-5xl md:text-6xl font-weight text-gray-800">
//             <span ref={ref}>{display}</span>

//             <span className="absolute -top-2 -right-5 text-red-500 text-2xl md:text-3xl">
//                 {suffix}
//             </span>
//         </h2>
//     );
// }

// /* ---------------- MAIN COMPONENT ---------------- */

// export default function AboutSection() {
//     return (
//         <section className="bg-white py-20 overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">

//                 {/* ===== STATS ===== */}
//                 <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center mb-16">
//                     {stats.map((item, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0, y: 40 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: i * 0.2 }}
//                             viewport={{ once: true }}
//                         >
//                             <Counter value={item.number} suffix={item.suffix} />
//                             <p className="text-gray-500 mt-3">{item.label}</p>
//                         </motion.div>
//                     ))}
//                 </div>

//                 {/* ===== LEFT ALIGNED TEXT ===== */}
//                 <motion.p
//                     className="text-left text-gray-700 text-lg mb-10"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                 >
//                     We work with the world's top companies
//                 </motion.p>

//                 {/* ===== LOGO SECTION ===== */}
//                 <div className="space-y-10">

//                     {/* GRADIENT MASK */}
//                     <div className="relative overflow-hidden">
//                         <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
//                         <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

//                         {/* LEFT → RIGHT */}
//                         <motion.div
//                             className="flex gap-16 w-max"
//                             animate={{ x: ["0%", "-50%"] }}
//                             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//                         >
//                             {[...logos, ...logos].map((logo, i) => (
//                                 <img
//                                     key={i}
//                                     src={logo}
//                                     className="h-10 opacity-90 grayscale brightness-0 contrast-200"
//                                 />
//                             ))}
//                         </motion.div>
//                     </div>

//                     {/* RIGHT → LEFT (OPPOSITE DIRECTION) */}
//                     <div className="relative overflow-hidden">
//                         <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
//                         <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

//                         <motion.div
//                             className="flex gap-16 w-max"
//                             animate={{ x: ["-50%", "0%"] }}
//                             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//                         >
//                             {[...logos, ...logos].map((logo, i) => (
//                                 <img
//                                     key={i}
//                                     src={logo}
//                                     className="h-10 opacity-90 grayscale brightness-0 contrast-200"
//                                 />
//                             ))}
//                         </motion.div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

// {/* About Section */ }
// <section id="about" class="container mx-auto overflow-x-hidden px-4">

//     {/* Heading */}
//     <div class="flex flex-col items-center justify-center w-full lg:w-[55%] mx-auto gap-4 text-center">
//         <div class="flex items-center gap-2 text-[#07446f]">
//             <svg class="lg:text-2xl text-lg" viewBox="0 0 256 256" width="1em" height="1em" fill="currentColor">
//                 <path d="M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Z"></path>
//             </svg>
//             <h1 class="font-semibold text-lg lg:text-2xl">About Us</h1>
//         </div>

//         <p class="lg:text-lg text-md">
//             We are a dynamic team of technology enthusiasts, creative problem solvers,
//             and dedicated professionals driven to help our clients succeed.
//         </p>
//     </div>

//     {/* Content */}
//     <div class="lg:w-[80%] w-full bg-[#FCFCFD] mx-auto mt-6 lg:p-4">

//         {/* Vision & Mission */}
//         <div class="grid lg:grid-cols-3 gap-6 items-center p-5">

//             {/* Text */}
//             <div class="lg:col-span-2">
//                 <div class="flex flex-col border border-[#3A8B97] bg-[#EEF7F8] rounded-md p-4 gap-3">
//                     <h2 class="text-[#3A8B97] text-lg font-semibold">Vision & Mission</h2>
//                     <p>
//                         At WebzSpot, we transform how businesses thrive in the digital age.
//                         We craft solutions that enhance digital presence, streamline operations,
//                         and ensure long-term success.
//                     </p>
//                 </div>
//             </div>

//             {/* Image */}
//             <div>
//                 <img
//                     src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/dartboard-with-arrow-increasing-bar-graph-enhance-setup-business-objective-target-goal-concept-by-3d-render.jpg"
//                     alt="Vision"
//                     class="rounded-md w-full h-64 object-cover"
//                 />
//             </div>
//         </div>

//         {/* Motto */}
//         <div class="grid lg:grid-cols-3 gap-6 items-center p-5">

//             {/* Image */}
//             <div class="order-2 lg:order-1">
//                 <img
//                     src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/Image%20(2).png"
//                     alt="Motto"
//                     class="rounded-md w-full h-64 object-cover"
//                 />
//             </div>

//             {/* Text */}
//             <div class="lg:col-span-2 order-1 lg:order-2">
//                 <div class="flex flex-col border border-[#EAC99D] bg-[#FCFAF5] rounded-md p-4 gap-3">
//                     <h2 class="text-[#EAC99D] text-lg font-semibold">Motto</h2>
//                     <p>
//                         We transform technology into a powerful asset that drives success.
//                         Our personalized strategies ensure efficiency, competitiveness,
//                         and long-term value for your business.
//                     </p>
//                 </div>
//             </div>

//         </div>

//     </div>
// </section>

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
            <span className="text-red-500 ml-1">{suffix}</span>
        </h2>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function AboutSection() {
    return (
        <section className="bg-white py-20 overflow-hidden">

            {/* ================= ABOUT SECTION ================= */}
            <div id="about" className="container mx-auto px-4 mb-20">

                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h1 className="text-2xl lg:text-3xl font-semibold text-[#07446f]">
                        About Us
                    </h1>
                    <p className="mt-3 text-gray-600">
                        We are a dynamic team of technology enthusiasts, creative problem solvers,
                        and dedicated professionals driven to help our clients succeed.
                    </p>
                </div>

                {/* Vision */}
                <div className="grid lg:grid-cols-3 gap-6 items-center mb-10">
                    <div className="lg:col-span-2 bg-[#EEF7F8] border border-[#3A8B97] p-5 rounded-md">
                        <h2 className="text-[#3A8B97] font-semibold mb-2">Vision & Mission</h2>
                        <p>
                            At WebzSpot, we help businesses grow digitally with smart solutions
                            that improve efficiency and long-term success.
                        </p>
                    </div>

                    <img
                        src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/dartboard-with-arrow-increasing-bar-graph-enhance-setup-business-objective-target-goal-concept-by-3d-render.jpg"
                        className="rounded-md h-64 w-full object-cover"
                        alt=""
                    />
                </div>

                {/* Motto */}
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <img
                        src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/Image%20(2).png"
                        className="rounded-md h-64 w-full object-cover"
                        alt=""
                    />

                    <div className="lg:col-span-2 bg-[#FCFAF5] border border-[#EAC99D] p-5 rounded-md">
                        <h2 className="text-[#EAC99D] font-semibold mb-2">Motto</h2>
                        <p>
                            We transform technology into a powerful asset that drives success
                            and long-term value.
                        </p>
                    </div>
                </div>

            </div>

            {/* ================= STATS ================= */}
            {/* <div className="max-w-7xl mx-auto px-6">
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