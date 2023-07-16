import React from 'react'
import Navbar from './components/Navbar'
import "../src/styles/index.scss"
import Banner from './components/Banner'
import Welcometext from './components/Welcometext'
import Destinations from './components/Destinations'
import AboutMe from './components/AboutMe'
import LatestNews from './components/latestNews'
import FollowUs from './components/FollowUs'
import Newslater from './components/Newslater'
import Partners from './components/Partners'
import Footer from './components/footer'



function App() {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <Welcometext/>
     <Destinations/>
     <AboutMe/>
     <LatestNews/>
     <FollowUs/>
     <Newslater/>
     <Partners/>
    <Footer/>
    </div>
  )
}

export default App
