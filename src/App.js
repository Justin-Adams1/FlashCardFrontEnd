import React from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Collection from "./components/collection";
import Card from "./components/card";
import Menu from "./components/menu";

class App extends React.Component {
  async apiCall() {
    try {
      const result = await axios.get("http://localhost:5000/api/collections/");
      const data = result.data;

      console.log(data);
      this.setState({ data });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    return (
      <Container className="background" fluid>
        <Container >
          <Row>
            <Col sm={{ span: 3, offset: 2}} className="collectionElement">
              <Collection />
            </Col>
            <Col sm={{ span: 5, offset: 1 }}>
              <Menu />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }} className="cardElement">
              <Card/>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default App;
