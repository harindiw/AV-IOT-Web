import { Container, Row, Col } from "react-bootstrap";
// import bgVideo from "./bgVideo.mp4";
import "animate.css";
import "./ServicesHome.css";
import servicesHome from "./servicesHome.png"
import { Work } from "./Work"
import { Offer } from "./Offer"
import { Choose } from "./Choose";
import React from 'react';


  export const ServicesHome = () => {

  return (
<div>
    <div id="s-home">
  <h1 className="header-h">Tailored Solutions for Your Needs</h1>
  <p className="header-p">Tailored solutions integrating innovation to drive efficiency and business growth.</p>
</div>

<Work />
<Offer />
<Choose />
</div>
  );
};