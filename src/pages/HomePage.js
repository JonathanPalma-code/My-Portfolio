import React from 'react';

import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

const HomePage = (props) => {
  return(
    <section id='home'>
      <NavBar />
      <Hero title={props.title} subTitle={props.subTitle} bodyText={props.bodyText} />
      <Carousel />
    </section>
  );
}

export default HomePage;