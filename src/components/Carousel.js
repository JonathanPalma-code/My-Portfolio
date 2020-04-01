import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Card from './Card';
import pp from '../assets/images/pp.png';
import chess from '../assets/images/chess.png';

class Carousel extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Paladin's Path",
          subTitle: 'A RPG game made in Unreal Engine',
          imgSrc: pp,
          link: 'https://github.com/BenSheridanEdwards/Makers_Paladins_Path',
          selected: false
        },
        {
          id: 1,
          title: 'Chess Game',
          subTitle: 'Built in C# using .NET Platform',
          imgSrc: chess,
          link: 'https://github.com/JonathanPalma-code/Chess-Game',
          selected: false
        }
      ]
    }
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;
    
    items.forEach(item => {
      if(item.id !== id){
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  }

  makeItems = (items) => {
    return items.map(item => {
      return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
  }

  render(){
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;