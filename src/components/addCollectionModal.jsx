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
                <Button className="menuElement" onClick={() => this.handleModalShowHide()}>
                    Add Collection
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Add Collection</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="CollectionTitle">
                            <Form.Label>Collection Title</Form.Label>
                            <Form.Control type="text" placeholder="New Collection name Here" />
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

