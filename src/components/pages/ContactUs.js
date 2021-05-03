import React from "react";
import "../css/ContactUs.css";

function ContactUs() {
    return (
        <React.Fragment>
            <section>
                <div class="container">
                    <div class="contactinfo">
                        <div>
                            <h2>Contact Info</h2>
                            <ul class="info">
                                <li>
                                    <span>
                                        <ion-icon name="location-outline" size="large"></ion-icon>
                                    </span>
                                    <span id="detail">
                                        2252 Brooklyn Street
                                        <br />
                                        Washington, USA
                                        <br />
                                        92313
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="mail-outline" size="large"></ion-icon>
                                    </span>
                                    <span id="detail"> lorem@ipsum.com</span>
                                </li>
                                <li>
                                    <span>
                                        <ion-icon name="call-outline" size="large"></ion-icon>
                                    </span>
                                    <span id="detail">+91-8858896086</span>
                                </li>
                            </ul>
                            <ul class="sci">
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
                    </div>
                    <div class="contactForm">
                        <h2>Send Message</h2>
                        <div class="formBox">
                            <div class="inputBox w50">
                                <input type="text" name="" placeholder="First Name" required />
                                <span>First Name</span>
                            </div>
                            <div class="inputBox w50">
                                <input id="lastName" type="text" name="" placeholder="Last Name" required />
                                <span>Last Name</span>
                            </div>
                            <div class="inputBox w50">
                                <input id="mobileNumber" type="text" name="" placeholder="Mobile Number" size="10" required />
                                <span>Mobile Number</span>
                            </div>
                            <div class="inputBox w50">
                                <input id="emailId" type="text" name="" placeholder="Email Address" required />
                                <span>Email Address</span>
                            </div>
                            <div class="inputBox w100">
                                <textarea name="" placeholder="Write your message here..." required></textarea>
                                <span>Write your message here...</span>
                            </div>
                            <div class="inputBox w100">
                                <input type="submit" value="Send"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ContactUs;
