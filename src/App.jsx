import React from 'react'
import { Navbar } from './layout/Navbar'
import Home from './sections/Home'



const App = () => {
  return (

    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Home />
      </main>
    </div>

  )
}

export default App