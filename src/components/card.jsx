import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <Carousel className="carouselCard">
        {console.log(this.props.data)}
        {console.log(this.props)}
        {this.props.buildCard(this.props.data)}
      </Carousel>
    );
  }
}

export default Card;
