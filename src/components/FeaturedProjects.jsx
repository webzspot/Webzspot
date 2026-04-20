import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "VELOCITY",
        category: "Marketing",
        image: "https://framerusercontent.com/images/8pko4g12TPx6mCqPn9HmJmu8CzA.jpg",
    },
    {
        id: 2,
        title: "THE PERFECT FRAME",
        category: "Web Design",
        image: "https://framerusercontent.com/images/w08JBQPFYIq2vr4OfcD9W6vxEug.jpeg",
    },
    {
        id: 3,
        title: "SPREADING THE WORD",
        category: "Marketing",
        image: "https://framerusercontent.com/images/2nWXrWvPxxMHSpsOkNYf8KjzP7Q.jpeg",
    },
    {
        id: 4,
        title: "FRESH BEGINNINGS",
        category: "Branding",
        image: "https://framerusercontent.com/images/z3w3mzmmWHurhiPeiQFkXc5XPgU.jpeg",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function FeaturedProjects() {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-14 flex flex-col items-start w-fit mx-auto">

                    <h2 className="text-lg md:text-xl font-light text-red-500">
                        {"{Featured Projects}"}
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
                            initial={{ opacity: 0, y: 120 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.1, 0.25, 1],
                                delay: i * 0.15,
                            }}
                            className="sticky top-10 mb-10 aspect-square rounded-2xl overflow-hidden"
                        >
                            {/* IMAGE */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/60" />

                            {/* TOP LEFT CONTENT */}
                            <div className="absolute top-6 left-6 flex flex-col gap-3 z-10">

                                <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit">
                                    {project.category}
                                </span>

                                <h3 className="text-white text-2xl md:text-3xl font-semibold leading-snug">
                                    {project.title}
                                </h3>

                            </div>

                        </motion.div>
                    ))
                    }

                </div>
            </div>
        </section>
    );
}