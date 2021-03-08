import React from "react";
import axios from "axios";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, } from 'mdbreact';
//CSS
import '../../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"


export default class Galaxies extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {
    //         image: " ",
    //         uname: " ",
    //         title: " "
    //     }
    // }

    // componentDidMount = () =>{
    //     axios.get(baseURL+"/show").then(response => {
    //         // console.log(response.data[0].user_uploads.content.img)
    //         this.setState ({
    //             image: response.data[1].user_uploads.content.img,
    //             uname: response.data[1].user_uploads.details.name,
    //             title: response.data[1].user_uploads.content.title
    //         })
    //     })

    // }

    state = {
        user_details: []
    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/show")
        this.setState({
            user_details: response.data
        })
    }

    renderDetails = () => {
        let accum = [];
        for (let s of this.state.user_details) {
            accum.push(
                <div key={s._id}>
                        <Col>
                            <MDBCard className="cateCardStyle">
                                <MDBCardImage className="img-fluid cateImgSize" src={s.user_uploads.content.img} waves />
                                <MDBCardBody>
                                    <MDBCardTitle>{s.user_uploads.content.title}</MDBCardTitle>
                                    <MDBCardText>{s.user_uploads.details.name}</MDBCardText>
                                    <MDBBtn href="#">Engage</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Col>
                </div>
            )
        }
        return accum
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
                        {this.renderDetails()}
                    </Row>
                </div>
            </React.Fragment>

        )
    }
}


