export default function ClientsSection() {
  return (
    <section>

      {/* ===== HEADER ===== */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center p-5 text-center">

          <div className="text-[#07446f] text-lg lg:text-2xl font-semibold flex items-center gap-2 pb-5">
            <h1>Our Clients</h1>
          </div>

          <p className="text-md lg:text-lg w-full lg:w-[60%]">
            Proudly serving a diverse range of clients, from startups to established enterprises,
            who rely on us for innovative solutions and exceptional service.
          </p>

        </div>
      </div>

      {/* ===== STATS BAR ===== */}
      <div className="bg-[#07446f]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">

          {/* ITEM */}
          <div className="flex items-center gap-4 text-white justify-start lg:justify-center">
            <img
              src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005434.svg"
              alt="Projects Delivered"
              className="w-10"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">20+</h1>
              <p className="text-sm lg:text-md">Projects Delivered</p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-center gap-4 text-white justify-start lg:justify-center">
            <img
              src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005435.svg"
              alt="Client Satisfaction"
              className="w-10"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">98%</h1>
              <p className="text-sm lg:text-md">Client Satisfaction</p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-center gap-4 text-white justify-start lg:justify-center">
            <img
              src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%201000005436.svg"
              alt="Retention Rate"
              className="w-10"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">90%</h1>
              <p className="text-sm lg:text-md">Retention Rate</p>
            </div>
          </div>

          {/* ITEM */}
          <div className="flex items-center gap-4 text-white justify-start lg:justify-center">
            <img
              src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Frame%2067.svg"
              alt="Experience"
              className="w-10"
            />
            <div>
              <h1 className="text-lg lg:text-xl font-semibold">2+</h1>
              <p className="text-sm lg:text-md">Years of Experience</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}