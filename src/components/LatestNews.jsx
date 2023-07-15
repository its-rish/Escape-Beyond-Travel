import React from 'react'

import Imgone from "../assets/news-imgOne.png";
import ImgTwo from "../assets/news-imgTwo.png";
import ImgThree from "../assets/news-imgThree.png";
import LatestNewsProps from "./props/LatestnewsProps";
import "../styles/latestNews.scss"


function LatestNews() {
  return (
    <div className='latestnews'>
        <div className="container">
            <h2>Latest news</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat. Praesent et ex facilisis, iaculis urna at, mattis felis. Aenean faucibus ut est ut pulvinar.</p>
            <div className="latest-all-news">
                <div className="news">
                    <LatestNewsProps image={Imgone} title="Mauris dictum, elit et consequat condimentum," text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat."/>
                </div>
                <div className="news">
                    <LatestNewsProps image={ImgTwo} title="Mauris dictum, elit et consequat condimentum," text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat."/>
                </div>
                <div className="news">
                    <LatestNewsProps image={ImgThree} title="Mauris dictum, elit et consequat condimentum," text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis ligula vitae fringilla feugiat."/>
                </div>
            </div>
            <div className="latest-news-btn">
                <button className="global-btn">View all blogs</button>
            </div>
        </div>
    </div>
  )
}

export default LatestNews