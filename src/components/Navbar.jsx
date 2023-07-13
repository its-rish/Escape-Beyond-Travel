import React from 'react'
import logo from "../assets/logo.png";
import App from '../App';
import "../styles/navbar.scss"


function Navbar() {
  return (
    
        <div className="Nav-wrapper">
            <div className="container">
                <div className="nav-logo">
                    <a href={<App/>}><img src={logo} alt="logo" /></a>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="">Company Info</a></li>
                    <li><a href="">About Me</a></li>
                    <li><a href="">Travel Blog</a></li>
                </ul>
                <button className='global-btn'>Book a consultation</button>
            </div>
        </div>
  
  )
}

export default Navbar;