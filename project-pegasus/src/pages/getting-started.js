import React from "react";
import ReactDOM from "react-dom";
//Bootstraps
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import Nav from 'react-bootstrap/Nav'
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column tabsTitle">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first"><p>Posting your first picture</p></Nav.Link>
                                        <hr className='hr-light' />
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second"><p>Getting Started with Astro-Photography</p></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9} className="gsContent">
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, dolor quis sollicitudin elementum, est neque volutpat magna, ac sagittis eros nisi et libero. Vivamus urna turpis, dapibus ac dignissim vel, imperdiet at metus. Suspendisse eget placerat elit. Phasellus eget luctus leo, at consequat eros. Phasellus placerat justo eget leo tempus, non tincidunt nulla ullamcorper. Donec facilisis dui ut neque suscipit, nec rhoncus enim condimentum. Proin massa lacus, ultricies sed massa vitae, dignissim tincidunt dolor. Phasellus tempus cursus erat. Proin tincidunt ex est, non finibus dui imperdiet id. Sed massa justo, viverra eget facilisis eu, convallis accumsan dui. Sed volutpat, eros ut placerat congue, turpis tellus lobortis erat, et pellentesque nisl massa vitae diam. Nullam ut pharetra erat. Suspendisse venenatis egestas enim et tristique. Nulla rutrum, risus vitae molestie egestas, purus est congue sem, sit amet aliquam nunc dolor sit amet lorem.
                                </Tab.Pane>


                                    <Tab.Pane eventKey="second">
                                        Nulla mattis enim sed metus consectetur commodo. Sed eu venenatis magna, sed scelerisque lectus. Aenean eget tempor nisl. Donec tincidunt malesuada diam, id eleifend diam consectetur faucibus. Aliquam accumsan sed odio sed pretium. Curabitur eu diam sed turpis blandit tristique in sed nibh. Ut nec rutrum justo. Praesent a orci a tellus malesuada ullamcorper vitae sed urna. Duis porttitor tempor lectus eu consequat. Integer imperdiet in erat eu mollis.

                                        Sed in dui dui. Suspendisse at ornare purus. Etiam lobortis congue fringilla. Curabitur ornare pellentesque suscipit. Nullam in arcu sed nulla congue molestie tempor vel metus. Mauris ullamcorper vitae sem at iaculis. In nec mi orci. Nullam dignissim efficitur nisi vel vestibulum. Nunc id magna nec erat placerat porta a at massa. Praesent ac quam magna. Praesent vel suscipit diam. In hac habitasse platea dictumst. Nullam ultrices felis odio, eu facilisis ipsum imperdiet rutrum. Mauris nec venenatis dui. Pellentesque nisi quam, aliquet et blandit at, fermentum ac felis. Phasellus elit sem, euismod vel metus a, placerat malesuada mi.
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
