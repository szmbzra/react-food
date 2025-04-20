import React, {useState} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.scss";
function Header() {
  const [nav, setNav] =  useState(false);
  //scroll navbar
  const changeValueOnScroll = () =>{
  const scrollValue =  document?.documentElement?.scrollTop;
  scrollValue > 100 ? setNav(true) : setNav(false)
  }
  window.addEventListener("scroll", changeValueOnScroll );
  return (
<header>
<Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky": ""}`}>
      <Container>
        <Navbar.Brand href="/">
      <img src={logo} alt="logo" className="img-fluid" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as ={Link} to= "/" >Home</Nav.Link>
            <Nav.Link as ={Link} to = "/about" >About us</Nav.Link>
            <Nav.Link as ={Link} to = "/menu" >Our Menu</Nav.Link>
            <Nav.Link as ={Link} to = "/shop" >Shop</Nav.Link>
            <Nav.Link as ={Link} to = "/blog" >Blog</Nav.Link>
            <Nav.Link as ={Link} to = "/contact" >ontact</Nav.Link>
            <Nav.Link as ={Link} to = "/" >
            <div className="cart">
            <i className="bi bi-bag-check fs-5"></i>
            <em className="roundpoint">2</em>
            </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</header>
  )
}

export default Header
