import React from "react";


const OurTeam = () => {
  const teamList = [
    {
      image: "https://framerusercontent.com/images/fwsSWdjTdPsaaHh7MaSMPNfJOmQ.jpeg?width=861&height=1200",
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: "https://framerusercontent.com/images/u3Dau8sEcOFuqJd7YNy6wZdo.jpeg?width=840&height=1200",
      name: "Emily Carter",
      designation: "Creative Director",
    },
    {
      image: "https://framerusercontent.com/images/EKuM1vPly5ELH1gDYADFxcz3M.jpg?width=655&height=729",
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: "https://framerusercontent.com/images/EKuM1vPly5ELH1gDYADFxcz3M.jpg?width=655&height=729",
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: "https://framerusercontent.com/images/fwsSWdjTdPsaaHh7MaSMPNfJOmQ.jpeg?width=861&height=1200",
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: "https://framerusercontent.com/images/EKuM1vPly5ELH1gDYADFxcz3M.jpg?width=655&height=729",
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
  ];
  return (
    <div className="container max-w-7xl mx-auto p-4 mt-24 relative">
      <div className="mb-10">
        <p className="text-orange-400">[ How We team ]</p>
        <h2 className="text-2xl lg:text-5xl font-semibold">
          CREATIVE PROFESSIONALS AT YOUR SERVICE
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 my-4">
        {teamList.map((data, i) => (
          <div className="relative h-96 overflow-hidden" key={i}>
            {/* image */}
            <img
              src={data.image}
              alt="team member photo"
              className="rounded-4xl object-cover object-center w-full h-full"
            />
            {/* curved corner left*/}
            <div className="absolute bottom-0 flex items-end">
              <div>
                <svg
                  className="w-10 h-10 -ml-2"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
                </svg>
                <div className="flex flex-col bottom-0 py-1 pr-4 bg-white rounded-tr-3xl">
                  <span className="font-medium text-2xl text-slate-800">
                    {data.name}
                  </span>
                  <span className="font-light text-lg text-slate-800">
                    {data.designation}
                  </span>
                </div>
              </div>
              {/* curved corner bottom*/}
              <svg
                className="w-10 h-10 -ml-2"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path d="M0,0 C40,0 0,60 100,100 L0,100 Z" fill="white" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
