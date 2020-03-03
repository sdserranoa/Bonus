import React, { Component } from 'react';
import { Button, Card, Accordion, Form } from 'react-bootstrap';

var ids = 0;

class AddForm extends Component {

    state = {
        title: '',
        desc: ''
    }

    handleChangeTitle = (titleN) => {
        this.setState({ title: titleN.target.value });
    }

    handleChangeDesc = (descri) => {
        this.setState({ desc: descri.target.value });
    }

    render() {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <div className="text-center">
                            <Accordion.Toggle as={Button} eventKey="1">
                                Add Task
                            </Accordion.Toggle>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Task Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Title" onChange={this.handleChangeTitle} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Description" onChange={this.handleChangeDesc} />
                                </Form.Group>
                                <Button variant="primary" onClick={() => { this.props.onAdd(ids, this.state.title, this.state.desc); ids++ }}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }

}

export default AddForm;