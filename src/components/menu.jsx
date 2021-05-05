import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";

class Menu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="menuElement">ADD Collection</Col>
          <Col className="menuElement">ADD Card</Col>
        </Row>
        <Row>
          <Col className="menuElement">MODIFY Collection</Col>
          <Col className="menuElement">MODIFY Card</Col>
        </Row>
        <Row>
          <Col className="menuElement">DELETE Collection</Col>
          <Col className="menuElement">DELETE Card</Col>
        </Row>
      </Container>
    );
  }
}

export default Menu;
