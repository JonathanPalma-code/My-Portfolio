import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar className="border-bottom pr-1" bg="transparent" expand="lg">
      <Navbar.Brand>
        My Portfolio
      </Navbar.Brand>

      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className='ml-auto'>
          <a className="smoothscroll p-1" href="#home">Home</a>
          <a className="smoothscroll p-1" href="#about">About</a>
          <a className="smoothscroll p-1" href="#contact">Contact</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;