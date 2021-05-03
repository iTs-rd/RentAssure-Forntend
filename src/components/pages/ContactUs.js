import React from "react";
import "../css/ContactUs.css";

function ContactUs() {
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
                                    <input type="text" name="name" id="name" required />
                                </p>

                                <p>
                                    <label>E-mail Address</label>
                                    <input type="email" name="email" id="email" required />
                                </p>

                                <p>
                                    <label>Mobile Number</label>
                                    <input type="text" name="mobileNumber" id="mobileNumber" />
                                </p>

                                <p class="full">
                                    <label>Write your message here...</label>
                                    <textarea name="message" rows="5" id="message"></textarea>
                                </p>

                                <p class="full">
                                    <button type="submit">Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ContactUs;
