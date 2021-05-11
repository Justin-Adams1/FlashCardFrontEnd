import React from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import "./card.css";

class BootstrapModal extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div>
                <Button className="addCard" onClick={() => this.handleModalShowHide()}>
                    Add
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Add Card</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="cardTitle">
                            <Form.Label>Card Title</Form.Label>
                            <Form.Control type="text" placeholder="New Card Title Here" />
                            </Form.Group>
                            <Form.Group controlId="DefinitionOne">
                            <Form.Label>Definition One</Form.Label>
                            <Form.Control type="text" placeholder="Definition One" />
                            </Form.Group>
                            <Form.Group controlId="DefinitionTwo">
                            <Form.Label>Definition Two</Form.Label>
                            <Form.Control type="text" placeholder="Definition Two" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
    
}

export default BootstrapModal;

