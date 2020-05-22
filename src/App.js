import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Linkedin from './assets/images/linkedin.png';
import GitHub from './assets/images/github.jpeg';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

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
        title: '"Be CreARTive"',
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
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom pr-1" bg="transparent" expand="lg">
            <Navbar.Brand>Jonathan Palma
              <a href="https://www.linkedin.com/in/jonathan-palma-096a65112/">
                <img className="p-fluid" src={Linkedin} alt="LinkedIn" /></a>
              <a href="https://github.com/JonathanPalma-code/">
                <img className="p-fluid2" src={GitHub} alt="GitHub" /></a>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className='ml-auto'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} bodyText={this.state.home.bodyText} /> } />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} /> } />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} /> } />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
