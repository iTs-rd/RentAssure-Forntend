import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { withCookies } from "react-cookie";
import "../css/login.css";
import image from "../assets/images/loginBG.jpg";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: this.props.cookies.get("auth"),
        };
        this.eventHandler = this.eventHandler.bind(this);

        fetch(`${process.env.REACT_APP_API_URL}/api/viewuser/`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": `Token ${this.state.token}`,
            },
        })
            .then((resp) => resp.json())
            .then((res) => {
                if (res.message === "ok") window.location.href = "/profile";
            });
    }

    eventHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    signin = () => {
        fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.token) {
                    this.props.cookies.set("auth", res.token);
                    window.location.href = "/profile";
                } else {
                    var msg = document.getElementsByClassName("invalid-login-message")[0];
                    msg.classList.remove("d-none");
                }
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <React.Fragment>
                <Row className="changeBG" style={{ backgroundImage: `url(${image}`, width: "100%" }}>
                    <Col md={{ offset: 1 }}></Col>
                    <Col className="block-example   my-5 p-5 login">
                        <h1 className="text-center bold">Login</h1>
                        <span className="d-none invalid-login-message" style={{ color: "red" }}>
                            Unable to log in with provided credentials
                        </span>
                        <form id="login">
                            <div class="form-group">
                                <h5>
                                    <label>Email</label>
                                </h5>
                                <input
                                    type="text"
                                    name="email"
                                    onChange={this.eventHandler}
                                    value={this.state.email}
                                    class="form-control"
                                    id="email"
                                    placeholder="email"
                                    required
                                />
                            </div>
                            <div class="form-group my-3">
                                <h5>
                                    <label>Password</label>
                                </h5>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={this.eventHandler}
                                    value={this.state.password}
                                    class="form-control"
                                    id="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </form>
                        <button class="btn btn-info rounded-pill  my-1 mx-1 " onClick={this.signin}>
                            Submit
                        </button>
                        <br />
                        <br />
                        <Row>
                            <Col md={6} className="my-3 ">
                                <h6>Not a member?</h6>
                            </Col>
                            <Col md={6}>
                                <h5>
                                    <button class="btn btn-info rounded-pill my-1" onClick={() => (window.location.href = "/signup")}>
                                        SignUp
                                    </button>
                                </h5>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{ offset: 1 }}></Col>
                    <Row></Row>
                </Row>
            </React.Fragment>
        );
    }
}

export default withCookies(Login);
