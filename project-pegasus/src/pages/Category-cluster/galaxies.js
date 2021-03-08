import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
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
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io/"


export default class Galaxies extends React.Component {

    async componentDidMount() {
        let response = await axios.get(baseURL + "/show")
        this.setState({
            small_details: response.data
        })
    }

    renderIndiviCard = () => {
        let accumulator = []
        for (let galax_post of this.state.small_details) {
            accumulator.push(
                <div key={galax_post._id}>
                    <Col>
                        <MDBCard className="cateCardStyle">
                            <MDBCardImage className="img-fluid" src="https://i.redd.it/qfpg400call61.png" waves />
                            <MDBCardBody>
                                <MDBCardTitle>{galax_post[0].user_uploads.content.title}</MDBCardTitle>
                                
                                <MDBCardText>{galax_post[0].user_uploads.details.name}</MDBCardText>
                                <MDBBtn href="#">Engage</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                </div>
            )
        }
        return accumulator
    }










    render() {
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
                    <Row className="cateIndiviRow">
                        {this.renderIndiviCard}
                        {/* <Col>
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
                        </Col> */}
                    </Row>
                </div>
            </React.Fragment>

        )
    }
}