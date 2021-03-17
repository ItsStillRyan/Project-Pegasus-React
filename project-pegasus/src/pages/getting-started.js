import React from "react";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Accordion from 'react-bootstrap/Accordion'
//image import
import postpic1 from '../images/getting-started/pic1.jpg'
import postpic2 from '../images/getting-started/pic2.jpg'
//CSS
import '../main.css'



export default class GettingStarted extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    {/* title row */}
                    <Row>
                        <Col className="gsTitle">
                            <p>Getting Started</p>
                        </Col>
                    </Row>
                </Container>

                <div className="gsContain">
                    <Tab.Container defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column tabsTitle">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><p>Posting your first picture</p></Nav.Link>
                                        <hr className='hr-light' />
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><p>Getting Started with Astrophotography</p></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9} className="gsContent">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div>
                                            <Row>
                                                <Col>
                                                    <img
                                                        src={postpic1}
                                                        width="80%"
                                                        alt="help1"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="helpText">
                                                    <p>First of all, navigate to the upload page from the navigation bar. <br /> Click on "Upload into the Index".</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <img
                                                        src={postpic2}
                                                        width="80%"
                                                        alt="help2"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="helpText">
                                                    <p>
                                                        Upon clicking and entering, you'll see this page.
                                                        <br />
                                                        <sub>psst, scroll down if you only see the word "Upload"

                                                        </sub>
                                                    </p>
                                                    <br />
                                                    <p>
                                                        1. Here you will enter the Title of your post. Name it well and short! This is the first thing everybody sees!
                                                    </p>
                                                    <br />
                                                    <p>
                                                        2. The image URL will go into this. A preview of the picture will be display in the box above!
                                                        <br/>  
                                                        <sub>We're sorry we couldn't accept direct upload of your image for now!</sub>
                                                    </p>
                                                    <br />
                                                    <p>
                                                        3. Choose your category in the drop-down selection here. Remember to choose the category correctly! This will determine where your picture ends up at!
                                                    </p>
                                                    <br />
                                                    <p>
                                                        4. Enter your name or username/alias here so people know who you are.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        5. You can specifiy your location here, you don't have to be detailed, just your country or state will do! This isn't necessary.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        6. This is Important! The Personal Index is a 4 digit passcode that allows you to update or delete your post as and when you want. <br/> Please remember your own Personal Index Code!
                                                    </p>
                                                    <br />
                                                    <p>
                                                        7. List the equipments you used.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        8. Here is where you can list down what you have done to the picture as post-processings.
                                                    </p>
                                                    <br />
                                                    <p>
                                                        9. Finally, click this button to submit your post and there you go! Your post will be displayed in its respective category!
                                                    </p>
                                                    <br />

                                                </Col>
                                            </Row>
                                        </div>

                                    </Tab.Pane>


                                    <Tab.Pane eventKey="second">

                                        <Accordion defaultActiveKey="0">

                                            <Card>
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="0">Click me!</Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0" className="gsAccordBack">
                                                    <Card.Body>
                                                        Nulla mattis enim sed metus consectetur commodo. Sed eu venenatis magna, sed scelerisque lectus. Aenean eget tempor nisl. Donec tincidunt malesuada diam, id eleifend diam consectetur faucibus. Aliquam accumsan sed odio sed pretium. Curabitur eu diam sed turpis blandit tristique in sed nibh. Ut nec rutrum justo. Praesent a orci a tellus malesuada ullamcorper vitae sed urna. Duis porttitor tempor lectus eu consequat. Integer imperdiet in erat eu mollis.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            <Card>
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="1">Click me! </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1" className="gsAccordBack">
                                                    <Card.Body>
                                                        Sed in dui dui. Suspendisse at ornare purus. Etiam lobortis congue fringilla. Curabitur ornare pellentesque suscipit. Nullam in arcu sed nulla congue molestie tempor vel metus. Mauris ullamcorper vitae sem at iaculis. In nec mi orci. Nullam dignissim efficitur nisi vel vestibulum. Nunc id magna nec erat placerat porta a at massa. Praesent ac quam magna. Praesent vel suscipit diam. In hac habitasse platea dictumst. Nullam ultrices felis odio, eu facilisis ipsum imperdiet rutrum. Mauris nec venenatis dui. Pellentesque nisi quam, aliquet et blandit at, fermentum ac felis. Phasellus elit sem, euismod vel metus a, placerat malesuada mi.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            <Card>
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="2">Click me! </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2" className="gsAccordBack">
                                                    <Card.Body>
                                                        Sed in dui dui. Suspendisse at ornare purus. Etiam lobortis congue fringilla. Curabitur ornare pellentesque suscipit. Nullam in arcu sed nulla congue molestie tempor vel metus. Mauris ullamcorper vitae sem at iaculis. In nec mi orci. Nullam dignissim efficitur nisi vel vestibulum. Nunc id magna nec erat placerat porta a at massa. Praesent ac quam magna. Praesent vel suscipit diam. In hac habitasse platea dictumst. Nullam ultrices felis odio, eu facilisis ipsum imperdiet rutrum. Mauris nec venenatis dui. Pellentesque nisi quam, aliquet et blandit at, fermentum ac felis. Phasellus elit sem, euismod vel metus a, placerat malesuada mi.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>

                                            <Card>
                                                <Accordion.Toggle className="gsAccord" as={Card.Header} eventKey="3">Click me! </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="3" className="gsAccordBack">
                                                    <Card.Body>
                                                        Sed in dui dui. Suspendisse at ornare purus. Etiam lobortis congue fringilla. Curabitur ornare pellentesque suscipit. Nullam in arcu sed nulla congue molestie tempor vel metus. Mauris ullamcorper vitae sem at iaculis. In nec mi orci. Nullam dignissim efficitur nisi vel vestibulum. Nunc id magna nec erat placerat porta a at massa. Praesent ac quam magna. Praesent vel suscipit diam. In hac habitasse platea dictumst. Nullam ultrices felis odio, eu facilisis ipsum imperdiet rutrum. Mauris nec venenatis dui. Pellentesque nisi quam, aliquet et blandit at, fermentum ac felis. Phasellus elit sem, euismod vel metus a, placerat malesuada mi.
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </React.Fragment>

        )
    }
}
