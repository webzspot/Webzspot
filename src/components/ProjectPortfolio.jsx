// import React from "react";
// import { motion } from "framer-motion";

// export default function ProjectPortfolioSection() {
//     const projects = [
//         {
//             title: "E-Commerce Dashboard",
//             description:
//                 "A modern admin dashboard with analytics, charts, order tracking, and responsive layouts.",
//             tech: ["React JS", "Tailwind CSS", "Framer Motion"],
//             image:
//                 "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//             live: "#",
//             github: "#",
//         },
//         {
//             title: "Portfolio Website",
//             description:
//                 "Personal portfolio website with smooth animations, dark UI, and responsive sections.",
//             tech: ["JavaScript", "React", "Tailwind"],
//             image:
//                 "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
//             live: "#",
//             github: "#",
//         },
//         {
//             title: "Task Management App",
//             description:
//                 "Task and productivity app with drag-and-drop functionality and real-time updates.",
//             tech: ["React JS", "Framer Motion", "Firebase"],
//             image:
//                 "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
//             live: "#",
//             github: "#",
//         },
//     ];

//     return (
//         <section
//             id="projects"
//             className="relative bg-[#f8fafc] text-gray-900 py-24 px-6 md:px-12 overflow-hidden"
//         >
//             {/* Background Glow */}
//             <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/40 blur-[120px] rounded-full"></div>

//             <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/30 blur-[120px] rounded-full"></div>

//             <div className="max-w-7xl mx-auto relative z-10">
//                 {/* Heading */}
//                 <div className="text-center mb-16">
//                     <p className="text-[#07446F]">{"{ my work }"}</p>

//                     <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
//                         Featured Projects
//                     </h2>

//                     <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-base md:text-lg leading-8">
//                         A collection of projects built using React JS, Tailwind CSS,
//                         JavaScript, and Framer Motion with modern UI/UX.
//                     </p>
//                 </div>

//                 {/* Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <ProjectCard
//                             key={index}
//                             project={project}
//                             index={index}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }

// function ProjectCard({ project, index }) {
//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             whileHover={{ y: -10 }}
//             className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group hover:-translate-y-2 transition-all duration-500"
//         >
//             {/* Image */}
//             <div className="overflow-hidden h-56">
//                 <motion.img
//                     whileHover={{ scale: 1.08 }}
//                     transition={{ duration: 0.5 }}
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-full object-cover"
//                 />
//             </div>

//             {/* Content */}
//             <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition duration-300">
//                     {project.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-7 mb-5">
//                     {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                     {project.tech.map((item, i) => (
//                         <span
//                             key={i}
//                             className="px-3 py-1 rounded-full text-xs bg-cyan-50 text-cyan-700 border border-cyan-100"
//                         >
//                             {item}
//                         </span>
//                     ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex items-center gap-4">
//                     <a
//                         href={project.live}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:scale-105 transition duration-300 text-sm font-medium text-white shadow-lg"
//                     >
//                         Live Demo
//                     </a>

//                     <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="px-5 py-2 rounded-xl border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 transition duration-300 text-sm font-medium text-gray-700"
//                     >
//                         GitHub
//                     </a>
//                 </div>
//             </div>
//         </motion.div>
//     );
// }

import React from "react";
import { motion } from "framer-motion";

export default function ProjectPortfolioSection() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description:
                "A modern admin dashboard with analytics, charts, order tracking, and responsive layouts.",
            tech: ["React JS", "Tailwind CSS", "Framer Motion"],
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
            live: "#",
            github: "#",
        },
        {
            title: "Portfolio Website",
            description:
                "Personal portfolio website with smooth animations, dark UI, and responsive sections.",
            tech: ["JavaScript", "React", "Tailwind"],
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
            live: "#",
            github: "#",
        },
        {
            title: "Task Management App",
            description:
                "Task and productivity app with drag-and-drop functionality and real-time updates.",
            tech: ["React JS", "Framer Motion", "Firebase"],
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            live: "#",
            github: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="relative bg-[#f8fafc] text-gray-900 py-16 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-cyan-200/40 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-indigo-200/30 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-[#07446F] text-sm sm:text-base">
                        {"{ my work }"}
                    </p>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900 mt-2">
                        Featured Projects
                    </h2>

                    <p className="text-gray-600 mt-4 md:mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-7 md:leading-8 px-2">
                        A collection of projects built using React JS, Tailwind CSS,
                        JavaScript, and Framer Motion with modern UI/UX.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white border border-gray-200 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group hover:-translate-y-2 transition-all duration-500"
        >
            {/* Image */}
            <div className="overflow-hidden h-52 sm:h-56">
                <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition duration-300">
                    {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-6 sm:leading-7 mb-5">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 rounded-full text-[11px] sm:text-xs bg-cyan-50 text-cyan-700 border border-cyan-100"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 sm:py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:scale-105 transition duration-300 text-sm font-medium text-white shadow-lg text-center"
                    >
                        Live Demo
                    </a>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-3 sm:py-2 rounded-xl border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 transition duration-300 text-sm font-medium text-gray-700 text-center"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}