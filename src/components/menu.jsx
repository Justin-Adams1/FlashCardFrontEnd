import React from "react";
import axios from 'axios';
import { Container, Row,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";

class Menu extends React.Component {

    async deleteCard() {
        try {
          await axios.delete("http://localhost:5000/api/collections/" + this.props.data._id + "/");
        } catch (error) {
          console.log(error);
        }
      }

    async deleteCollection(collectionId) {
        try {
        await axios.delete("http://localhost:5000/api/collections/" + this.props.data._id);
        } catch (error) {
        console.log(error);
        }
    }

    async modifyCollection() {
        try {
        await axios.delete("http://localhost:5000/api/collections/");
        } catch (error) {
        console.log(error);
        }
    }
    
    async modifyCard() {
        try {
        await axios.delete("http://localhost:5000/api/collections/");
        } catch (error) {
        console.log(error);
        }
    }
    
    async addCollection() {
        try {
        await axios.delete("http://localhost:5000/api/collections/");
        } catch (error) {
        console.log(error);
        }
    }
    
    async addCard() {
        try {
        await axios.delete("http://localhost:5000/api/collections/");
        } catch (error) {
        console.log(error);
        }
    }

  render() {
    return (
      <Container fluid>
        <Row>
            <button className="menuElement">ADD Collection</button>
            <button className="menuElement">ADD Card</button>
        </Row>
        <Row>
            <button className="menuElement">MODIFY Collection</button>
            <button className="menuElement">MODIFY Card</button>
        </Row>
        <Row>
            <button className="menuElement" onClick={() => this.deleteCollection(this.props.id)}>DELETE Collection</button>
            <button className="menuElement">DELETE Card</button>
        </Row>
      </Container>
    );
  }
}

export default Menu;
