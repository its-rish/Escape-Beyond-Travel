import React from 'react'
import "../styles/welcome.scss"
import Welcometextfirst from "../assets/welcome-text-first.png"
import welcometextbackground from "../assets/welcome-text-background.svg"


function Welcometext() {
    return (
        <div className='welcometext '>
            <div className='commonpadding'>
                <div className="container">
                    <p className='welcome-headline'>Welcome to Escape Beyond Travel,</p>
                    <h2>where unforgettable journeys meet personalized luxury.</h2>
                    <p>. We understand that life can get overwhelming, especially for professionals who have dedicated themselves to their careers. That's why we're here to offer you a unique way to refresh, rejuvenate, and embark on extraordinary travel experiences.</p>
                    <p>]We believe that travel is a powerful tool for personal well-being and a source of endless inspiration. As a former educator, I have witnessed firsthand the transformative impact of exploration and stepping outside our comfort zones. With a deep understanding of your needs and desires, I have crafted a travel agency specifically tailored to professionals like you, who seek a break from the daily grind and an opportunity to indulge in the world's most enchanting destinations.</p>
                    <div className="button-wrapper">
                        <button className="global-btn">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="background-img">
                <img src={Welcometextfirst} alt="img" />
            </div>
            <div className="welcometext-background">
                <img src={welcometextbackground} alt="img" />
            </div>
        </div>
    )
}

export default Welcometext