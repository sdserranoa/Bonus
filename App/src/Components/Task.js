import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';

class Task extends Component {

    state = this.props.task;

    render() {
        return (
            <div>
                <Card>
                    <Card.Header as="h5" >{this.state.nombre}</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text className="text-center">
                            {this.state.descripcion}
                        </Card.Text>
                        <div className="text-right">
                            <Button variant="primary" className="text-right" onClick={() => this.props.onDelete(this.props.task.id)}>-</Button>
                        </div>

                    </Card.Body>
                </Card>
                <br></br>
            </div>
        );
    }
}

export default Task;