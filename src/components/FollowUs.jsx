import React from 'react'
import "../styles/followUs.scss"
import Imgone from "../assets/follow1.png"
import Imgtwo from "../assets/follow2.png"
import Imgthree from "../assets/follow3.png"
import Imgfour from "../assets/follow4.png"
import Imgfive from "../assets/follow5.png"
import Imgsix from "../assets/follow6.png"





function FollowUs() {
    return (
        <div className='followus'>
            <h2>Follow us on Instagram</h2>
            <div className="wrap-img">
                <div className="img-position">
                    <div className="imageWrapper">
                        <FollusImg img={Imgone} />
                    </div>
                    <div className="imageWrapper">
                        <FollusImg img={Imgtwo} />
                    </div>
                    <div className="imageWrapper">
                        <FollusImg img={Imgthree} />
                    </div>
                    <div className="imageWrapper">
                        <FollusImg img={Imgfour} />
                    </div>
                    <div className="imageWrapper">
                        <FollusImg img={Imgfive} />
                    </div>
                    <div className="imageWrapper">
                        <FollusImg img={Imgsix} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FollowUs


const FollusImg = (props) => {
    return (
        <img src={props.img} alt="" />
    );
};

