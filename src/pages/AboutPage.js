import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import jonathanpalma from '../assets/images/jonathanpalma.JPG';
import resumeData from '../resumeData';

const AboutPage = (props) => {
  // const resumeData = props.resumeData
  return(
    <div className="start">
      <Hero title={props.title} />
      <Content>
        <div className='self-img'>
          <img className=" ml-5 Photo" src={jonathanpalma} alt={jonathanpalma}/>
        </div>
        <div className='row'>
          <div className='container-fluid col-12 col-md-8'>
            <p>{resumeData.introduction}</p>
            <p>{resumeData.aboutMe}</p>
            <p>{resumeData.goal}</p>
            <p>{resumeData.languages}</p>
          </div>
        </div>
      </Content>
    </div>
  );
}

export default AboutPage;