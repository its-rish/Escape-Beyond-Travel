import React from 'react'
import "../styles/newslater.scss"
import NewsLaterImg from "../assets/NewsLater.png"
import NewsLaterDesign from "../assets/design-wrapper.svg"

function Newslater() {
  return (
    <div className='newslater'>
      <div className="container">
        <div className="wrap-container">
          <div className="left-side">
            <div className="text-wraper">
              <h2>Get started today</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitusce convallis</p>
              <div className="form">
                <div className="input-text">
                  <input type="text" placeholder='First name' />
                  <input type="text " placeholder='Last name' />
                  <input type="number" placeholder='Phone' />
                  <input type="email" placeholder='Email' />
                </div>
                <textarea placeholder='Message' className='text-area'></textarea>
                <button className="global-btn">Submit now</button>
              </div>
            </div>

          </div>
          <div className="right-side">
            <div className="img-wraper">
              <img src={NewsLaterImg} alt="img" />
            </div>
          </div>

        </div>
      </div>
      <div className="design-wrapper">
        <img src={NewsLaterDesign} alt="" />
      </div>
    </div>
  )
}

export default Newslater