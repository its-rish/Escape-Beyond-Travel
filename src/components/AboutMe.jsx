import React from 'react'
import linkdin from "../assets/linkdin.svg"
import "../styles/aboutMe.scss"
import aboutImg from "../assets/AboutMe.png"

function AboutMe() {
    return (
        <div className="aboutme commonpadding">
            <h2>About me</h2>
            <div className="container">
                <div className="wrap-container">
                    <div className="aboutme-text">
                        <p className='aboutme-title'>Hello, and welcome!
                            <br />
                            <span>I am Jacqueline Rogers</span>
                        </p>
                        <p>the Owner and Travel Advisor of Escape Beyond Travel.
                            With a background in education and a burning desire to create extraordinary experiences,
                            I founded this company with a clear purpose in mind: to offer a gateway to escape the ordinary
                            and venture beyond the boundaries of everyday life.
                        </p>
                        <p>
                            As a former educator, I witnessed firsthand the immense value of broadening one's horizons and embracing new perspectives.
                            I believe that travel has the power to ignite our curiosity, inspire personal growth, and provide a much-needed respite from
                            our demanding lives. That is why I decided to channel my passion for exploration into creating a travel agency that goes
                            beyond traditional itineraries and embraces the concept of transformative journeys.
                        </p>
                        <div className="about-me-btn">
                            <button className="global-btn">
                                Learn More
                            </button>
                            <a href=""><img src={linkdin} alt="linkdin" /></a>
                        </div>
                    </div>
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe