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
                                src="https://external-preview.redd.it/5w-oTv6rIA_hBkhPTf6r8Q8aFaA0jausEMJvL6lWzUQ.png?auto=webp&s=88ec8bdcba34b2129c5179d9adb8d914593d3c0c"
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
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
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
                                    <Form.Control className="imgURL" type="text" placeholder="Name" />
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
                    <Button variant="primary" size="lg"  active>
                        Upload
                    </Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}