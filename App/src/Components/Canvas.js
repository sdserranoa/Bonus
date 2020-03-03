import React, { Component } from 'react';
import List from '../Components/List'
import { Row, Container } from 'react-bootstrap';

class Canvas extends Component {

    state = {
        lists: [
            {
                titulo: 'To Do'
            },
            {
                titulo: 'Doing'
            },
            {
                titulo: 'Done'
            }
        ]
    }

    render() {
        return (
            <div>

                <Container fluid="true">
                    <h1 style={{ textAlign: "center" }}>My Kanban App</h1>
                    <hr></hr>
                    <Row>
                        {this.state.lists.map(t => (<List titulo={t.titulo} key={t.id}/>))}
                    </Row>
                </Container>
            </div>
        );
    };

}

export default Canvas;