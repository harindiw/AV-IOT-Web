import IOTlogo1 from './Home_imgs/IOTlogo1.png';
/*import IOTlogo from './Home_imgs/IOTlogo.png';*/
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";

import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import "./Footer.css";
import { Nav } from 'react-bootstrap';

export const Footer = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div class="c">
  <div class="row">
    <div class="col-sm">
    <img className="logo2" src={IOTlogo1} alt=""/>
    <p className="footer-p">We are pioneers in utilizing the potential of IoT technology to transform how organizations and people engage with the real world.</p>
    <div className="footer-icon">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle className="icon1" /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icon2" /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><GrInstagram className="icon3" /></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><IoLogoYoutube className="icon4" /></a>
      </div>
    </div>

    <div class="col-sm">
      <p className="mblue">Quick links</p>
      <p><a href="/"
          className={activeLink === 'home' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('home')} > Home </a></p>
      <p><a href="Service"
          className={activeLink === 'service' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('service')} > Services </a></p>
      <p><a href="Abouthome"
          className={activeLink === 'about' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('about')} > About Us </a></p>
      <p><a href="Blog"
          className={activeLink === 'blog' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('blog')} > Blog </a></p>
      <p><a href="Contact"
          className={activeLink === 'contact' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('about')} > Contact </a></p>

    </div>
    
    <div class="col-sm">
    <p className="blue">Address</p>
      <a href="https://www.google.com/maps/dir//298A+Borella+Road,+Habarakada/@6.864384,79.9273699,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae250d422ae0c6d:0x2867f2400c54e42b!2m2!1d80.0097718!2d6.864391?entry=ttu" className="white1">298A, Borella Road, Habarakada, Homagama</a>
    <p className="green">Phone</p>
      <a href="tel:+94777371118" className="white1">+94777371118</a>
    <p className="blue">Email</p>
      <a href="mailto:info@iotsolutions.lk" className="white1">info@iotsolutions.lk</a>
    </div>
  </div>
</div>
  )
}

export default Footer; 

{/*}
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <footer className="footer">
      <div className="navigation-links">
        <a
          href="#home"
          className={activeLink === 'home' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('home')}
        >
          Home
        </a>
        <a
          href="#services"
          className={activeLink === 'services' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('services')}
        >
          Services
        </a>
        <a
          href="#about"
          className={activeLink === 'about' ? 'footer-link active' : 'footer-link'}
          onClick={() => handleSetActiveLink('about')}
        >
          About Us
        </a>
        {/* Add more links as needed 
      </div>
    </footer>
  );
}

export default Footer;   */}
