import React from "react";
import axios from "axios";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, } from 'mdbreact';
//CSS
import '../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"


export default class Update extends React.Component {
    state = {
        user_details: [],
        fname: "",
        location: "",
        pIndex: "",
        category: "",
        img: "",
        title: "",
        equipment: [],
        processing: [],
        cateList: [],
        web_cats: []
    }

    //loading categories
    async componentDidMount() {
        let response = await axios.get(baseURL + "/show/" + this.props.match.params._id)
        let response2 = await axios.get(baseURL + "/showCate")
        this.setState({
            user_details: response.data,
            fname: response.data.user_uploads.details.name,
            location: response.data.user_uploads.details.location,
            pIndex: response.data.user_uploads.details.pIndex,
            img: response.data.user_uploads.content.img,
            title: response.data.user_uploads.content.title,
            equipment: response.data.user_uploads.content.equipment,
            processing: response.data.user_uploads.content.processing,
            web_cats: response2.data

        })
    }

    renderCategories = () => {
        let accum = []
        for (let x of this.state.web_cats) {
            for (let i = 0; i < x.categories.length; i++) {
                accum.push(
                    <option value={x.categories[i]}>{x.categories[i]}</option>

                )
            }
        }
        return accum
    }

    //Form Field updates
    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //update post
    updatePost = () => {
        let newPost = {
            user_uploads: {
                details: {
                    name: this.state.fname,
                    location: this.state.location,
                    pIndex: this.state.pIndex,
                    category: this.state.category
                },
                content: {
                    img: this.state.img,
                    title: this.state.title,
                    equipment: this.state.equipment,
                    processing: this.state.processing,
                }
            }
        }

        // let clone = this.state.user_details.slice()

        // let index = -1
        // for(let i=0; i< this.state.user_details.length; i++){
        //     let currentPost = this.state.user_details[i]
        //     if(currentPost._id == newPost._id){
        //         index = i
        //         break
        //     }
        // }

        // clone[index] = newPost

        // this.setState({
        //     user_details: clone
        // })
    }


    //delete
    deletePost = post => {
        let index = this.state.user_details.findIndex(t => t._id === post._id)

        let clone = [
            ...this.state.user_details.slice(0, index),
            ...this.state.user_details.slice(index + 1)
        ]
        this.setState({
            user_details: clone
        })
    }


    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        if (event.target.reportValidity()) {
            this.updatePost()
        }

        console.log(event.target.reportValidity())

    };





    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* title row */}
                    <Row>
                        <Col className="uploadsTitle">
                            <p>Update</p>
                        </Col>
                    </Row>
                    {/* image preview box row */}
                    <Row>
                        <Col className="imgPreview">
                            <img
                                src={this.state.img}
                                alt={this.state.title}
                            />
                        </Col>
                    </Row>
                </Container>
                <div className="formWidth">
                    <div className="imgDetails">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol>
                                    <form
                                        className="needs-validation"
                                        onSubmit={this.submitHandler}
                                        noValidate
                                    >
                                        <MDBRow>
                                            <MDBCol>
                                                <input
                                                    value={this.state.title}
                                                    name="title"
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    required
                                                />
                                                <div className="invalid-feedback">Give your post a title!</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow>
                                            <MDBCol md="6" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.img}
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    name="img"
                                                    placeholder="Image URL"
                                                    required
                                                />
                                                <div className="invalid-feedback">Post your photograph!</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>

                                            <MDBCol md="6" className="mb-3 mt-3">
                                                <select className="browser-default custom-select"
                                                    name="category"
                                                    value={this.state.category}
                                                    onChange={this.updateFormField}
                                                    custom
                                                    required
                                                >
                                                    <option>--Choose Category--</option>
                                                    {this.renderCategories()}
                                                </select>

                                            </MDBCol>
                                        </MDBRow>
                                        <hr className='hr-light' />
                                        <MDBRow>
                                            <MDBCol md="5" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.fname}
                                                    name="fname"
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name or Username"
                                                    required
                                                />
                                                <div className="invalid-feedback">Who do we owe it to this picture?</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                            <MDBCol md="5" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.location}
                                                    name="location"
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Location"
                                                />
                                                <small id="emailHelp" className="form-text text-muted">You don't have to post your location if you don't want to!</small>
                                            </MDBCol>
                                            <MDBCol md="2" className="mb-3 mt-3">
                                                <input
                                                    value={this.state.pIndex}
                                                    onChange={this.updateFormField}
                                                    type="text"
                                                    className="form-control"
                                                    name="pIndex"
                                                    placeholder="Personal Index"
                                                    required
                                                />
                                                <small id="emailHelp" className="form-text text-muted">Never share your Personal Index Numbers</small>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className="mb-3 mt-3">
                                                <textarea
                                                    value={this.state.equipment}
                                                    name="equipment"
                                                    onChange={this.updateFormField}
                                                    type="textarea"
                                                    className="form-control"
                                                    placeholder="Equipment Used"
                                                    rows="4"
                                                    required
                                                />

                                                <div className="invalid-feedback">What telescope and camera did you use?</div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol className="mb-3 mt-3">
                                                <textarea
                                                    value={this.state.processing}
                                                    name="processing"
                                                    onChange={this.updateFormField}
                                                    type="textarea"
                                                    className="form-control"
                                                    placeholder="Acquisition/ Post-processes Used"
                                                    rows="4"
                                                    required
                                                />

                                                <div className="invalid-feedback">Any post processing you did </div>
                                                <div className="valid-feedback">Looks good!</div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBBtn color="primary" type="submit">Upload</MDBBtn>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol className="mt-5">
                                    <MDBBtn color="danger" type="submit" onClick={this.deletePost}>Delete</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}