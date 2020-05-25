import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import jonathanpalma from '../assets/images/jonathanpalma.JPG';

function AboutPage(props) {
  return(
    <div className="start">
      <Hero title={props.title} />
      <Content>
        <div className='self-img'>
          <img className=" ml-5 Photo" src={jonathanpalma} alt={jonathanpalma}/>
        </div>
        <div className='row'>
          <div className='container-fluid col-12 col-md-6'>
            <p className="p2">My name is Jonathan, I am a passionate software engineer graduated from <a href="https://makers.tech/">Makers Academy</a>, a highly selective 16 weeks coding bootcamp.</p>
            <p className="p2">From a very young age, I have been passionate about video games and applications and I grew tremendously curious about how to build them. 
            At the time, when I asked myself the teenager’s most important question, what do I want to become? 
            The answer came to me as obvious - a software developer!</p>
            <p className="p2">
              I’m looking for a role where I can use my problem solving skills and passion for technology to build software. 
              I have a creative mind and I like reinventing the world through innovation, with a strong will for improvement, not only for myself, but for everything I touch.
            </p> 
            <p className="p2">
              If you want to see some of my projects that I have been working on, for the past 3 months, see my <a href="https://github.com/JonathanPalma-code">GitHub Profile</a>. 
              If you navigate to my GitHub you will find projects that are not totally finalised. However, it will give you a sense of the languages and tools that I worked with. 
              I have worked with Ruby (Sinatra and Rails), Javascript, HTML/CSS and, learning on my spare time, C#, React and Node.js.
            </p>
            <p className="p2">My native language is French, yet I speak English, Spanish and Portuguese fluently.</p>
          </div>
          <div className='col-md-6' />
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;