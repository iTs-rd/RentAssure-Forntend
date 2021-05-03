import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import House from "./components/pages/House";
import Flat from "./components/pages/Flat";
import Room from "./components/pages/Room";
import ContactUs from "./components/pages/ContactUs";
import AboutUs from "./components/pages/Aboutus";
import Navbar from "./components/pages/Navbar";

function App() {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                {/* This will help in switching through pages and components are provided in components/pages */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/house" component={House} />
                    <Route path="/flat" component={Flat} />
                    <Route path="/room" component={Room} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
