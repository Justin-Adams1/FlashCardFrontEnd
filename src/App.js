import React from "react";
import axios from "axios";
import "./App.css";
import { Container, Row, Col, Carousel, ButtonGroup, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Collection from "./components/collection";
import Card from "./components/card";
import Menu from "./components/menu";
import AddCardModal from './components/addCardModal.jsx';
import ModifyCardModal from './components/modifyCardModal.jsx';
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
    body: {},
    isOpen: false
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
          <ButtonGroup>
            <AddCardModal className ="addCard" onClick={()=>{this.modifyCard(cardsObject, card)}}>Add</AddCardModal>
            <ModifyCardModal className ="modifyCard" onClick={()=>{this.modifyCard(cardsObject, card)}}>Modify</ModifyCardModal>
            <Button className ="deleteCard" onClick={()=>{this.deleteCard(cardsObject, card)}}>Delete</Button>
          </ButtonGroup>
          <br/><br/>
          <h2 className="nameStyle">{card.title}</h2>        
            <div>
                {
                    this.state.show? <div>
                    <h4 className="textStyle">
                      <li>{card.definitionOne}</li>
                      <li>{card.definitionTwo}</li>
                    </h4>
                    </div> : null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? 'Hide' : 'Show'}</button>
            </div>
          <p className="cardCountStyle">{(cardsObject.cards.indexOf(card))+1}/{cardsObject.cards.length}</p>
          </Carousel.Item>
        );
      });
      return collectionResult;
    }
  }
  
  async deleteCard(collection, card) {
    try {
      await axios.delete(
        "http://localhost:5000/api/collections/" + collection._id + "/" + card._id
      );
    } catch (error) {
      console.log(error);
    }
    alert("Delete selected card!");
  }

  async modifyCard(collection, card) {
    //capture form data -- Card Title, DefinitionOne, DefinitionTwo

    // try {
    //   await axios.put("http://localhost:5000/api/collections/");
    // } catch (error) {
    //   console.log(error);
    // }
  }
  
  async addCard() {
    //capture form data -- Card Title, DefinitionOne, DefinitionTwo
    // try {
    //   await axios.post("http://localhost:5000/api/collections/");
    // } catch (error) {
    //   console.log(error);
    // }
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
              <Col sm={{ span: 5, offset: 2 }} className="collectionElement">
                <Collection
                  data={this.state.data}
                  buildCollectionSlide={this.buildCollectionSlide}
                />
              </Col>
              <Col sm={{ span: 2, offset: 1 }}>
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