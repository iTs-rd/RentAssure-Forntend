import './navbar.css';
import logo from './assets/images/logo.png';
import { useEffect } from 'react';
function Navbar(){   

    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");
        
        hamburger.addEventListener('click', ()=>{
        //    Animate Links
            navLinks.classList.toggle("open");
            links.forEach(link => {
                link.classList.toggle("fade");
                console.log("face class")
            });
        
            //Hamburger Animation
            hamburger.classList.toggle("toggle");
            console.log("listener complete")
        });
    },[])

    return (
        <div>
            <nav>
                <div class="logo">
                    <img src={logo} alt="RentAssure"/>
                </div>
                <div class="hamburger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <ul class="nav-links d-flex justify-content-center justify-content-sm-end">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">House</a></li>
                    <li><a href="#">Flat</a></li>
                    <li><a href="#">Room</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;