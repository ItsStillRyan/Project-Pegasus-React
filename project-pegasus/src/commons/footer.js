import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../main.css'

export default function FooterMain(props) {
    return (
        <React.Fragment>
            <MDBFooter color="elegant-color-dark" className="font-small pt-4">
                <MDBContainer fluid className="footerWholeSize ">
                    <MDBRow >
                        <MDBCol md="6" className="show-col text-center text-md-center">
                            <h4 className="title gitCol">Find This Project on Github</h4>
                            <a className="gitIcon" href="https://github.com/ItsStillRyan/Project-Pegasus-React"><i className="fab fa-github"></i></a>
                        </MDBCol>

                        <MDBCol md="3" className="show-col cateList">
                            <h5 className="title">Categories</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="/galaxies">Galaxies</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/starclusters">Star Clusters</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/planetary">Planetary</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/nebulae">Nebulae</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/spacecraft">Space Craft</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="/others">Others</a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol md="3" className="show-col cateList">
                            <h5 className="title">Help</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="/gettingstarted">Getting Started</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#">RyanT</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </React.Fragment >
    )
}