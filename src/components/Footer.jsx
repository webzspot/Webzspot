import React from "react";
import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  
  const navLink = [
    {id:1,link:"#",name:"Home",},
    {id:2,link:"#aboutUs",name:"About Us",},
    {id:3,link:"#services",name:"Services",},
    {id:4,link:"#clients",name:"Clients",},
    {id:5,link:"#contact",name:"Contact Us",},
  ];

  return (
    <div className="bg-[#F2F2F2] p-4 mt-20 pt-10 text-center">
      <div className=" max-w-6xl mx-auto pt-8 pb-4">
        <div className="pr-4">
          <div className="max-w-2xs mx-auto">
            <img src="https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/Live/logo-new.png?updatedAt=1721975758303" alt="webzspot logo" />
          </div>
          {/* contact */}
          <div>
            <p className="font-light text-base lg:text-lg text-gray-600 pt-5">
              +91 91501 82615
            </p>
            <p className="font-medium text-lg lg:text-2xl text-gray-600">
              client@webzspot.com
            </p>
          </div>
          {/* navigation */}
          <div className="mt-5">
            {/* <h1 className="font-semibold text-gray-700 mb-2">Navigation</h1> */}
            <div className="flex flex-wrap gap-4 font-light text-base lg:text-lg justify-center items-center pr-2 mb-4">
              {navLink.map((data)=>(
                <div key={data.id}>
                    <a href={data.link}>{data.name}</a>
                </div>
              ))}
            </div>
              <div className="flex justify-center items-center gap-5">
                        <FaFacebook  size={25} className="text-[#07446F] cursor-pointer" />
                        <FaXTwitter  size={25} className="text-[#07446F] cursor-pointer" />
                        <FaInstagram size={25} className="text-[#07446F] cursor-pointer" />
                        <FaBehance   size={25} className="text-[#07446F] cursor-pointer" />
                      </div>
          </div>
        </div>
        
      </div>
      <div className="max-w-6xl mx-auto pt-4 pb-10 text-gray-700 font-light">
        <span>Terms & Conditions | Privacy Policy | Cancellation and Refund Policy | © 2026. All Rights Reserved by <span className="text-[#07446F] font-semibold">Webzspot</span>.</span>
      </div>
    </div>
  );
};

export default Footer;
