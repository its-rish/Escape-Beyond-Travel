import React from 'react'
import Bannerimg from "../assets/banner-img.png"
import "../styles/banner.scss"

function Banner() {
  return (
    <div className='banner'>
      <div className="banner-img">
        <img src={Bannerimg} alt="banner-img" />
        <div className="container">
        <div className="wrap-banner-text">
          <p className='banner-headline'>Luxury Travel Reimagined</p>
          <h1>Recharge, Rejuvenate, and Rediscover Your Passion for Life.</h1>
          <p className='banner-text'>"Escape the Ordinary, Embrace the Extraordinary: Luxury Travel Experiences for Professionals Seeking Balance."</p>
        </div>
      </div>
      </div>
    


    </div>
  )
}

export default Banner