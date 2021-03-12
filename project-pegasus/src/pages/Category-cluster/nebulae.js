import React from "react";
import axios from "axios";
//Bootstraps
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
//CSS
import '../../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"


export default class Galaxies extends React.Component {

    state = {
        user_details: [],
    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/nebulae")
        this.setState({
            user_details: response.data
        })
    }

    //Form Field updates
    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    renderDetails = () => {
        let accum = [];


        for (let s of this.state.user_details) {
            accum.push(
                <div key={s._id} className="cateIndiviRow show-col">
                    <MDBCol size="3">
                        <MDBCard className="cateCardStyle" >
                            <Link to={"/nebulae/" + s._id}>
                                <MDBCardImage className="img-fluid cateImgSize" src={s.user_uploads.content.img} waves /></Link>
                            <MDBCardBody className='elegant-color white-text rounded-bottom'>
                                <MDBCardTitle>{s.user_uploads.content.title}</MDBCardTitle>
                                <hr className='hr-light' />
                                <MDBCardText>{s.user_uploads.details.name}</MDBCardText>
                                <Link to={"/nebulae/" + s._id}>
                                    <a className='black-text d-flex justify-content-end'><h5 className='white-text'>Engage<MDBIcon icon='angle-double-right' className='ml-2' /></h5>
                                    </a>
                                </Link>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </div>
            )
        }
        return accum
    }





    render() {
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol className="cateTitle">
                            <p>Nebulae</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol className="cateSub">
                            <p>
                                neb•u•lae nĕb′yə-lə
                        </p>
                            <p>A diffuse cloud of interstellar dust or gas or both, visible as luminous patches or areas of darkness depending on the way the mass absorbs or reflects incident light or emits its own light.</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* Filter */}
                <div className="filterWidth">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <div>
                                                <MDBInput label="Filter" name="filterCondi" value={this.state.filterCondi} onChange={this.updateFormField} />
                                            </div>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="filterText">Filter By:</Form.Label>
                                            <Form.Control
                                                as="select"
                                                size="sm"
                                                name="filterOp"
                                                value={this.state.filterOp}
                                                onChange={this.updateFormField}
                                                custom>
                                                <option value="title">Title</option>
                                                <option value="name">Name</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>
                                </Form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                {/* PAST HERE IS THE ACTUAL CONTENT */}
                <div className="cateCardContain">
                    <MDBRow className="cateIndiviRow show-col">

                        {this.renderDetails()}

                    </MDBRow>
                </div>

            </React.Fragment >

        )
    }
}


