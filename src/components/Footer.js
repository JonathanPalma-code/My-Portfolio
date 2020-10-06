import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Linkedin from '../assets/images/linkedin.png';
import GitHub from '../assets/images/github.png';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-center p-2 footer">
          <a href="https://www.linkedin.com/in/jonathan-palma-096a65112/">
            <img className="p-link" src={Linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/JonathanPalma-code/">
            <img className="p-git" src={GitHub} alt="GitHub" /></a>
        </Row>
        <Row className="justify-content-center p-2 footer">
          <div id='go-top'><a className='display-1' title='Back to Top' href="#home"><i className="fa fa-angle-double-up"></i></a></div>
        </Row>
        <Row className="justify-content-between p-2 footer">
          <Col className="p-0" xs={6}>
            <span>
              Copyrights © 2020 - All rights reserved.
            </span>
          </Col>
          <Col className="p-0 d-flex justify-content-end footer" xs={6}>
            <span>
              Developed with <i className='fa fa-heart text-danger'></i> by Jonathan Palma.
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
