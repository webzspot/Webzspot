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
            className="relative overflow-hidden bg-gradient-to-b from-[#f4fbff] via-[#edf7fd] to-white py-24"
        >

            {/* BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">

                <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-cyan-300/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-180px] right-[-120px] w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[140px]" />
                <div className="absolute top-[40%] left-[45%] w-[300px] h-[300px] bg-sky-200/30 rounded-full blur-[100px]" />

            </div>

            <div className="relative z-10 container mx-auto px-6 lg:px-12 lg:pl-28">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto"
                >

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 border border-sky-200 text-sky-700 text-sm font-medium">
                        <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                        Empower Your Digital Journey
                    </div>

                    <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-[#07446f]">
                        Transform Your Ideas
                        <span className="block text-sky-500 mt-1">
                            Into Digital Realities
                        </span>
                    </h1>

                    <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto">
                        Reach out to us for personalized assistance, expert solutions,
                        and discover how WebzSpot can elevate your business online.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap justify-center gap-4 mt-10">

                        <a
                            href={`tel:${phoneNumber}`}
                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border shadow-md hover:-translate-y-1 transition"
                        >
                            <img src="/phone.png" className="w-9 h-9" />
                            Call Us
                        </a>

                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-emerald-500 text-white shadow-lg hover:-translate-y-1 transition"
                        >
                            <img src="/social.png" className="w-9 h-9" />
                            WhatsApp
                        </a>

                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-sky-500 text-white shadow-lg hover:-translate-y-1 transition"
                        >
                            <img src="/google.png" className="w-9 h-9" />
                            Email Us
                        </a>

                    </div>

                </motion.div>

                {/* GRID */}
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 mt-20">

                    {/* LEFT */}
                    <div className="space-y-6">

                        {/* WHY BOX */}
                        <div className="rounded-3xl bg-gradient-to-br from-[#0b5c8f] to-[#1282be] p-[1px] shadow-xl">

                            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 text-white">

                                <div className="flex items-center gap-4">
                                    <img src="/google.png" className="w-21 h-21" />
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            Why Choose WebzSpot?
                                        </h2>
                                        <p className="text-white/70">
                                            Trusted Digital Partner
                                        </p>
                                    </div>

                                </div>

                                <p className="mt-6 text-white/80">
                                    WebzSpot delivers modern websites, branding, SEO, and digital
                                    marketing solutions that help businesses grow online efficiently.
                                </p>

                                <div className="mt-8 space-y-4">

                                    {[
                                        "Custom Web Design & Development",
                                        "SEO & Digital Marketing Solutions",
                                        "Modern UI/UX Experiences",
                                        "Dedicated Support & Maintenance",
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-cyan-300" />
                                            <span>{item}</span>
                                        </div>
                                    ))}

                                </div>

                            </div>

                        </div>

                        {/* CONTACT INFO */}
                        <div className="grid sm:grid-cols-2 gap-5">

                            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow">

                                <img src="/phone.png" className="w-11 h-11 mb-4" />
                                <p className="text-sm text-slate-500">Phone</p>
                                <h3 className="font-semibold">{phoneNumber}</h3>

                            </div>

                            <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow">

                                <img src="/google.png" className="w-11 h-11 mb-4" />
                                <p className="text-sm text-slate-500">Email</p>
                                <h3 className="font-semibold">{email}</h3>

                            </div>

                        </div>

                    </div>

                    {/* FORM */}
                    <motion.form className="bg-white/80 backdrop-blur-3xl p-10 rounded-3xl shadow-xl space-y-6">

                        <h2 className="text-3xl font-bold text-[#07446f]">
                            Request a Quote
                        </h2>

                        <p className="text-slate-500">
                            Tell us your requirements and we’ll get back shortly.
                        </p>

                        {/* INPUTS */}
                        <div className="grid md:grid-cols-2 gap-5">

                            <div>
                                <label className="label">First Name</label>
                                <input className="input" placeholder="Enter first name" />
                            </div>

                            <div>
                                <label className="label">Last Name</label>
                                <input className="input" placeholder="Enter last name" />
                            </div>

                            <div>
                                <label className="label">Phone Number</label>
                                <input className="input" placeholder="+91 98765 43210" />
                            </div>

                            <div>
                                <label className="label">Email Address</label>
                                <input className="input" placeholder="example@gmail.com" />
                            </div>

                        </div>

                        {/* SERVICES */}
                        <div>
                            <label className="label">Services Interested In</label>

                            <div className="grid sm:grid-cols-2 gap-3 mt-3">

                                {services.map((s, i) => (
                                    <label key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border">
                                        <input type="checkbox" />
                                        {s}
                                    </label>
                                ))}

                            </div>
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <label className="label">Project Details</label>
                            <textarea className="input h-32" placeholder="Describe your project..." />
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-blue-600 text-white py-4 rounded-xl flex justify-center items-center gap-2 hover:-translate-y-1 transition">

                            Submit Request
                            <ArrowRight />

                        </button>

                    </motion.form>

                </div>

            </div>

            {/* STYLE */}
            <style>{`
        .input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
          outline: none;
          font-size: 14px;
          background: rgba(255,255,255,0.95);
          color: #0f172a; 
          transition: 0.2s;
        }

        .input:focus {
          border-color: #38bdf8;
          box-shadow: 0 0 0 4px rgba(56,189,248,0.15);
        }

        .label {
          font-size: 13px;
          font-weight: 600;
          color: black;
          margin-bottom: 6px;
          display: block;
        }
      `}</style>

        </section>
    );
};

export default Contact;