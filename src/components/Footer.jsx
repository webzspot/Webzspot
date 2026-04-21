import React from "react";

const Footer = () => {
  const navLink = [
    {
        link:"#",
        name:"Home",
    },{
        link:"#",
        name:"About",
    },{
        link:"#",
        name:"Services",
    },{
        link:"#",
        name:"Projects",
    },{
        link:"#",
        name:"Blog",
    },{
        link:"#",
        name:"Pricing",
    },{
        link:"#",
        name:"Contact",
    },
  ];
  return (
    <div className="bg-[#F2F2F2] p-4 mt-20 pt-10">
      <div className="grid lg:grid-cols-2 max-w-6xl mx-auto pt-8 pb-4 border-b-2">
        <div className="text-center lg:text-left pr-4">
          <div className="text-left">
            <img src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Live/logo-new.png?updatedAt=1721975758303" alt="webzspot logo" />
          </div>
          {/* contact */}
          <div>
            <p className="font-light text-base lg:text-lg text-gray-600">
              +91 91501 82615
            </p>
            <p className="font-medium text-lg lg:text-2xl text-gray-600">
              client@webzspot.com
            </p>
          </div>
          {/* navigation */}
          <div className="mt-5">
            <h1 className="font-semibold text-gray-700 mb-2">Navigation</h1>
            <div className="flex flex-wrap gap-4 font-light text-base lg:text-lg justify-evenly lg:justify-between items-center pr-2 mb-4">
              {navLink.map((data)=>(
                <div key={data.name}>
                    <a href={data.link}>{data.name}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pl-4">
          <div className="mb-4">
            <p className="font-semibold text-lg">Address</p>
            <p className="font-light text-lg">
              1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
            </p>
          </div>
          <div className="py-4 rounded-4xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=11.0168,76.9558&z=15&output=embed"
              className="w-full h-80 rounded-lg border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto pt-4 pb-20">
        <div className="text-lg font-light">
            <p>© Copyright 2025. All Rights Reserved by Webzspot</p>
        </div>
        <div className="text-lg font-light">
            <p>Created by Webzspot</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
