import React from "react";
import { Link } from 'react-router-dom'
// bootstrap imports
import { Row, Col, Container, Button } from 'react-bootstrap'
import { MDBMask, MDBView } from "mdbreact";
// css imports
import '../main.css'
import '../animations.css'
// image imports
import logo from '../images/logo-big.png'
import galaxies from '../images/categories-img/galaxies.png'
import nebulae from '../images/categories-img/nebulae.png'
import planetary from '../images/categories-img/planetary.png'
import starclusters from '../images/categories-img/starclusters.png'
import spacecraft from '../images/categories-img/spacecraft.png'
import others from '../images/categories-img/others.png'
import mainpic1 from '../images/mainpic1.png'
import mainpic2 from '../images/mainpic2.png'
// animated image logo imports
import ring1 from '../images/main-logo/ring1.png'
import ring2 from '../images/main-logo/ring2.png'
import ring3 from '../images/main-logo/ring3.png'
import ring4 from '../images/main-logo/ring4.png'
import backgroundCenter from '../images/main-logo/backgroundCenter.png'
import pegaCenter from '../images/main-logo/pegaCenter.png'

export default class Main extends React.Component {

    componentDidMount() {

    }

    popup = () => {
        return (
            <div id="mainPopUp">
                <Container>
                    <Row>
                        <Col xs={10} className="mainPopUpCol">

                        </Col>
                        <Col xs={2} className="mainPopUpCol" >
                            <Button
                                variant="link"
                                id="popUpClose"
                                onClick={() => {
                                    document.querySelector("#mainPopUp").style.display = "none"
                                    document.querySelector("#mainScreenBlur").style.filter = "blur(0px)"
                                }}
                            >
                                <i class="fas fa-times"></i>
                            </Button>
                        </Col>
                    </Row>

                    <div id="mainPopUpText">
                        <Row id="mainPopUpImg">
                            <Col>
                                <img
                                    src={logo}
                                    width="100"
                                    height="100"
                                    alt="Pegasus Logo"
                                />
                            </Col>
                        </Row>
                        <Row id="mainPopUpTitle">
                            <Col><h1>Welcome!</h1></Col>
                        </Row>
                        <Row>
                            <Col><p>Need help getting started?</p></Col>
                        </Row>
                    </div>
                    <div id="mainPopUpButton">
                        <Row>
                            <Col>
                                <Link to="/gettingstarted">
                                    <Button
                                        variant="outline-info"
                                        id="mainPopUpIndivButton">
                                        Getting Started
                            </Button>
                                </Link>

                            </Col>
                            <Col>
                            <Link to="/uploads">
                            <Button
                                    variant="outline-info"
                                    id="mainPopUpIndivButton">
                                    Upload into the Index
                            </Button>
                            </Link>      
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.popup()}
                <div id="mainScreenBlur">
                    <div>
                        <Container>
                            <div className="mainLogoSec">
                                <Row >
                                    <Col className="logo-col ring1">
                                        <img
                                            src={ring1}
                                            width="400"
                                            height="400"
                                            alt="Pegasus Logo"
                                        />
                                    </Col>
                                    <Col className="logo-col ring2">
                                        <img
                                            src={ring2}
                                            width="400"
                                            height="400"
                                            alt="Pegasus Logo"
                                        />
                                    </Col>
                                    <Col className="logo-col ring3">
                                        <img
                                            src={ring3}
                                            width="400"
                                            height="400"
                                            alt="Pegasus Logo"
                                        />
                                    </Col>
                                    <Col className="logo-col ring4">
                                        <img
                                            src={ring4}
                                            width="400"
                                            height="400"
                                            alt="Pegasus Logo"
                                        />
                                    </Col>
                                    <Col className="logo-col backgroundCenter">
                                        <img
                                            src={backgroundCenter}
                                            width="400"
                                            height="400"
                                            alt="Pegasus Logo"
                                        />
                                    </Col>
                                    <Col className="logo-col pegaCenter">
                                        <img
                                            src={pegaCenter}
                                            width="400"
                                            height="400"
                                            alt="Pegasus Logo"
                                        />
                                    </Col>

                                </Row>
                            </div>
                            <Row>
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

                    <div className="mainDescSec">
                        <div className="innerMainDescSec">
                            <Row className="mainAbout1">
                                <Col>
                                    <img
                                        src={mainpic1}
                                        height="300"
                                        alt="Pegasus Logo"
                                    />
                                </Col>
                                <Col className="mainTextDesc">
                                    <p>
                                        Share your pictures and collaberate with other astrophotographers.
                                </p>
                                </Col>
                            </Row>
                            <Row className="mainAbout2">
                                <Col className="mainTextDesc">
                                    <p>
                                        New to Astrophotography? <br />
                                Need help getting started?<br />
                                        <Link to="/gettingstarted">
                                            <a>Click here!</a>
                                        </Link>
                                    </p>
                                </Col>
                                <Col>
                                    <img
                                        src={mainpic2}
                                        height="300"
                                        alt="Pegasus Logo"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="chevronDown">
                                    <i className="fas fa-chevron-down"></i>
                                </Col>
                            </Row>
                        </div>
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

                    <Row>
                        <Col className="chevronDown">
                            <i class="fas fa-chevron-up"></i>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }

}

