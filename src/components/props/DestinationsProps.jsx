import React from 'react'
import arrowImg from '../../assets/arrow.png'
import "../../styles/props-styles/destinationsProps.scss"

function DestinationsProps(props) {
  return (
    <div className="destination">
      <div className="wrap-all-text">
        <div className="wrap-img">
          <img src={props.destinationsImage} alt="destiantions-Image" />
        </div>
        <h3>{props.destinationsTitle}</h3>
        <p>{props.destinationsText}</p>
      </div>
      <a href="" className='learnMore'>
        <p>Learn More</p>
        <img src={arrowImg} alt="arrow" />
      </a>
    </div>
  )
}

export default DestinationsProps