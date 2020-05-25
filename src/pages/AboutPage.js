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
          <div className='container-fluid col-12 col-md-8'>
            <p className="p2">My name is Jonathan, I am a passionate software engineer graduated from <a href="https://makers.tech/">Makers Academy</a>, a highly selective 16 weeks coding bootcamp.</p>
            <p className="p2">From a very young age, I have been passionate about video games and applications and I grew tremendously curious about how to build them. 
            At the time, when I asked myself the teenager’s most important question, what do I want to become? 
            The answer came to me as obvious - a software developer!</p>
            <p className="p2">
              I’m looking for a role where I can use my problem solving skills and passion for technology to build software. 
              I have a creative mind and I like reinventing the world through innovation, with a strong will for improvement, not only for myself, but for everything I touch.
            </p> 
          </div>
        </div>
        <div className='row'>
          <div className='container-fluid col-12 col-md-8'>
            <p className="p2">At Makers, I have studied computer science and metaprogramming principles along with hands-on coding, working on web and desktop applications using Ruby and Javascript.
            As a student I had the following responsibilities:</p>
            <p className="m-1 text-justify ml-5">- To take ownership of my learning process, time-boxing tasks to increase my learning curve;</p>
            <p className="m-1 text-justify ml-5">- To use Agile methodologies to work effectively in a team, using pair programming, XP values, daily standups and sprint planning;</p>
            <p className="m-1 text-justify ml-5">- To give and receive feedback using code reviews and open/respectful communication;</p>
            <p className="m-1 text-justify ml-5">- To understand project requirements, create user stories, define MVP's features, break features in smaller tasks to easily accomplish them;</p>
            <p className="m-1 text-justify ml-5">- To collaborate with the other team members using GitHub as version control tools and using CI/CD to reduce integration risk;</p>
            <p className="m-1 text-justify ml-5">- To code following principles like TDD and S.O.L.I.D of OOP design pattern to create clear, simple code and well-tested applications;</p>
            <p className="mt-1 text-justify ml-5">- To complete weekend projects based on approaching a problem.</p>
            <p className="p2">
              If you want to see some of my projects that I have been working on, for the past 3 months, see my <a href="https://github.com/JonathanPalma-code">GitHub Profile</a>. 
              If you navigate to my GitHub you will find projects that are not totally finalised. However, it will give you a sense of the languages and tools that I worked with. 
              I have worked with Ruby (Sinatra and Rails), Javascript, HTML/CSS and, learning on my spare time, C#, React and Node.js.
            </p>
            <p className="p2">My native language is French, yet I speak English, Spanish and Portuguese fluently.</p>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;