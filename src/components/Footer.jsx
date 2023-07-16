import React from 'react'
import "../styles/footer.scss"
import Fb from "../assets/fb.svg"
import insta from "../assets/insta.svg"
import Calender from '../assets/calendar.png'
import location from "../assets/location.svg"
import mail from "../assets/mail.svg"
import contact from "../assets/contact.svg"

function Footer() {
    return (
        <div className='wrap-footer'>
            <div className="container">
                <div className="footer-wraper">
                    <div className="heyThere">
                        <h3 className='footer-title'>Hey There!</h3>
                        <p>Welcome to Escape Beyond Travel, where unforgettable journeys meet personalized luxury.</p>
                        <div className="footer-SocialMedia">
                            <ul>
                                <li><a href=""><img src={Fb} alt="" /></a></li>
                                <li><a href=""><img src={insta} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="quicklinks">
                        <h3 className='footer-title'>Quick Links</h3>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Company Info</a></li>
                            <li><a href="">About Me</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className="recentPost">
                        <h3 className='footer-title'>Recent post</h3>
                        <div className="post">
                            <div className="calender">
                                <img src={Calender} alt="" />
                                <p>15 Feb, 2023</p>
                            </div>
                            <p>Lorem Ipsum is dummy Text</p>
                        </div>
                        <div className="post">
                            <div className="calender">
                                <img src={Calender} alt="" />
                                <p>15 Feb, 2023</p>
                            </div>
                            <p>Lorem Ipsum is dummy Text</p>
                        </div>
                    </div>
                    <div className="contactinformation">
                        <h3 className='footer-title'>Contact Information</h3>
                        <div className="location">
                            <img src={location} alt="" />
                            <p>Dummy Address, Fake Road. Lorem ipsum 456/d. UK</p>
                        </div>
                        <div className="mail">
                            <img src={mail} alt="" />
                            <a href="mailto:jacquie@escapebeyondtravel.com">jacquie@escapebeyondtravel.com</a>
                        </div>
                        <div className="contact">
                            <img src={contact} alt="" />
                            <a href="tel:+912-414-6441">912-414-6441</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Copyright <span>&#169;</span>2023 <a href="">Escape Beyond Travel</a>, Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer