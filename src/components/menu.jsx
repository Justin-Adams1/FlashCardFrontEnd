import React from "react";
import axios from "axios";
import { Container, Row, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";
import AddCollectionModal from './addCollectionModal.jsx';
import ModifyCollectionModal from './modifyCollectionModal.jsx';
import "./card.css";

class Menu extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <AddCollectionModal className="menuElement"></AddCollectionModal>
        </Row>
        <Row>
          <ModifyCollectionModal className="menuElement"></ModifyCollectionModal>
        </Row>
        <Row>
          <Button className="menuElement" onClick={()=>{this.deleteCollection(this.props.data._id)}}>Delete Collection</Button>
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
    alert("Deleted selected collection!");
  }

  async modifyCollection() {
    //capture form data -- Collection Name, unsure how to package JSON data correctly from here into the axios request.
    // try {
    //   await axios.put("http://localhost:5000/api/collections/");
    // } catch (error) {
    //   console.log(error);
    // }
  }
}



export default Menu;
