import React from "react";
import circle from "./Home_imgs/circle.mp4";

import './Features.css';

export const Features = () => {

    return (
        <div className="story">
            <h3 className="featureHead">Our Fields of Expertise</h3>
           <div class="row">
        <div class="column-f">
          <div class="card-f">
          <div class="circle">
				<div class="noise animated">
                    <p>IoT companies design and develop IoT devices, sensors, and hardware components with expertise in electronics, embedded systems, and prototyping for tailored solutions.</p>
                </div>
			   </div>
               <h6>Hardware Engineering</h6>
          </div>
          
        </div>
      
        <div class="column-f">
          <div class="card-f">
          <div class="circle">
				<div class="noise animated">
                <p>IoT solution companies excel in crafting IoT software, firmware, and middleware using languages like C, C++, Python, Java, ensuring versatile solutions.</p>

                </div>
			   </div>
               <h6>Software Development</h6>
          </div>
        </div>
        
        <div class="column-f">
          <div class="card-f">
          <div class="circle">
				<div class="noise animated">
                <p>Networking and Connectivity: IoT solution firms implement diverse protocols and wireless tech for seamless IoT connectivity, including MQTT, CoAP, IPv6, and 6LoWPAN.</p>

                </div>
			   </div>
               <h6>Networking & Connectivity</h6>
          </div>
        </div>
        
        
      </div> 

      <div class="row">
        <div class="column-f">
          <div class="card-f">
          <div class="circle">
				<div class="noise animated">
                <p>IoT solution firms analyze vast IoT data, extracting insights efficiently. They implement AI for predictive maintenance, anomaly detection, and optimization.</p>

                </div>
			   </div>
               <h6>Data Analysis & AI</h6>
          </div>
          
        </div>
      
        <div class="column-f">
          <div class="card-f">
          <div class="circle">
				<div class="noise animated">
                <p>Specializing in tailored IoT solutions for healthcare, agriculture, smart cities, manufacturing, with expertise in industry-specific requirements.</p>

                </div>
			   </div>
               <h6>Industry specific Solutions</h6>
          </div>
        </div>
        
        <div class="column-f">
          <div class="card-f">
          <div class="circle">
				<div class="noise animated">
                <p>IoT solution firms prioritize robust security, understanding IoT threats, and vulnerabilities, ensuring comprehensive protection for devices, networks, and data.</p>

                </div>
			   </div>
               <h6>Cyber Security & Privacy</h6>
          </div>
        </div>
        
        
      </div> 
        </div>
        
    );
}
