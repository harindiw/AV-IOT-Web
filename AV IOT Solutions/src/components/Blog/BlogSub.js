import React from "react";
import Star from './Star.png';
import "./BlogSub.css";

export const BlogSub = () => {
    return (
        <div className="newsletter">
            <div className="overlap">
                <img className="star" src={Star} alt="" />
                <div className="rectangle" />
                <img className="img" src={Star} alt=""/>
                <img className="star-2" src={Star} alt=""/>
                <img className="star-3" src={Star} alt="" />
                <img className="star-4" src={Star} alt="" />
                <img className="star-5" src={Star} alt="" />
                <img className="star-6" src={Star} alt="" />
                <img className="star-7" src={Star} alt="" />
                <div className="input">
                    <div className="overlap-group">
                        <input className="enter-email-address" placeholder="Enter Email Address" type="email" />
                        <div className="div" />
                    </div>
                </div>
                <div className="div-wrapper">
                    <div className="text-wrapper">Subscribe</div>
                </div>
                <div className="text-wrapper-2">Subscribe for our Newsletter</div>
                <p className="p">Subscribe to get latest updates</p>
            </div>
        </div>
    );
};