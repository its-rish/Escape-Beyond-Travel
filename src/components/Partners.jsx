import React from 'react'
import "../styles/partners.scss";
import Partner1 from "../assets/partner1.png"
import Partner2 from "../assets/partner2.png"
import Partner3 from "../assets/partner3.png"
import Partner4 from "../assets/partner4.png"
import Partner5 from "../assets/partner5.png"


function Partners() {
  return (
    <div className='partners'>
        <div className="container">
            <div className="wrap-objects">
                <ul>
                    <li><a className='partner1' href=""><img src={Partner1} alt="" /></a></li>
                    <li><a className='partner2'  href=""><img src={Partner2} alt="" /></a></li>
                    <li><a className='partner3'  href=""><img src={Partner3} alt="" /></a></li>
                    <li><a className='partner4'  href=""><img src={Partner4} alt="" /></a></li>
                    <li><a className='partner5'  href=""><img src={Partner5} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Partners