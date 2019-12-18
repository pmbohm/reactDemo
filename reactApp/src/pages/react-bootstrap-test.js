import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import BootstrapTable from "../components/BootstrapTable";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
                <Alert variant={'light'}>
                https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/about.html
                </Alert>

                <BootstrapTable />

            </Container>


        )
    }
}

export default ReactBootstrapTest