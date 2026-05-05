import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Contact = () => {

    const phoneNumber = "+91 91501 82615";
    const whatsappNumber = "919150182615";
    const email = "client@webzspot.com";

    const services = [
        "Web Design",
        "Web Development",
        "Website Maintenance",
        "Search Engine Optimization",
        "Digital Marketing",
        "Logo Design",
    ];

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#eef8fd] py-16 md:py-28"
        >

            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                <div className="absolute top-[-100px] md:top-[-150px] left-[-80px] md:left-[-120px] w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-cyan-300/30 rounded-full blur-[120px]" />

                <div className="absolute bottom-[-120px] md:bottom-[-180px] right-[-80px] md:right-[-120px] w-[320px] md:w-[500px] h-[320px] md:h-[500px] bg-blue-400/30 rounded-full blur-[140px]" />

                <div className="absolute top-[40%] left-[45%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-sky-200/30 rounded-full blur-[100px]" />

            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-sm font-medium">

                        <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>

                        Empower Your Digital Journey

                    </div>

                    <h1 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-bold text-[#063b60] leading-tight">

                        Transform Your Ideas

                        <span className="block text-sky-500 mt-2">
                            Into Digital Realities
                        </span>

                    </h1>

                    <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">

                        Reach out to us for personalized assistance, expert solutions,
                        and discover how WebzSpot can elevate your business online.

                    </p>

                </motion.div>

                {/* CONTACT SECTION */}
                <div className="relative mt-24">

                    {/* GLASS CARD */}
                    <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/50 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

                        {/* INNER GLOW */}
                        <div className="absolute -top-32 -right-20 w-[400px] h-[400px] bg-cyan-300/30 blur-[120px] rounded-full" />

                        <div className="absolute -bottom-32 -left-20 w-[350px] h-[350px] bg-blue-300/30 blur-[120px] rounded-full" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">

                            {/* LEFT SIDE */}
                            <div className="bg-gradient-to-br from-[#084b73] via-[#0b6698] to-[#1496d1] p-6 sm:p-8 lg:p-14 text-white flex flex-col justify-between">

                                <div>

                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm backdrop-blur-xl">

                                        <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></div>

                                        Available for Projects

                                    </div>

                                    <h2 className="mt-8 text-4xl lg:text-5xl font-bold leading-tight">

                                        Let’s Build

                                        <span className="block text-cyan-300">
                                            Something Amazing
                                        </span>

                                    </h2>

                                    <p className="mt-6 text-white/75 leading-relaxed">

                                        WebzSpot delivers premium websites, SEO,
                                        branding, and digital marketing solutions
                                        that help businesses grow online efficiently.

                                    </p>

                                    {/* FEATURES */}
                                    <div className="mt-10 space-y-4">

                                        {[
                                            "Custom Web Design & Development",
                                            "SEO & Digital Marketing Solutions",
                                            "Modern UI/UX Experiences",
                                            "Dedicated Support & Maintenance",
                                        ].map((item, i) => (

                                            <div
                                                key={i}
                                                className="flex items-center gap-3"
                                            >

                                                <CheckCircle2 className="text-cyan-300" />

                                                <span className="text-white/90">
                                                    {item}
                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {/* CONTACT CARDS */}
                                <div className="mt-14 space-y-4">

                                    {/* PHONE */}
                                    <a
                                        href={`tel:${phoneNumber}`}
                                        className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-xl hover:bg-white/15 transition"
                                    >

                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                                            <img
                                                src="/phone.png"
                                                className="w-7 h-7"
                                            />

                                        </div>

                                        <div>

                                            <p className="text-sm text-white/60">
                                                Phone Number
                                            </p>

                                            <h3 className="font-semibold text-lg">
                                                {phoneNumber}
                                            </h3>

                                        </div>

                                    </a>

                                    {/* EMAIL */}
                                    <a
                                        href={`mailto:${email}`}
                                        className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-xl hover:bg-white/15 transition"
                                    >

                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                                            <img
                                                src="/google.png"
                                                className="w-7 h-7"
                                            />

                                        </div>

                                        <div>

                                            <p className="text-sm text-white/60">
                                                Email Address
                                            </p>

                                            <h3 className="font-semibold text-lg">
                                                {email}
                                            </h3>

                                        </div>

                                    </a>

                                    {/* WHATSAPP */}
                                    <a
                                        href={`https://wa.me/${whatsappNumber}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-xl hover:bg-white/15 transition"
                                    >

                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">

                                            <img
                                                src="/social.png"
                                                className="w-7 h-7"
                                            />

                                        </div>

                                        <div>

                                            <p className="text-sm text-white/60">
                                                WhatsApp
                                            </p>

                                            <h3 className="font-semibold text-lg">
                                                Quick Support Available
                                            </h3>

                                        </div>

                                    </a>

                                </div>

                            </div>

                            {/* RIGHT SIDE FORM */}
                            <motion.form
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="p-6 sm:p-8 lg:p-14"                            >

                                <div className="max-w-2xl">

                                    <h2 className="text-4xl font-bold text-[#063b60]">

                                        Request a Quote

                                    </h2>

                                    <p className="mt-4 text-slate-500 leading-relaxed">

                                        Tell us your requirements and we’ll
                                        get back to you shortly.

                                    </p>

                                    {/* INPUTS */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">

                                        <div>

                                            <label className="label">
                                                First Name
                                            </label>

                                            <input
                                                className="premium-input"
                                                placeholder="John"
                                            />

                                        </div>

                                        <div>

                                            <label className="label">
                                                Last Name
                                            </label>

                                            <input
                                                className="premium-input"
                                                placeholder="Doe"
                                            />

                                        </div>

                                        <div>

                                            <label className="label">
                                                Phone Number
                                            </label>

                                            <input
                                                className="premium-input"
                                                placeholder="+91 98765 43210"
                                            />

                                        </div>

                                        <div>

                                            <label className="label">
                                                Email Address
                                            </label>

                                            <input
                                                className="premium-input"
                                                placeholder="example@gmail.com"
                                            />

                                        </div>

                                    </div>

                                    {/* SERVICES */}
                                    <div className="mt-8">

                                        <label className="label">
                                            Services Interested In
                                        </label>

                                        <div className="grid sm:grid-cols-2 gap-3 mt-4">

                                            {services.map((service, i) => (

                                                <label
                                                    key={i}
                                                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-sky-50 hover:border-sky-200 p-4 transition cursor-pointer"
                                                >

                                                    <input type="checkbox" />

                                                    <span className="text-slate-700 group-hover:text-sky-700">

                                                        {service}

                                                    </span>

                                                </label>

                                            ))}

                                        </div>

                                    </div>

                                    {/* MESSAGE */}
                                    <div className="mt-8">

                                        <label className="label">
                                            Project Details
                                        </label>

                                        <textarea
                                            className="premium-input h-36 resize-none"
                                            placeholder="Tell us about your project..."
                                        />

                                    </div>

                                    {/* BUTTON */}
                                    <button className="group mt-10 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-4 md:py-5 text-white font-semibold shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3">

                                        Submit Request

                                        <ArrowRight className="group-hover:translate-x-1 transition" />

                                    </button>

                                </div>

                            </motion.form>

                        </div>

                    </div>

                </div>

            </div>

            {/* STYLES */}
            <style>{`

        .premium-input{
          width:100%;
          padding:16px 18px;
          border-radius:18px;
          border:1px solid #e2e8f0;
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(10px);
          outline:none;
          transition:all .25s ease;
          font-size:15px;
          color:#0f172a;
        }

        .premium-input:focus{
          border-color:#38bdf8;
          box-shadow:0 0 0 5px rgba(56,189,248,0.12);
          background:white;
        }

        .label{
          display:block;
          margin-bottom:8px;
          font-size:14px;
          font-weight:600;
          color:#0f172a;
        }

      `}</style>

        </section>
    );
};

export default Contact;