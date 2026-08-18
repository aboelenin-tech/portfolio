import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>
      <hr className="border-light opacity-25 my-0" style={{ height: "1px" }} />

      <section id="about">
        <About />
      </section>
      <hr className="border-light opacity-25 my-0" style={{ height: "1px" }} />

      <section id="projects">
        <Projects />
      </section>
      <hr className="border-light opacity-25 my-0" style={{ height: "1px" }} />

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default App