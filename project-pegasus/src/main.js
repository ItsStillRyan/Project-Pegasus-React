import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './main.css'
import logo from './images/logo-big.png'

export default function Main(props) {
    return (
        <React.Fragment>
            
            <Container>
                <Row>
                    <Col className="logo-col">
                        <img
                            src={logo}
                            width="350"
                            height="350"
                            alt="Pegasus Logo"
                        />
                    </Col>
                    <Col className="title-col">
                       Pegasus
                    </Col>
                </Row>
            </Container>


        </React.Fragment>
    )
}

