import { Container, Row, Col } from "react-bootstrap";
// import bgVideo from "./bgVideo.mp4";
import "animate.css";
import "./Offer.css";
import servicesHome from "./servicesHome.png"
import { Work } from "./Work"
import React from 'react';

import { IoHardwareChipOutline } from "react-icons/io5";
import { RiComputerLine, RiRobot2Line } from "react-icons/ri";
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";



export const Offer = () => {

  return (
    <div>
      <div id="offer">
        <h1 className="work-h">What we offer you</h1>
        <h1 className="work-h1">Working with us is simple! </h1>
<div id="offer-circle">
  <div id="circle">
          <div className="first">
            
            <h1 className="offerh">Hardware Engineering</h1>
            <br></br>
            <h1 className="offer-h1"><IoHardwareChipOutline /></h1><br></br>
            {/* <p className="hov">IoT companies design and develop IoT devices, sensors, and hardware components with expertise in electronics, embedded systems, and prototyping for tailored solutions.</p> */}

            <h1 className="offer-h2"><RiRobot2Line /></h1><h1 className="offerh">Data Analysis & AI</h1>
            {/* <p className="hov2">IoT solution firms analyze vast IoT data, extracting insights efficiently. They implement AI for predictive maintenance, anomaly detection, and optimization.</p> */}

          </div>
          <div className="middle">
            <h1 className="offerh">Software Development</h1><h1 className="offer-h3"><RiComputerLine /></h1>
            {/* <p className="hov">IoT solution companies excel in crafting IoT software, firmware, and middleware using languages like C, C++, Python, Java, ensuring versatile solutions.</p> */}

            <h1 className="offer-h4"><MdOutlineSecurity /></h1><h1 className="offerh">Cyber Security & Privacy</h1>
            {/* <p className="hov2">IoT solution firms prioritize robust security, understanding IoT threats, and vulnerabilities, ensuring comprehensive protection for devices, networks, and data.</p> */}


          </div>
          <div className="last">
            <h1 className="offerh">Networking & Connectivity</h1><h1 className="offer-h5"><FaNetworkWired /></h1>
            {/* <p className="hov">Networking and Connectivity: IoT solution firms implement diverse protocols and wireless tech for seamless IoT connectivity, including MQTT, CoAP, IPv6, and 6LoWPAN.</p> */}

            
            <h1 className="offer-h6"><FaRegBuilding /></h1><h1 className="offerh">Industry Specific Solutions</h1>
            {/* <p className="hov2">Specializing in tailored IoT solutions for healthcare, agriculture, smart cities, manufacturing, with expertise in industry-specific requirements.</p> */}

          </div>
          <h1 className="offer-h4"></h1>
        </div>
</div>
        

      </div>

    </div>
  );
};