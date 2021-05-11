import React from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";

class Menu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <button
            type="button"
            className="menuElement"
            data-toggle="modal"
            data-target="#ModalAddCollection"
          >
            ADD Collection
          </button>
          <button
            type="button"
            className="menuElement"
            data-toggle="modal"
            data-target="#ModalAddCard"
          >
            ADD Card
          </button>
        </Row>
        <Row>
          <button
            type="button"
            className="menuElement"
            data-toggle="modal"
            data-target="#ModalModifyCollection"
          >
            MODIFY Collection
          </button>
        </Row>
        <Row>
          <button
            className="menuElement"
            onClick={() => this.deleteCollection(this.props.id)}
          >
            DELETE Collection
          </button>
        </Row>
      </Container>
    );
  }

  async deleteCollection(collectionId) {
    try {
      await axios.delete(
        "http://localhost:5000/api/collections/" + this.props.data._id
      );
    } catch (error) {
      console.log(error);
    }
  }

  async modifyCollection() {
    //capture form data -- Collection Name
    try {
      await axios.put("http://localhost:5000/api/collections/");
    } catch (error) {
      console.log(error);
    }
  }

  async addCollection() {
    //capture form data -- Collection Name
    try {
      await axios.post("http://localhost:5000/api/collections/");
    } catch (error) {
      console.log(error);
    }
  }

  async addCard() {
    //capture form data -- Card Title, DefinitionOne, DefinitionTwo
    try {
      await axios.post("http://localhost:5000/api/collections/");
    } catch (error) {
      console.log(error);
    }
  }
}

export default Menu;
