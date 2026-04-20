import React from 'react'
import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import AboutSection from './components/AboutSection'
import Services from './components/Services'
import OurTeam from './components/OurTeam'

const App = () => {
  return (
    <div>
      <Hero/>
      <AboutSection />
      <FeaturedProjects />
      <Services/>
      <OurTeam/>
    </div>
  )
}

export default App