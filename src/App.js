import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Jonathan Palma',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "My Portfolio",
        subTitle: "Hi, I'm Jonathan",
        bodyText: "Check out my projects below:"
      },
      about: {
        title: "About me"
      },
      contact: {
        title: "Let's talk"
      }
    }
  }

  render(){
    return (
      <Router>
        <Container className="p-0" fuild={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Jonathan Palma</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
  );
  }
}

export default App;
