import React from "react";
import ReactDOM from "react-dom";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
//CSS
import '../../main.css'
//image imports
import testImg from '../../images/categories-img/galaxies.png'



const Galaxies = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="cateTitle">
                        <p>Galaxies</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="cateSub">
                        <p>
                            gal•ax•y găl′ək-sē
                        </p>
                        <p>Any of numerous large-scale aggregates of stars, gas, and dust that constitute the universe, containing an average of 100 billion (10<sup>11</sup>) solar masses and ranging in diameter from 1,500 to 300,000 light-years.</p>
                    </Col>
                </Row>
            </Container>

            {/* PAST HERE IS THE ACTUAL CONTENT */}
            <div className="cateCardContain">
                <Row>
                    <Col>
                        <MDBCard className="cateCardStyle">
                            <MDBCardImage className="img-fluid" src="https://i.redd.it/qfpg400call61.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>M42 - Orion Nebula</MDBCardTitle>
                                <MDBCardText>
                                    by u/_snowtrooper_
                                    </MDBCardText>
                                <MDBBtn href="#">Engage</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard className="cateCardStyle">
                            <MDBCardImage className="img-fluid" src="https://i.redd.it/qfpg400call61.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>M42 - Orion Nebula</MDBCardTitle>
                                <MDBCardText>
                                    by u/_snowtrooper_
                                    </MDBCardText>
                                <MDBBtn href="#">Engage</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                    <Col>
                        <MDBCard className="cateCardStyle">
                            <MDBCardImage className="img-fluid" src="https://i.redd.it/qfpg400call61.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>M42 - Orion Nebula</MDBCardTitle>
                                <MDBCardText>
                                    by u/_snowtrooper_
                                    </MDBCardText>
                                <MDBBtn href="#">Engage</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>



            </div>
        </React.Fragment>

    )
}
export default Galaxies