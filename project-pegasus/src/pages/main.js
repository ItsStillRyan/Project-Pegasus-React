import React from "react";
import { Link } from 'react-router-dom'
// bootstrap imports
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { MDBMask, MDBView } from "mdbreact";
// css imports
import '../main.css'
// image imports
import logo from '../images/logo-big.png'
import galaxies from '../images/categories-img/galaxies.png'
import nebulae from '../images/categories-img/nebulae.png'
import planetary from '../images/categories-img/planetary.png'
import starclusters from '../images/categories-img/starclusters.png'
import spacecraft from '../images/categories-img/spacecraft.png'
import others from '../images/categories-img/others.png'

const Main = () => {
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
                            The Pegasus Index
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mainTitleSub">
                            21<sup>h</sup> 12.6<sup>m</sup> - 00<sup>h</sup> 14.6<sup>m</sup> | +2.33° to +36.61°[1] | Quadrant NQ4 | 1121 sq. deg
                        </Col>
                    </Row>
                </Container>
            </div>
            <Row>
                <Col className="chevronDown">
                    <i className="fas fa-chevron-down"></i>
                </Col>
            </Row>
            <hr className='hr-light' />
            <div >
                <Container>
                    <Row>
                        <Col className="mainAbout1">
                            <p>
                                Share your pictures and collaberate with other astrophotographers.
                                </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mainAbout2">
                            <p>
                                Need help getting started?
                            </p>
                        </Col>
                    </Row>
                </Container>
                <hr className='hr-light' />
            </div>
            <div className="cateBtns">
                <div className="mainCateTitle">
                    <Container>
                        <Row>
                            <Col>
                                Categories
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container fluid>
                    <Row className="text-center">
                        <Col className="image-style show-col flex-center">
                            <MDBView hover>
                                <Link to="/galaxies">
                                    <img
                                        src={galaxies}
                                        width="500"
                                        height="275"
                                        alt="galaxies"
                                    />
                                    <MDBMask className="flex-center" overlay="black-light" style={{ height: "275px" }}>
                                        <p className="white-text">Galaxies</p>
                                    </MDBMask>
                                </Link>
                            </MDBView>
                        </Col>
                        <Col className="image-style show-col flex-center">
                            <MDBView hover>
                                <Link to="/starcluster">
                                    <img
                                        src={starclusters}
                                        width="500"
                                        height="275"
                                        alt="starcluster"
                                    />
                                    <MDBMask className="flex-center" overlay="black-light" style={{ height: "275px" }}>
                                        <p className="white-text">Star Clusters</p>
                                    </MDBMask>
                                </Link>
                            </MDBView>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="image-style show-col flex-center">
                            <MDBView hover>
                                <Link to="/planetary">
                                    <img
                                        src={planetary}
                                        width="500"
                                        height="275"
                                        alt="planetary"
                                    />
                                    <MDBMask className="flex-center" overlay="black-light" style={{ height: "275px" }}>
                                        <p className="white-text">Planetary</p>
                                    </MDBMask>
                                </Link>
                            </MDBView>
                        </Col>
                        <Col className="image-style show-col flex-center">
                            <MDBView hover>
                                <Link to="/nebulae">
                                    <img
                                        src={nebulae}
                                        width="500"
                                        height="275"
                                        alt="nebulae"
                                    />
                                    <MDBMask className="flex-center" overlay="black-light" style={{ height: "275px" }}>
                                        <p className="white-text">Nebulae</p>
                                    </MDBMask>
                                </Link>
                            </MDBView>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col className="image-style show-col flex-center">
                            <MDBView hover>
                                <Link to="/spacecraft">
                                    <img
                                        src={spacecraft}
                                        width="500"
                                        height="120"
                                        alt="spacecraft"
                                    />
                                    <MDBMask className="flex-center" overlay="black-light" style={{ height: "120px" }}>
                                        <p className="white-text">Space Craft</p>
                                    </MDBMask>
                                </Link>
                            </MDBView>
                        </Col>
                        <Col className="image-style show-col flex-center">
                            <MDBView hover>
                                <Link to="/others">
                                    <img
                                        src={others}
                                        width="500"
                                        height="120"
                                        alt="other"
                                    />
                                    <MDBMask className="flex-center" overlay="black-light" style={{ height: "120px" }}>
                                        <p className="white-text">Others</p>
                                    </MDBMask>
                                </Link>
                            </MDBView>
                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>
    )
}

export default Main