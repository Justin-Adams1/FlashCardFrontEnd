import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Menu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>ADD Collection</Col>
          <Col>ADD Card</Col>
        </Row>
        <Row>
          <Col>MODIFY Collection</Col>
          <Col>MODIFY Card</Col>
        </Row>
        <Row>
          <Col>DELETE Collection</Col>
          <Col>DELETE Card</Col>
        </Row>
      </Container>
    );
  }
}

export default Menu;
