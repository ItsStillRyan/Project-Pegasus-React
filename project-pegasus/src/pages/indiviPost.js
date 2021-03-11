import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
//CSS
import '../main.css'
//API
const baseURL = "https://3000-black-marmoset-zifzl6nb.ws-us03.gitpod.io"
export default class indiviPost extends React.Component {

    state = {
        user_details:[]
    }

    async componentDidMount() {
        let response = await axios.get(baseURL + "/show/" + this.props.match.params._id)
        let {postID} =this.props.match.params
        this.setState({
            user_details: response.data,
            productID
        })
    }

    renderPost = renPost => {
        return (
        )
    }



    render() {
        return (
            <React.Fragment>
                <div className="test1">
                    
                </div>
            </React.Fragment>
        )
    }
}