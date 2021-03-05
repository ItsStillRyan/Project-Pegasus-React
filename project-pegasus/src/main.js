import React from "react";
// bootstrap imports
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// css imports
import './main.css'
// image imports
import logo from './images/logo-big.png'
import galaxies from './images/categories-img/galaxies.png'
import nebulae from './images/categories-img/nebulae.png'
import planetary from './images/categories-img/planetary.png'
import starclusters from './images/categories-img/starclusters.png'
import spacecraft from './images/categories-img/spacecraft.png'
import others from './images/categories-img/others.png'

export default function Main(props) {
    return (
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
                            Pegasus
                        </Col>
                    </Row>
                </Container>
            </div>

            <div>

            </div>

            <div>
                <Container fluid>
                    <Row>
                        <Col className="image-style show-col">
                            <a className="cateGalaxies" href="#">
                            <img
                                src={galaxies}
                                width="500"
                                height="300"
                                alt="Pegasus Logo"
                            />
                            </a>
                        </Col>
                        <Col className="image-style show-col">
                            <img
                                src={starclusters}
                                width="500"
                                height="300"
                                alt="Pegasus Logo"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="image-style show-col">
                            <img
                                src={planetary}
                                width="500"
                                height="300"
                                alt="Pegasus Logo"
                            />
                        </Col>
                        <Col className="image-style show-col">
                            <img
                                src={nebulae}
                                width="500"
                                height="300"
                                alt="Pegasus Logo"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="image-style show-col">
                            <img
                                src={spacecraft}
                                width="500"
                                height="120"
                                alt="Pegasus Logo"
                            />
                        </Col>
                        <Col className="image-style show-col">
                            <img
                                src={others}
                                width="500"
                                height="120"
                                alt="Pegasus Logo"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )
}

