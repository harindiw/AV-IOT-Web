import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from './Home_imgs/nav-icon1.svg';
import navIcon2 from './Home_imgs/nav-icon2.svg';
import navIcon3 from './Home_imgs/nav-icon3.svg';
import navIcon4 from "./Home_imgs/nav-icon4.svg";
import IOTlogo from './Home_imgs/IOTlogo.png';
import { HashLink } from 'react-router-hash-link';
import {BrowserRouter as Router} from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={IOTlogo} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/Service" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Service')}>Services</Nav.Link>
              <Nav.Link href="/Abouthome" className={activeLink === 'Abouthome' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Abouthome')}>About Us</Nav.Link>
              <Nav.Link href="/Blog" className={activeLink === 'Blog' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Blog')}>Blog</Nav.Link>
              <Nav.Link href="/Contact" className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Contact')}>Contact</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}