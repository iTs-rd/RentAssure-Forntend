import React from "react";
import "../css/aboutus.css";
import harshit from "../assets/images/harshit.jpg";
import abhishek from "../assets/images/abhishek.jpg";
import rudresh from "../assets/images/rudresh.jpg";
import happy from "../assets/images/happy.jpeg";
function AboutUs() {
    return (
        <React.Fragment className="content">
            <div className="containor">
      <div className="row">

        <div className="col-12 col-md-6">
          <img src={happy} alt="image" width="100%" height="600px"></img>
        </div>
        <div className="col-12 col-md-6 "style={{backgroundColor:"white"}}>
          <div className="text">
          <h1>ABOUT US</h1>
          <p>Launched in 2021, <span>Rent</span>Assure.com, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum which provide a plateform to people who rents property like house/room/flat from renter. At <span>Rent</span>Assure.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
          <div className="block2">
          <h2>WHY <span>Rent</span>Assure.com?</h2>
          <p>At present, <span>Rent</span> In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, <span>Rent</span>Assure.com offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.</p>
          </div></div>
        </div>
      </div>
    </div><br></br>
    <div className="founders">
      <h2>Meet The Founders</h2><br></br>
    </div>
    <div className="Team">
      <div className="one">
    <div className="container">
  <div className="img-container">
    <img src={harshit} alt=""></img>
  </div>
  <ul className="social-media">
			<li><a href="https://www.facebook.com/harshit.bhati.94"><i class="fab fa-facebook-f"></i></a></li>
			<li><a href="https://www.linkedin.com/in/harshit-bhati-507a981b4"><i className="fab fa-linkedin-in"></i></a></li>
			<li><a href="https://www.instagram.com/harshit_bhati12/"><i className="fab fa-instagram"></i></a></li>
		</ul>
		<div class="user-info">
			<h2>Harshit Bhati</h2>
		</div>
</div></div>
<div className="two">
<div className="container">
  <div className="img-container">
    <img src={rudresh} alt=""></img>
  </div>
  <ul className="social-media">
			<li><a href="https://www.facebook.com/rudresh.gupta.984"><i class="fab fa-facebook-f"></i></a></li>
			<li><a href="https://www.linkedin.com/in/rudresh-gupta-b87a84190"><i className="fab fa-linkedin-in"></i></a></li>
			<li><a href="https://instagram.com/_its_rd_?igshid=1l1vitkdz3o2o"><i className="fab fa-instagram"></i></a></li>
		</ul>
		<div class="user-info">
			<h2>Rudresh Gupta</h2>
		</div>
</div></div>
<div className="three">
<div className="container">
  <div className="img-container">
    <img src={abhishek} alt=""></img>
  </div>
  <ul className="social-media">
			<li><a href="https://www.facebook.com/smart.abhi.148553"><i class="fab fa-facebook-f"></i></a></li>
			<li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
			<li><a href="#"><i className="fab fa-instagram"></i></a></li>
		</ul>
		<div class="user-info">
			<h2>Abhishek Chaurasia</h2>
		</div>
</div></div>
    </div>
    
        </React.Fragment>
    )

    }

export default AboutUs;
