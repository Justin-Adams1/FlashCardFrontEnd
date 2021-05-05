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
        <Container className="mainDisplay">
          <Row>
            <Col>
              <Collection />
            </Col>
            <Col>
              <Menu />
            </Col>
          </Row>
          <Card />
        </Container>
      </Container>
    );
  }
}

export default App;
