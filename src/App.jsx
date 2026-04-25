import React from 'react'
import { Navbar } from './layout/Navbar'
import Home from './sections/Home'
import Skills from './sections/Skills'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'


const App = () => {
  return (

    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Home />
        <Skills />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>

  )
}

export default App