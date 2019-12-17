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

                <table data-toggle="table">
                    <thead>
                    <tr>
                        <th>Item ID</th>
                        <th>Item Name</th>
                        <th>Item Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item 1</td>
                        <td>$1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Item 2</td>
                        <td>$2</td>
                    </tr>
                    </tbody>
                </table>


                <link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.15.5/dist/bootstrap-table.min.css">

            </Container>


        )
    }
}

export default ReactBootstrapTest