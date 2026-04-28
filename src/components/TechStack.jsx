import React from "react";

const TechStack = () => {
  const techStackList = [
    {
      name: "html",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/html5.svg?updatedAt=1720182941810",
    },
    {
      name: "css",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/css3.svg?updatedAt=1720182937373",
    },
    {
      name: "react",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/preact.svg?updatedAt=1720182950043",
    },
    {
      name: "angular",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/angular.svg?updatedAt=1720182937417",
    },
    {
      name: "js",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/js.svg?updatedAt=1720182945499",
    },
    {
      name: "python",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/python.svg?updatedAt=1720182950788",
    },
    {
      name: "nodejs",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/nodejs.svg?updatedAt=1720182949399",
    },
    {
      name: "java",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/java.svg?updatedAt=1720182945824",
    },
    {
      name: "django",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/django.svg?updatedAt=1720182938003",
    },
    {
      name: "prstsql",
      link: "https://ik.imagekit.io/psltlu4ds/Webzspot/Webzspot/Logo%20Assets/postgresql.svg?updatedAt=1720182949237",
    },
  ];
  return (
    <div className="container max-w-7xl mx-auto p-4 mb-20">
        <p className="text-[#07446F]">{"{ Our Tech Stack }"}</p>
        <p className="text-lg pb-10">
          At WebzSpot, we use cutting-edge tools and technologies to craft
          custom solutions. Our frontend,backend, and design expertise guarantee
          a strong and impactful digital presence.
        </p>
        <div className="mx-auto flex flex-wrap justify-center gap-10 max-w-xl">
          {techStackList.map((data, i) => (
            <img key={data.name}
              src={data.link}
              alt={data.name}
              className="w-8 md:w-12 lg:w-14"
            />
          ))}
        </div>
    </div>
  );
};

export default TechStack;
