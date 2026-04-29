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
        <section className="bg-white py-20 overflow-hidden relative lg:pl-20">

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