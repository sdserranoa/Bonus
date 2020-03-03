import React, { Component } from 'react';
import Task from '../Components/Task';
import AddForm from '../Components/AddForm';
import { Card, Col  } from 'react-bootstrap';


class List extends Component {

    state = {
        tasks: []
    }

    handleAdd = (idN, nom, desc) => {
        const taskss = this.state.tasks.concat({ id: idN, nombre: nom, descripcion: desc });
        this.setState({ tasks: taskss });
    }

    handleDelete = id => {
        const tasks = this.state.tasks.filter(t => t.id !== id);
        this.setState({ tasks });
    }

    render() {
        return (
            <Col xs={4}>
                <div>
                    <Card>
                        <Card.Header>{this.props.titulo}</Card.Header>
                        <Card.Body>
                            {this.state.tasks.map(t => (<Task task={t} key={t.id} onDelete={this.handleDelete} />))}
                            <br></br>
                            <AddForm id={this.state.tasks.length} onAdd={this.handleAdd} />
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        );
    }
}

export default List;