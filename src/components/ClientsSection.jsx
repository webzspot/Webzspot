// export default function ClientsSection() {
//   const stats = [
//     {
//       title: "20+",
//       subtitle: "Projects Delivered",
//       icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005434.svg",
//     },
//     {
//       title: "98%",
//       subtitle: "Client Satisfaction",
//       icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005435.svg",
//     },
//     {
//       title: "90%",
//       subtitle: "Retention Rate",
//       icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005436.svg",
//     },
//     {
//       title: "2+",
//       subtitle: "Years of Experience",
//       icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%2067.svg",
//     },
//   ];

//   return (
//     <section
//       id="clients"
//       className="relative overflow-hidden bg-gradient-to-b from-white via-[#f4f9fd] to-white py-16"
//     >
//       {/* ===== BACKGROUND BLUR EFFECTS ===== */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300/20 blur-3xl rounded-full"></div>

//       {/* ===== HEADER ===== */}
//       <div className="container mx-auto relative z-10 px-4">
//         <div className="flex flex-col justify-center items-center text-center mb-14">
//           <div className="flex items-center gap-2 pb-4">
//             <div className="w-10 h-[2px] bg-cyan-500"></div>

//             <h1 className="text-[#07446f] text-xl lg:text-5xl  tracking-wide">
//               Our Clients
//             </h1>

//             <div className="w-10 h-[2px] bg-cyan-500"></div>
//           </div>

//           <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-3xl">
//             Proudly serving a diverse range of clients, from startups to
//             established enterprises, who rely on us for innovative solutions
//             and exceptional service.
//           </p>
//         </div>
//       </div>

//       {/* ===== STATS SECTION ===== */}
//       <div className="relative z-10 container mx-auto px-4 lg:pl-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 group
//                 relative
//                 overflow-hidden
//                 rounded-2xl
//                 bg-gradient-to-br
//                 from-[#2b6b91]
//                 via-[#3b82a8]
//                 to-[#5aa7cf]
//                 p-[1px]
//                 shadow-lg
//                 shadow-blue-200/40
//                 hover:shadow-cyan-300/40
//                 transition-all
//                 duration-500
//                 hover:-translate-y-2
//               "
//             >
//               {/* INNER CARD */}
//               <div
//                 className="
//                   flex items-center gap-4
//                   rounded-2xl
//                   bg-white/15
//                   backdrop-blur-lg
//                   px-6 py-7
//                   h-full
//                   border border-white/20
//                 "
//               >
//                 {/* ICON */}
//                 <div
//                   className="
//                     flex items-center justify-center
//                     w-16 h-16
//                     rounded-xl
//                     bg-white/15
//                     border border-white/20
//                     group-hover:scale-110
//                     transition
//                     duration-300
//                   "
//                 >
//                   <img
//                     src={item.icon}
//                     alt={item.subtitle}
//                     className="w-9 h-9 object-contain"
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div>
//                   <h1 className="text-2xl lg:text-3xl font-bold text-white">
//                     {item.title}
//                   </h1>

//                   <p className="text-sm lg:text-base text-white/90 mt-1">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               </div>

//               {/* HOVER LIGHT EFFECT */}
//               <div
//                 className="
//                   absolute inset-0
//                   opacity-0 group-hover:opacity-100
//                   transition duration-500
//                   bg-gradient-to-r
//                   from-transparent
//                   via-white/10
//                   to-transparent
//                   -translate-x-full
//                   group-hover:translate-x-full
//                 "
//               ></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

export default function ClientsSection() {

  const stats = [
    {
      title: "20+",
      subtitle: "Projects Delivered",
      icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005434.svg",
      color: "from-emerald-400/20 to-emerald-500/10",
      glow: "shadow-emerald-200/40",
    },
    {
      title: "98%",
      subtitle: "Client Satisfaction",
      icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005435.svg",
      color: "from-violet-400/20 to-violet-500/10",
      glow: "shadow-violet-200/40",
    },
    {
      title: "90%",
      subtitle: "Retention Rate",
      icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005436.svg",
      color: "from-rose-400/20 to-rose-500/10",
      glow: "shadow-rose-200/40",
    },
    {
      title: "2+",
      subtitle: "Years of Experience",
      icon: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%2067.svg",
      color: "from-sky-400/20 to-sky-500/10",
      glow: "shadow-sky-200/40",
    },
  ];

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5fbff] to-white py-16"
    >

      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sky-200/30 blur-3xl rounded-full"></div>

      {/* ===== HEADER ===== */}
      <div className="container mx-auto relative z-10 px-4">

        <div className="flex flex-col justify-center items-center text-center mb-14">

          <div className="flex items-center gap-3 pb-4">

            <div className="w-10 h-[2px] bg-cyan-400"></div>

            <h1 className="text-[#07446f] text-xl lg:text-4xl font-semibold tracking-wide">
              Our Clients
            </h1>

            <div className="w-10 h-[2px] bg-cyan-400"></div>

          </div>

          <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-3xl">
            Proudly serving a diverse range of clients, from startups to
            established enterprises, who rely on us for innovative solutions
            and exceptional service.
          </p>

        </div>
      </div>

      {/* ===== STATS SECTION ===== */}
      <div className="relative z-10 container mx-auto px-4 lg:pl-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/40
                bg-gradient-to-br
                ${item.color}
                backdrop-blur-2xl
                shadow-xl
                ${item.glow}
                hover:-translate-y-2
                transition-all
                duration-500
              `}
            >

              {/* GLASS OVERLAY */}
              <div className="absolute inset-0 bg-white/35 backdrop-blur-2xl"></div>

              {/* TOP SHINE */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/70"></div>

              {/* CONTENT */}
              <div className="relative z-10 flex items-center gap-5 px-6 py-7">

                {/* ICON */}
                <div
                  className="
                    flex items-center justify-center
                    group-hover:scale-110
                    transition
                    duration-300
                  "
                >
                  <img
                    src={item.icon}
                    alt={item.subtitle}
                    className="w-14 h-14 object-contain"
                  />
                </div>

                {/* TEXT */}
                <div>

                  <h1 className="text-3xl font-bold text-[#07446f]">
                    {item.title}
                  </h1>

                  <p className="text-slate-600 text-sm lg:text-base mt-1">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              {/* HOVER LIGHT */}
              <div
                className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition duration-700
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  -translate-x-full
                  group-hover:translate-x-full
                "
              ></div>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
}