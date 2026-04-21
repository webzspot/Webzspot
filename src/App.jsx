import React from "react";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import OurPricingPlans from "./components/OurPricingPlans";
import Faq from "./components/Faq"
import OurInsights from "./components/OurInsights";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <Services />
      <OurTeam />
      <OurPricingPlans />
      <Faq />
      <OurInsights/>
      <Footer/>
    </>
  );
};

export default App;