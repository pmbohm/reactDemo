import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class ReactBootstrapTest extends Component {
    state = {}


    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                <Row >
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                </Jumbotron>

            </Container>


        )
    }
}

export default ReactBootstrapTest