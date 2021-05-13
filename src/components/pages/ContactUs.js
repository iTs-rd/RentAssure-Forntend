import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.cjs";
import "../css/ContactUs.css";

class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            mobile: "",
            detail: "",
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    //Alert
    EmailTooltip() {
        return (
            <span
                style={{
                    position: "relative",
                    display: "grid",
                    color: "whitesmoke",
                    background: "black",
                    opacity: 0.8,
                    marginBottom: "20px",
                    padding: "4px",
                    borderRadius: "5px",
                }}
            >
                We only support Gmail, Outlook, Yahoo, Hotmail
            </span>
        );
    }

    // Input Change Handler
    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    }

    // Submit Form
    submitForm() {
        fetch("http://127.0.0.1:8000/api/contact/", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((res) => {
                setAlert("Message sent", "success");
                setLoading(false);
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setAlert("Error sending message", "error");
                setLoading(false);
                window.scrollTo(0, 0);
            });
        .then(<Redirect push to="/contactus" />);


        this.setState({
            name: " ",
            email: " ",
            mobile: " ",
            detail: " ",
        });
    }
    render() {
        return (
            <React.Fragment>
                <section>
                    <div class="container">
                        <div class="wrapper">
                            <div class="contact-info">
                                <h2>Contact Info</h2>

                                <ul class="info">
                                    <li>
                                        <i class="fa fa-road fa-2x"></i> 2252 Brooklyn Street
                                        <br />
                                        Washington, USA
                                        <br />
                                        92313
                                    </li>
                                    <br />
                                    <li>
                                        <i class="fa fa-envelope fa-2x"></i> lorem@ipsum.com
                                    </li>
                                    <br />
                                    <li>
                                        <i class="fa fa-phone fa-2x"></i> +918858896086
                                    </li>
                                </ul>
                                <ul class="sci">
                                    <br />
                                    <li>
                                        <a href="#" alt="Facebook">
                                            <ion-icon name="logo-facebook" size="large"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" alt="Twitter">
                                            <ion-icon name="logo-twitter" size="large"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" alt="Instagram">
                                            <ion-icon name="logo-instagram" size="large"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" alt="Linkedin">
                                            <ion-icon name="logo-linkedin" size="large"></ion-icon>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" alt="Quora">
                                            <ion-icon name="people-outline" size="large"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div class="contact">
                                <h2>Send Message</h2>

                                <form id="contact-form">
                                    <p>
                                        <label>Name</label>
                                        <input type="text" id="name" onChange={this.changeHandler} value={this.state.name} name="name" />
                                    </p>

                                    <p>
                                        <label>E-mail Address</label>
                                        <Tippy content={this.EmailTooltip()}>
                                            <input type="email" id="email" onChange={this.changeHandler} value={this.state.email} name="email" />
                                        </Tippy>
                                    </p>
                                    <p>
                                        <label>Mobile Number</label>
                                        <input
                                            type="text"
                                            name="mobile"
                                            value={this.state.mobile}
                                            onChange={this.changeHandler}
                                            id="mobileNumber"
                                            maxLength="10"
                                        />
                                    </p>

                                    <p class="full">
                                        <label>Write your message here...</label>
                                        <textarea
                                            type="text"
                                            name="detail"
                                            value={this.state.detail}
                                            onChange={this.changeHandler}
                                            rows="5"
                                            id="message"
                                            class="message"
                                        />
                                    </p>

                                    <p class="full">
                                        <Link to="/contactus">
                                            <input type="submit" onClick={this.submitForm} class="btn btn-primary" />
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default ContactUs;
