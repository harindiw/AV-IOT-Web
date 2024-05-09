import { Container, Row, Col } from "react-bootstrap";
// import bgVideo from "./bgVideo.mp4";
import "animate.css";
import "./Choose.css";
import servicesHome from "./servicesHome.png"
import { Work } from "./Work"
import React from 'react';

export const Choose = () => {

  return (
<div>
    <div id="Choose">
    <h1 className="work-h">Why Choose Us</h1>

    <div class="row">
  <div class="offer-column">
    <div class="offer-card">
    <h1 className="ch1">Expertise</h1>
    <h className="description">Benefit from our team's extensive experience and knowledge in developing IoT solutions, ensuring your project's success in capable hands.</h>
    </div>
  </div>

  <div class="offer-column">
    <div class="offer-card">
    <h1 className="ch1">Innovation</h1>
    <h className="description">Stay ahead of the curve with our commitment to innovation, leveraging the latest technologies and best practices to deliver cutting-edge IoT solutions that drive your business forward.</h>
    </div>
  </div>
  
  <div class="offer-column">
    <div class="offer-card">
    <h1 className="ch1">Reliability</h1>
    <h className="description">Trust in our proven track record of delivering high-quality, reliable IoT solutions that exceed expectations and deliver tangible results for our clients.</h>
    </div>
  </div>

  <div class="offer-column">
    <div class="offer-card">
    <h1 className="ch1">Customization</h1>
    <h className="description">We understand that every business is unique, which is why we offer tailored IoT solutions that are specifically designed to meet your individual needs and objectives.
</h>
    </div>
  </div>
  
  <div class="offer-column">
    <div class="offer-card">
    <h1 className="ch1">Partnership</h1>
    <h className="description">Choose us for our collaborative approach, mutual trust, shared goals, long-term commitment, and value creation, ensuring success in every partnership.</h>
    </div>
  </div>
  
</div>


</div>

</div>
  );
};