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
            id="aboutUs"
            className="bg-white px-6 md:px-14 py-14 max-w-7xl mx-auto"
        >
            {/* Top Label */}
            <p className="text-[#07446F] font-semibold text-sm tracking-widest mb-2 uppercase">
                &#123; who we are &#125;
            </p>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-black text-gray-950 uppercase leading-tight mb-12">
                We Build Digital Solutions That Drive Growth
            </h2>

            {/* Two Column Grid */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">

                {/* ── LEFT IMAGE ── */}
                <div
                    className="relative flex-[1.8] overflow-hidden shadow-2xl"
                    style={{
                        borderRadius: "24px",
                        maxHeight: "620px",
                    }}
                >
                    <img
                        src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/dartboard-with-arrow-increasing-bar-graph-enhance-setup-business-objective-target-goal-concept-by-3d-render.jpg"
                        alt="WebzSpot Vision"
                        className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                        style={{ maxHeight: "620px" }}
                    />

                    {/* VISION OVERLAY */}
                    <div className="absolute top-6 left-6 right-6 z-10">
                        <div className="bg-black/50 backdrop-blur-xl text-white p-6 rounded-2xl border border-white/20 shadow-lg">
                            <h2 className="text-lg text-blue-200 border-b border-blue-300 font-semibold mb-3 pb-1">
                                Vision & Mission
                            </h2>
                            <p className="text-sm text-white/90 leading-relaxed">
                                At WebzSpot , we transform how businesses thrive in the digital age.
                                We see technology as a seamless enabler of growth and efficiency,
                                crafting solutions that unlock opportunities and ensure long-term success.
                                Tailored to your unique needs, our approach helps you enhance your digital presence,
                                streamline operations, and stay competitive.
                            </p>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-0 left-0">
                        <div>
                            <svg
                                className="w-10 h-10 -ml-2"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
                            </svg>
                        </div>

                        <div className="flex items-end">
                            <div
                                className="bg-white flex items-center justify-center shadow-xl"
                                style={{
                                    width: "148px",
                                    height: "148px",
                                    borderRadius: "0 16px 0 16px",
                                }}
                            >
                                <div className="w-24 h-24 relative flex items-center justify-center">
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
                                            fontWeight="500"
                                            letterSpacing="3"
                                        >
                                            <textPath href="#circle-path">
                                                WEBZSPOT • DIGITAL • CREATIVE • GROWTH •
                                            </textPath>
                                        </text>
                                    </svg>

                                    <div className="w-9 h-9 bg-[#07446F] rounded-full flex items-center justify-center z-10 shadow-md">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                        >
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <svg
                                    className="w-10 h-10 -ml-2"
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
                <div className="flex flex-col gap-5 flex-1">

                    {/* STORY CARD */}
                    <div className="relative">
                        <div className="bg-gray-100 relative p-4 rounded-2xl shadow-md text-gray-700 text-[15px] leading-relaxed">

                            <div
                                className="relative z-10 bg-white inline-block px-4 py-2 shadow-sm"
                                style={{
                                    borderRadius: "18px",
                                }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900">
                                    moto
                                </h3>
                            </div>

                            <div className=" mt-2">
                                <p>
                                    {/* We are a dynamic team of technology enthusiasts,
                                    creative problem solvers, and dedicated professionals who are driven by a shared goal to help our clients succeed.
                               */}
                                    We believe in transforming technology into a powerful asset that drives your success in the digital landscape.
                                    With personalized strategies and innovative approaches, we ensure that every step of your digital journey leads to enhanced efficiency, competitiveness, and long-term value.
                                    Partner with WebzSpot and elevate your business to new heights of digital excellence.

                                </p>
                            </div>

                        </div>
                    </div>

                    {/* SECOND IMAGE */}
                    <div
                        className="overflow-hidden rounded-2xl flex-1 relative shadow-2xl"
                        style={{ maxHeight: "380px" }}
                    >
                        <img
                            src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/Image%20(2).png"
                            alt="WebzSpot Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />

                        {/* MOTO OVERLAY */}
                        {/* <div className="absolute bottom-4 left-4 right-4">
                            <div className="bg-black/50 backdrop-blur-xl text-white p-4 rounded-2xl border border-white/20">
                                <h2 className="text-lg text-blue-200 border-b border-blue-300 font-semibold mb-2 pb-1">
                                    Moto
                                </h2>
                                <p className="text-xs text-white/90 leading-relaxed">
                                    We believe in transforming technology into a powerful asset that drives your success in the digital landscape.
                                    With personalized strategies and innovative approaches, we ensure that every step of your digital journey leads to enhanced efficiency, competitiveness, and long-term value.
                                    Partner with WebzSpot and elevate your business to new heights of digital excellence.
                                </p>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>

        </section>
    );
}