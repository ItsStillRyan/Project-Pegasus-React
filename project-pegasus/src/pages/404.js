import React from "react";
import ReactDOM from "react-dom";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
//CSS
import '../main.css'
// image imports
import logo from '../images/logo-big.png'


const PageNotFound = () => {
    return(
        <React.Fragment>
            <div>
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
                            The Pegasus Index
                        </Col>
                    </Row>
                    <Row>
                        <Col className="title-sub text-center">
                        Are you lost? Page not found.
                        </Col>
                    </Row>
                </Container>

            </div>
        </React.Fragment>

    )
}
export default PageNotFound