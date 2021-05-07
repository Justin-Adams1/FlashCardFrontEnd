import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./collection.css";

const Collection = (props) => {
  return (
    <Carousel className="carouselStyle">
        {props.buildCollectionSlide(props.data)}
    </Carousel>
  );
};

export default Collection;
