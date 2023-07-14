import React from 'react'
import Navbar from './components/Navbar'
import "../src/styles/index.scss"
import Banner from './components/Banner'
import Welcometext from './components/Welcometext'
import Destinations from './components/Destinations'
import AboutMe from './components/AboutMe'



function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Welcometext/>
     <Destinations/>
     <AboutMe/>
   
    </div>
  )
}

export default App
