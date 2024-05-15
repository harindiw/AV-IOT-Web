import "./Team.css";
import { FaLinkedin , FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import React from 'react';


  export const Team = () => {

  return (
<div>
    <h1 className="About-h">Meet Our Team</h1>
    {/* <h1 className="work-h1">We are with Awesome people</h1> */}
<div class="row">
        <div class="about-column">
        <div class="flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-1" > </div>
          <div class="flip-card-back">
            <div className="blue1">Nishal Dayarathna </div>
            <div className="blue1">Director </div>
            <p className="blue2">BSc.Eng(Hons) Electrical Engineering - University of Moratuwa</p>
            <div className="blue2">MBA - University of Wales Trinity Saint David</div>
           </div>
        </div>
        </div>
        <div class= "social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="i1" /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">< FaFacebook className="i2" /> </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">< BsTwitterX className="i3" /> </a>
        </div>
        </div>
      
        <div class="about-column">
          <div class="flip-card">
            <div class="card-ab">
              <div class="flip-front-team-card-img img-2"> </div>
              <div class="flip-card-back">
            <div className="green1">Nuwan Prasanna </div>
            <div className="green1">Software Engineer </div>
            <p className="green2">BET(Hons) Mechatronics Engineering Technology - University of Sri Jayewardenepura</p>
            </div>
          </div>
        </div>
        <div class= "social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="i1" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">< FaFacebook className="i2" /> </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">< BsTwitterX className="i3" /> </a>
        </div>
        </div>
        
        <div class="about-column">
          <div class="flip-card">
            <div class="card-ab">
              <div class="flip-front-team-card-img img-3"></div>
            <div class="flip-card-back">
            <div className="blue1">Nuwan Prasanna </div>
            <div className="blue1">Software Engineer </div>
            <p className="blue2">BET(Hons) Mechatronics Engineering Technology - University of Sri Jayewardenepura</p>
            </div>
          </div>
        </div>
        <div class= "social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="i1" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">< FaFacebook className="i2" /> </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">< BsTwitterX className="i3" /> </a>
        </div>
      </div>
      
      <div class="row">
        <div class="about-column">
          <div class="flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-4"> </div>
            <div class = "flip-card-back">
            <div className="blue1">Rashintha Welgama </div>
            <div className="blue1">Automation Engineer </div>
            <p className="blue2">BSc.Eng(Hons) Mechanical Engineering (Mechatronics Specialisation) - SLIIT</p>
              </div>
          </div>
        </div>
        <div class= "social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="i1" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">< FaFacebook className="i2" /> </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">< BsTwitterX className="i3" /> </a>
        </div>
        </div>
      
        <div class="about-column">
          <div class = "flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-5"> </div>
              <div class = "flip-card-back">
            <div className="green1">Santhush Wijerathne </div>
            <div className="green1">Automation Engineer </div>
            <p className="green2">BSc.Eng(Hons) Mechanical Engineering (Mechatronics Specialisation) - SLIIT</p>
              </div>
          </div>
        </div>
        <p className="green"><FaLinkedin /> &nbsp; <FaFacebook /> &nbsp; <BsTwitterX /></p>
        </div>
        
        <div class="about-column">
          <div class= "flip-card">
          <div class="card-ab">
          <div class="flip-front-team-card-img img-6"> </div>
            <div class = "flip-card-back">
            <div className="blue1">Chamara Yaparathne</div>
            <div className="blue1">Software Process Engineer </div>
            <p className="blue2">BSc. Textile and Apparel Engineering - University of Moratuwa</p>
            <div className="blue2"> Msc.IT and Strategic Innovation - Kingston University, UK </div>
            </div>
          </div>
        </div>
        <p className="blue"><FaLinkedin /> &nbsp; <FaFacebook /> &nbsp; <BsTwitterX /></p>
        </div>
        
      </div> 


</div>
</div>
  );
};