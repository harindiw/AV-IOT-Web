// import bgVideo from "./bgVideo.mp4";
// import "animate.css";
import "./Abouthome.css";
import { Team } from './Team'
import React from 'react';


  export const Abouthome = () => {

  return (
<div>
    <div id="a-home">
  <h1 className="About-h">Who We Are</h1>
  <p className="About-p">We are a leading provider of innovative IoT solutions, dedicated to empowering businesses with cutting-edge technology. With our team of experts, extensive experience, and commitment to excellence, we deliver tailored solutions that drive efficiency, enhance productivity, and unlock new opportunities for growth and success.</p>

  <div class="row">
    <div class="col-sm">
    <h3 className="About-subh">Our Mission</h3>
        <p className="About-subp1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
    <div class="col-sm">
    <h3 className="About-subh">Our Vision</h3>
    <p className="About-subp2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
   
  </div>

</div>
<Team />
</div>
  );
};