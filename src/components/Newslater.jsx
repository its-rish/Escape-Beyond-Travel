import React from 'react'
import "../styles/newslater.scss"
import NewsLaterImg from "../assets/NewsLater.png"

function Newslater() {
  return (
    <div className='newslater'>
        <div className="left-side">
            <h2>Get started today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitusce convallis</p>
            <div className="form">
                <input type="text"  />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <textarea placeholder='Message'></textarea>
                <button className="global-btn">Submit now</button>
            </div>
        </div>
        <div className="right-side">
            <img src={NewsLaterImg} alt="img" />
        </div>
    </div>
  )
}

export default Newslater