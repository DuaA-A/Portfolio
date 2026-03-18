import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
// import Experience from './components/Experience'
import Education from './components/Education'
// import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <Hero />
      <About />
      <Education />
      {/* <Achievements /> */}
      <Skills />
      <Projects />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
