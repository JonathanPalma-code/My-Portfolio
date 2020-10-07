import React from 'react';

import Hero from '../components/Hero';
import ZoomEffect from '../components/ZoomEffect';

const HomePage = (props) => {
  return(
    <section id='home'>
      <Hero title={props.title} subTitle={props.subTitle} bodyText={props.bodyText} />
      <ZoomEffect />
    </section>
  );
}

export default HomePage;