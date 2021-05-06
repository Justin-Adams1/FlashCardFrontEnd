import React from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Collection from "./components/collection";
import Card from "./components/card";
import Menu from "./components/menu";

class App extends React.Component {
  constructor(props){
    super(props)
    this.buildCollectionSlide = this.buildCollectionSlide.bind(this)
    this.selectCollection = this.selectCollection.bind(this)    
    this.buildCard = this.buildCard.bind(this)
  }

  state = {
    data : [],
    dataReady : false,
    cardSelection: []
  }
  async apiCall() {
    try {
      const result = await axios.get("http://localhost:5000/api/collections/");
      const data = result.data;

      console.log(data);
      this.setState({ data: data, dataReady: true });
    } catch (error) {
      console.log(error);
    }
  }

  selectCollection(collection){
    this.setState({ cardSelection: collection });
  } 

  buildCollectionSlide(data){
    console.log(data);
    const mapResult = data.map(collection => {
        return (
          <Carousel.Item key={collection.id}>
            <h2>{collection.name}</h2>
            <button onClick={() => this.selectCollection(collection)}>Select</button>
          </Carousel.Item>
        );
      })
    return mapResult;
  }

  buildCard(cardsObject){
    const collectionResult = cardsObject.cards.map(card => {
      return (
      <Carousel.Item key={card.id}>
        <h2>{card.heroName}</h2>
        <h2>{card.strength}{card.weakness}</h2>
      </Carousel.Item>
        );
      })
      return collectionResult;
  }

  componentDidMount() {
    this.apiCall();
  }

  render() {
    if(this.state.dataReady){
      return (
        <Container className="background" fluid>
          <Container >
            <Row>
              <Col sm={{ span: 4, offset: 1}} className="collectionElement">
                <Collection data={this.state.data} buildCollectionSlide={this.buildCollectionSlide}/>
              </Col>
              <Col sm={{ span: 5, offset: 1 }}>
                <Menu />
              </Col>
            </Row>
            <br/>
            <br/>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Card data={this.state.cardSelection} buildCard={() => this.buildCard}/>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    }
    else{
      return(<div></div>)
    }
   
  }
}

export default App;
