import React, { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";
import { FaBars, FaX, FaXTwitter } from "react-icons/fa6";

/* ── Each service has its own preview image + tilt ── */
const services = [
  {
    id: "01",
    title: "BRANDING",
    subtitle: "Brain Storm",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&q=80",
    rotation: -9,
  },
  {
    id: "02",
    title: "WEB DESIGN",
    subtitle: "UI / UX",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80",
    rotation: 6,
  },
  {
    id: "03",
    title: "DEVELOPMENT",
    subtitle: "Coding",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
    rotation: -5,
  },
  {
    id: "04",
    title: "MARKETING",
    subtitle: "Strategy",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&q=80",
    rotation: 8,
  },
];

/* ── Cursor-following image ── */
const FloatingImage = ({ src, x, y, visible, rotation }) => (
  <motion.div
    className="pointer-events-none fixed z-[999] w-52 h-36 md:w-64 md:h-44 rounded-2xl overflow-hidden shadow-2xl"
    style={{ top: 0, left: 0, translateX: "-50%", translateY: "-50%" }}
    animate={{
      x,
      y,
      opacity: visible ? 1 : 0,
      scale: visible ? 1 : 0.78,
      rotate: visible ? rotation : rotation * 0.4,
    }}
    transition={{
      x: { type: "spring", stiffness: 160, damping: 20 },
      y: { type: "spring", stiffness: 160, damping: 20 },
      opacity: { duration: 0.22 },
      scale: { duration: 0.28, ease: "easeOut" },
      rotate: { duration: 0.32, ease: "easeOut" },
    }}
  >
    <img src={src} alt="" className="w-full h-full object-cover" />
  </motion.div>
);

/* ── Single service row ── */
const ServiceRow = ({ service, isHovered, onEnter, onLeave, onMove }) => (
  <div onMouseEnter={onEnter} onMouseLeave={onLeave} onMouseMove={onMove}>
    <div className="flex items-center justify-between py-7 md:py-10 group cursor-pointer select-none">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-orange-500 text-sm font-medium shrink-0">{service.id}</span>
        <div className="flex items-end gap-2 md:gap-4 flex-wrap">
          <motion.h3
            animate={{ color: isHovered ? "#f97316" : "#1f2937" }}
            transition={{ duration: 0.2 }}
            className="font-bold tracking-tight leading-none"
            style={{ fontSize: "clamp(1.8rem, 7vw, 5rem)" }}
          >
            {service.title}
          </motion.h3>
          <span className="text-gray-500 text-xs md:text-base mb-1">{service.subtitle}</span>
        </div>
      </div>
      <motion.div
        animate={
          isHovered
            ? { backgroundColor: "#000000", borderColor: "#000000", color: "#ffffff" }
            : { backgroundColor: "rgba(0,0,0,0)", borderColor: "#9ca3af", color: "#374151" }
        }
        transition={{ duration: 0.22 }}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center shrink-0 ml-2"
      >
        <FiPlus size={18} />
      </motion.div>
    </div>
    <div className="border-t border-gray-300" />
  </div>
);

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftX       = useTransform(scrollYProgress, [0, 0.6], ["0%", "-130%"]);
  const rightX      = useTransform(scrollYProgress, [0, 0.6], ["0%", "100vw"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0.7, 1],  [1, 0]);
  const bgScale     = useTransform(scrollYProgress, [0, 1],    [1, 1.1]);

  const videoUrl = "https://framerusercontent.com/assets/7YBK8amA6z135CX8nogC5hVIKA.mp4";

  const logo = "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Live/whitelogo-new.png?updatedAt=1721976201909"

  const teamMembers = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/men/75.jpg",
  ];

  /* ── Hover state ── */
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  }, []);


  // Menu Bar links 

  const menuBarLink =[
    {link:"#",name:"Home",},
    {link:"#",name:"About",},
    {link:"#",name:"Services",},
    {link:"#",name:"Projects",},
    {link:"#",name:"Blog",},
    {link:"#",name:"Pricing",},
    // contact page is placed separate
  ];

  // MenuBar state

  const [isVisible,setIsvisible] = useState(false)

  const handleMenuBar = ()=>{
    setIsvisible(prev=>!prev)
  }


  return (
    <div className="font-sans">

      {/* ── Floating images (rendered once, all layers) ── */}
      {services.map((s, i) => (
        <FloatingImage
          key={i}
          src={s.image}
          x={mouse.x}
          y={mouse.y}
          visible={hoveredIdx === i}
          rotation={s.rotation}
        />
      ))}

      {/* ── SIDEBAR (desktop) ── */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-[72px] bg-[#1a1a1a] z-50 flex-col items-center justify-between py-6">
        <button className="w-10 h-10 rounded-full border border-white/30 flex flex-col items-center justify-center gap-[5px]"
            onClick={()=>handleMenuBar()}>
          {!isVisible ?<span className="text-white"><FaBars/></span>:<span className="text-white"><FaX/></span>}
          {/* {!isVisible && <span className="w-5 h-[1.5px] bg-white" />} */}
        </button>
        <div className="text-white text-[10px] tracking-[0.3em] font-semibold" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          WEBZSPOT
        </div>
        <div className="-rotate-z-90">
          <img src={logo} alt="webzspot logo" />
        </div>
        {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <line x1="14" y1="2"  x2="14" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="2"  y1="14" x2="26" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="5"  y1="5"  x2="23" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <line x1="23" y1="5"  x2="5"  y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg> */}
        <div className="flex flex-col items-center gap-5">
          <FaFacebook  size={16} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
          <FaXTwitter  size={16} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
          <FaInstagram size={16} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
          <FaBehance   size={16} className="text-white/70 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
      {/* menubar */}
      {isVisible && <div className="bg-black/70 lg:ml-18 fixed top-0 z-50 w-full ">
        <div className="bg-white lg:w-1/4 h-screen flex flex-col justify-between">
          <div className="flex flex-col pt-15 gap-10">
            {menuBarLink.map((data,i)=>(
              <div className="py-2 px-10 border-b border-gray-300 font-light text-2xl">
                <a href="#">{data.name}</a>
              </div>
            ))}
          </div>
          <div>
            <div className="py-2 px-5 my-3 mx-5 border-t border-gray-300 font-light text-2xl">
                <a href="#">Contact</a>
              </div>
          </div>
      </div>
      </div>}

      {/* ── MOBILE TOP-BAR ── */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#1a1a1a] z-50 flex items-center justify-between px-5">
        <div className="flex gap-2">
          <img src={logo} alt="webzspot logo" className="w-10 h-5"/>
          <span className="text-white text-xs tracking-[0.3em] font-semibold">WEBZSPOT</span>
        </div>
        
        <button className="flex flex-col p-2 bg-white rounded-full" onClick={()=>handleMenuBar()}>
          {!isVisible ?<span className="text-black"><FaBars/></span>:<span className="text-red"><FaX/></span>}
        </button>
      </div>

      {/* Menu Bar  */}

      

      {/* ── HERO SECTION ── */}
      <section ref={ref} className="h-[200vh] relative md:ml-[72px] mt-14 md:mt-0" style={{ zIndex: 10 }}>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="sticky top-14 md:top-0 h-[calc(100vh-56px)] md:h-screen overflow-hidden"
        >
          {/* BG video */}
          <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={videoUrl} type="video/mp4" />
            </video>
          </motion.div>

          {/* Left white panel */}
          <motion.div
            style={{ x: leftX }}
            className="absolute top-0 h-full bg-white z-20 flex items-center left-0 w-full px-6 md:left-[-72px] md:w-[calc(54%+72px)] md:pl-[calc(72px+4rem)] md:pr-16"
          >
            <motion.div style={{ opacity: textOpacity }} className="w-full">
              <p className="text-lg md:text-2xl lg:text-4xl mb-3 md:mb-5 flex items-center gap-2 font-medium text-gray-800">
                <span className="text-orange-500 text-xl md:text-4xl font-bold">✳</span>
                We are digital design
              </p>
              <h1 className="leading-none text-gray-900 font-bold" style={{ fontSize: "clamp(3.5rem, 13vw, 12rem)", letterSpacing: "-2px" }}>
                CREATORS
              </h1>
              <p className="mt-4 md:mt-6 text-gray-400 max-w-sm text-base md:text-lg leading-relaxed">
                From Concept to Creation — Beautiful design has the power to captivate audiences
              </p>
              <div className="mt-7 md:mt-10 flex items-center gap-4">
                <div className="flex items-center">
                  {teamMembers.map((src, i) => (
                    <img key={i} src={src} alt="team"
                      className="w-9 h-9 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
                      style={{ marginLeft: i === 0 ? 0 : "-10px", zIndex: teamMembers.length - i }}
                    />
                  ))}
                </div>
                <button className="w-9 h-9 md:w-11 md:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <FiArrowRight size={16} />
                </button>
              </div>
              <p className="mt-2 md:mt-3 text-gray-500 text-sm">Meet Our Team</p>
            </motion.div>
          </motion.div>

          {/* Rotating badge */}
          <motion.div style={{ x: rightX }} className="hidden sm:block absolute bottom-32 md:bottom-40 right-8 z-30">
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <svg className="absolute inset-0 animate-spin" style={{ animationDuration: "10s" }} viewBox="0 0 112 112" fill="none">
                <defs><path id="circle" d="M 56,56 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"/></defs>
                <text fontSize="10" fill="#1a1a1a" letterSpacing="3">
                  <textPath href="#circle">SOLUTION • CREATE • IDEA • INSIGHT • </textPath>
                </text>
              </svg>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center z-10">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M9 15l-4-4M9 15l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Bottom right card */}
          <motion.div style={{ x: rightX }} className="absolute bottom-0 right-0 z-30 bg-white rounded-tl-2xl px-4 py-3 md:rounded-2xl md:px-6 md:py-4">
            <p className="text-gray-900 font-black leading-tight" style={{ fontSize: "clamp(1.4rem, 4vw, 3rem)" }}>
              CREATING WORK <br /> THAT INSPIRES
            </p>
          </motion.div>

          <div className="w-full h-10 bg-white absolute right-0 bottom-0" />
        </motion.div>
      </section>

      {/* ── SERVICES SECTION ── */}
      <section
        className="relative bg-[#f5f5f5] py-16 md:py-20 px-6 md:px-16 rounded-t-3xl md:ml-[72px]"
        style={{ zIndex: 20, boxShadow: "0 -24px 60px rgba(0,0,0,0.25)" }}
      >
        <div className="mb-10 md:mb-16">
          <p className="text-orange-500 mb-3 md:mb-4 tracking-wide text-sm">{"{ Our Services }"}</p>
          <h2 className="font-semibold text-gray-800 leading-tight" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
            EXPLORE WHAT WE<br />CAN DO FOR YOU
          </h2>
        </div>

        <div className="border-t border-gray-300" />

        {services.map((service, i) => (
          <ServiceRow
            key={i}
            service={service}
            isHovered={hoveredIdx === i}
            onEnter={() => setHoveredIdx(i)}
            onLeave={() => setHoveredIdx(null)}
            onMove={handleMouseMove}
          />
        ))}

        <div className="md:hidden mt-12 flex items-center justify-center gap-6 pb-4">
          <FaFacebook  size={18} className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
          <FaXTwitter  size={18} className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
          <FaInstagram size={18} className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
          <FaBehance   size={18} className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
        </div>
      </section>

         <section className="bg-white px-6 md:px-14 py-14 max-w-7xl mx-auto">
 
      {/* Top Label */}
      <p className="text-orange-500 font-semibold text-sm tracking-wide mb-1">
        &#123; Who We Are &#125;
      </p>
 
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-black text-gray-950 uppercase leading-none mb-12">
        We Are Leading Digital Marketing Agency
      </h2>
 
      {/* Two Column Grid */}
      <div className="flex flex-col md:flex-row gap-5 items-stretch">
 
        {/* ── LEFT: Large image with badge ── */}
        <div
          className="relative flex-[1.8] overflow-hidden"
          style={{
            borderRadius: "24px 24px 24px 24px",
            minHeight: "480px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80"
            alt="Office"
            className="w-full h-full object-cover"
            style={{ minHeight: "480px" }}
          />
 
          {/* White rounded cutout badge bottom-left */}
          <div
            className="absolute bottom-0 left-0 bg-white flex items-center justify-center shadow-md"
            style={{
              width: "148px",
              height: "148px",
              borderRadius: "0 24px 0 24px", /* only top-right corner rounded to match screenshot */
            }}
          >
            {/* Circular spinning text + icon */}
            <div className="w-24 h-24 relative flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path
                    id="circle-path"
                    d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
                  />
                </defs>
                <text fontSize="9" fill="#222" fontFamily="sans-serif" fontWeight="500" letterSpacing="3">
                  <textPath href="#circle-path">
                    INSIGHT • SOLUTION • CREATE • IDEA •{" "}
                  </textPath>
                </text>
              </svg>
              {/* Center orange circle with icon */}
              <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center z-10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
 
        {/* ── RIGHT column ── */}
        <div className="flex flex-col gap-4  flex-1">
 
          {/* Our Story block: title floats above the card, overlapping */}
          <div className="relative ">
 
            {/* "Our story" title — outside the card, top-left, slightly overlapping */}
          
 
            {/* Gray rounded card below */}
            <div
              className="bg-gray-100 relative p-6 rounded-4xl  text-gray-500 text-[15px] leading-relaxed"
              
              
            >
                <div
              className="relative  -left-6 -top-6 z-10  bg-white inline-block px-5 py-3"
              style={{
                borderRadius: "0 0 16px 0",
              }}
            >
              <h3 className="text-4xl font-bold text-gray-900">Our story</h3>
            </div>
             <div className="text-lg">
               At BrightEdge Studio, we specialize in crafting custom web
              solutions, including branding, web design, development, and
              marketing, tailored to meet your business needs.
             </div>
            </div>
          </div>
          {/* Second image */}
          <div
            className="overflow-hidden rounded-4xl flex-1"
            style={{
              
              minHeight: "220px",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?w=700&q=80"
              alt="Developer at work"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              style={{ minHeight: "220px" }}
            />
          </div>
 
        </div>
      </div>
    </section>
    </div>
  );
};

export default Hero;