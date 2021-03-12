import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
//CSS
import '../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"
export default class indiviPost extends React.Component {

    state = {
        user_details: [],
        name: "",
        location: "",
        pIndex: "",
        img: "",
        title: "",
        equipment: "",
        processing: "",
    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/show/" + this.props.match.params._id)
        console.log(response.data.user_uploads.details.name)
        this.setState({
            user_details: response.data,
            name: response.data.user_uploads.details.name,
            location: response.data.user_uploads.details.location,
            pIndex: response.data.user_uploads.details.pIndex,
            img: response.data.user_uploads.content.img,
            title: response.data.user_uploads.content.title,
            equipment: response.data.user_uploads.content.equipment,
            processing: response.data.user_uploads.content.processing,

        })

    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* image */}
                    <Row>
                        <Col className="postImg">
                            <img
                                src={this.state.img}
                            />
                        </Col>
                    </Row>
                    <div className="postTextWidth">
                        {/* title */}
                        <Row>
                            <Col className="postTitle">
                                <p>{this.state.title}</p>
                            </Col>
                        </Row>
                        {/* subtitle - name */}
                        <Row>
                            <Col className="postDivider"md="1">
                                <p>|</p>
                            </Col>
                            <Col className="postsubTitle">
                                <p><span>Photography by: </span>{this.state.name}</p>
                            </Col>
                            <Col className="postDivider"md="1">
                                <p>|</p>
                            </Col>
                        {/* subtitle - location */}
                            <Col className="postsubTitle">
                                <p><span>Location: </span>{this.state.location}</p>
                            </Col>
                            <Col className="postDivider" md="1">
                                <p>|</p>
                            </Col>
                        </Row>

                        <hr className='hr-light' />

                        {/* Equipment */}
                        <Row>
                            <Col className="equip-AQPTitle">
                                <p>Equipment Used</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="equip-AQPDesc">
                                <p>{this.state.equipment}</p>
                            </Col>
                        </Row>
                        {/* Aquisitions and Processing */}
                        <Row>
                            <Col className="equip-AQPTitle">
                                <p>Aquisitions and Processing</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="equip-AQPDesc">
                            <p>{this.state.processing}</p>
                            </Col>
                        </Row>



                    </div>
                </Container>
            </React.Fragment>
        )
    }
}