import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------- STATS ---------------- */

const stats = [
    { number: 10, label: "Years Experience", suffix: "+" },
    { number: 500, label: "Projects Done", suffix: "+" },
    { number: 140, label: "Happy Clients", suffix: "+" },
    { number: 98, label: "Satisfied Clients", suffix: "%" },
];

/* ---------------- LOGOS (SET 1) ---------------- */

const logos = [
    // Set 1
    "https://framerusercontent.com/images/UsU6TSwGi1GYzawTJkBdu5BNeqg.svg",
    "https://framerusercontent.com/images/GPSxJ7zrNG4isyTYg1gr1HjRTA.svg",
    "https://framerusercontent.com/images/nqpiPJ0ZgUpGPFfNDKzd0n8eOo.svg",
    "https://framerusercontent.com/images/RsaJCL4Sj4fVM9spQ7bKyrgyngo.svg",
    "https://framerusercontent.com/images/6QEz8kJbwqWFzbNDcgcMwaBk7Jk.svg",
    "https://framerusercontent.com/images/3Y1x3Iz9CnzoCeLjfRflZMOiF0.svg",
    "https://framerusercontent.com/images/mGAxAGDBjt0JHg8MI0F9P9FkW0g.svg",
    "https://framerusercontent.com/images/DRmXHpCYBybKANjsypghwN6FGCY.svg",

    // Set 2
    "https://framerusercontent.com/images/duZwjP73YzY6931zuqasWWfWDZY.svg",
    "https://framerusercontent.com/images/CwjfV6kgrUasvAU4TBPAKVEdqM.svg",
    "https://framerusercontent.com/images/mrbkelb0EHMsZhT9eOgiSpeVIgo.svg",
    "https://framerusercontent.com/images/pYqN0LamU3K96ZRpqwVFEuXCzqg.svg",
    "https://framerusercontent.com/images/uTkuLOi3ZjuJHBQNS9i0C4T7A.svg",
    "https://framerusercontent.com/images/8LtSXMmNjpVaruiiqMNkdJXfkg.svg",
    "https://framerusercontent.com/images/kurrL4pv84sniLEt0JYjzeBZq58.svg",
    "https://framerusercontent.com/images/CISV8ApwN2fGRlGTstlNHxJ5tw.svg",
];

/* ---------------- COUNTER COMPONENT ---------------- */

function Counter({ value, suffix }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { duration: 2000 });

    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value]);

    useEffect(() => {
        spring.on("change", (latest) => {
            setDisplay(Math.floor(latest));
        });
    }, [spring]);

    return (
        <h2 className="relative inline-block text-5xl md:text-6xl font-weight text-gray-800">
            <span ref={ref}>{display}</span>

            <span className="absolute -top-2 -right-5 text-red-500 text-2xl md:text-3xl">
                {suffix}
            </span>
        </h2>
    );
}

/* ---------------- MAIN COMPONENT ---------------- */

export default function AboutSection() {
    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* ===== STATS ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-center mb-16">
                    {stats.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Counter value={item.number} suffix={item.suffix} />
                            <p className="text-gray-500 mt-3">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* ===== LEFT ALIGNED TEXT ===== */}
                <motion.p
                    className="text-left text-gray-700 text-lg mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    We work with the world's top companies
                </motion.p>

                {/* ===== LOGO SECTION ===== */}
                <div className="space-y-10">

                    {/* GRADIENT MASK */}
                    <div className="relative overflow-hidden">
                        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

                        {/* LEFT → RIGHT */}
                        <motion.div
                            className="flex gap-16 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        >
                            {[...logos, ...logos].map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo}
                                    className="h-10 opacity-90 grayscale brightness-0 contrast-200"
                                />
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT → LEFT (OPPOSITE DIRECTION) */}
                    <div className="relative overflow-hidden">
                        <div className="pointer-events-none absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />

                        <motion.div
                            className="flex gap-16 w-max"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        >
                            {[...logos, ...logos].map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo}
                                    className="h-10 opacity-90 grayscale brightness-0 contrast-200"
                                />
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}