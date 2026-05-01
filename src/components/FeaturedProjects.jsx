import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "WEB DESIGN",
        category: "Websites",
        image: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/business-website-design.png?updatedAt=1720182952798",
        desc: "Modern, responsive and conversion-focused website designs for businesses."
    },
    {
        id: 2,
        title: "WEB DEVELOPMENT",
        category: "Websites",
        image: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/62e450ccb3c74981847a6081_5_reasons_web_development.jpg?updatedAt=1720182952495",
        desc: "Scalable web applications built with modern technologies like React and APIs."
    },
    {
        id: 3,
        title: "UI/UX Design",
        category: "Designs",
        image: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/65e1baaa3a25c950ece1f650_ux-docguide-header.png?updatedAt=1720182952377",
        desc: "User-friendly interfaces with smooth user experience and modern design systems."
    },
    {
        id: 4,
        title: "Logo Design",
        category: "Designs",
        image: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/yurpddbmohcssabjrgbv.jpg?updatedAt=1720182957952",
        desc: "Creative brand identity and professional logo design for businesses."
    },
    {
        id: 5,
        title: "Search Engine Optimization",
        category: "Marketing",
        image: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/image%206%20(1).png?updatedAt=1720182956708",
        desc: "Improve Google ranking, organic traffic and online visibility."
    },
    {
        id: 6,
        title: "Digital Marketing",
        category: "Marketing",
        image: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Image%20Assets/image%207.png?updatedAt=1720182956653",
        desc: "Social media marketing, lead generation and brand growth strategies."
    },
];

export default function FeaturedProjects() {
    return (
        <section id="services" className="bg-white pt-24 pb-10 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-14 flex flex-col items-start w-fit mx-auto">

                    <h2 className="text-lg md:text-xl font-light text-[#07446F]">
                        {"{ Our Services }"}
                    </h2>

                    <p className="text-black mt-5 font-bold text-2xl md:text-7xl leading-tight">
                        Showcasing our most impactful work
                    </p>

                </div>

                {/* GRID */}
                <div className="flex flex-col gap-10 relative">

                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 120, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{ scale: 1.02, y: -10 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: i * 0.12,
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="group sticky top-10 mb-10 aspect-square rounded-2xl overflow-hidden h-100 lg:h-150 shadow-2xl"
                        >

                            {/* IMAGE */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/60" />

                            {/* TOP LEFT CONTENT */}
                            <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">

                                <span className="bg-[#07446F] text-white text-sm font-semibold px-4 py-2 rounded-full w-fit shadow-md">
                                    {project.category}
                                </span>

                                {/* TITLE */}
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className="text-white text-2xl md:text-3xl font-bold leading-snug drop-shadow-lg"
                                >
                                    {project.title}
                                </motion.h3>

                                {/* DESCRIPTION */}
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="relative text-white/80 text-sm md:text-base max-w-md leading-relaxed pl-4 border-l-2 border-white/30
 backdrop-blur-sm"
                                >
                                    <span className="inline-block">
                                        {project.desc}
                                    </span>
                                </motion.p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}
