import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.Component {

  constructor(props) {
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

  render() {
    return (
      <Container className="p-0" fluid={true}>
        <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} bodyText={this.state.home.bodyText} />
        <AboutPage title={this.state.about.title} />
        <ContactPage title={this.state.contact.title} />
        <Footer />
      </Container>
    );
  }
}

export default App;
