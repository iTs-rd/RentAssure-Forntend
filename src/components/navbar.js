import "./navbar.css";
import logo from "./assets/images/logo.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        hamburger.addEventListener("click", () => {
            //    Animate Links
            navLinks.classList.toggle("open");
            links.forEach((link) => {
                link.classList.toggle("fade");
                console.log("face class");
            });

            //Hamburger Animation
            hamburger.classList.toggle("toggle");
            console.log("listener complete");
        });
    }, []);

    return (
        <div>
            <nav>
                <div class="logo">
                    <img src={logo} alt="RentAssure" />
                </div>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-links d-flex justify-content-center justify-content-sm-end">
                    <li class="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/house">House</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/flat">Flat</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/room">Room</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/aboutus">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/contactus">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
