import React from "react";
//bootstraps
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import images
import logo from '../images/logo-small.png'
//css
import '../main.css'

export default function NavbarMain(props) {
    return (
        <React.Fragment>
            <Navbar expand="lg" bg="dark" varient="dark">
                <Navbar.Collapse id="basic-navbar-nav">
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

                    <Nav.Link href="/" className="navLink mr-5 ml-3"><p>Categories</p></Nav.Link>
                    <Nav.Link href="/gettingstarted" className="navLink ml-2 mr-5"><p>Getting Started</p></Nav.Link>
                    <Nav.Link href="/uploads" className="navLink ml-2"><p>Upload a picture!</p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment >
    )
}