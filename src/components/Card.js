import React from 'react';
import { useSpring, animated } from 'react-spring'

import CardInfo from './CardInfo';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 50, (x - window.innerWidth / 2) / 50, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card(props){
  const [propsAnime, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  
  return(
    <animated.div className="d-inline-block p-card" onClick={(e) => props.click(props.item)}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: propsAnime.xys.interpolate(trans) }}>
      <img className="j-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
    </animated.div>
  )
}

export default Card;