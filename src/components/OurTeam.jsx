import React from "react";
import OurTeamOne from "../assets/Images/OurTeam_1.avif";
import OurTeamTwo from "../assets/Images/OurTeam_2.avif";

const OurTeam = () => {
  const teamList = [
    {
      image: OurTeamOne,
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: OurTeamTwo,
      name: "Emily Carter",
      designation: "Creative Director",
    },
    {
      image: OurTeamOne,
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: OurTeamTwo,
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: OurTeamOne,
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
    {
      image: OurTeamTwo,
      name: "Michael Rivera",
      designation: "Brand Strategist",
    },
  ];
  return (
    <div className="container max-w-6xl mx-auto p-4 mt-24 relative">
      <div className="mb-10">
        <p className="text-orange-400">[ How We team ]</p>
        <h2 className="text-2xl lg:text-5xl font-semibold">
          CREATIVE PROFESSIONALS AT YOUR SERVICE
        </h2>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 my-4">
        {teamList.map((data, i) => (
          <div className="relative" key={i}>
            <img
              src={data.image}
              alt="team member photo"
              className="rounded-3xl object-cover"
            />
            <div className="absolute bottom-0 flex items-end">
              <div>
              <svg
                className="w-12 h-12 -ml-2"
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
              <svg
                className="w-12 h-12 -ml-2"
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
