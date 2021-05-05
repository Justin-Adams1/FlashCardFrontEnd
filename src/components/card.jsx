import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './card.css';

class Card extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="nameStyle">Name</Col>
        </Row>
        <Row>
          <Col className="textStyle">Strength // Weakness</Col>
        </Row>
      </Container>
    );
  }
}

export default Card;
