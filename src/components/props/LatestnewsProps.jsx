import React from 'react'
import Calender from "../../assets/calendar.png"
import "../../styles/props-styles/latestnewsProps.scss"

function LatestnewsProps(props) {
    return (
        <div className='wrapnews'>
            <div className="news-img">
                <img src={props.image} alt="" />
            </div>
            <div className="date">
                <img src={Calender} alt="" />
                <p className='date-value'>15 Feb, 2023</p>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default LatestnewsProps