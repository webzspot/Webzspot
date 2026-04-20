import React, { useState } from "react";

export default function OurPricingPlans() {
    const [isAnnual, setIsAnnual] = useState(false);

    const pricing = {
        basic: isAnnual ? 4999 : 499,
        growth: isAnnual ? 7999 : 799,
        pro: isAnnual ? 15999 : 1599,
    };

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="mb-14 flex flex-col items-start inline-block w-fit mx-auto">

                    <h2 className="text-lg md:text-xl font-light text-red-500">
                        {"{Our Pricing Plans}"}
                    </h2>

                    <p className="text-black mt-5 font-semibold text-2xl md:text-5xl leading-tight">
                        Choose the Perfect Plan for Your Business
                    </p>

                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-10 items-center gap-4">

                    {/* Monthly */}
                    <span className={!isAnnual ? "text-[#0B0B0F] font-semibold" : "text-[#6B7280]"}>
                        Monthly
                    </span>

                    {/* Toggle */}
                    <div
                        onClick={() => setIsAnnual(!isAnnual)}
                        className={`relative w-22 h-9 rounded-full cursor-pointer transition-all duration-300 flex items-center px-1 ${isAnnual ? "bg-[#F55733]" : "bg-gray-200"
                            }`}
                    >
                        {/* Ball */}
                        <div
                            className={`w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${isAnnual ? "translate-x-14" : "translate-x-0"
                                }`}
                        />
                    </div>

                    {/* Annual */}
                    <span className={isAnnual ? "text-[#0B0B0F] font-semibold" : "text-[#6B7280]"}>
                        Annual
                    </span>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/*Basic*/}
                    <div className="border border-[#E5E7EB] rounded-2xl p-8">

                        <h3 className="text-xl font-semibold text-[#0B0B0F]">Basic</h3>

                        <div className="mt-6">
                            <span className="text-4xl font-bold text-[#0B0B0F]">
                                ${pricing.basic}
                            </span>
                            <span className="text-[#6B7280]">
                                /{isAnnual ? "year" : "month"}
                            </span>
                        </div>

                        <p className="text-sm mt-1 text-[#6B7280]">
                            Freelancers & small businesses
                        </p>

                        <button className="mt-8 w-full bg-[#0B0B0F] hover:bg-[#FF6A3D] text-white py-3 rounded-xl transition-all duration-300 relative group flex items-center justify-center">

                            Get Started

                            {/* Arrow */}
                            <span
                                className="absolute right-4 transition-all duration-300 transform rotate-45 group-hover:rotate-0 group-hover:translate-x-1"
                            >
                                →
                            </span>

                        </button>

                        {/* Feature List */}
                        <ul className="mt-6 space-y-4 text-sm">

                            {/* INCLUDED FEATURES (GREEN CHECK) */}
                            {[
                                "Brand design and development",
                                "Premium website design and development",
                                "20 hours of website maintenance per month",
                                "8 blog posts per month",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#0B0B0F]">
                                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}

                            {/* NOT INCLUDED (NO ORANGE CIRCLE, ONLY X) */}
                            {[
                                "4 email marketing campaigns per month",
                                "Social media account management (20 posts per month)",
                                "Search Engine Optimization (SEO) services",
                                "Monthly marketing strategy consultation",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#6B7280]">
                                    <span className="w-5 h-5 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 text-xs font-bold">
                                        ✕
                                    </span>
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Growth */}
                    <div className="rounded-2xl p-8 bg-white text-black scale-105 border border-orange-500">

                        <h3 className="text-xl font-semibold">Growth</h3>

                        <div className="mt-6">
                            <span className="text-4xl font-bold text-orange-400">
                                ${pricing.growth}
                            </span>
                            <span className="text-[#6B7280]">
                                /{isAnnual ? "year" : "month"}
                            </span>
                        </div>

                        <p className="text-sm mt-1 text-[#6B7280]">
                            Agencies & startups
                        </p>

                        <button className="mt-8 w-full bg-[#FF6A3D] hover:bg-green-500 text-white py-3 rounded-xl font-medium transition-all duration-300 relative group flex items-center justify-center">

                            Get Started

                            {/* Arrow */}
                            <span
                                className="absolute right-4 transition-all duration-300 transform rotate-45 group-hover:rotate-0 group-hover:translate-x-1"
                            >
                                →
                            </span>

                        </button>

                        {/* Feature List */}
                        <ul className="mt-6 space-y-4 text-sm">

                            {/* GREEN (Included - first 6) */}
                            {[
                                "Brand design and development",
                                "Premium website design and development",
                                "20 hours of website maintenance per month",
                                "8 blog posts per month",
                                "4 email marketing campaigns per month",
                                "Social media account management (20 posts per month)",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#0B0B0F]">
                                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}

                            {/* ORANGE (Not included - last 2) */}
                            {[
                                "Search Engine Optimization (SEO) services",
                                "Monthly marketing strategy consultation",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#6B7280]">
                                    <span className="w-5 h-5 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 text-xs font-bold">
                                        ✕
                                    </span>
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Pro */}
                    <div className="border border-[#E5E7EB] rounded-2xl p-8">

                        <h3 className="text-xl font-semibold text-[#0B0B0F]">
                            Professional
                        </h3>

                        <div className="mt-6">
                            <span className="text-4xl font-bold text-orange-500">
                                ${pricing.pro}
                            </span>
                            <span className="text-[#6B7280]">
                                /{isAnnual ? "year" : "month"}
                            </span>
                        </div>

                        <p className="text-sm mt-1 text-[#6B7280]">
                            Enterprises & corporations
                        </p>

                        <button className="mt-8 w-full bg-black hover:bg-[#FF6A3D] text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center relative group">

                            <span>Get Started</span>

                            {/* Arrow */}
                            <span
                                className="absolute right-4 transition-all duration-300 transform rotate-45 group-hover:rotate-0 group-hover:translate-x-1"
                            >
                                →
                            </span>

                        </button>

                        {/* Feature List */}
                        <ul className="mt-6 space-y-4 text-sm">

                            {[
                                "Brand design and development",
                                "Premium website design and development",
                                "20 hours of website maintenance per month",
                                "8 blog posts per month",
                                "4 email marketing campaigns per month",
                                "Social media account management (20 posts per month)",
                                "Search Engine Optimization (SEO) services",
                                "Monthly marketing strategy consultation",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#0B0B0F]">
                                    <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}

                        </ul>

                    </div>

                </div>
            </div>
        </section >
    );
}