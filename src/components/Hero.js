import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = (props) => {
  return(
    <Jumbotron className="bg-transparent jumbotron-fluid mb-0">
      <Container>
        <Row className="justify-content-center pt-5">
          <Col md={8} xs={12}>
            { props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1> }
            { props.subTitle && <h2 className="display-4 font-weight-light">{props.subTitle}</h2> }
            { props.bodyText && <h3 className="lead font-weight-light">{props.bodyText}</h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Hero;