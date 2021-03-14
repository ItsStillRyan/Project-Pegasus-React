import React from "react";
import axios from "axios";
//bootstraps
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
//import images
import logo from '../images/logo-small.png'
//css
import '../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"

export default class NavbarMain extends React.Component {
    state = {
        web_cats: []
    }
    async componentDidMount(){
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
                    <NavDropdown.Item href={"/" + x.categories[i]}>{x.categories[i]}</NavDropdown.Item>

                )
            }
        }
        return accum
    }
    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" varient="dark">
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="Pegasus Logo"
                            />
                        </Navbar.Brand>

                        <NavDropdown title="Category" id="collasible-nav-dropdown" className="navLink">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>


                        <Nav.Link href="/gettingstarted" className="navLink ml-2 mr-5 show-col"><p>Getting Started</p></Nav.Link>
                        <Nav.Link href="/uploads" className="navLink ml-2 show-col"><p>Upload into the Index</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}

                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="60"
                            height="60"
                            className="d-inline-block align-top"
                            alt="Pegasus Logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navLink" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title={
                                <span className="navLink ml-5">Categories</span>
                            } id="collasible-nav-dropdown">
                                {this.renderCategories()}

                            </NavDropdown>
                            <Nav.Link href="#features"><span className="navLink ml-5">Getting Started</span></Nav.Link>
                            <Nav.Link href="#pricing"><span className="navLink ml-5">Upload into the Index</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment >
        )
    }
}