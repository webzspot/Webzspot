// import React from "react";

// const Contact = () => {
//     return (
//         <section className="contact-section">
//             {/* Background */}
//             <div className="contact-bg">
//                 <img
//                     src="https://framerusercontent.com/images/KQ1knR1dm5HBcHPKy9oO93moZI.jpg"
//                     alt="background"
//                 />
//                 <div className="overlay"></div>
//             </div>

//             <div className="contact-container">
//                 {/* Header */}
//                 <div className="contact-header">
//                     <p className="tag">{`{ Get in touch }`}</p>
//                     <h2>Let’s Start Your Project Today</h2>
//                 </div>

//                 <div className="contact-content">
//                     {/* Left Side */}
//                     <div className="contact-info">
//                         <img
//                             src="https://framerusercontent.com/images/sO8Qc7EI5ijTzk0bY8jBsX1qYew.jpg"
//                             alt="Michael"
//                             className="profile-img"
//                         />
//                         <h3>Michael Bridges</h3>
//                         <p className="role">CEO, BrightEdge</p>
//                         <p className="desc">
//                             At BrightEdge, we believe in building meaningful digital
//                             experiences. If you ever have questions or need guidance, I’m
//                             always here to support you. Your success is our mission — let’s
//                             create something incredible together.
//                         </p>
//                     </div>

//                     {/* Form */}
//                     <form className="contact-form">
//                         <div className="row">
//                             <div className="input-group">
//                                 <label>Name</label>
//                                 <input type="text" placeholder="John Smith" required />
//                             </div>

//                             <div className="input-group">
//                                 <label>Email</label>
//                                 <input
//                                     type="email"
//                                     placeholder="johnsmith@gmail.com"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="input-group">
//                             <label>Service Needed?</label>
//                             <select required>
//                                 <option>Branding</option>
//                                 <option>Web Design</option>
//                                 <option>Marketing</option>
//                                 <option>Development</option>
//                             </select>
//                         </div>

//                         <div className="input-group">
//                             <label>What can I help you with?</label>
//                             <textarea
//                                 placeholder="Hello, I'd like to enquire about..."
//                                 required
//                             ></textarea>
//                         </div>

//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import React from "react";
import { motion } from "framer-motion";

const Contact = () => {

    const phoneNumber = "+91 91501 82615";
    const whatsappNumber = "919150182615";
    const email = "client@webzspot.com";

    return (
        <section className="relative w-full min-h-screen overflow-hidden text-slate-900">

            {/* 🌈 Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200" />

            {/* 🌊 Glow Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[600px] h-[600px] bg-sky-400/40 blur-[140px] rounded-full top-[-180px] left-[-150px]" />
                <div className="absolute w-[500px] h-[500px] bg-blue-500/40 blur-[140px] rounded-full bottom-[-180px] right-[-150px]" />
                <div className="absolute w-[400px] h-[400px] bg-indigo-400/30 blur-[120px] rounded-full top-[40%] left-[45%]" />
            </div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6 py-20">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <div className="contact-header">
                        <p className="tag">{`{ Get in touch }`}</p>
                    </div>

                    <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                        We’d love to hear from you ❤️
                    </h1>

                    <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Reach out to us for personalized assistance, expert solutions, and discover how we can help elevate your business to the next level.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap justify-center gap-3 mt-8">

                        <a href={`tel:${phoneNumber}`}
                            className="px-5 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-sm hover:scale-105 transition"
                        >
                            📞 Call
                        </a>

                        <a href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-2 rounded-full bg-emerald-500 text-white shadow-md hover:scale-105 transition"
                        >
                            💬 WhatsApp
                        </a>

                        <a href={`mailto:${email}`}
                            className="px-5 py-2 rounded-full bg-sky-500 text-white shadow-md hover:scale-105 transition"
                        >
                            ✉️ Email
                        </a>

                    </div>
                </motion.div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >

                        <div className="p-6 rounded-2xl bg-white/30 backdrop-blur-2xl border border-white/60 shadow-lg">
                            <h2 className="text-xl font-semibold">
                                Why choose us?
                            </h2>

                            <p className="mt-3 text-slate-600 leading-relaxed">
                                We deliver high-performance digital solutions including Web Development,
                                Digital Marketing, SEO, and UX Design tailored for scalable growth.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-2xl border border-white/50 text-sm text-slate-700">
                            ⚡ Fast delivery systems <br />
                            🎯 Conversion-focused UI/UX <br />
                            📈 SEO optimized architecture <br />
                            🧠 Product strategy execution
                        </div>

                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.form
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className={`
                            space-y-5
                            p-6
                            rounded-2xl
                            bg-white/40
                            backdrop-blur-3xl
                            border border-white/70
                            shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                        `}
                    >

                        <div className="grid grid-cols-2 gap-4">
                            <input className="input" placeholder="First Name" />
                            <input className="input" placeholder="Last Name" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input className="input" placeholder="Mobile Number" />
                            <input className="input" placeholder="Email" />
                        </div>

                        <textarea rows="3" className="input" placeholder="Address" />

                        <div>
                            <p className="text-sm text-slate-600 mb-2">
                                Services
                            </p>

                            <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                                <label><input type="checkbox" className="mr-2" />Web Development</label>
                                <label><input type="checkbox" className="mr-2" />Digital Marketing</label>
                                <label><input type="checkbox" className="mr-2" />SEO</label>
                                <label><input type="checkbox" className="mr-2" />UX Design</label>
                            </div>
                        </div>

                        <textarea rows="5" className="input" placeholder="Describe your requirement..." />

                        <button className="w-full py-3 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition hover:scale-[1.02]">
                            Submit Request →
                        </button>

                    </motion.form>

                </div>
            </div>

            {/* INPUT STYLE */}
            <style>{`
                .input {
                    width: 100%;
                    padding: 12px 14px;
                    border-radius: 12px;
                    background: rgba(255,255,255,0.6);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.8);
                    outline: none;
                    color: #0f172a;
                    font-size: 14px;
                    transition: all 0.2s ease;
                }

                .input::placeholder {
                    color: rgba(71,85,105,0.5);
                }

                .input:focus {
                    border-color: rgba(56,189,248,0.7);
                    box-shadow: 0 0 0 3px rgba(56,189,248,0.2);
                }
            `}</style>

        </section>
    );
};

export default Contact;