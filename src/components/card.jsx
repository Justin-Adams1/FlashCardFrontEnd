import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Card extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>Name</Col>
        </Row>
        <Row>
          <Col>Strength // Weakness</Col>
        </Row>
      </Container>
    );
  }
}

export default Card;
