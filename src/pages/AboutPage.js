import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import jonathanpalma from '../assets/images/jonathanpalma.JPG';

function AboutPage(props) {
  return(
    <div className="start">
      <Hero title={props.title} />
      <Content>
        <p className="p2">My name is Jonathan, I’m Portuguese and I’m a software developer graduated at <a href="https://makers.tech/">Makers Academy</a>.</p>

        <p className="p2">From a very young age, I have been passionate about video games, and I grew tremendously curious about how to build them. At the time, when I asked myself the teenager’s most important question, what do I want to become? The answer came to me as obvious - a software developer! For the following reasons:</p>
        
        <img className="Photo" src={jonathanpalma} alt={jonathanpalma}/>
        <p className="j-dot p2">I absolutely love technology;</p>
        <p className="j-dot p2">I have a creative mind;</p>
        <p className="j-dot p2"> I love reinventing the world through innovation, with a strong will for improvement, not only for myself but for everything I touch.</p>
        <p className="p2">I am now looking to move forward, into a new environment and secure a permanent position in a tech team.</p>
      </Content>
    </div>
  );
}

export default AboutPage;