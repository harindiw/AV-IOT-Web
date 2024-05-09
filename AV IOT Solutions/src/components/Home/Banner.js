// import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/my.jpeg";
import bgVideo from "./Home_imgs/bgVideo.mp4";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
// import TrackVisibility from "react-on-screen";
// import { HashLink } from "react-router-hash-link";
// import Contact from "./Contact";
import "./Banner.css";
// import { Features } from "./Features";
// import { Footer } from "./Footer";
// import { Review } from "./Review";
// import { Explore } from "../Consultation/Explore";
// import { Stats } from "./Stats";
// import { Stories } from "./Stories";

// import './Myimage.css'


export const Banner = () => {

  return (
  <div>

    {/* banner */}
    <section className="banner" id="home">
    <div className="background-wrapper">
      </div>
      <Container>
      
        {/* <video autoPlay muted loop id="bgVideo">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video> */}
   
        <div className="heading"><h1 className="line1">Develop Your Enterprice</h1><br></br>
          <h1 className="line2">With<br></br></h1><h1 className="line3">Internet of Things</h1>
        </div>

        <div className="description">
          <p>We have developed top-notch IOT devices and assisted numerous organizations in achieving economic success.</p>
        </div>

        <span className="navbar-text">
        {/* <Nav.Link href="/Blog" className={activeLink === 'Blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Blog')}>Blog</Nav.Link> */}

                
                <a href="/Explore">
                <button className="vvd"><span>Book a free consultation</span></button>
                </a>
            </span>
      </Container>
    </section>

</div>
  );
};