import React from "react";
import Slider from "./slider";
import HomePageCard from './HomePageCard'
function Home() {
    return (
        <div>
            {/* <Slider /> */}
            <div className="row">
                <div className="col-3 d-none d-md-block">
                {/* filter component */}
                </div>
                <div className="col-12 col-md-9 ">
                    {/* Card of each prodict */}
                    {/* <HomePageCard id='2'/> */}
                </div>
            </div>
        </div>
    );
}

export default Home;
