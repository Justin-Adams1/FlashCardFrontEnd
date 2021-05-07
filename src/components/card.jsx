import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";

const Card = (props) => {
  return (
    <Carousel className="carouselCard">
        {props.buildCard(props.data)}
    </Carousel>
  );
};

export default Card;
