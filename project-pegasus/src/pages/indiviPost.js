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
        user_details: []
    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/show/" + this.props.match.params._id)
        let { postID } = this.props.match.params
        this.setState({
            user_details: response.data,
            postID
        })
    }

    // renderPost = renPost => {
    //     return (
    //     )
    // }



    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* title row */}
                    <Row>
                        <Col className="postTitle">
                            <p></p>
                        </Col>
                    </Row>
                    {/* image preview box row */}
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>



            </React.Fragment>
        )
    }
}