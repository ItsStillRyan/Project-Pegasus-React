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
        details:[{
            fnameN: "",
            locationN: ""
        }],
        fname: "",
        location: ""
    }

    addpost = async event => {
        let newPost = {
            fnameN:this.state.fname,
            locationN:this.state.location
        }

        let response = await axios.post(baseURL + "/upload", newPost)
        newPost._id = response.data._id

        let clone = [...this.state.details]

        clone.push(newPost)

        this.setState({
            details: clone
        })
    }

    //Form Field updates
    updateFormField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //displaying categories
    async componentDidMount() {
        let response = await axios.get(baseURL + "/showCate")
        this.setState({
            web_cats: response.data
        })
    }

    // renderCate = () => {
    //     let accum = []
    //     for (let x in this.state.web_cats.categories){
    //         accum.push(
    //         <option value="{x}">{x[0].categories[x]}</option>
    //         )
    //     }
    //     return accum
    // }

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
                                src=""
                                alt="Pegasus Logo"
                            />
                        </Col>
                    </Row>
                </Container>
                <div className="formWidth">
                    <div className="imgDetails">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="">
                                    <Form.Control className="imgURL" type="text" placeholder="Image URL" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="">
                                    <Form.Control
                                        as="select"
                                        className="mr-sm-2"
                                        id="inlineFormCustomSelect"
                                        custom
                                    >
                                        <option value="0">Choose Category</option>
                                        {/* {this.renderCate()} */}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </div>

                    <hr className='hr-light' />

                    <div className="persDetails">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Name / Username</Form.Label>
                                    <Form.Control className="imgURL" type="text" placeholder="Name" name="fname" value={this.state.fname} onChange={this.updateFormField} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control className="imgURL" type="text" placeholder="Location" />
                                </Form.Group>
                                <Form.Group as={Col} sm="2" controlId="">
                                    <Form.Label>Personal Index</Form.Label>
                                    <Form.Control className="imgURL" type="text" placeholder="4 digits" />
                                </Form.Group>
                            </Form.Row>

                            <Col className="persDetailsCol">
                                <Form.Label>Equipment Used</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="What Equipments did you use?" />
                            </Col>
                            <Col className="persDetailsCol">
                                <Form.Label>Acquisitions / Processing</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Any post-processing needed for the image?" />
                            </Col>

                        </Form>
                    </div>
                    <div className="uploadBtn">
                        <Button variant="primary" size="lg" onClick={this.addpost}active>
                            Upload
                    </Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}