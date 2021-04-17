import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Slider from "./components/slider";

function App() {
    return (
        <React.Fragment>
            <div>
                <Navbar />
            </div>
            <div>
                <Slider />
            </div>
        </React.Fragment>
    );
}

export default App;
