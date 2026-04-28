import React from "react";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutSection from "./components/AboutSection";
import HowWeWork from "./components/HowWeWork";
import OurTeam from "./components/OurTeam";
import OurPricingPlans from "./components/OurPricingPlans";
import Faq from "./components/Faq"
import OurInsights from "./components/OurInsights";
import Footer from "./components/Footer";
import Review from "./components/Review";
import Contact from "./components/Contact";
import ClientsSection from "./components/ClientsSection";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedProjects />
      <TechStack/>
      <HowWeWork />
      {/* <OurTeam /> */}
      {/* <OurPricingPlans /> */}
      <ClientsSection />
      <Review />
      <Faq />
      {/* <OurInsights /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;