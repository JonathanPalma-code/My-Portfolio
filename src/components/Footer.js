import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
  return(
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-2 footer">
          <Col className="p-0" md={8}>
            Copyrights © 2020 International History Students & Historians Group - All rights reserved.
          </Col>
          <Col className="p-0 d-flex justify-content-end footer" md={4}>
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
