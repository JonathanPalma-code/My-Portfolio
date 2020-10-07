import React from 'react';
import { Form } from 'react-bootstrap';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Axios from 'axios';

class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true
    });

    Axios.post('https://jonathansfpalmaportfolio.herokuapp.com/api/email', this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: false
          });
        }
      })
      .catch(err => {
        console.log(err);

        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  }

  render() {
    return (
      <section id='contact' className='container-fluid'>
        <Hero title={this.props.title} />
        <Content>
          <Row>
            <Col md={3} />
            <Col xs={12} md={6}>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="full-name">Full Name</Form.Label>
                      <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control id="message" name="message" as="textarea" rows="8" value={this.state.message} onChange={this.handleChange} />
                </Form.Group>

                <button className="sendEmail d-inline-block" type="submit" disabled={this.state.disabled}>
                  Send
            </button>

                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
              </Form>
            </Col>
            <Col md={3} />
          </Row>
        </Content>
      </section>
    );
  }
}

export default ContactPage;