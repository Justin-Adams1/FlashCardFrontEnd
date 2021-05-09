import React from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Collection from "./components/collection";
import Card from "./components/card";
import Menu from "./components/menu";
import "./components/card.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.buildCollectionSlide = this.buildCollectionSlide.bind(this);
    this.selectCollection = this.selectCollection.bind(this);
    this.buildCard = this.buildCard.bind(this);
  }

  state = {
    data: [],
    dataReady: false,
    cardSelection: [],
  };
  async apiCall() {
    try {
      const result = await axios.get("http://localhost:5000/api/collections/");
      const data = result.data;
      this.setState({ data: data, dataReady: true });
    } catch (error) {
      console.log(error);
    }
  }

  selectCollection(collection) {
    this.setState({ cardSelection: collection });
  }

  buildCollectionSlide(data) {
    const mapResult = data.map((collection) => {
      return (
        <Carousel.Item key={collection.id} className="carouselCollection">
          <h2>{collection.name}</h2>
          <button onClick={() => this.selectCollection(collection)}>
            Select
          </button>
        </Carousel.Item>
      );
    });
    return mapResult;
  }

  buildCard(cardsObject) {
    if (cardsObject.cards) {
      const collectionResult = cardsObject.cards.map((card) => {
        return (
          <Carousel.Item key={card.id}>
            <h2 className="nameStyle">{card.title}</h2>
            <h4 className="textStyle">
              <li>{card.definitionOne}</li>
              <li>{card.definitionTwo}</li>
            </h4>
          </Carousel.Item>
        );
      });
      return collectionResult;
    }
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    if (this.state.dataReady) {
      return (
        <Container className="background" fluid>
          <Container>
            <Row>
              <Col sm={{ span: 4, offset: 1 }} className="collectionElement">
                <Collection
                  data={this.state.data}
                  buildCollectionSlide={this.buildCollectionSlide}
                />
              </Col>
              <Col sm={{ span: 5, offset: 1 }}>
                <Menu data={this.state.cardSelection} />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md={{ span: 7, offset: 2 }}>
                <Card
                  data={this.state.cardSelection}
                  buildCard={this.buildCard}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      );
    } else {
      return <div></div>;
    }
  }
}

export default App;
