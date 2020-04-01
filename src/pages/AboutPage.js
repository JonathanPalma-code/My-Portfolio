import React from 'react';

import Hero from '../components/Hero';
import Content from './Content';

function AboutPage(props) {
  return(
    <div>
      <Hero title={props.title} />
      <Content>
        <p>My name is Jonathan, I’m Portuguese and I’m a software developer graduated at Makers Academy.</p>

        <p>From a very young age, I have been passionate about video games, and I grew tremendously curious about how to build them. At the time, when I asked myself the teenager’s most important question, what do I want to become? The answer came to me as obvious - a software developer! For the following reasons:</p>

        <p className="j-dot">I absolutely love technology;</p>
        <p className="j-dot">I have a creative mind;</p>
        <p className="j-dot"> I love reinventing the world through innovation, with a strong will for improvement, not only for myself but for everything I touch.</p>
        <p>I am now looking to move forward, into a new environment and secure a permanent position in a tech team.</p>
      </Content>
    </div>
  );
}

export default AboutPage;