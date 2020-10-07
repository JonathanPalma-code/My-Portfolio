import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import pp from '../assets/images/pp.png';
import chess from '../assets/images/chess.jpg';
import ihshg from '../assets/images/ihshg.png'


const properties = {
  duration: 2500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  scale: 1.4
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...properties}>
        <div className="each-slide">
          <div>
            <a href='https://github.com/BenSheridanEdwards/Makers_Paladins_Path'>
              <img src={pp} alt='pp' />
            </a>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <a href='https://github.com/JonathanPalma-code/Chess-Game'>
              <img src={chess} alt='chess' />
            </a>
          </div>
        </div>
        <div className="each-slide">
          <div>
            <a href='https://github.com/JonathanPalma-code/IHSHG-Project'>
              <img src={ihshg} alt='ihshg' />
            </a>
          </div>
        </div>
      </Zoom>
    </div >
  )
}

export default Slideshow;