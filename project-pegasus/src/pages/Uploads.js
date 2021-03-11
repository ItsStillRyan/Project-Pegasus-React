import React from "react";
import axios from "axios";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//CSS
import '../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"


export default class Uploads extends React.Component {
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
        let response = await axios.get(baseURL + "/showCate")
        this.setState({
            web_cats: response.data
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

    //add entry
    uploadPosts = async event => {
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
        let response = await axios.post(baseURL + "/upload", newPost)

        newPost._id = response.data._id;

        let clone = [...this.state.user_details]

        clone.push(newPost)

        this.setState({
            user_details: clone
        })

        window.location.reload(false);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* title row */}
                    <Row>
                        <Col className="uploadsTitle">
                            <p>Uploads</p>
                        </Col>
                    </Row>
                    {/* image preview box row */}
                    <Row>
                        <Col className="imgPreview">
                            <img
                                src={this.state.img}

                            />
                        </Col>
                    </Row>
                </Container>
                <div className="formWidth">
                    <div className="imgDetails">
                        <Form>
                            <Form.Row>
                                <Col className="imgTitle">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.updateFormField} />
                                </Col>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control className="imgURL" type="text" placeholder="Image URL" name="img" value={this.state.img} onChange={this.updateFormField} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        name="category"
                                        value={this.state.category}
                                        onChange={this.updateFormField}
                                        custom
                                    >
                                        <option value="0">--Choose Category--</option>
                                        {this.renderCategories()}


                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>

                    <hr className='hr-light' />

                    <div className="persDetails">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Name / Username</Form.Label>
                                    <Form.Control className="imgURL" type="text" placeholder="Name" name="fname" value={this.state.fname} onChange={this.updateFormField} />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control className="imgURL" type="text" placeholder="Location" name="location" value={this.state.location} onChange={this.updateFormField} />
                                </Form.Group>
                                <Form.Group as={Col} sm="2" >
                                    <Form.Label>Personal Index</Form.Label>
                                    <Form.Control className="imgURL" type="text" placeholder="4 digits" name="pIndex" value={this.state.pIndex} onChange={this.updateFormField} />
                                </Form.Group>
                            </Form.Row>

                            <Col className="persDetailsCol">
                                <Form.Label>Equipment Used</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="What Equipments did you use?" name="equipment" value={this.state.equipment} onChange={this.updateFormField} />
                            </Col>
                            <Col className="persDetailsCol">
                                <Form.Label>Acquisitions / Processing</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Any post-processing needed for the image?" name="processing" value={this.state.processing} onChange={this.updateFormField} />
                            </Col>

                        </Form>
                    </div>
                    <div className="uploadBtn">
                        <Button variant="primary" size="lg" onClick={this.uploadPosts} active>
                            Upload
                    </Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}