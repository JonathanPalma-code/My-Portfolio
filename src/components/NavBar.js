import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <Navbar className="border-bottom pr-1" bg="transparent" expand="lg">
      <Navbar.Brand>
        My Portfolio
      </Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className='ml-auto'>
          <Link className="menu p-1" to="home" smooth={true} duration={1000}>Home</Link>
          <Link className="menu p-1" to="about" smooth={true} duration={1000}>About</Link>
          <Link className="menu p-1" to="contact" smooth={true} duration={1000}>Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;