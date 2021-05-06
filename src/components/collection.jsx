import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './collection.css';

class Collection extends React.Component {
  render() {
    return (
      <Carousel className="carouselStyle">
        {this.props.buildCollectionSlide(this.props.data)}
      </Carousel>
    );
  }
}

export default Collection;
