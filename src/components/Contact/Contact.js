// import bgVideo from "./bgVideo.mp4";
// import "animate.css";
import "./Contact.css";
import { SendMsg } from "./SendMsg";
import React from 'react';


export const Contact = () => {

  return (
    <div>
      <div id="a-home" className="contacthome">
        <h1 className="contact-h">Let's talk</h1>
        <h2 className="contact-para">Book a free consultation with one of our specialists, So that we can discuss how
          AV IOT Solutions can help your business to build the product you have in mind.</h2>

        <a href="/Explore">
          <button className="vvd"><span>Book a free consultation</span></button>
        </a>


        <a href="/SendMsg" className="msg-a" >Or Send Us a Message</a>
        <SendMsg />
        <a className="invisible" >Or Send Us a Message</a>






      </div>

    </div>
  );
};